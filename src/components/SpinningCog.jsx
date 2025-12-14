import React from 'react';
import { Box } from '@mui/material';
import { FaCog } from 'react-icons/fa';

function SpinningCog({ size = '1em', duration = 7, sx = {}, reverse = false }) {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        fontSize: size,
        animation: `${
          reverse ? 'rotateReverse' : 'rotate'
        } ${duration}s ease-in-out infinite`,
        '@keyframes rotate': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '60%': {
            transform: 'rotate(120deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        '@keyframes rotateReverse': {
          '0%': {
            transform: 'rotate(390deg)',
          },
          '50%': {
            transform: 'rotate(210deg)',
          },
          '60%': {
            transform: 'rotate(270deg)',
          },
          '100%': {
            transform: 'rotate(30deg)',
          },
        },
        ...sx,
      }}
    >
      <FaCog />
    </Box>
  );
}

export default SpinningCog;
