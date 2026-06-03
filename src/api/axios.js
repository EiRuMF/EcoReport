// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "/", // ← relative, biar jalan di local maupun production
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
