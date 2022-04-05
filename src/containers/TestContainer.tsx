import React, { useState } from 'react';
import { TestComponent } from '../components/TestComponent';
import { getRandomArticles } from '../api/articles';

export const TestContainer: React.FC = () => {
    const [articles, setArticles] = useState<string | undefined>(undefined);
    const [numArticles, setNumArticles] = useState<number>(0);

    const handleSubmit = async () => {
        try {
            const res = await getRandomArticles(numArticles);

            setArticles(JSON.stringify(res.data, null, 4));
        } catch (e) {
            console.error('There was an issue trying to fetch articles.', e);
        }
    };

    const handleSetNumArticles = (num: number) => {
        setNumArticles(num);
    };

    return (
        <TestComponent
            articles={articles}
            onSubmit={handleSubmit}
            onSetNumArticles={handleSetNumArticles}
        />
    );
};
