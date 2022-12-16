import Axios, { AxiosRequestConfig } from "axios";
import { CONST } from "../utils/Constants";

const baseURL = CONST.BASE_URL_API;

function authRequestInterceptor(config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = `bearer ${token}`;
  }

  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      (error?.response?.status === 400 &&
        error?.response?.data?.message == "missing or malformed jwt") ||
      (error?.response?.status === 401 &&
        error?.response?.data?.message == "invalid or expired jwt")
    ) {
      localStorage.removeItem("token");
      window.location.reload();
    }

    return Promise.reject(error);
  }
);
