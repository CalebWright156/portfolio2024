'use client'

import React, { useState, useEffect, useRef } from 'react';
import {useVisibility} from "@/lib/helpers";

import Heading from "@/components/modules/Heading";
interface SectionHeadingProps {
    title: string;
}

const SectionHeading:React.FC<SectionHeadingProps> = ({title}) => {
    const [isVisible, headingRef] = useVisibility(0.1);

    return (
        <div ref={headingRef} className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Heading title={title} className={`animated-underline ${isVisible ? 'animating' : ''}`}/>
        </div>

    );
};

export default SectionHeading;