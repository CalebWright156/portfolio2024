import React from 'react';

interface CircularProgressProps {
    progress: number;

}
const CircularProgress:React.FC<CircularProgressProps> = ({progress}) => {
    const radius = 50;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex justify-center items-center">
            <svg className="transform -rotate-90" width="120" height="120">
                <circle
                    className="text-gray-300"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                />
                <circle
                    className="text-brand_4"
                    strokeWidth="3"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                />
            </svg>
            <div className="absolute">
                <span className="text-lg font-semibold">{`${progress}%`}</span>
            </div>
        </div>
    );
};

export default CircularProgress;