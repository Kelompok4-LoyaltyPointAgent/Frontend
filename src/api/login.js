import { axios } from "../configs/axios";

export function login(data) {
  return axios.post("/login", data);
}
