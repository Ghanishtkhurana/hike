import axios from "axios";

export const baseURL = "http://localhost:8080/api";

const api = axios.create({
  withCredentials: true,
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
