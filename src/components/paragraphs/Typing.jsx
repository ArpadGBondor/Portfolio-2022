import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Typography } from '@mui/material';

function Typing({ sentences }) {
    const sequence = [];
    sentences.forEach((s) => {
        sequence.push(s);
        sequence.push(2000);
        sequence.push('');
        sequence.push(1500);
    });
    return (
        <Typography variant="h4">
            <TypeAnimation sequence={sequence} wrapper="span" cursor={true} repeat={Infinity} />
        </Typography>
    );
}

export default Typing;
