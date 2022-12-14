import { axios } from "../configs/axios";

export function deletePaket(id) {
  return axios.delete("/products/packages/" + id);
}
