import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://my-cheva-api.kakashispiritnews.my.id/",
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
