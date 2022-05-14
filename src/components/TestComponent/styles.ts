import { css } from '@emotion/react';

const testComponentWrapperStyle = css`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const splitColumnStyle = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 6px;
`;

const introductionHeadingStyle = css`
    font-weight: normal;
    margin: 2px 0px;
`;

export { testComponentWrapperStyle, introductionHeadingStyle, splitColumnStyle };
