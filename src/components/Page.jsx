import { useEffect } from 'react';
import Spinner from './Spinner';
import { usePagesContext } from '../context/pages/pagesContext';

import Hero from './Hero';
import Section from './sections/Section';
import Timeline from './timeline/Timeline';
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
    <Box>
      <Hero hero={page.hero} />
      {page.page_type === 'timeline' ? (
        <Timeline content={page.content} hero={page.hero} />
      ) : (
        page.content.map((section, idx) => (
          <Section section={section} key={idx} sectionIndex={idx} />
        ))
      )}
    </Box>
  );
}

export default Page;
