import React, { useState } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import DarkModeToggle from 'react-dark-mode-toggle';


const Themebutton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleFunc = (isDarkMode, toggleTheme) => {
    //     console.log(isDarkMode);
    //     setIsDarkMode(isDarkMode);
    //     toggleTheme(isDarkMode ? 'dark' : 'light');
    // }

    return (
        <ThemeToggler>
            {({ toggleTheme }) => (
                <DarkModeToggle onChange={(isDarkMode) => {
                    setIsDarkMode(isDarkMode);
                    toggleTheme(isDarkMode ? 'dark' : 'light');
                }}
                checked={isDarkMode} size={80} />
            )}
        </ThemeToggler>
    );
};

export default Themebutton;