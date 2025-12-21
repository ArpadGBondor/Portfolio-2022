import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Paragraph from '../paragraphs/Paragraph';
import SectionHeading from './SectionHeading';

function SectionCore({ section, alignImage = 'right' }) {
  const theme = useTheme();
  return (
    <>
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
                  borderColor: theme.palette.primary.main,
                }}
              />
              <Typography
                sx={{
                  marginX: '1rem',
                  background: 'inherit',
                  textAlign: 'center',
                }}
                variant="body1"
              >
                {section.small}
              </Typography>
              <hr
                style={{
                  height: '0',
                  width: '2rem',
                  borderColor: theme.palette.primary.main,
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
              float: { sm: 'none', md: alignImage },
              width: { sm: '75%', md: '50%' },
              padding: { sm: '2rem', md: '0 0 0 1rem' },
              margin: 'auto',
            }}
          >
            <img
              style={{ width: '100%' }}
              src={section.img_src}
              alt={`${section.h2} section`}
            />
          </Box>
        )}

        {section.p?.map((p, idx) => (
          <Paragraph key={idx} p={p} />
        ))}
      </Box>
    </>
  );
}

export default SectionCore;
