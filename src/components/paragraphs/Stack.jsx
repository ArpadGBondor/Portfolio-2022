import React from 'react';
import { Box, useTheme } from '@mui/material';

export default function Stack({ p }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingY: { xs: '1rem', md: '1.5rem', lg: '3rem' },
        alignItems: 'stretch',
      }}
    >
      {p.badges.map((badge, idx) => (
        <Box
          key={idx}
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'stretch',
            zIndex: `${100 - idx}`,
            marginY: {
              xs: '-0.5rem',
              sm: '-0.4rem',
              md: '-0.75rem',
              lg: '-1.5rem',
            },
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer',
            // --- TRIGGER GLOW ON HOVER ---
            '&:hover .geometric-shape': {
              filter: `drop-shadow(0 0 15px ${theme.palette.primary.light})`,
              transform: 'rotate(45deg) skew(-20deg, -20deg) scale(1.2)',
            },
            '&:hover .badge-img': {
              boxShadow: `0 0 20px ${theme.palette.primary.light}`,
              transform: 'scale(1.2)',
              borderColor: theme.palette.primary.light,
            },
          }}
        >
          <Box
            sx={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingX: '1rem',
            }}
          >
            <Box
              className="geometric-shape"
              sx={{
                width: { xs: '3rem', md: '4rem', lg: '6rem' },
                height: { xs: '3rem', md: '4rem', lg: '6rem' },
                backgroundColor: theme.palette.primary.light,
                transform: 'rotate(45deg) skew(-20deg, -20deg)',
                borderBottom: {
                  xs: `0.5rem solid ${theme.palette.primary.dark}`,
                  md: `1rem solid ${theme.palette.primary.dark}`,
                },
                borderTop: `2px solid ${theme.palette.primary.main}`,
                borderLeft: `2px solid ${theme.palette.primary.main}`,
                borderRight: {
                  xs: `0.5rem solid ${theme.palette.primary.dark}`,
                  md: `1rem solid ${theme.palette.primary.dark}`,
                },
                borderRadius: { xs: '0.5rem', md: '1rem' },
                flexShrink: 0,
                transition: 'all 0.3s ease-in-out',
              }}
            />
          </Box>
          <Box
            sx={{
              flex: '1',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              paddingX: '1rem',
            }}
          >
            <Box
              className="badge-img"
              component="img"
              src={badge.url}
              alt={badge.alt}
              sx={{
                height: { xs: '1.5rem', sm: '1.75rem', lg: '2rem' },
                width: 'auto',
                borderRadius: { xs: '0.75rem', md: '1rem' },
                border: `2px solid ${theme.palette.primary.main}`,
                boxShadow: theme.shadows[2],
                transition: 'all 0.3s ease-in-out',
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
