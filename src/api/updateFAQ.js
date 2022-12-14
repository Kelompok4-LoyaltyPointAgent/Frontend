import { axios } from "../configs/axios";

export function updateFAQ(id, data) {
  return axios.put("/faqs/" + id, data);
}
