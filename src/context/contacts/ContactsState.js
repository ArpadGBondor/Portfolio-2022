import React, { useReducer } from 'react';
import axios from 'axios';
import { ContactsContext } from './contactsContext';
import contactsReducer from './contactsReducer';
import { SET_CONTACTS, LOAD_CONTACTS_FAIL, CLEAR_ERROR } from '../types';

const ContactsState = (props) => {
    const initialState = {
        contacts: null,
        socials: null,
        error: null,
    };

    const [state, dispatch] = useReducer(contactsReducer, initialState);

    // Actions
    const loadContacts = async () => {
        try {
            const response = await Promise.all([
                axios.get(`/api/contact?type=contact`),
                axios.get(`/api/contact?type=social`),
            ]);

            let contacts = response[0].data;
            let socials = response[1].data;

            dispatch({ type: SET_CONTACTS, payload: { contacts, socials } });
        } catch (error) {
            dispatch({ type: LOAD_CONTACTS_FAIL, payload: error?.response?.data || error.message });
        }
    };

    // Clear Errors
    const clearError = () => dispatch({ type: CLEAR_ERROR });

    return (
        <ContactsContext.Provider
            value={{
                contacts: state.contacts,
                socials: state.socials,
                error: state.error,
                loadContacts,
                clearError,
            }}
        >
            {props.children}
        </ContactsContext.Provider>
    );
};

export default ContactsState;
