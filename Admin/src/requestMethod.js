import axios from "axios";

const BASE_URL = "https://plum-jay-wear.cyclic.app/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    "token": JSON.parse(localStorage.getItem("token"))
}
});
