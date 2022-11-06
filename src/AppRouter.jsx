import { useRef, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { toast } from 'react-toastify';
import { Box } from '@mui/material';

import { usePagesContext } from './context/pages/pagesContext';

import Page from './components/Page';

function AppRouter() {
    const location = useLocation();
    const nodeRef = useRef(null);
    const { index, cv, introduction, projects, error, clearError } = usePagesContext();
    useEffect(() => {
        if (error) {
            toast.error(error);
            clearError();
        }
    }, [error, clearError]);

    return (
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={location.key}
                timeout={500}
                classNames="page-load"
                nodeRef={nodeRef}
                addEndListener={(done) => {
                    nodeRef.current.addEventListener('transitionend', done, false);
                }}
            >
                <Box sx={{ width: '100%' }} ref={nodeRef}>
                    <Routes location={location}>
                        <Route path="/" element={<Page page={index} pageId="index" />} />
                        <Route path="/cv" element={<Page page={cv} pageId="cv" />} />
                        <Route path="/introduction" element={<Page page={introduction} pageId="introduction" />} />
                        <Route path="/projects" element={<Page page={projects} pageId="projects" />} />
                    </Routes>
                </Box>
            </CSSTransition>
        </SwitchTransition>
    );
}

export default AppRouter;
