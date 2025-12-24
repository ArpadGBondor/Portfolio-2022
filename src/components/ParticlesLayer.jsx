import { useEffect, useState, useMemo } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import bootstrapColors from '../constants/colors';

function ParticlesLayer(sectionIndex) {
  const [init, setInit] = useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      fullScreen: {
        enable: false,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: [
            bootstrapColors.red,
            bootstrapColors.blue,
            bootstrapColors.green,
            theme.palette.mode === 'light'
              ? bootstrapColors.orange
              : bootstrapColors.yellow,
          ],
        },
        links: {
          color:
            theme.palette.mode !== 'light'
              ? bootstrapColors.orange
              : bootstrapColors.yellow,
          distance: 150,
          enable: true,
          opacity: 0.6,
          width: 3,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.75,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      style: {
        height: '100%',
        position: 'absolute',
        width: '100%',
        left: '0',
        top: '0',
        'z-index': '0',
      },
    }),
    [theme.palette.mode]
  );

  if (!isMdUp || !init) return null;

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <Particles
        id={`tsparticles-${sectionIndex}`}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    </Box>
  );
}

export default ParticlesLayer;
