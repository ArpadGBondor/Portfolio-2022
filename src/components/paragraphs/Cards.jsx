import React from 'react';
import { Box, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Paragraph from './Paragraph';

function Cards({ cards, gridSize, outerSx = {}, innerSx = {}, hoverShadow }) {
  const theme = useTheme();

  return (
    <Grid2
      container
      alignItems="stretch"
      justifyContent="start"
      sx={{ marginBottom: '1rem' }}
    >
      {cards.map((card, idx) => (
        <Grid2
          key={idx}
          item
          size={gridSize}
          justifyContent="center"
          alignItems="center"
          sx={outerSx}
        >
          <Box
            sx={{
              borderColor: theme.palette.primary.main,
              borderWidth: '1px 5px 5px 1px',
              borderStyle: 'solid',
              borderRadius: '15px',
              padding: '1rem 2rem',
              height: '100%',
              transition: 'transform 0.2s ease',
              transformOrigin: 'center',
              background:
                theme.palette.mode === 'light' ? 'lightgrey' : 'black',
              '&:hover': {
                transform: 'scale(1.1)',
                zIndex: 10,
                borderWidth: '1px',
                boxShadow: hoverShadow,
              },
              ...innerSx,
            }}
          >
            {card.p.map((p, i) => (
              <Paragraph key={i} p={p} />
            ))}
          </Box>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Cards;
