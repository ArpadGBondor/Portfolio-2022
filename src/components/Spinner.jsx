import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

function Spinner() {
    return (
        <Box sx={{ width: '100%', textAlign: 'center', height: '100%' }}>
            <CircularProgress />
            <Typography variant="subtitle1">Loading...</Typography>
        </Box>
    );
}

export default Spinner;
