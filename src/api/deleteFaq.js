import { axios } from "../configs/axios";

export function deleteFaq(id) {
  return axios.delete("/faqs/" + id);
}
