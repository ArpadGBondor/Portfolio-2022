import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function SectionHeading({
  text,
  variant = 'h2',
  justifyContent = 'center',
  sx = {},
}) {
  const theme = useTheme();

  // Split text into words
  const words = text.split(' ');

  return (
    <Typography
      variant={variant}
      sx={{
        display: 'flex',
        justifyContent,
        flexWrap: 'wrap',
        gap: '0.25em',
        ...sx,
      }}
    >
      {words.map((word, index) => {
        const firstChar = word.charAt(0);
        const rest = word.slice(1);
        const isUppercase = /^\p{Lu}$/u.test(firstChar);

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
