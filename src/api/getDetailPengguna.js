import { axios } from "../configs/axios";

export function getDetailUser(id) {
  return axios.get("/users/" + id);
}