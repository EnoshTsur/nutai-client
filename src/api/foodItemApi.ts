import axios, { AxiosInstance } from "axios";

const foodItemApi: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_FOOD_ITEM_API,
  timeout: 10000, // Example timeout setting
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});

foodItemApi.interceptors.request.use(
  (config) => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default foodItemApi;
