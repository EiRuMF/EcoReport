import axios from "axios";

const api = axios.create({
  baseURL: "https://api-ecoreport.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
