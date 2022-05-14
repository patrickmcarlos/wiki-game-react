import { css } from '@emotion/react';
import { SectionType } from './Section';

const sectionStyle = (type: SectionType) => css`
    padding: 8px;
    border: 1px solid black;
    ${type === SectionType.INTRODUCTION && `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`;

const sectionHeadingStyle = css`
    padding: 6px;
    border: 1px solid black;

    h2 {
        font-size: 1.25em;
        margin: 0;
    }
`;

export { sectionStyle, sectionHeadingStyle };
