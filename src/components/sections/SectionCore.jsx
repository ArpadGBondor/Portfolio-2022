import React from 'react';
import { Box, Typography } from '@mui/material';
import Paragraph from '../paragraphs/Paragraph';
import SectionHeading from './SectionHeading';

function SectionCore({ section, alignImage = 'right' }) {
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
            <Typography variant="body1" sx={{ mt: 0.5 }}>
              {section.small}
            </Typography>
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
