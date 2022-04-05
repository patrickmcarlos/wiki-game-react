import axios from 'axios';

console.log(import.meta.env.VITE_BASE_API_URL);

export const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL as string,
});
