import axios from "axios";


let baseUrl = 'https://bills-api-oiyw.onrender.com';

if (process.env.NODE_ENV === "development") {
    baseUrl = 'http://localhost:3333';
}

const api = axios.create({
    baseURL: baseUrl
});

export default api;