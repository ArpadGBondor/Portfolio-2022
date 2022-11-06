import { SET_INDEX, SET_CV, SET_INTRODUCTION, SET_PROJECTS, LOAD_PAGE_FAIL, CLEAR_ERROR } from '../types';

const pagesReducer = (state, action) => {
    switch (action.type) {
        case SET_INDEX:
            return {
                ...state,
                index: action.payload,
                error: null,
            };
        case SET_CV:
            return {
                ...state,
                cv: action.payload,
                error: null,
            };
        case SET_INTRODUCTION:
            return {
                ...state,
                introduction: action.payload,
                error: null,
            };
        case SET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                error: null,
            };
        case LOAD_PAGE_FAIL:
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

export default pagesReducer;
