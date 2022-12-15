import { axios } from "../configs/axios";

export function postUser(data) {
  return axios.post("/register", data);
}
