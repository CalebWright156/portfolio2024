'use client'

import React from 'react';
import { TypeAnimation } from "react-type-animation";

const TypeWriterComponent: React.FC = () => {
    return (
        <TypeAnimation
            sequence={[
                1000,
                'Software Engineer',
                1000,
                'Your Next Full Stack Developer',
                1000
            ]}
            speed={50}
            className={'text-4xl lg:text-6xl'}
        />
    );
};

export default TypeWriterComponent;