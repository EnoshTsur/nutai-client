import axios, { AxiosInstance } from "axios";

const userDetailsApi: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_USER_DETAILS_API,
  timeout: 10000, // Example timeout setting
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});


userDetailsApi.interceptors.request.use(
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

export default userDetailsApi;
