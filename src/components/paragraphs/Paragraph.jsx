import React from 'react';
import Typing from './Typing';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Paragraph({ p }) {
    const navigate = useNavigate();
    if (typeof p !== 'object') return <Typography>Paragraph not implemented.</Typography>;
    switch (p.type) {
        case 'typing':
            return <Typing sentences={p.sentences} />;
        case 'text':
            return (
                <Typography sx={{ width: '100%', textAlign: 'left' }} variant="p">
                    {p.text}
                </Typography>
            );
        case 'link':
            if (p.href.includes('http')) {
                return (
                    <a href={p.href} style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                        <Button sx={{ margin: '1rem' }} variant="contained">
                            {p.text}
                        </Button>
                    </a>
                );
            } else {
                return (
                    <Button sx={{ margin: '1rem' }} variant="contained" onClick={() => navigate(p.href)}>
                        {p.text}
                    </Button>
                );
            }
        case 'image':
            const style = { margin: '1rem' };
            if (p.width) style.width = p.width;
            if (p.height) style.height = p.height;
            if (p.maxHeight) style.maxHeight = p.maxHeight;
            if (p.maxWidth) style.maxWidth = p.maxWidth;
            if (p.style === 'circular') style.borderRadius = '50%';
            return <img style={style} src={p.src} alt={p.alt} />;
        default:
            return <Typography variant="p">Paragraph not implemented.</Typography>;
    }
}

export default Paragraph;
