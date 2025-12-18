import React, { useMemo } from 'react';
import { Typography, Box, Container } from '@mui/material';
import { useThemeContext } from '../../context/theme/themeContext';
import Paragraph from '../paragraphs/Paragraph';
import bootstrapColors from '../../constants/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SectionHeading from './SectionHeading';

function Section({ section, sectionIndex }) {
  const { theme } = useThemeContext();

  const colorOptions = [
    bootstrapColors.green,
    bootstrapColors.red,
    theme === 'light' ? bootstrapColors.orange : bootstrapColors.yellow,
    bootstrapColors.blue,
  ];

  // Pick color using modulo to loop through the colorOptions array
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
        <Box
          sx={{
            padding: '1rem 0 0 0',
            margin: '0 0 -3rem 0',

            background: colorForSection,
            borderRadius: '1rem',
            width: '100%',
            height: '2rem',
            position: 'absolute',
            top: '-1rem',
          }}
        ></Box>
        <Box
          sx={{
            minHeight: '50vh',
            background: section.background_img_url
              ? `url(${section.background_img_url}) center/cover fixed no-repeat, #7777`
              : colorForSection,
            position: 'relative',
            paddingBottom: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              backgroundColor: theme === 'light' ? '#D9D9D9DD' : '#212121DD',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          ></Box>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              textAlign: 'justify',
              padding: '1rem',
              zIndex: '1',
              color: theme === 'light' ? 'black' : 'lightgrey',
            }}
          >
            {(section.h2 || section.small) && (
              <Box
                sx={{
                  margin: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {section.h2 && <SectionHeading text={section.h2} />}
                {section.small && (
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <hr
                      style={{
                        height: '0',
                        width: '2rem',
                        borderColor: sectionTheme.palette.primary.main,
                      }}
                    />
                    <Typography
                      sx={{ marginX: '1rem', background: 'inherit' }}
                      variant="body1"
                    >
                      {section.small}
                    </Typography>
                    <hr
                      style={{
                        height: '0',
                        width: '2rem',
                        borderColor: sectionTheme.palette.primary.main,
                      }}
                    />
                  </Box>
                )}
              </Box>
            )}

            <Box sx={{ width: '100%' }}>
              {section.img_src && (
                <Box
                  sx={{
                    margin: 'auto',
                    float: { sm: 'none', md: 'right' },
                    width: { sm: '75%', md: '50%' },
                    padding: { sm: '2rem', md: '0 0 0 1rem' },
                  }}
                >
                  <img
                    style={{ width: '100%' }}
                    src={section.img_src}
                    alt={`${section.h2} section`}
                  />
                </Box>
              )}

              {section.p.map((p, idx) => (
                <Paragraph key={idx} p={p} />
              ))}
            </Box>
          </Container>
        </Box>
      </section>
    </ThemeProvider>
  );
}

export default Section;
