import React from 'react';
import { Section, SectionHeading } from '../shared/core-ui';

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
    const json = articles ? JSON.parse(articles) : {};

    return (
        <div>
            <Section>
                <SectionHeading>Get Random Articles!</SectionHeading>
                <label>Number of Articles</label>
                <input
                    type="text"
                    pattern="[0-9]"
                    defaultValue={0}
                    onChange={(e) => onSetNumArticles(Number(e.target.value))}
                />
                <button onClick={onSubmit}>Fetch articles</button>
                <hr />
                {articles && (
                    <>
                        <h1>Response</h1>
                        <h3>{json.title}</h3>
                        <span>
                            <pre>{json.summary}</pre>
                        </span>
                    </>
                )}
            </Section>
        </div>
    );
};
