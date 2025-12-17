import React from 'react';
import Typing from './Typing';
import Contacts from './Contacts';
import Message from './Message';
import { Typography, Button, useTheme, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../sections/SectionHeading';
import Cards from './Cards';

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
    case 'cards-2':
      return (
        <Cards
          cards={p.cards}
          gridSize={{ xs: 12, md: 6 }}
          outerSx={{ padding: '1rem' }}
          hoverShadow={`5px 5px 5px 5px ${theme.palette.primary.main}`}
        />
      );
    case 'cards-3':
      return (
        <Cards
          cards={p.cards}
          gridSize={{ xs: 12, sm: 6, lg: 4 }}
          outerSx={{ padding: '1rem' }}
          hoverShadow={`5px 5px 5px 1px ${
            theme.palette.mode === 'light'
              ? '#0007'
              : theme.palette.primary.main
          }`}
        />
      );
    case 'cards-4':
      return (
        <Cards
          cards={p.cards}
          gridSize={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          outerSx={{ padding: '1rem' }}
          innerSx={{ padding: '1rem' }}
          hoverShadow={`5px 5px 5px 5px ${theme.palette.primary.main}`}
        />
      );
    case 'badges':
      return (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            columnGap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '0.5rem',
          }}
          variant="div"
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
                  border: `2px solid ${theme.palette.primary.main}`,
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
