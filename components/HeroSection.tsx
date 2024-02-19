'use client'

import React, { useContext } from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {AnimationContext} from "@/components/modules/AnimationProvider";

import ImageWrapper from "@/components/modules/ImageWrapper";
import TypeWriterComponent from "@/components/modules/TypeAnimation";
import SocialLink from "@/components/modules/SocialLink";
import Section from "@/components/modules/Section";
import ParticlesModule from "@/components/modules/Particles";
import DaysSinceStartDate from "@/components/modules/DaysSinceStartDate";

const HeroSection: React.FC = () => {
    const introFinished = useContext(AnimationContext);

    return (
        <Section id={'home'}>
            <ParticlesModule />
            <div className={'pt-20 flex flex-col gap-20'}>

                <div>
                    <h1 className={'text-brand_4 dark:text-brand_1 font-bold text-4xl leading-[3.5rem] transition-theme lg:text-6xl'}>Hi,
                        I'm <span
                            className={'dark:text-brand_3 transition-theme lg:text-6xl'}>Caleb</span></h1>
                    <div className={'text-brand_4 dark:text-brand_1 font-bold pt-2  transition-theme'}>
                        {introFinished?.isIntroAnimationComplete && <TypeWriterComponent/>}
                    </div>
                </div>

                <div>
                    <div className={'flex flex-col md:flex-row w-100 justify-between pb-5'}>
                        <div>
                            <a href="/CalebWrightResume.pdf" download>
                                <button
                                    className={'bg-brand_4 dark:bg-brand_3 text-brand_1 dark:text-brand_4 font-bold rounded-xl px-10 py-3 transition-theme hover:text-brand_1 hover:bg-brand_3 cursor-pointer hover:dark:bg-brand_4 hover:dark:text-brand_3 lg:px-[3rem] lg:py-[1rem] lg:text-xl'}>Download
                                    CV
                                    <FontAwesomeIcon icon={faDownload} className={'ml-3'}/>
                                </button>
                            </a>
                            <div className={'py-5 lg:py-10'}>
                                <p className={'text-brand_4 pb-5 font-bold dark:text-brand_1 lg:text-2xl letter-animation'}>
                                    Find me here
                                </p>
                                <div className={'flex flex-col gap-4 text-xl'}>
                                    <div className={'flex flex-col gap-4 text-xl'}>
                                        <SocialLink link={'https://github.com/CalebWright156?tab=repositories'} icon={faGithub} text={'@Calebwright156'} style={{animationDelay: '9.5s'}}/>
                                        <SocialLink link={'https://www.linkedin.com/in/caleb-wright-120934177/'} icon={faLinkedin} text={'Caleb Wright'} style={{animationDelay: '9.7s'}}/>
                                        <SocialLink link={"mailto:calebwright156@gmail.com"} icon={faEnvelope} text={'Lets Chat'} style={{animationDelay: '9.9s'}}/>
                                    </div>
                                    <DaysSinceStartDate />

                                </div>
                            </div>
                        </div>
                        <div className={'hidden md:block lg:mb-12'}>
                            <ImageWrapper src="/profile.jpeg" alt="Profile Picture"/>
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default HeroSection;
