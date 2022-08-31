import axios, { AxiosResponse } from "axios";
import AuthStorage from './authStorage';

const authStorage = new AuthStorage();

const { REACT_APP_API_URL } = process.env;

const api = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json'
    },
    responseType: 'json'
});

api.interceptors.request.use(async config => {
    const token = authStorage.getToken();

    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        };
    }

    return config;
});

export const apiAuth = (email: string, password: string): Promise<AxiosResponse> => {
    return api.post('/auth', { email, password });
};

export default api;