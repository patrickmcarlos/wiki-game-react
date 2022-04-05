import React from 'react';

interface TestComponentProps {
    articles?: string;
    onSubmit: () => Promise<void>;
    onSetNumArticles: (num: number) => void;
}

export const TestComponent: React.FC<TestComponentProps> = ({
    articles,
    onSubmit,
    onSetNumArticles,
}) => {
    return (
        <div>
            <h1>Get Random Articles!</h1>
            <label>Number of Articles</label>
            <input
                type="text"
                pattern="[0-9]"
                defaultValue={0}
                onChange={(e) => onSetNumArticles(Number(e.target.value))}
            />
            <button onClick={onSubmit}>Fetch articles</button>
            <hr />
            <h1>Response</h1>
            <span>{articles}</span>
        </div>
    );
};
