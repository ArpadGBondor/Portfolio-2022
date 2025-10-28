import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Typography, useTheme } from '@mui/material';

function Typing({ sentences }) {
  const theme = useTheme();
  const sequence = [];
  sentences.forEach((s) => {
    sequence.push(s);
    sequence.push(2000);
    sequence.push('');
    sequence.push(1500);
  });
  return (
    <Typography sx={{ color: theme.palette.primary.main }} variant="h4">
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
      />
    </Typography>
  );
}

export default Typing;
