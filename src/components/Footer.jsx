import React from 'react';
import { Container, Typography } from '@mui/material';

function Footer() {
    return (
        <>
            <Container sx={{ height: '1rem' }} />
            <Container
                sx={{
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <Typography>Copyright © 2022-2023 Árpád Gábor Bondor</Typography>
            </Container>
        </>
    );
}

export default Footer;
