import React from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { useThemeContext } from './context/theme/themeContext';

function AppTheme({ children }) {
    const { theme } = useThemeContext();

    const newTheme = React.useMemo(
        () =>
            responsiveFontSizes(
                createTheme({
                    palette: {
                        mode: theme,
                    },
                })
            ),
        [theme]
    );
    return (
        <ThemeProvider theme={newTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default AppTheme;
