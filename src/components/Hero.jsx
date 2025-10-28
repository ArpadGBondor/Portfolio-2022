import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { useThemeContext } from '../context/theme/themeContext';
import Paragraph from './paragraphs/Paragraph';
import bootstrapColors from '../constants/colors';
import SectionHeading from './sections/SectionHeading';

function Hero({ hero }) {
  const { theme } = useThemeContext();
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `url(${hero.img_url}) center/cover fixed no-repeat, #7777`,
        position: 'relative',
        paddingBottom: '1rem',
      }}
    >
      <Box
        sx={{
          backgroundColor: theme === 'light' ? '#D9D9D9DD' : '#212121DD',
          color: theme === 'light' ? 'black' : 'lightgrey',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          textAlign: 'center',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SectionHeading text={hero.h1} variant="h1" />
          {hero.small && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <hr
                style={{
                  height: '0',
                  width: '2rem',
                  borderColor: bootstrapColors.blue,
                }}
              />
              <Typography
                sx={{ marginX: '1rem', background: 'inherit' }}
                variant="body1"
              >
                {hero.small}
              </Typography>
              <hr
                style={{
                  height: '0',
                  width: '2rem',
                  borderColor: bootstrapColors.blue,
                }}
              />
            </Box>
          )}
          {hero.p.map((p, idx) => (
            <Paragraph key={idx} p={p} />
          ))}
        </Container>
      </Box>
    </Box>
  );
}

export default Hero;
