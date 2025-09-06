import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://fullstack-management-system-taskman.onrender.com',
  withCredentials: true
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const msg = err?.response?.data?.message || err.message;
    return Promise.reject(new Error(msg));
  }
);

export default api;