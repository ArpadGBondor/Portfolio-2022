import React from 'react';
import { Link, Grid } from '@mui/material';
import { useContactsContext } from '../../context/contacts/contactsContext';
import Icon from '../Icon';

const Contacts = () => {
    const { contacts, socials } = useContactsContext();
    return (
        <Grid container alignItems="center" sx={{ textAlign: 'center' }}>
            <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
                {contacts.map((contact, index) => (
                    <p key={index}>
                        {contact.link ? (
                            <Link href={contact.link} underline="none" target="_blank" rel="noreferrer">
                                <Icon fontAwsomeCode={contact.icon} /> {contact.name}: {contact.address}
                            </Link>
                        ) : (
                            <>
                                <Icon fontAwsomeCode={contact.icon} /> {contact.name}: {contact.address}
                            </>
                        )}
                    </p>
                ))}
            </Grid>
            <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
                {socials.map((contact, index) => (
                    <p key={index}>
                        <Link href={contact.link} underline="none" target="_blank" rel="noreferrer">
                            <Icon fontAwsomeCode={contact.icon} /> {contact.name}
                        </Link>
                    </p>
                ))}
            </Grid>
        </Grid>
    );
};

export default Contacts;
