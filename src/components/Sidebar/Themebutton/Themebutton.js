import React, { useContext } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import ThemeContext from '../../../context/ThemeContext';


const Themebutton = () => {
    const { isDarkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <DarkModeToggle
            onChange={() => setDarkMode()}
            checked={isDarkMode}
            size={75}
        />
    );
};

export default Themebutton;