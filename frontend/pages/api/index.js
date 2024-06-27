import axios from "axios";

// export const baseURL = "http://localhost:8080/api";
export const baseURL = "https://hike-sdmr.onrender.com/api";


const api = axios.create({
  withCredentials: true,
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
