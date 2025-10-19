import axios from 'axios';
const api = axios.create({
  baseURL: 'https://codiorixweb.onrender.com/',
});
export default api;
