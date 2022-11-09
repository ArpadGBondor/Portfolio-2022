import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { useThemeContext } from '../../context/theme/themeContext';
import Paragraph from '../paragraphs/Paragraph';

function Section({ section }) {
    const { theme } = useThemeContext();

    return (
        <section>
            <Box
                sx={{
                    minHeight: '50vh',
                    background: `url(${section.background_img_url}) center/cover fixed no-repeat, #7777`,
                    position: 'relative',
                    marginBottom: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: theme === 'light' ? '#BBDEFBDD' : '#212121DD',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                    }}
                ></Box>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        textAlign: 'center',
                        padding: '1rem',
                        zIndex: '1',
                    }}
                >
                    <Typography sx={{ margin: '1rem' }} variant="h2">
                        {section.h2}
                    </Typography>
                    {section.p.map((p, idx) => (
                        <Paragraph key={idx} p={p} />
                    ))}
                </Container>
            </Box>
        </section>
    );
}

export default Section;
