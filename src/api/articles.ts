import { httpClient } from './axios';

const ARTICLES_ENDPOINT = '/articles';

export const getRandomArticles = async (numArticles: number) => {
    const params = new URLSearchParams([['num', String(numArticles)]]);
    const res = await httpClient.get(ARTICLES_ENDPOINT, { params });

    return res.data;
};
