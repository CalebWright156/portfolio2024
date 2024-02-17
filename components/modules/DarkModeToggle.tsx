import React, {ReactNode, useEffect, useState} from 'react';

interface DarkModeToggleProps {
    children: ReactNode;
}

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            {children}
        </button>
    );
};

export default DarkModeToggle;