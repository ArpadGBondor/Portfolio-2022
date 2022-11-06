import { useEffect } from 'react';
import Spinner from './Spinner';
import { Box } from '@mui/material';
import { usePagesContext } from '../context/pages/pagesContext';

function Page({ page, pageId }) {
    const { loadPage } = usePagesContext();
    useEffect(() => {
        if (!page) {
            loadPage(pageId);
            // Load page content from db
        }
        // eslint-disable-next-line
    }, []);
    if (!page) return <Spinner />;
    return (
        <Box sx={{ textAlign: 'center' }}>
            <h1>{pageId}</h1>
            <p>Work in progress...</p>
        </Box>
    );
}

export default Page;
