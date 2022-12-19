import { axios } from "../configs/axios";

export function getPackageId(id) {
  return axios.get("/products/packages/" + id);
}
