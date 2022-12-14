import { axios } from "../configs/axios";

export function getCreditId(id) {
  return axios.get("/products/credits/" + id);
}
