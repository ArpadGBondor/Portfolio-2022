import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import PagesState from './context/pages/PagesState';
import ThemeState from './context/theme/ThemeState';
import ContactsState from './context/contacts/ContactsState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeState>
            <ContactsState>
                <PagesState>
                    <App />
                </PagesState>
            </ContactsState>
        </ThemeState>
    </React.StrictMode>
);
