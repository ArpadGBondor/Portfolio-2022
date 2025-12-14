import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useContactsContext } from '../context/contacts/contactsContext';
import Icon from './Icon';
import { Link } from '@mui/material';

function Footer() {
  const { contacts, socials } = useContactsContext();
  return (
    <>
      <Container sx={{ height: { xs: '14rem', sm: '11rem', md: '5rem' } }} />
      <Container
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
          position: 'absolute',
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
            fontSize: '2rem',
          }}
        >
          {socials.map((contact, index) => (
            <span key={index}>
              <Link
                href={contact.link}
                underline="none"
                target="_blank"
                rel="noreferrer"
              >
                <Icon fontAwsomeCode={contact.icon} />
              </Link>
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
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1rem',
              gap: { xs: '0', sm: '2rem' },
            }}
          >
            {contacts.map((contact, index) => (
              <span key={index}>
                {contact.link ? (
                  <Link
                    href={contact.link}
                    underline="none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon fontAwsomeCode={contact.icon} /> {contact.address}
                  </Link>
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
    </>
  );
}

export default Footer;
