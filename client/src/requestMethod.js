import axios from "axios";

const BASE_URL = "https://block22-project-server.onrender.com/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  token: localStorage.getItem("token"),
});
