import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import PagesState from './context/pages/PagesState';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <PagesState>
                <App />
            </PagesState>
        </BrowserRouter>
    </React.StrictMode>
);
