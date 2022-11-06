import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function useThemeContext() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useThemeContext must be used within ThemeState');
    }
    return context;
}

export { ThemeContext, useThemeContext };
