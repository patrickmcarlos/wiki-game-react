import { css } from '@emotion/react';

const mainLayoutStyle = css`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`;

const bodyStyle = css`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const contentStyle = css`
    padding: 20px;
    height: 100%;
    border: 1px solid #a7d7f9;
`;

export { bodyStyle, mainLayoutStyle, contentStyle };
