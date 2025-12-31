import { Box } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useContactsContext } from './context/contacts/contactsContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import CustomToastContainer from './components/CustomToastContainer';
import AppRouter from './AppRouter';
import AppTheme from './AppTheme';
import { useThemeContext } from './context/theme/themeContext';

function App() {
  const { contacts, socials, loadContacts } = useContactsContext();
  const { theme } = useThemeContext();

  useEffect(() => {
    if (!contacts || !socials) {
      loadContacts();
      // Load contacts from db
    }
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <AppTheme>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'stretch',
            alignItems: 'center',
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
            margin: '0',
            background: theme === 'light' ? 'lightgrey' : 'black',
          }}
        >
          {!contacts || !socials ? (
            <Box
              sx={{
                flex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Spinner />
            </Box>
          ) : (
            <>
              <AppRouter />
              <Footer />
              <CustomToastContainer />
              {/* Place Navbar to the end, so it stays in front of the content  */}
              <Navbar />
            </>
          )}
        </Box>
      </AppTheme>
    </BrowserRouter>
  );
}

export default App;
