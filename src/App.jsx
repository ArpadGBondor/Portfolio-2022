import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CV from './pages/CV';
import Introduction from './pages/Introduction';
import Projects from './pages/Projects';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: '100vh',
                }}
            >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cv" element={<CV />} />
                    <Route path="/introduction" element={<Introduction />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
            </Container>
        </BrowserRouter>
    );
}

export default App;
