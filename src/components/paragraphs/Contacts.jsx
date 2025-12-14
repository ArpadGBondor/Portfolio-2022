import React from 'react';
import { Grid2 } from '@mui/material';
import { useContactsContext } from '../../context/contacts/contactsContext';
import Icon from '../Icon';
import LinkExternal from '../LinkExternal';
import { Box } from '@mui/material';

const Contacts = () => {
  const { contacts, socials } = useContactsContext();
  return (
    <Grid2
      container
      justifyContent="stretch"
      alignItems="center"
      sx={{ textAlign: 'center' }}
    >
      <Grid2
        item
        size={{ xs: 12, md: 6 }}
        justifyContent="center"
        alignItems="center"
      >
        {contacts.map((contact, index) => (
          <p key={index}>
            {contact.link ? (
              <LinkExternal href={contact.link}>
                <Icon fontAwsomeCode={contact.icon} /> {contact.name}:{' '}
                {contact.address}
              </LinkExternal>
            ) : (
              <>
                <Icon fontAwsomeCode={contact.icon} /> {contact.name}:{' '}
                {contact.address}
              </>
            )}
          </p>
        ))}
      </Grid2>
      <Grid2
        item
        size={{ xs: 12, md: 6 }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ textAlign: 'left' }}>
            {socials.map((contact, index) => (
              <p key={index}>
                <LinkExternal href={contact.link}>
                  <Icon fontAwsomeCode={contact.icon} /> {contact.name}
                </LinkExternal>
              </p>
            ))}
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Contacts;
