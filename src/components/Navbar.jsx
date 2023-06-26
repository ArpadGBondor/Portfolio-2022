import React, { useState } from 'react';
import { AppBar, Box, Container, Toolbar, Typography, Button, IconButton, Stack, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useThemeContext } from '../context/theme/themeContext';
import { FaBars, FaMoon, FaSun, FaHome, FaListAlt, /*FaFileAlt,*/ FaUserAlt } from 'react-icons/fa';

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();
    const { theme, selectLightTheme, selectDarkTheme } = useThemeContext();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const buttonList = [];

    buttonList.push({
        text: 'Home',
        onClick: () => navigate('/'),
        icon: FaHome,
    });
    // buttonList.push({
    //     text: 'CV',
    //     onClick: () => navigate('/cv'),
    //     icon: FaFileAlt,
    // });
    buttonList.push({
        text: 'Introduction',
        onClick: () => navigate('/introduction'),
        icon: FaUserAlt,
    });
    buttonList.push({
        text: 'Projects',
        onClick: () => navigate('/projects'),
        icon: FaListAlt,
    });
    if (theme === 'light') {
        buttonList.push({
            text: 'Change theme',
            onClick: selectDarkTheme,
            icon: FaSun,
        });
    } else {
        buttonList.push({
            text: 'Change theme',
            onClick: selectLightTheme,
            icon: FaMoon,
        });
    }

    return (
        <AppBar sx={{ position: 'fixed', top: '0' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        sx={{
                            flexGrow: 1,
                            mr: 2,
                            display: { xs: 'none', lg: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        variant="h5"
                        noWrap
                        href="/"
                    >
                        Gabriel's portfolio
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <FaBars />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                            }}
                        >
                            {buttonList.map((button) => (
                                <MenuItem key={button.text} onClick={button.onClick}>
                                    <Typography textAlign="center">{button.text}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', lg: 'flex' } }}>
                        {buttonList.map((button) => (
                            <Button
                                key={button.text}
                                onClick={button.onClick}
                                startIcon={<button.icon />}
                                color="inherit"
                            >
                                <Typography noWrap textAlign="center">
                                    {button.text}
                                </Typography>
                            </Button>
                        ))}
                    </Stack>

                    <Typography
                        sx={{
                            flexGrow: 1,
                            mr: 2,
                            display: { xs: 'flex', lg: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            textAlign: 'center',
                        }}
                        variant="h6"
                        href="/"
                    >
                        Gabriel's portfolio
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
