import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://flexible-puma-knowing.ngrok-free.app/",
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
})

export default axiosInstance;