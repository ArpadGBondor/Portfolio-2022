import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Paragraph from './Paragraph';

function Statistics({ left, stats, statsTitle }) {
  const theme = useTheme();

  return (
    <Grid2
      container
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      sx={{ marginBottom: '2rem' }}
    >
      {/* LEFT SIDE – CONTENT */}
      <Grid2 item size={{ xs: 12, sm: 8, md: 6 }} sx={{ marginX: 'auto' }}>
        <Box
          sx={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          {left?.map((p, i) => (
            <Paragraph key={i} p={p} />
          ))}
        </Box>
      </Grid2>

      {/* RIGHT SIDE – STATISTICS */}
      <Grid2 item size={{ xs: 12, md: 6, lg: 4 }}>
        <Box
          sx={{
            position: 'relative',
            padding: { xs: '1rem', md: '2rem' },
          }}
        >
          {/* Optional title */}
          {statsTitle && (
            <Typography
              variant="h6"
              align="center"
              sx={{
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: theme.palette.text.primary,
              }}
            >
              {statsTitle}
            </Typography>
          )}

          <Grid2
            container
            spacing={0}
            sx={{
              backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#111',
              borderColor: theme.palette.primary.main,
              borderWidth: '1px 4px 4px 1px',
              borderStyle: 'solid',
              borderRadius: '15px',
              boxShadow: theme.shadows[3],
              overflow: 'hidden',
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                zIndex: 10,
                boxShadow: `3px 3px 10px 5px ${
                  theme.palette.mode === 'light'
                    ? '#0007'
                    : theme.palette.primary.main
                }`,
              },
            }}
          >
            {stats.map((stat, idx) => (
              <Grid2
                key={idx}
                item
                size={{ xs: 12, sm: 6, md: 12 }}
                sx={{
                  borderRight:
                    idx % 2 === 0
                      ? `1px solid ${theme.palette.divider}`
                      : 'none',
                  borderBottom:
                    idx < stats.length - 2
                      ? `1px solid ${theme.palette.divider}`
                      : 'none',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'start',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.primary.main,
                  }}
                >
                  {stat.value}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    textAlign: 'left',
                  }}
                >
                  {stat.label}
                </Typography>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Grid2>
    </Grid2>
  );
}

export default Statistics;
