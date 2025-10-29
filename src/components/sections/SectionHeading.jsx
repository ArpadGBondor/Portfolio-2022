import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function SectionHeading({ text, variant = 'h2' }) {
  const theme = useTheme();

  // Split text into words
  const words = text.split(' ');

  return (
    <Typography
      variant={variant}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '0.25em',
      }}
    >
      {words.map((word, index) => {
        const firstChar = word.charAt(0);
        const rest = word.slice(1);
        const isUppercase = /^[A-Z]$/.test(firstChar);

        return (
          <Box key={index} component="span">
            {isUppercase ? (
              <>
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  {firstChar}
                </Box>
                {rest}
              </>
            ) : (
              word
            )}
          </Box>
        );
      })}
    </Typography>
  );
}
