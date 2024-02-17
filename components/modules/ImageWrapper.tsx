import React from 'react';
import Image from "next/image";

interface ImageWrapperProps {
    src: string;
    alt: string;
}
const ImageWrapper: React.FC<ImageWrapperProps> = ({src, alt}) => {

    return (
        <div className="relative h-[13.5rem] w-[13.5rem] lg:h-96 lg:w-96 bg-brand_4 rounded-xl">
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition-theme animating-image"
            />
        </div>
    );
};

export default ImageWrapper;