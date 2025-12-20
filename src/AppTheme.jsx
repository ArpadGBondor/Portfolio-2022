import React from 'react';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { useThemeContext } from './context/theme/themeContext';
import bootstrapColors from './constants/colors';
import CustomCursor from './components/CustomCursor';

function AppTheme({ children }) {
  const { theme } = useThemeContext();

  const newTheme = React.useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          palette: {
            mode: theme,
            primary: {
              main: bootstrapColors.blue,
            },
          },
        })
      ),
    [theme]
  );
  return (
    <ThemeProvider theme={newTheme}>
      <CustomCursor />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;
