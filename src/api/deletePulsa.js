import { axios } from "../configs/axios";

export function deletePulsa(id) {
  return axios.delete("/products/credits/" + id);
}
