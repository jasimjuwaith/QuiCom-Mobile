import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // replace with your Spring Boot backend URL
});

export default api;
