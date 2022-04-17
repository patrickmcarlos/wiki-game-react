import React from 'react';
import { sectionStyle, sectionHeadingStyle } from './styles';

interface SectionProps extends React.HTMLProps<HTMLTableSectionElement> {
    className?: string;
}

interface SectionHeadingProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
}

const Section: React.FC<SectionProps> = ({ className, children }) => {
    return (
        <section className={className} css={[sectionStyle]}>
            {children}
        </section>
    );
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
    className,
    children,
}) => {
    return (
        <div className={className} css={[sectionHeadingStyle]}>
            <h2>{children}</h2>
        </div>
    );
};

export { Section, SectionHeading };
