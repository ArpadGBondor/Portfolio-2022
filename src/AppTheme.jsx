import React from 'react';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { useThemeContext } from './context/theme/themeContext';

function AppTheme({ children }) {
  const { theme } = useThemeContext();

  const newTheme = React.useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          palette: {
            mode: theme,
            primary: {
              main: '#007bff',
            },
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
