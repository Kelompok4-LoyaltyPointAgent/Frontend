import { axios } from "../configs/axios";

export function getFeedbacks() {
  return axios.get("/feedbacks");
}