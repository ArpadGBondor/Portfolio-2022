import React from 'react';
import { Container, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useThemeContext } from '../context/theme/themeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
    const navigate = useNavigate();
    const { theme, selectLightTheme, selectDarkTheme } = useThemeContext();

    return (
        <Container sx={{ position: 'fixed', top: '0', width: '100%', display: 'flex', flexDirection: 'row' }}>
            <Button onClick={() => navigate('/')} color="secondary">
                Home
            </Button>
            <Button onClick={() => navigate('/cv')} color="secondary">
                CV
            </Button>
            <Button onClick={() => navigate('/introduction')} color="secondary">
                Introduction
            </Button>
            <Button onClick={() => navigate('/projects')} color="secondary">
                Projects
            </Button>
            {theme === 'light' ? (
                <IconButton onClick={selectDarkTheme} color="secondary">
                    <FaSun />
                </IconButton>
            ) : (
                <IconButton onClick={selectLightTheme} color="secondary">
                    <FaMoon />
                </IconButton>
            )}
        </Container>
    );
}

export default Navbar;
