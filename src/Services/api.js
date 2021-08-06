import axios from 'axios';

const api = axios.create({
    baseURL: 'https://enquadrado.herokuapp.com/', 
});

export default api;