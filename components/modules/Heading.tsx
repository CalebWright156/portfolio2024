import React from 'react';

type HeadingProps = {
    title: string;
    className?: string;
};

const Heading:React.FC<HeadingProps> = ({ title, className }) => {
    return (
        <h2 className={`text-brand_4 dark:text-brand_1 font-bold text-4xl leading-[3.5rem] transition-theme lg:text-3xl ${className}`}>{title}</h2>
    );
};

export default Heading;