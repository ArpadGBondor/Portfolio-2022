import { createContext, useContext } from 'react';

const ContactsContext = createContext();

function useContactsContext() {
    const context = useContext(ContactsContext);
    if (context === undefined) {
        throw new Error('useContactsContext must be used within ContactsState');
    }
    return context;
}

export { ContactsContext, useContactsContext };
