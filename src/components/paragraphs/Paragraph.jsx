import React from 'react';
import Typing from './Typing';
import Contacts from './Contacts';
import Message from './Message';
import { Grid2, Typography, Button, useTheme, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../sections/SectionHeading';

function Paragraph({ p }) {
  const navigate = useNavigate();
  const theme = useTheme();

  if (typeof p !== 'object')
    return <Typography>Paragraph not implemented.</Typography>;
  switch (p.type) {
    case 'email':
      return <Message />;
    case 'contacts':
      return <Contacts />;
    case 'typing':
      return <Typing sentences={p.sentences} />;
    case 'text':
      return (
        <Typography
          sx={{
            display: 'block',
            width: '100%',
            textAlign: 'justify',
            marginBottom: '0.5rem',
          }}
          variant="p"
        >
          {p.text}
        </Typography>
      );
    case 'heading':
      return (
        <Box sx={{ marginBottom: '0.5rem' }}>
          <SectionHeading text={p.text} variant="h4" />
        </Box>
      );

    case 'cards-4':
      return (
        <Grid2 container alignItems="stretch" justifyContent="start">
          {p.cards.map((card) => (
            <Grid2
              item
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              justifyContent="center"
              alignItems="center"
              sx={{
                borderColor: theme.palette.primary.main,
                borderWidth: '1px 5px 5px 1px',
                borderStyle: 'solid',
                borderRadius: '15px',
                padding: '1rem',
              }}
            >
              <Box
                sx={{
                  borderColor: theme.palette.primary.main,
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderRadius: '15px',
                  padding: '1rem',
                  height: '100%',
                  transition: 'transform 0.2s ease',
                  transformOrigin: 'center',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    zIndex: 10,
                  },
                }}
              >
                {card.p.map((p) => (
                  <Paragraph p={p} />
                ))}
              </Box>
            </Grid2>
          ))}
        </Grid2>
      );
    case 'cards-3':
      return (
        <Grid2 container alignItems="stretch" justifyContent="start">
          {p.cards.map((card) => (
            <Grid2
              item
              size={{ xs: 12, sm: 6, lg: 4 }}
              justifyContent="center"
              alignItems="center"
              sx={{
                padding: '1rem',
              }}
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
                  '&:hover': {
                    transform: 'scale(1.1)',
                    zIndex: 10,
                  },
                }}
              >
                {card.p.map((p) => (
                  <Paragraph p={p} />
                ))}
              </Box>
            </Grid2>
          ))}
        </Grid2>
      );
    case 'cards-2':
      return (
        <Grid2 container alignItems="stretch" justifyContent="start">
          {p.cards.map((card) => (
            <Grid2
              item
              size={{ xs: 12, md: 6 }}
              justifyContent="center"
              alignItems="center"
              sx={{
                padding: '1rem 1rem',
              }}
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
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                  zIndex: 10,
                }}
              >
                {card.p.map((p) => (
                  <Paragraph p={p} />
                ))}
              </Box>
            </Grid2>
          ))}
        </Grid2>
      );
    case 'badges':
      return (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            marginBottom: '0.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            columnGap: '1rem',
            flexWrap: 'wrap',
          }}
          variant="p"
        >
          {p.badges.map((badge, idx) => (
            <span key={idx} class="skills-container">
              <Box
                component="img"
                src={badge.url}
                alt={badge.alt}
                sx={{
                  height: { xs: '1.5rem', md: '2rem' },
                  width: 'auto',
                  borderRadius: { xs: '0.75rem', md: '1rem' },
                }}
              />
            </span>
          ))}
        </Box>
      );
    case 'link':
      if (p.href.includes('http')) {
        return (
          <a
            href={p.href}
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              sx={{ margin: '1rem auto', display: 'block' }}
              variant="contained"
            >
              {p.text}
            </Button>
          </a>
        );
      } else {
        return (
          <Button
            sx={{ margin: '1rem auto', display: 'block' }}
            variant="contained"
            onClick={() => navigate(p.href)}
          >
            {p.text}
          </Button>
        );
      }
    case 'image':
      const style = {
        margin: '1rem',
        border: `0.5rem solid ${theme.palette.primary.main}`,
      };
      if (p.width) style.width = p.width;
      if (p.height) style.height = p.height;
      if (p.maxHeight) style.maxHeight = p.maxHeight;
      if (p.maxWidth) style.maxWidth = p.maxWidth;
      if (p.style === 'circular') style.borderRadius = '50%';
      return <img style={style} src={p.src} alt={p.alt} />;
    default:
      return <Typography variant="p">Paragraph not implemented.</Typography>;
  }
}

export default Paragraph;
