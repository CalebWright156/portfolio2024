import React from 'react';

interface SectionProps {
    id: string;
    children?: any;
    className?: any;
}

const Section:React.FC<SectionProps> = ({ id, children, className }) => {
    return (
        <section id={id} className={`px-5 lg:px-10 xl:px-[10rem] 2xl:px-[20rem] py-10 transition-theme ${className}`}>
            {children}
        </section>
    );
};

export default Section;