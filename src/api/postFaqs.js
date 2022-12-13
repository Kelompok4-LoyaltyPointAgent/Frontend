import { axios } from "../configs/axios";

export function postFaqs(data) {
  return axios.post("/faqs", data);
}