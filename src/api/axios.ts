import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use(config => {
//	config.headers.Authorization = ""; // Bearer token
  return config;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

export default instance;