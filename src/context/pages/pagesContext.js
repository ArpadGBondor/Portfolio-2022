import { createContext, useContext } from 'react';

const PagesContext = createContext();

function usePagesContext() {
    const context = useContext(PagesContext);
    if (context === undefined) {
        throw new Error('usePagesContext must be used within PagesState');
    }
    return context;
}

export { PagesContext, usePagesContext };
