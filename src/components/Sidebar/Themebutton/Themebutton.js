import React, { useContext } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import DarkModeToggle from 'react-dark-mode-toggle';
import ThemeContext from '../../../context/ThemeContext';


const Themebutton = () => {
    // const [isDarkMode, setIsDarkMode] = useState(false);
    const { isDarkMode, setDarkMode } = useContext(ThemeContext);

    console.log(document.body.className);

    return (

        <DarkModeToggle onChange={() =>
            setDarkMode()
        }
            checked={isDarkMode}
            size={75}
        />

        // <ThemeToggler>
        //     {({ toggleTheme }) =>
        //         <DarkModeToggle onChange={() => 
        //             setDarkMode()
        //             // toggleTheme(isDarkMode ? 'dark' : 'light');

        //         }
        //             checked={isDarkMode}
        //             size={75}
        //         />
        //     }
        // </ThemeToggler>
    );
};

export default Themebutton;