import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://flexible-puma-knowing.ngrok-free.app/",
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
