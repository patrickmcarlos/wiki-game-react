import { css } from '@emotion/react';
import { SectionType } from './Section';

enum SectionVariant {
    PRIMARY,
    SECONDARY,
    TERTIARY,
    NEUTRAL,
}

const primarySectionStyle = css`
    background-color: var(--primary-section-color);
    border: var(--primary-section-border);
`;

const primarySectionHeadingStyle = css`
    background-color: var(--primary-section-heading-color);
    border: var(--section-heading-border);
`;

const secondarySectionStyle = css`
    background-color: var(--secondary-section-color);
    border: var(--secondary-section-border);
`;

const secondarySectionHeadingStyle = css`
    background-color: var(--secondary-section-heading-color);
    border: var(--section-heading-border);
`;

const tertiarySectionStyle = css`
    background-color: var(--tertiary-section-color);
    border: var(--teriary-section-border);
`;

const tertiarySectionHeadingStyle = css`
    background-color: var(--tertiary-section-heading-color);
    border: var(--section-heading-border);
`;

const neutralSectionStyle = css`
    background-color: var(--neutral-section-color);
    border: var(--neutral-section-border);
`;

const neutralSectionHeadingStyle = css`
    background-color: var(--neutral-section-heading-color);
    border: var(--section-heading-border);
`;

const sectionStyle = (type: SectionType) => css`
    padding: 8px;
    ${type === SectionType.INTRODUCTION &&
    `
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

const sectionVariantStyleMap = {
    [SectionVariant.PRIMARY]: primarySectionStyle,
    [SectionVariant.SECONDARY]: secondarySectionStyle,
    [SectionVariant.TERTIARY]: tertiarySectionStyle,
    [SectionVariant.NEUTRAL]: neutralSectionStyle,
};

const sectionHeadingVariantStyleMap = {
    [SectionVariant.PRIMARY]: primarySectionHeadingStyle,
    [SectionVariant.SECONDARY]: secondarySectionHeadingStyle,
    [SectionVariant.TERTIARY]: tertiarySectionHeadingStyle,
    [SectionVariant.NEUTRAL]: neutralSectionHeadingStyle,
};

export {
    sectionStyle,
    sectionHeadingStyle,
    sectionVariantStyleMap,
    sectionHeadingVariantStyleMap,
    SectionVariant,
};
