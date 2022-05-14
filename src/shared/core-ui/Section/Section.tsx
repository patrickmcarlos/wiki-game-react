import React from 'react';
import {
    sectionStyle,
    sectionHeadingStyle,
    sectionVariantStyleMap,
    sectionHeadingVariantStyleMap,
    SectionVariant,
} from './styles';

enum SectionType {
    INTRODUCTION,
    DEFAULT,
}

interface SectionProps extends React.HTMLProps<HTMLTableSectionElement> {
    className?: string;
    sectionType?: SectionType;
    variant?: SectionVariant;
}

interface SectionHeadingProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    variant?: SectionVariant;
}

const Section: React.FC<SectionProps> = ({
    className,
    sectionType = SectionType.DEFAULT,
    variant = SectionVariant.NEUTRAL,
    children,
}) => {
    return (
        <section className={className} css={[sectionStyle(sectionType), sectionVariantStyleMap[variant]]}>
            {children}
        </section>
    );
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
    className,
    children,
    variant = SectionVariant.NEUTRAL,
}) => {  
    return (
        <div
            className={className}
            css={[sectionHeadingStyle, sectionHeadingVariantStyleMap[variant]]}
        >
            <h2>{children}</h2>
        </div>
    );
};

export { Section, SectionHeading, SectionType, SectionVariant };
