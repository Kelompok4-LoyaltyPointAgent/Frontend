import { axios } from "../configs/axios";

export function deleteUser(id) {
  return axios.delete("/users/" + id);
}
