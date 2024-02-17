'use client';

import React, { useState, useEffect } from 'react';

const DaysSinceStartDate: React.FC = () => {
    const startDate: Date = new Date('2021-12-26'); // Your start date
    const [daysElapsed, setDaysElapsed] = useState<number>(0);

    useEffect(() => {
        const calculateDaysElapsed = (): void => {
            const today: Date = new Date();
            const timeDiff: number = today.getTime() - startDate.getTime();
            const days: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            setDaysElapsed(days);
        };

        calculateDaysElapsed();

        const intervalId: NodeJS.Timeout = setInterval(calculateDaysElapsed, 86400000); // 24 hours

        return () => clearInterval(intervalId);
    }, []);

    return (
            <h3 className={'text-brand_4 dark:text-brand_1'}>Days Spent Coding: {daysElapsed}</h3>
    );
};

export default DaysSinceStartDate;

