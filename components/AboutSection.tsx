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
                text={"With a passion for software engineering cultivated through years of dedicated study and practical experience, I bring a dynamic skill set to the table. Having honed my expertise at YoungShand, a prominent digital media company, I've played pivotal roles in developing and maintaining various websites, assuming leadership as a lead developer on multiple projects. My commitment to innovation and continual learning, coupled with hands-on experience, positions me as a valuable asset in any software engineering endeavor. Based in Auckland, New Zealand, at 23 years old, I am poised to contribute meaningfully to the ever-evolving tech landscape."}
            />
        </Section>
    );
};

export default AboutSection;