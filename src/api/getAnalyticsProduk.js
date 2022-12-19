import { axios } from "../configs/axios";

export function getAnalyticsProduk() {
  return axios.get("/analytics/stock");
}
