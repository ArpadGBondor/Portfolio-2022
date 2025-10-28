import React from 'react';
import Typing from './Typing';
import Contacts from './Contacts';
import Message from './Message';
import { Typography, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
