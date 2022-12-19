import { axios } from "../configs/axios";

export function emailRequest(data) {
  return axios.post("/forgot-password/request", data);
}

