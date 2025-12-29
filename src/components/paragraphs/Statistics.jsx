import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Paragraph from './Paragraph';

function Statistics({ left, stats, statsTitle, sectionIndex }) {
  const theme = useTheme();
  const isReversedDesktop = sectionIndex % 2 === 1;

  return (
    <Grid2
      container
      spacing={2}
      alignItems="center"
      justifyContent="stretch"
      sx={{ marginY: '1rem' }}
    >
      {/* LEFT SIDE – CONTENT */}
      <Grid2
        size={{ xs: 12, sm: 10, md: 6, lg: 7 }}
        sx={{
          marginRight: { xs: 'auto', md: isReversedDesktop ? '0' : 'auto' },
          marginLeft: { xs: 'auto', md: isReversedDesktop ? 'auto' : '0' },
          order: {
            xs: 1,
            md: isReversedDesktop ? 2 : 1,
          },
        }}
      >
        <Box
          sx={{
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
      <Grid2
        size={{ xs: 12, md: 5, lg: 4 }}
        sx={{
          order: {
            xs: 2,
            md: isReversedDesktop ? 1 : 2,
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          {/* Optional title */}
          {statsTitle && (
            <Typography
              variant="h3"
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
              background:
                theme.palette.mode === 'light' ? 'lightgrey' : 'black',
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
                size={{ xs: 12, sm: 6, md: 12 }}
                sx={{
                  borderRight:
                    idx % 2 === 0
                      ? {
                          xs: 'none',
                          sm: `1px solid ${theme.palette.primary.main}`,
                          md: 'none',
                        }
                      : 'none',
                  borderBottom:
                    idx < stats.length - 2
                      ? `1px solid ${theme.palette.primary.main}`
                      : idx < stats.length - 1
                      ? {
                          xs: `1px solid ${theme.palette.primary.main}`,
                          sm: 'none',
                          md: `1px solid ${theme.palette.primary.main}`,
                        }
                      : 'none',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'start',
                }}
              >
                <Typography
                  variant="h3"
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
