import React from 'react';
import Section from "@/components/modules/Section";
import SectionHeading from "@/components/modules/SectionHeading";
import TextImageCol from "@/components/modules/TextImageCol";

const AboutSection: React.FC  = () => {
    return (
        <Section id={'about'} className={'h-auto bg-brand_1 dark:bg-brand_2'}>
            <div className={'w-100 flex justify-center'}>
                <SectionHeading title={'About'} />
            </div>

            <TextImageCol
                text={"I am a 22-year-old, Australian software developer looking for junior front-end or full-stack development roles. As a software developer, I am skilled in applying the rules and theories of software engineering to the creation, design, maintenance, and testing of computer software and website design. I have a passion for continuous learning, problem-solving, and enjoy working in a team environment. Listed below are my work, education, skills, and a few of my recent projects. I have built a website with links to all of my projects and code, which will give you a better understanding of my skillset and abilities."}
            />
        </Section>
    );
};

export default AboutSection;