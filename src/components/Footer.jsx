import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import { useContactsContext } from '../context/contacts/contactsContext';
import Icon from './Icon';
import LinkExternal from './LinkExternal';
import bootstrapColors from '../constants/colors';
import { useThemeContext } from '../context/theme/themeContext';

function Footer() {
  const { theme } = useThemeContext();

  const { contacts, socials } = useContactsContext();
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Top rounded bar */}
      <Box
        sx={{
          background: bootstrapColors.blue,
          borderRadius: '1rem',
          width: '100%',
          height: '2rem',
          position: 'absolute',
          top: '-1rem',
        }}
      />

      <Paper
        elevation={4}
        square
        sx={{
          position: 'relative',
          width: '100%',
          zIndex: '1',
          backgroundColor: theme === 'light' ? 'lightgrey' : 'black',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            padding: { xs: '2rem', md: '1rem' },
            width: '100%',
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: '1rem',
            textAlign: 'center',
            color: theme === 'light' ? 'black' : 'lightgrey',
            bottom: '0',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              fontSize: '1.5rem',
            }}
          >
            {socials.map((contact, index) => (
              <span key={index}>
                <LinkExternal href={contact.link}>
                  <Icon fontAwsomeCode={contact.icon} />
                </LinkExternal>
              </span>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column-reverse', sm: 'column' },
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1rem',
              gap: { xs: '1rem', sm: '0' },
            }}
          >
            <Typography>Copyright © 2022-2025 Árpád Gábor Bondor</Typography>
            <Box
              sx={{
                flex: { xs: 'unset', sm: 2 },
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-around',
                alignItems: 'center',
                fontSize: '1rem',
                gap: { xs: '0', sm: '4rem' },
              }}
            >
              {contacts.map((contact, index) => (
                <span key={index}>
                  {contact.link ? (
                    <LinkExternal href={contact.link}>
                      <Icon fontAwsomeCode={contact.icon} /> {contact.address}
                    </LinkExternal>
                  ) : (
                    <>
                      <Icon fontAwsomeCode={contact.icon} /> {contact.address}
                    </>
                  )}
                </span>
              ))}
            </Box>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}

export default Footer;
