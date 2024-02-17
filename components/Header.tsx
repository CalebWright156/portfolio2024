'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";

import {faLightbulb as farLightbulb} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { Squash as Hamburger } from 'hamburger-react'

import { useIsDesktop, useIsDarkMode } from "@/lib/helpers";
import DarkModeToggle from "@/components/modules/DarkModeToggle";

interface HeaderItemProps {
    href: string;
}

const Header: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const isDesktop = useIsDesktop();
    const darkMode = useIsDarkMode();

    const link: string[] = ['Home', 'About', 'Skills', 'Work', 'Contact']

    const HeaderItem: React.FC<HeaderItemProps> = ({href}) => {

        return (
            <Link href={`#${href.toLowerCase()}`}>
                <li className={`dark:text-brand_1 text-brand_2 font-medium cursor-pointer border-[3px] border-transparent transition-theme w-fit hover:border-b-brand_3`}>{href}</li>
            </Link>
        )
    }

    return (
        <header
            className={'bg-brand_1 lg:py-5 pt-[1rem] 2xl:pt-[2rem] px-5 lg:px-10 xl:px-[10rem] 2xl:px-[20rem]  text-brand_1 dark:bg-brand_4 transition-theme flex justify-between items-center'}>
            <Link href={'/'}>
                <div className={'flex'}>
                    <h2 className={`${darkMode && 'moving-gradient-text'} text-brand_4 font-bold text-xl`}>{isDesktop ? 'Caleb Wright - Software Developer' : 'CW'}</h2>
                </div>
            </Link>
            <div className={'flex justify-between gap-[15rem] items-center'}>
                <div className={'hidden lg:block'}>
                    <ul className={'flex gap-8 text-lg'}>
                        {link.map((item, index) => (
                            <HeaderItem key={index} href={item}/>
                        ))}
                    </ul>
                </div>
                <DarkModeToggle>
                    <FontAwesomeIcon
                        icon={farLightbulb}
                        className={'text-2xl text-brand_4 dark:text-brand_1'}
                    />
                </DarkModeToggle>
            </div>
            {!isDesktop && (
                <>
                    <div>
                        <Hamburger toggled={isOpen} toggle={setOpen} color={darkMode ? 'white' : 'black'} />
                     </div>
                    <div
                        className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-[3rem] right-0 w-[300px] h-full bg-brand_2 dark:bg-brand_4 transition-theme z-40`}>
                        <ul className="p-4 space-y-6">
                            <li className={'text-brand_1 font-medium cursor-pointer border-2 border-transparent hover:border-b-brand_3 transition-theme w-fit'}>Home</li>
                            <li className={'text-brand_1 font-medium cursor-pointer border-2 border-transparent hover:border-b-brand_3 transition-theme w-fit'}>About</li>
                            <li className={'text-brand_1 font-medium cursor-pointer border-2 border-transparent hover:border-b-brand_3 transition-theme w-fit'}>Skills</li>
                            <li className={'text-brand_1 font-medium cursor-pointer border-2 border-transparent hover:border-b-brand_3 transition-theme w-fit'}>Work</li>
                            <li className={'text-brand_1 font-medium cursor-pointer border-2 border-transparent hover:border-b-brand_3 transition-theme w-fit'}>Contact</li>
                        </ul>
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;
