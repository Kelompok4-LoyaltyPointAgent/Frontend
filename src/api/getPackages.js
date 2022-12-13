import { axios } from "../configs/axios";

export function getPackages() {
  return axios.get("/products/packages");
}