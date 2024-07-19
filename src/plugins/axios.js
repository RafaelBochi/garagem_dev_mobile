import axios from "axios";

axios.defaults.baseURL = "http://localhost:19003/";

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('psg_auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);