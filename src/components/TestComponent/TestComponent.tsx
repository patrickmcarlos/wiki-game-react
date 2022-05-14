import React from 'react';
import { Section, SectionHeading, SectionType } from '../../shared/core-ui';
import { introductionHeadingStyle, sectionsWrapperStyle } from './styles';

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
        <div css={sectionsWrapperStyle}>
            <Section sectionType={SectionType.INTRODUCTION} >
                <h2 css={introductionHeadingStyle}>Welcome to the Wiki Game</h2>
                <p>Given the first paragraph of an article, you must guess what the title is.</p>
            </Section>
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
                        <span>{json.summary}</span>
                    </>
                )}
            </Section>
        </div>
    );
};
