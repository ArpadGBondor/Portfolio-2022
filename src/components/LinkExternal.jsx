import React from 'react';
import { Link } from '@mui/material';

function LinkExternal({ href, children, sx = {}, ...props }) {
  return (
    <Link
      href={href}
      underline="none"
      target="_blank"
      rel="noreferrer"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'transform 0.2s ease',
        transformOrigin: 'center',
        '&:hover': {
          transform: 'scale(1.4)',
        },
        ...sx, // allow overrides/extensions
      }}
      {...props}
    >
      {children}
    </Link>
  );
}

export default LinkExternal;
