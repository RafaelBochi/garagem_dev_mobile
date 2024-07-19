import axios from "axios";
import { globalRouter } from "./globalRouter";
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

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 403) {
            globalRouter.router?.push("/login")
        }
        return Promise.reject(error);
    }
)