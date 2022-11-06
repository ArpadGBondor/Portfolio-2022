import { useEffect } from 'react';
import Spinner from './Spinner';
import { Box } from '@mui/material';
import { usePagesContext } from '../context/pages/pagesContext';

import Hero from './Hero';

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
        <>
            <Hero hero={page.hero} />
            <Box sx={{ textAlign: 'center', margin: '3rem 0' }}>
                <h1>{pageId}</h1>
                <p>Work in progress...</p>
            </Box>
        </>
    );
}

export default Page;
