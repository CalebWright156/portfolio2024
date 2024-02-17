'use client'

import React, { useContext, useEffect, useState } from 'react';
import CircularProgress from "@/components/modules/CircularProgress";
import { AnimationContext } from "@/components/modules/AnimationProvider";

const IntroSection:React.FC = () => {
    const [progressAmount, setProgressAmount] = useState(0)
    const animationContext = useContext(AnimationContext);

    useEffect(() => {
        if (progressAmount >= 100) {
            animationContext?.setIntroAnimationComplete(true);
        }
    }, [progressAmount, animationContext]);

    useEffect(() => {
        const calculateIntervalTime = (progress: number) => {
            return 30 + progress * -0.35;
        };

        const intervalTime = calculateIntervalTime(progressAmount);

        const interval = setInterval(() => {
            if (progressAmount < 100) {
                setProgressAmount(progressAmount + 1);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, [progressAmount]);


    return (
        <div
            className={`absolute bg-white z-[300] w-[100vw] h-[100vh] flex justify-center items-center flex-col transition-transform duration-[1000ms] delay-300 ease-in-out ${progressAmount >= 100 ? 'translate-y-[-100vh]' : ''}`}>

            <h3 className={`text-brand_4 font-bold text-4xl pb-5 animate-bounce ${progressAmount >= 100 && 'opacity-0 transition-all duration-500'}`}>Loading</h3>
            <CircularProgress progress={progressAmount}/>
        </div>
    );
};

export default IntroSection;