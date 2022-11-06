import React from 'react';
import { Container, Box } from '@mui/material';

function Hero({ hero }) {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    background: `url(${hero.img_url}) center/cover fixed no-repeat`,
                    position: 'relative',
                }}
            >
                <Box></Box>
            </Box>
        </>
    );
}

export default Hero;
