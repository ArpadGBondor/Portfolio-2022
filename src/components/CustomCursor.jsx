import { useEffect, useRef, useMemo } from 'react';
import { Box, useTheme } from '@mui/material';
import bootstrapColors from '../constants/colors';

export default function CustomCursor() {
  const theme = useTheme();

  const circles = useMemo(
    () => [
      {
        size: 8,
        color: bootstrapColors.blue,
        speed: 0.09,
      },
      { size: 8, color: bootstrapColors.green, speed: 0.08 },
      {
        size: 8,
        color: theme.palette.mode === 'light' ? '#000' : '#fff',
        speed: 0.07,
      },
      { size: 8, color: bootstrapColors.red, speed: 0.06 },
      {
        size: 8,
        color:
          theme.palette.mode === 'light'
            ? bootstrapColors.orange
            : bootstrapColors.yellow,
        speed: 0.05,
      },
    ],
    [theme.palette.mode]
  );

  const circlesRef = useRef(circles);
  const refs = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const positions = useRef([]);
  const isInside = useRef(true);

  useEffect(() => {
    if (positions.current.length !== circles.length) {
      positions.current = circles.map(() => ({ x: 0, y: 0 }));
    }
    circlesRef.current = circles;
  }, [circles]);

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const enter = () => {
      isInside.current = true;
    };

    const leave = () => {
      isInside.current = false;
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', enter);
    window.addEventListener('mouseout', leave);

    const animate = () => {
      circlesRef.current.forEach((circle, i) => {
        const pos = positions.current[i];
        const target = i === 0 ? mouse.current : positions.current[i - 1];

        pos.x += (target.x - pos.x) * circle.speed;
        pos.y += (target.y - pos.y) * circle.speed;

        if (refs.current[i]) {
          refs.current[i].style.transform = `translate(
          ${pos.x - circle.size / 2}px,
          ${pos.y - circle.size / 2}px
        )`;

          refs.current[i].style.opacity = isInside.current ? '1' : '0';
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', enter);
      window.removeEventListener('mouseout', leave);
    };
  }, []);

  return (
    <>
      {circlesRef.current.map((circle, i) => (
        <Box
          key={i}
          ref={(el) => (refs.current[i] = el)}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: circle.size,
            height: circle.size,
            borderRadius: '50%',
            backgroundColor: circle.color,
            pointerEvents: 'none',
            transition: 'opacity 0.2s ease',
            zIndex: 9999 - i,
          }}
        />
      ))}
    </>
  );
}
