import { axios } from "../configs/axios";

export function updateUser(id, data) {
  return axios.put("/users/" + id, data);
}
