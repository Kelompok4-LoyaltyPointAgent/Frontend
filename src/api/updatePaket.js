import { axios } from "../configs/axios";

export function updatePaket(id, data) {
  return axios.put("/products/packages/" + id, data);
}
