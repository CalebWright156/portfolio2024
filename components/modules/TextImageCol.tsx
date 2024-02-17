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
                            This website was built in Next.js using the app router, as well as typescript and tailwind
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className={'border-b-brand_4 dark:border-b-brand_1'}>
                        <AccordionTrigger className={'text-brand_4 dark:text-brand_1'}>Have I ever led a project before?</AccordionTrigger>
                        <AccordionContent className={'text-brand_4 dark:text-brand_1'}>
                            Yes I have! in 2023 I was the lead developer on the rebuild of the <Link target={'_blank'} className={'text-[#FF3333] font-bold hover:underline'} href={'https://youngshand.com/'}>YoungShand</Link> website. I was responsible for the front-end and back-end development of the website. I worked closely with the design team to ensure the website was built to the design specifications. I also worked closely with the project manager to ensure the project was delivered on time and on budget. Check it out!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className={'border-b-brand_4 dark:border-b-brand_1'}>
                        <AccordionTrigger className={'text-brand_4 dark:text-brand_1'}>What am I doing when I'm not programming</AccordionTrigger>
                        <AccordionContent className={'text-brand_4 dark:text-brand_1'}>
                            When I'm not programming, you can find me hanging out with my wife and 1 year old son, watching tennis or coding a hobby project  (yes, I do code in my spare time).
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    );
};

export default TextImageCol;