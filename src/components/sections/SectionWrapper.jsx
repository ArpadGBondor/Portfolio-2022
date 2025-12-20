import React, { useMemo } from 'react';
import { Box, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useThemeContext } from '../../context/theme/themeContext';
import bootstrapColors from '../../constants/colors';

function SectionWrapper({ sectionIndex, backgroundImg, children }) {
  const { theme } = useThemeContext();

  const colorOptions = [
    bootstrapColors.green,
    bootstrapColors.red,
    theme === 'light' ? bootstrapColors.orange : bootstrapColors.yellow,
    bootstrapColors.blue,
  ];

  const colorForSection = colorOptions[sectionIndex % colorOptions.length];

  const sectionTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          primary: { main: colorForSection },
        },
      }),
    [colorForSection, theme]
  );

  return (
    <ThemeProvider theme={sectionTheme}>
      <section style={{ position: 'relative' }}>
        {/* Top rounded bar */}
        <Box
          sx={{
            background: colorForSection,
            borderRadius: '1rem',
            width: '100%',
            height: '2rem',
            position: 'absolute',
            top: '-1rem',
          }}
        />

        {/* Main background */}
        <Box
          sx={{
            minHeight: '50vh',
            background: backgroundImg
              ? `url(${backgroundImg}) center/cover fixed no-repeat`
              : colorForSection,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Overlay */}
          <Box
            sx={{
              backgroundColor: theme === 'light' ? '#D9D9D9DD' : '#212121DD',
              position: 'absolute',
              inset: 0,
            }}
          />

          <Container
            sx={{
              position: 'relative',
              zIndex: 1,
              padding: '1rem',
              color: theme === 'light' ? 'black' : 'lightgrey',
            }}
          >
            {children}
          </Container>
        </Box>
      </section>
    </ThemeProvider>
  );
}

export default SectionWrapper;
