import React from 'react';
import Typing from './Typing';
import Contacts from './Contacts';
import Message from './Message';
import { Typography, Button, useTheme, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../sections/SectionHeading';
import Cards from './Cards';
import Statistics from './Statistics';
import Icon from '../Icon';

function Paragraph({ p, sectionIndex }) {
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
    case 'statistics':
      return (
        <Statistics
          left={p.statistics.left}
          stats={p.statistics.right}
          statsTitle={p.text}
          sectionIndex={sectionIndex}
        />
      );
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
          <SectionHeading
            text={p.text}
            variant="h4"
            justifyContent={p.style ?? 'start'}
          />
        </Box>
      );
    case 'cards-2':
      return <Cards cards={p.cards} gridSize={{ xs: 12, md: 6 }} />;
    case 'cards-3':
      return <Cards cards={p.cards} gridSize={{ xs: 12, sm: 6, lg: 4 }} />;
    case 'cards-4':
      return (
        <Cards cards={p.cards} gridSize={{ xs: 12, sm: 6, md: 4, lg: 3 }} />
      );
    case 'badges':
      return (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'start',
            alignItems: 'center',
            columnGap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '0.5rem',
          }}
        >
          {p.badges.map((badge, idx) => (
            <span key={idx} className="skills-container">
              <Box
                component="img"
                src={badge.url}
                alt={badge.alt}
                sx={{
                  height: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
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
      const isExternal = /^https?:\/\//.test(p.href);
      if (isExternal) {
        return (
          <Button
            component="a"
            href={p.href}
            target="_blank"
            rel="noreferrer"
            sx={{
              display: 'block',
              mx: 'auto', // horizontal centering
              mt: 2, // top margin
              mb: 2, // bottom margin
              width: 'fit-content', // shrink to fit content
            }}
            variant="contained"
          >
            {p.text}
          </Button>
        );
      } else {
        return (
          <Button
            sx={{
              display: 'block',
              mx: 'auto', // horizontal centering
              mt: 2, // top margin
              mb: 2, // bottom margin
              width: 'fit-content', // shrink to fit content
            }}
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
      return <img style={style} src={p.src} alt={p.alt || ''} loading="lazy" />;
    case 'icon':
      return (
        <Box
          sx={{
            marginBottom: '0.5rem',
            color: theme.palette.primary.main,
            fontSize: '2rem',
          }}
        >
          <Icon fontAwsomeCode={p.src} />
        </Box>
      );
    default:
      return (
        <Typography variant="body1" component="p">
          Paragraph not implemented.
        </Typography>
      );
  }
}

export default Paragraph;
