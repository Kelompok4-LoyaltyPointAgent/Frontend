import { axios } from "../configs/axios";

export function postCredits(data) {
  return axios.post("/products/credits", data);
}
