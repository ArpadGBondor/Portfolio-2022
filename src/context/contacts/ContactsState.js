import React, { useReducer } from 'react';
import { ContactsContext } from './contactsContext';
import contactsReducer from './contactsReducer';
import { SET_CONTACTS, LOAD_CONTACTS_FAIL, CLEAR_ERROR } from '../types';
import { getContacts } from '../../utils/getFirebaseContent';

const ContactsState = (props) => {
  const initialState = {
    contacts: null,
    socials: null,
    name: null,
    location: null,
    profession: null,
    photo: null,
    error: null,
  };

  const [state, dispatch] = useReducer(contactsReducer, initialState);

  // Actions
  const loadContacts = async () => {
    try {
      const response = await Promise.all([
        getContacts('contact'),
        getContacts('social'),
        getContacts('details-name'),
        getContacts('details-location'),
        getContacts('details-profession'),
        getContacts('details-photo'),
      ]);

      let contacts = response[0].data;
      let socials = response[1].data;

      let name = response[2].data[0];
      let location = response[3].data[0];
      let profession = response[4].data[0];
      let photo = response[5].data[0];

      dispatch({
        type: SET_CONTACTS,
        payload: { contacts, socials, name, location, profession, photo },
      });
    } catch (error) {
      dispatch({
        type: LOAD_CONTACTS_FAIL,
        payload: error?.response?.data || error.message,
      });
    }
  };

  // Clear Errors
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <ContactsContext.Provider
      value={{
        contacts: state.contacts,
        socials: state.socials,
        name: state.name,
        location: state.location,
        profession: state.profession,
        photo: state.photo,
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
