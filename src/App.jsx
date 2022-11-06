import { Box } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

import PagesState from './context/pages/PagesState';
import ThemeState from './context/theme/ThemeState';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomToastContainer from './components/CustomToastContainer';
import AppRouter from './AppRouter';
import AppTheme from './AppTheme';

function App() {
    return (
        <BrowserRouter>
            <ThemeState>
                <PagesState>
                    <AppTheme>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                minHeight: '100vh',
                                width: '100%',
                                position: 'relative',
                                margin: '0',
                            }}
                        >
                            <AppRouter />
                            <Footer />
                            <CustomToastContainer />
                            {/* Place Navbar to the end, so it stays in front of the content  */}
                            <Navbar />
                        </Box>
                    </AppTheme>
                </PagesState>
            </ThemeState>
        </BrowserRouter>
    );
}

export default App;
