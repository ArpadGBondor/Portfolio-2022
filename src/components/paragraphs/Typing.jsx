import React, { useMemo } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Typography } from '@mui/material';

function Typing({ sentences }) {
  const sequence = useMemo(
    () => sentences.flatMap((s) => [s, 2000, '', 1500]),
    [sentences]
  );
  return (
    <Typography
      color="primary.main"
      variant="h4"
      style={{ width: '100%', textAlign: 'center' }}
    >
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
