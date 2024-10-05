import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://flexible-puma-knowing.ngrok-free.app/",
  headers: {
    'Accept': 'application/json',
  },
  // timeout: 10000
})

export default axiosInstance;