import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL as string;

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL as string,
});
