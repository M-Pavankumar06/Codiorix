import axios from 'axios';
const api = axios.create({
  baseURL: 'https://codiorixweb.onrender.com/api',
});
export default api;
