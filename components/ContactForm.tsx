import React from 'react';
import Section from "@/components/modules/Section";
import SectionHeading from "@/components/modules/SectionHeading";

const ContactForm = () => {
    return (
        <Section id={'contact'} className={'h-auto bg-brand_1 dark:bg-brand_2'}>
            <div className={'w-100 flex justify-center'}>
                <SectionHeading title={`Let's chat`}/>
            </div>


            <h2 className={'text-[3rem] lg:text-[7rem] text-brand_4 font-bold uppercase text-center moving-gradient-text w-full mt-24'}>Coming Soon</h2>
        </Section>
    );
};

export default ContactForm;