import axios from 'axios';

const API_URL_USERS = 'http://localhost:8001/api';
const API_URL_EVENTS = 'http://localhost:8002/api';
const API_URL_NOTIFICATIONS = 'http://localhost:8003/api';

const axiosInstance = axios.create({
  baseURL: API_URL_USERS,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

export default axiosInstance;
