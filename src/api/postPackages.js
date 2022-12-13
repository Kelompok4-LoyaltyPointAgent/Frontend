import { axios } from "../configs/axios";

export function postPackages(data) {
  return axios.post("/products/packages", data);
}