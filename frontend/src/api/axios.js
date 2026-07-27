import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-auth-2nco.onrender.com/",
  withCredentials: true,
});

export default api;