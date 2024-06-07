import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { useThemeContext } from '../../context/theme/themeContext';
import Paragraph from '../paragraphs/Paragraph';

function Section({ section }) {
  const { theme } = useThemeContext();

  return (
    <section>
      <Box
        sx={{
          minHeight: '50vh',
          background: `url(${section.background_img_url}) center/cover fixed no-repeat, #7777`,
          position: 'relative',
          marginBottom: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            backgroundColor: theme === 'light' ? '#BBDEFBDD' : '#212121DD',
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
          }}
        >
          <Box sx={{ margin: '1rem', textAlign: 'center' }}>
            <Typography variant="h2">{section.h2}</Typography>
            {section.small && <small>{section.small}</small>}
          </Box>

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
                <img style={{ width: '100%' }} src={section.img_src} alt={`${section.h2} section`} />
              </Box>
            )}

            {section.p.map((p, idx) => (
              <Paragraph key={idx} p={p} />
            ))}
          </Box>
        </Container>
      </Box>
    </section>
  );
}

export default Section;
