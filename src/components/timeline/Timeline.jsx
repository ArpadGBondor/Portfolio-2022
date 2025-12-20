import TimelineWrapper from './TimelineWrapper';
import { Box, Container } from '@mui/material';
import { useThemeContext } from '../../context/theme/themeContext';
import bootstrapColors from '../../constants/colors';
import TimelineCore from './TimelineCore';

function Timeline({ content, hero }) {
  const { theme } = useThemeContext();
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        background: `url(${hero.img_url}) center/cover fixed no-repeat, #7777`,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          backgroundColor: theme === 'light' ? '#D9D9D9DD' : '#212121DD',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        }}
      ></Box>
      <Container
        sx={{
          position: 'relative',
          paddingTop: { xs: '1', md: '12rem' },
          paddingBottom: '1rem',
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
            left: 'calc(50% - 0.125rem)',
            top: '0',
          }}
        />
        {content.map((section, sectionIndex) => (
          <TimelineWrapper
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
