import { axios } from "../configs/axios";

export function deleteTransaksi(id) {
  return axios.delete("/transactions/" + id);
}
