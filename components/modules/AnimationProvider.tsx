'use client';

import React, { createContext, useState } from 'react';


type AnimationContextInterface = any;

interface CurrentContextType {
    isIntroAnimationComplete: boolean;
    setIntroAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AnimationContext = createContext<CurrentContextType | null>(null);

const AnimationProvider:React.FC<AnimationContextInterface> = ({ children }) => {
    const [isIntroAnimationComplete, setIntroAnimationComplete] = useState(false);

    return (
        <AnimationContext.Provider value={{ isIntroAnimationComplete, setIntroAnimationComplete }}>
            {children}
        </AnimationContext.Provider>
    );
};

export default AnimationProvider;