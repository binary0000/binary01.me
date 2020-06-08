import React, { createContext } from 'react';

const initialState = {
    isDarkMode: false,
    setDarkMode: () => { },
}

const ThemeContext = createContext(initialState);

class ThemeProvider extends React.Component {
    state = {
        isDarkMode: false
    }

    setDarkMode = () => {
        this.setState((state) => {
            if(state.isDarkMode) document.body.classList.remove('dark');
            else document.body.classList.add('dark');

            return { isDarkMode: !state.isDarkMode }
        })
    }

    render() {
        const { children } = this.props
        const { isDarkMode } = this.state

        return (
            <ThemeContext.Provider value={{ isDarkMode, setDarkMode: this.setDarkMode }}>
                {children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContext;

export { ThemeProvider }