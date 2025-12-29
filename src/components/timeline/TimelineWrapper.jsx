import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useThemeContext } from '../../context/theme/themeContext';
import bootstrapColors from '../../constants/colors';
import headerSizes from '../../constants/headerSizes';

function TimelineWrapper({ sectionIndex, backgroundImg, children }) {
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
        typography: { ...headerSizes },
      }),
    [colorForSection, theme]
  );

  return (
    <ThemeProvider theme={sectionTheme}>
      <section style={{ position: 'relative' }}>
        {/* Main background */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            padding:
              sectionIndex % 2 === 0 ? '1rem 2rem 1rem 0' : '1rem 0 1rem 2rem',
            marginLeft: sectionIndex % 2 === 0 ? '0' : 'auto',
            marginRight: sectionIndex % 2 !== 0 ? '0' : 'auto',
            marginTop: { xs: '0', md: '-17rem' },
            position: 'relative',
          }}
        >
          <Box
            sx={{
              height: 0,
              width: 0,
              borderColor: {
                xs: `transparent transparent transparent ${colorForSection}`,
                md:
                  sectionIndex % 2 === 0
                    ? `transparent transparent transparent ${colorForSection}`
                    : `transparent ${colorForSection} transparent transparent`,
              },
              borderWidth: '1rem 2rem',
              borderStyle: 'solid',
              position: 'absolute',
              top: '2rem',
              right: {
                xs: '-2rem',
                md: sectionIndex % 2 === 0 ? '-2rem' : 'auto',
              },
              left: {
                xs: 'auto',
                md: sectionIndex % 2 !== 0 ? '-2rem' : 'auto',
              },
            }}
          ></Box>
          <Box
            sx={{
              background: backgroundImg
                ? `url(${backgroundImg}) center/cover no-repeat`
                : colorForSection,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              borderRadius: '1rem',
              borderColor: colorForSection,
              borderWidth: '0.25rem',
              borderStyle: 'solid',
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

            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                padding: '1rem',
                color: theme === 'light' ? 'black' : 'lightgrey',
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </section>
    </ThemeProvider>
  );
}

export default TimelineWrapper;
