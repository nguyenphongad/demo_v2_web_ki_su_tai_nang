import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export default instance;
