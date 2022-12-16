import { axios } from "../configs/axios";

export function resetPassword(data) {
  return axios.post("/forgot-password/submit", data);
}
