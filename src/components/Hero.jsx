import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { useThemeContext } from '../context/theme/themeContext';
import Paragraph from './paragraphs/Paragraph';
import bootstrapColors from '../constants/colors';
import SectionHeading from './sections/SectionHeading';
import SpinningCog from './SpinningCog';
import { useContactsContext } from '../context/contacts/contactsContext';
import LinkExternal from './LinkExternal';
import Icon from './Icon';

function Hero({ hero }) {
  const { theme } = useThemeContext();
  const { name, location, profession, photo, contacts, socials } =
    useContactsContext();

  return (
    <Box
      sx={{
        background: `url(${hero.img_url}) center/cover no-repeat, #7777`,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          backgroundColor: theme === 'light' ? '#D9D9D9DD' : '#212121DD',
          color: theme === 'light' ? 'black' : 'lightgrey',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          inset: '0',
          textAlign: 'center',
          padding: { xs: '6rem 2rem 4rem', md: '8rem 2rem 6rem' },
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: 'stretch',
            alignItems: 'center',
            gap: { xs: '2rem', md: '2rem' },
          }}
        >
          <Box
            sx={{
              flex: 'none',
              marginTop: '5rem',
              borderColor: bootstrapColors.blue,
              borderWidth: '1px 4px 4px 1px',
              borderStyle: 'solid',
              borderRadius: '15px',
              padding: '1rem 1.5rem',
              transition: 'transform 0.2s ease',
              transformOrigin: 'center',
              background: theme === 'light' ? 'lightgrey' : 'black',
              '&:hover': {
                transform: 'scale(1.1)',
                zIndex: 10,
                boxShadow: `3px 3px 10px 5px ${
                  theme === 'light' ? '#0007' : bootstrapColors.blue
                }`,
              },
            }}
          >
            <img
              alt={photo.name}
              loading="lazy"
              src={photo.address}
              style={{
                border: `0.5rem solid ${bootstrapColors.blue}`,
                width: '10rem',
                height: '10rem',
                marginTop: '-6rem',
                borderRadius: '50%',
              }}
            />
            <SectionHeading text={name.name} variant="h3" />
            <Typography
              sx={{
                display: 'block',
                width: '100%',
                marginTop: '0.5rem',
                marginBottom: '1rem',
              }}
              variant="p"
            >
              <span style={{ fontWeight: '700' }}>{profession.name}</span>
              {' · '}
              <span>{location.name}</span>
            </Typography>
            <hr />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                fontSize: '1.5rem',
                margin: '1rem 0 0.5rem',
              }}
            >
              {socials.map((contact, index) => (
                <span key={index}>
                  <LinkExternal href={contact.link}>
                    <Icon fontAwsomeCode={contact.icon} />
                  </LinkExternal>
                </span>
              ))}
            </Box>
            <Box justifyContent="center" alignItems="center">
              {contacts
                .filter((c) => c.link)
                .map((contact, index) => (
                  <span key={index}>
                    <LinkExternal href={contact.link}>
                      <Icon fontAwsomeCode={contact.icon} /> {contact.address}
                    </LinkExternal>
                  </span>
                ))}
            </Box>
          </Box>
          <Box
            sx={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box>
              <SpinningCog
                size="4em"
                sx={{ marginX: '-3px', color: bootstrapColors.blue }}
              />
              <SpinningCog
                size="4em"
                sx={{ marginX: '-3px', color: bootstrapColors.green }}
                reverse
              />
              <SpinningCog
                size="4em"
                sx={{
                  marginX: '-3px',
                  color:
                    theme === 'light'
                      ? bootstrapColors.black
                      : bootstrapColors.white,
                }}
              />
              <SpinningCog
                size="4em"
                sx={{
                  marginX: '-3px',
                  color: bootstrapColors.red,
                }}
                reverse
              />
              <SpinningCog
                size="4em"
                sx={{
                  marginX: '-3px',
                  color:
                    theme === 'light'
                      ? bootstrapColors.orange
                      : bootstrapColors.yellow,
                }}
              />
            </Box>
            <SectionHeading text={hero.h1} variant="h1" />
            {hero.small && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: '1rem',
                }}
              >
                <hr
                  style={{
                    height: '0',
                    width: '2rem',
                    borderColor: bootstrapColors.blue,
                  }}
                />
                <Typography
                  sx={{ marginX: '1rem', background: 'inherit' }}
                  variant="body1"
                >
                  {hero.small}
                </Typography>
                <hr
                  style={{
                    height: '0',
                    width: '2rem',
                    borderColor: bootstrapColors.blue,
                  }}
                />
              </Box>
            )}
            {hero.p.map((p, idx) => (
              <Paragraph key={idx} p={p} />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Hero;
