import { axios } from "../configs/axios";

export function getAnalytics() {
  return axios.get("/analytics");
}
