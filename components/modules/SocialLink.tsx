import React from 'react';

import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface SocialProps {
    icon: any;
    text: string;
    style?: any;
    link: string;
}

const SocialLink:React.FC<SocialProps> = ({icon, text, style, link}) => {
    return (
        <Link href={link} target={'_blank'} className={'flex items-center gap-2 cursor-pointer group icon-animation opacity-0'} style={style}>
            <FontAwesomeIcon icon={icon} className={'text-brand_4 dark:text-brand_1 transition-theme group-hover:text-brand_3 lg:text-3xl'}  />
            <p className={'text-sm text-brand_4 dark:text-brand_1 transition-theme group-hover:text-brand_3 font-medium lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-[10px] lg:group-hover:translate-y-0 lg:text-xl lg:group-hover:text-brand_4 dark:group-hover:text-brand_1'}>{text}</p>
        </Link>
    );
};

export default SocialLink;