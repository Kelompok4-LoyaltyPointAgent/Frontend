import { axios } from "../configs/axios";

export function getFaqs() {
  return axios.get("/faqs");
}