import React from 'react';
import { useMediaQuery, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useThemeContext } from './context/theme/themeContext';

function AppTheme({ children }) {
    const { theme } = useThemeContext();

    const newTheme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: theme,
                },
            }),
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
