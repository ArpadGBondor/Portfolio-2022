import { useEffect } from 'react';
import Spinner from './Spinner';
import { usePagesContext } from '../context/pages/pagesContext';

import Hero from './Hero';
import Section from './sections/Section';
import { Box } from '@mui/material';

function Page({ page, pageId }) {
  const { loadPage } = usePagesContext();
  useEffect(() => {
    if (!page) {
      loadPage(pageId);
      // Load page content from db
    } // eslint-disable-next-line
  }, []);
  if (!page) return <Spinner />;
  return (
    <Box sx={{ background: '#007bff' }}>
      <Hero hero={page.hero} />

      {page.content.map((section, idx) => (
        <Section section={section} key={idx} />
      ))}
    </Box>
  );
}

export default Page;
