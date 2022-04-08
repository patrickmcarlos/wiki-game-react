import { httpClient } from './axios';

const ARTICLES_ENDPOINT = '/articles';

export const getRandomArticles = async (numArticles: number) => {
    const params = new URLSearchParams([['num', String(numArticles)]]);

    console.log(import.meta.env.VITE_BASE_API_URL);
    
    const res = await httpClient.get(ARTICLES_ENDPOINT, {
        params,
        baseURL: import.meta.env.VITE_BASE_API_URL as string,
    });

    return res.data;
};
