import { SET_CONTACTS, LOAD_CONTACTS_FAIL, CLEAR_ERROR } from '../types';

const contactsReducer = (state, action) => {
    switch (action.type) {
        case SET_CONTACTS:
            return {
                ...state,
                contacts: action.payload.contacts,
                socials: action.payload.socials,
            };
        case LOAD_CONTACTS_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export default contactsReducer;
