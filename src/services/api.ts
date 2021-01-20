import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.REACT_APP_ENVIRONMENT === 'development'
      ? process.env.REACT_APP_API_URL
      : process.env.REACT_APP_API_URL_ONLINE,
});

export default api;
