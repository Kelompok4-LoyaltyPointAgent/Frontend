import { axios } from "../configs/axios";

export function getStatistikDatas() {
  return axios.get("/analytics");
}