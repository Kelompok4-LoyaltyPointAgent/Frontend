import { axios } from "../configs/axios";

export function getAdmin() {
  return axios.get("/users/me");
}
