import axios from "axios";

const api = axios.create();

api.interceptors.request.use(
  (config) => {
    const token = process.env.IMDB_ACCESS_TOKEN;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
