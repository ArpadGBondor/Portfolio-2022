import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
  Menu,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useThemeContext } from '../context/theme/themeContext';
import {
  FaBars,
  FaMoon,
  FaSun,
  FaHome,
  FaListAlt,
  FaCode,
  /*FaFileAlt,*/ FaUserAlt,
} from 'react-icons/fa';
import bootstrapColors from '../constants/colors';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const { theme, selectLightTheme, selectDarkTheme } = useThemeContext();
  const isScrolledDown = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        // lg breakpoint in MUI
        setAnchorElNav(null); // force close mobile menu
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    color: bootstrapColors.blue,
  });
  buttonList.push({
    text: 'My Journey',
    onClick: () => navigate('/introduction'),
    icon: FaUserAlt,
    color: bootstrapColors.green,
  });
  buttonList.push({
    text: 'Tech Stack',
    onClick: () => navigate('/skills'),
    icon: FaCode,
    color: theme === 'light' ? bootstrapColors.white : bootstrapColors.black,
  });
  buttonList.push({
    text: 'Projects',
    onClick: () => navigate('/projects'),
    icon: FaListAlt,
    color: bootstrapColors.red,
  });
  if (theme === 'light') {
    buttonList.push({
      text: 'Change theme',
      onClick: selectDarkTheme,
      icon: FaSun,
      color: bootstrapColors.orange,
    });
  } else {
    buttonList.push({
      text: 'Change theme',
      onClick: selectLightTheme,
      icon: FaMoon,
      color: bootstrapColors.yellow,
    });
  }

  return (
    <AppBar
      elevation={isScrolledDown ? 4 : 0}
      sx={{
        position: 'fixed',
        top: '0',
        backgroundColor: isScrolledDown
          ? theme === 'light'
            ? 'lightgrey'
            : 'black'
          : 'transparent',
        color: theme === 'light' ? 'black' : 'lightgrey',
        transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: 'none', lg: 'block' },
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
            <span style={{ color: bootstrapColors.blue }}>G</span>abriel's{' '}
            <span style={{ color: bootstrapColors.blue }}>P</span>ortfolio
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
                  <Typography sx={{ color: button.color }} textAlign="center">
                    {button.text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: 'none', lg: 'flex' } }}
          >
            {buttonList.map((button) => (
              <Button
                key={button.text}
                onClick={button.onClick}
                startIcon={<button.icon style={{ color: button.color }} />}
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
            <div>
              <span style={{ color: bootstrapColors.blue }}>G</span>abriel's{' '}
              <span style={{ color: bootstrapColors.blue }}>P</span>ortfolio
            </div>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
