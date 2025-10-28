import React from 'react';
import { Link, Grid2 } from '@mui/material';
import { useContactsContext } from '../../context/contacts/contactsContext';
import Icon from '../Icon';

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
              <Link
                href={contact.link}
                underline="none"
                target="_blank"
                rel="noreferrer"
              >
                <Icon fontAwsomeCode={contact.icon} /> {contact.name}:{' '}
                {contact.address}
              </Link>
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
        {socials.map((contact, index) => (
          <p key={index}>
            <Link
              href={contact.link}
              underline="none"
              target="_blank"
              rel="noreferrer"
            >
              <Icon fontAwsomeCode={contact.icon} /> {contact.name}
            </Link>
          </p>
        ))}
      </Grid2>
    </Grid2>
  );
};

export default Contacts;
