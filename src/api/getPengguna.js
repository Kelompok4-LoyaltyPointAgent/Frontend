import { axios } from "../configs/axios";

export function getUsers() {
  return axios.get("/users");
}