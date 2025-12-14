import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useThemeContext } from '../context/theme/themeContext';

function CustomToastContainer() {
  const { theme } = useThemeContext();
  return (
    <ToastContainer
      style={{ top: '5rem' }}
      toastStyle={{
        background: theme === 'light' ? 'lightgrey' : 'black',
        color: theme === 'light' ? 'black' : 'lightgrey',
      }}
    />
  );
}

export default CustomToastContainer;
