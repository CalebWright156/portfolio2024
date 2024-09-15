import React from 'react';
import Section from "@/components/modules/Section";
import SectionHeading from "@/components/modules/SectionHeading";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";


const skills = [
    {
        title: "React",
        icon: "React-icon.png"
    },
    {
        title: "Next.js",
        icon: "next-js-icon-2048x2048-5dqjgeku.png"
    },
    {
        title: "Wordpress",
        icon: "Wordpress-Logo.png"
    },
    {
        title: "Typescript",
        icon: "Typescript_logo_2020.png"
    },
    {
        title: "HTML",
        icon: "1024px-HTML5_Badge.png"
    },
    {
        title: "CSS",
        icon: "CSS3_logo.png"
    },
    {
        title: "Javascript",
        icon: "javascript-1.svg"
    },
    {
        title: "Nodejs",
        icon: "nodejs-icon.svg"
    },
    {
        title: "PHP",
        icon: "PHP-logo.png"
    },
    {
        title: "Tailwindcss",
        icon: "Tailwind_CSS_Logo.png"
    },
    {
        title: "Sass",
        icon: "2560px-Sass_Logo_Color.png"
    },
    {
        title: "Styled Components",
        icon: "styled-components.png"
    },
    {
        title: "Graphql",
        icon: "2048px-GraphQL_Logo.png"
    },
]

const SkillsSection:React.FC = () => {
    return (
        <Section id={'skills'} className={'h-auto bg-brand_1 dark:bg-brand_2'}>
            <div className={'w-100 flex justify-center'}>
                <SectionHeading title={'Skills'}/>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-[25rem] lg:max-w-6xl mx-auto pt-10"
            >
                <CarouselContent className={'py-12'}>
                    {skills.map((skill, index) => (
                        <CarouselItem key={index} className={"basis-1/3 lg:basis-1/4"}>
                            <div className="p-1">
                                <Card className={'lg:hover:scale-125 transition-all duration-500 ease-in-out dark:bg-brand_1'}>
                                    <CardContent className="flex flex-col gap-2 aspect-square items-center justify-center p-6">
                                        <span className="text-md text-center md:text-xl lg:text-2xl font-semibold dark:text-brand_4">{skill.title}</span>
                                        <Image src={`/SkillIcons/${skill?.icon}`} alt={'test'} width={100} height={100} />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </Section>
    );
};

export default SkillsSection;