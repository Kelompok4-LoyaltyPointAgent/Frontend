import { axios } from "../configs/axios";

export function getDetailTransaksi(id) {
  return axios.get("/transactions/" + id);
}