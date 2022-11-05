import React from 'react';
import { Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <Container sx={{ display: 'flex', flexDirection: 'row' }}>
            <Button onClick={() => navigate('/')}>Home</Button>
            <Button onClick={() => navigate('/cv')}>CV</Button>
            <Button onClick={() => navigate('/introduction')}>Introduction</Button>
            <Button onClick={() => navigate('/projects')}>Projects</Button>
        </Container>
    );
}

export default Navbar;
