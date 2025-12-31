import TimelineWrapper from './TimelineWrapper';
import { Box, Container } from '@mui/material';
import { useThemeContext } from '../../context/theme/themeContext';
import bootstrapColors from '../../constants/colors';
import TimelineCore from './TimelineCore';
import ParticlesLayer from '../ParticlesLayer';

function Timeline({ content }) {
  const { theme } = useThemeContext();
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        position: 'relative',
      }}
    >
      {/* Top rounded bar */}
      <Box
        sx={{
          background: bootstrapColors.green,
          borderRadius: '1rem',
          width: '100%',
          height: '2rem',
          position: 'absolute',
          top: '-1rem',
        }}
      />

      <Box
        sx={{
          backgroundColor: theme === 'light' ? '#D9D9D9' : '#212121',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        }}
      ></Box>
      <ParticlesLayer sectionIndex="timeline" />
      <Container
        sx={{
          position: 'relative',
          paddingTop: { xs: '1', md: '18rem' },
          paddingBottom: '2rem',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '0',
            height: '100%',
            border: `${
              theme === 'light'
                ? bootstrapColors.yellow
                : bootstrapColors.orange
            } solid 0.2rem`,
            left: {
              xs: `calc(100% - 1.25rem)`,
              sm: `calc(100% - 1.75rem)`,
              md: 'calc(50% - 0.1rem)',
            },
            top: '0',
          }}
        />
        {content.map((section, sectionIndex) => (
          <TimelineWrapper
            key={sectionIndex}
            sectionIndex={sectionIndex}
            backgroundImg={section.background_img_url}
          >
            <TimelineCore section={section} />
          </TimelineWrapper>
        ))}
      </Container>
    </Box>
  );
}

export default Timeline;
