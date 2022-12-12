import { axios } from "../configs/axios";

export function getCredit() {
  return axios.get("/products/credits");
}
