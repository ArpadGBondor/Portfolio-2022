import React, { useReducer } from 'react';
import { ThemeContext } from './themeContext';
import themeReducer from './themeReducer';
import { useMediaQuery } from '@mui/material';

import { SET_THEME } from '../types';

const ThemeState = (props) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const initialState = {
        theme: prefersDarkMode ? 'dark' : 'light',
    };

    const [state, dispatch] = useReducer(themeReducer, initialState);

    // Actions
    // select light theme
    const selectLightTheme = () => dispatch({ type: SET_THEME, payload: 'light' });
    const selectDarkTheme = () => dispatch({ type: SET_THEME, payload: 'dark' });

    return (
        <ThemeContext.Provider
            value={{
                theme: state.theme,
                selectLightTheme,
                selectDarkTheme,
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeState;
