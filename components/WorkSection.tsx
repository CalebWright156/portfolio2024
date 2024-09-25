import React from 'react';
import Section from "@/components/modules/Section";
import SectionHeading from "@/components/modules/SectionHeading";
import WorkDrawer from "@/components/modules/WorkDrawer";

const WorkSection:React.FC = () => {

    const WorkItems = [
        {
            imageSrc: '/YSWork.webp',
            projectName: 'YoungShand Rebuild',
            role: 'Lead Developer',
            technologies: ['React', 'Next.js', 'Styled Components', 'Strapi', 'GraphQL'],
            description: 'A complete rebuild of the YoungShand website. I was responsible for the front-end development of the site. I used Next.js to build the site, and Strapi as the CMS. I also used GraphQL to query the data from the CMS.',
            link: 'https://youngshand.com'
        },
        {
            imageSrc: '/OceaniaWork.webp',
            projectName: 'Oceania Helier Redesign',
            role: 'Lead Developer',
            technologies: ['React', 'Next.js', 'Sass'],
            description: `A redesign of Oceania's The Helier sub page of the website. I was responsible for the front-end development of the site. I used Next.js to build the site, and Sass for styling`,
            link: 'https://oceaniahealthcare.co.nz/location/the-helier'
        },
        {
            imageSrc: '/CraigsWork.webp',
            projectName: 'Craigs Investment Partners',
            role: 'Full Stack Developer',
            technologies: ['React', 'Next.js', 'Styled Components', 'Wordpress', 'PHP', 'GraphQL'],
            description: `I was part of the team that built the UI for the new Craigs Investment Partner Website. Later on I was also the lead on developing a plugin that enabled the client to use redirects within the context of our headless architecture.`,
            link: 'https://craigsip.com'
        },
        {
            imageSrc: '/Hot-Bargain.webp',
            projectName: 'Hot Bargain Rebuild',
            role: 'Lead Developer',
            technologies: ['wordpress', 'PHP', 'JavaScript', 'CSS'],
            description: `A complete rebuild of the Hot Bargain website. I was responsible for the front-end development of the site. I used Wordpress to build the site, with the website builder Elementor and used PHP and JavaScript to add custom functionality to the site.`,
            link: 'https://www.hotbargain.com.au'
        },
    ]

    return (
        <Section id={'work'} className={'h-auto bg-brand_1 dark:bg-brand_2'}>
            <div className={'w-100 flex justify-center'}>
                <SectionHeading title={'Work'}/>
            </div>
            <div className={'pt-8 flex flex-col md:flex-row gap-12 justify-center'}>
                {WorkItems?.map((item, index) => {
                    return (
                        <WorkDrawer key={index} imageSrc={item?.imageSrc} projectName={item?.projectName} role={item?.role} technologies={item?.technologies} description={item?.description} link={item?.link} />
                    )
                })}
            </div>
        </Section>
    );
};

export default WorkSection;