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
  if (!page)
    return (
      // Align position of page spinner with position of Routing spinner
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'absolute',
          width: '100%',
          height: '100vh',
          top: '0',
          left: '0',
        }}
      >
        <Box>
          <Spinner />
        </Box>
      </Box>
    );
  return (
    <Box>
      <Hero hero={page.hero} />
      {page.page_type === 'timeline' ? (
        <Timeline content={page.content} />
      ) : (
        page.content.map((section, idx) => (
          <Section section={section} key={idx} sectionIndex={idx} />
        ))
      )}
    </Box>
  );
}

export default Page;
