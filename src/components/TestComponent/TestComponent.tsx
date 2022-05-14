import React from 'react';
import {
    Section,
    SectionHeading,
    SectionType,
    SectionVariant,
} from '../../shared/core-ui';
import {
    splitColumnStyle,
    introductionHeadingStyle,
    testComponentWrapperStyle,
} from './styles';

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
        <div css={testComponentWrapperStyle}>
            <Section sectionType={SectionType.INTRODUCTION}>
                <h2 css={introductionHeadingStyle}>Welcome to the Wiki Game</h2>
                <p>
                    Given the first paragraph of an article, you must guess what
                    the title is.
                </p>
            </Section>
            <div css={splitColumnStyle}>
                <Section variant={SectionVariant.PRIMARY}>
                    <SectionHeading variant={SectionVariant.PRIMARY}>
                        How to play
                    </SectionHeading>
                    <p>Hello world</p>
                    <SectionHeading variant={SectionVariant.PRIMARY}>
                        Generate a random article
                    </SectionHeading>
                    <button onClick={onSubmit}>Fetch articles</button>
                    {articles && (
                        <>
                            <h3>{json.title}</h3>
                            <span>{json.summary}</span>
                        </>
                    )}
                </Section>
                <Section variant={SectionVariant.SECONDARY}>
                    <SectionHeading variant={SectionVariant.SECONDARY}>
                        About the author
                    </SectionHeading>
                    <p>
                        {`My name is Patrick, and I'm a Software Engineer based in
                    Canada. I currently do frontend development, particularly in
                    the AI/ML space.`}
                    </p>
                    <SectionHeading variant={SectionVariant.SECONDARY}>
                        Generate a random article
                    </SectionHeading>
                    <p>
                        {`This project is intended to improve my full-stack development skills. I anticipate various technical challenges both in the front and backend, as well as having to make key design decisions along the way.

Key skills / technologies I plan to learn more about include:`}
                    </p>
                    <ul>
                        <li>
                            Frontend toolchains (i.e. build tools, dev tools,
                            libraries)
                        </li>
                        <li>Node backend development</li>
                        <li>App deployment (CI/CD, Docker, etc.)</li>
                        <li>Cloud services (AWS in particular)</li>
                    </ul>
                    <p>
                        {
                            'Over the course of this project, I will be documenting my learnings on Medium, which you can find at: '
                        }
                        <a
                            href={'https://medium.com/@patrickcarlos'}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://medium.com/@patrickcarlos
                        </a>
                    </p>
                </Section>
            </div>
            <Section variant={SectionVariant.TERTIARY}>
                <SectionHeading variant={SectionVariant.TERTIARY}>
                    Current Game Modes
                </SectionHeading>
                <p>
                    The game currently only has one mode for unranked play. in
                    this game mode, you will be able to guess the title of an
                    article based on a provided paragraph without any time or
                    attempt constraints.
                </p>
                <SectionHeading variant={SectionVariant.TERTIARY}>
                    Upcoming Game Modes
                </SectionHeading>
                <p></p>
                <ul>
                    <li>Speed Mode</li>
                    <ul>
                        <li>
                            {`In the a laster release of the game, "Speed Mode" will be
                        available, where users are given a minute to provide as
                        many guesses for the article title. After the time is
                        up, all of the guesses will be compared to the title
                        name, and the guess with the highest similarity score
                        will be used to calculate player score.`}
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li>Curated Mode</li>{' '}
                    <ul>
                        <li>
                            {`Curated mode, which is intended to be released after
                        Speed Mode, will allow users to guess the title for the
                        Article of the Day. Unlike the Speed game mode, instead
                        of calculating scores, the number of attempts will be
                        recorded.`}
                        </li>
                    </ul>
                </ul>
            </Section>
        </div>
    );
};
