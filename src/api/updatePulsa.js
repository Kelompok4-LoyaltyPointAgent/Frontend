import { axios } from "../configs/axios";

export function updatePulsa(id, data) {
  return axios.put("/products/credits/" + id, data);
}
