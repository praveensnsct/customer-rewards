import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
  validateStatus: (status) => status >= 200 && status < 400,
  maxRedirects: 5,
});

axiosInstance.interceptors.request.use((config) => config,
  (error) => Promise.reject(error.request));

axiosInstance.interceptors.response.use((response) => response.data,
  (error) => Promise.reject(error.response));

const get = ({
  url, params, ...rest
}) => axiosInstance.get(url, {
  params,
  ...rest,
});

export default {
  get
};
