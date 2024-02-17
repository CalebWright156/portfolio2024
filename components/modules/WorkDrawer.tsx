import React from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image";

interface WorkDrawerProps {
    imageSrc: string;
    projectName: string;
    role: string;
    technologies: string[];
    description: string;
    link: string;
}

const WorkDrawer:React.FC<WorkDrawerProps> = ({imageSrc, projectName, link, role, technologies, description}) => {
    return (
            <Drawer>
                <DrawerTrigger>
                    <div className={'relative group'}>
                        <Image
                            className={'w-full h-full object-cover transition-all duration-500 rounded-2xl group-hover:scale-105'}
                            src={imageSrc}
                            alt={'YS Site'}
                            width={150}
                            height={150}
                        />
                        <div
                            className={'absolute inset-0 opacity-0 bg-black bg-opacity-50 transition-all duration-500 group-hover:opacity-50 rounded-2xl flex justify-center group-hover:scale-105'}>
                        </div>
                        <h4
                            className={'absolute inset-0  flex items-center justify-center text-white font-bold transition-translate-y duration-500 opacity-0 group-hover:opacity-100 translate-y-12 group-hover:translate-y-0 text-xl'}>
                            {projectName}
                        </h4>
                    </div>
                </DrawerTrigger>
                <DrawerContent className={'dark:bg-brand_2'}>
                    <DrawerHeader className={'flex flex-col items-center dark:bg-brand_2'}>
                        <DrawerTitle className={'text-brand_4 text-4xl dark:text-brand_1'}>{projectName}</DrawerTitle>
                        <DrawerDescription className={'flex flex-col items-center lg:max-w-2xl gap-3'}>
                            <span>Role: {role}</span>
                            <p className={'text-brand_4 text-center dark:text-brand_1'}>Technologies used: {technologies.join(', ')}</p>
                            <p className={'text-brand_4 text-center dark:text-brand_1'}>{description}</p>
                            <span>Check it out <a className={'underline transition-all duration-500 ease-in-out hover:text-brand_4'} href={link} target={'_blank'}>Here</a></span>
                            <Image
                                className={'transition-all duration-500 rounded-2xl '}
                                src={imageSrc}
                                alt={'YS Site'}
                                width={400}
                                height={400}
                            />
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>
                            <button className={'dark:text-brand_1'}>Close</button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
    );
};

export default WorkDrawer;