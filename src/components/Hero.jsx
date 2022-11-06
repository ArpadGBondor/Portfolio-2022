import React from 'react';
import { Typography, Box } from '@mui/material';
import { useThemeContext } from '../context/theme/themeContext';

function Hero({ hero }) {
    const { theme } = useThemeContext();
    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: `url(${hero.img_url}) center/cover fixed no-repeat, #7777`,
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    backgroundColor: theme === 'light' ? '#BBDEFBDD' : '#212121DD',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Typography variant="h1">{hero.h1}</Typography>
                <Typography variant="subtitle1">{hero.small}</Typography>
            </Box>
        </Box>
    );
}

export default Hero;
