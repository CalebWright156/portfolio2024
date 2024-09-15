'use client'

import React, {useState} from 'react';
import Image from "next/image";


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {useVisibility} from "@/lib/helpers";
import Link from "next/link";

interface TextImageColProps {
    text: string;
}

const TextImageCol:React.FC<TextImageColProps> = ({ text}) => {
    const [isVisible, headingRef] = useVisibility(0.1);

    return (
        <div ref={headingRef} className={`flex flex-col md:flex-row gap-[2rem] md:gap-[5rem] pt-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
            <div className="relative h-[13.5rem] w-[13.5rem] lg:h-[26rem] lg:w-96 bg-brand_4 rounded-xl flex-2">
                <Image
                    src={'/Caleb&Bub.jpeg'}
                    alt={'Me and my Boy'}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>
            <div className={'flex-1'}>
                <p className={'text-brand_4 dark:text-brand_1'}>{text}</p>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className={'border-b-brand_4 dark:border-b-brand_1'}>
                        <AccordionTrigger className={'text-brand_4 dark:text-brand_1'}>What was this website built with?</AccordionTrigger>
                        <AccordionContent className={'text-brand_4 dark:text-brand_1'}>
                        This site was developed with Next.js, utilizing the app router, along with TypeScript and Tailwind CSS.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className={'border-b-brand_4 dark:border-b-brand_1'}>
                        <AccordionTrigger className={'text-brand_4 dark:text-brand_1'}>Have I ever led a project before?</AccordionTrigger>
                        <AccordionContent className={'text-brand_4 dark:text-brand_1'}>
                        Absolutely! In 2023, I was the lead developer for the rebuild of the <Link target="_blank" className="text-[#FF3333] font-bold hover:underline" href="https://youngshand.com/">YoungShand</Link> website. I handled both front-end and back-end development, collaborating closely with the design team to meet specifications and the project manager to ensure timely, on-budget delivery. Feel free to check it out!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className={'border-b-brand_4 dark:border-b-brand_1'}>
                        <AccordionTrigger className={'text-brand_4 dark:text-brand_1'}>What am I doing when I'm not programming</AccordionTrigger>
                        <AccordionContent className={'text-brand_4 dark:text-brand_1'}>
                        Outside of programming, I enjoy spending time with my wife and our 2-year-old son, watching tennis, or working on personal coding projects.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    );
};

export default TextImageCol;