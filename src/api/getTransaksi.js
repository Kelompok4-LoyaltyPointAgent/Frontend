import { axios } from "../configs/axios";

export function getTransactions() {
  return axios.get("/transactions");
}