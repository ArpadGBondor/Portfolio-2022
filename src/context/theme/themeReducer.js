import { SET_THEME } from '../types';

const pagesReducer = (state, action) => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        default:
            return state;
    }
};

export default pagesReducer;
