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
                text={"Experienced Full Stack Developer available for contract work, specializing in both custom web applications and WordPress website development. With a proven track record at YoungShand, I've led projects that enhance digital experiences for high-profile clients. Proficient in modern web technologies and CMS platforms, I bring a dynamic skill set and a commitment to delivering exceptional results. Eager to contribute my expertise to innovative projects in need of a versatile and dedicated developer."}
            />
        </Section>
    );
};

export default AboutSection;