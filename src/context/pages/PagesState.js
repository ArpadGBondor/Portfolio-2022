import React, { useReducer } from 'react';
import axios from 'axios';
import { PagesContext } from './pagesContext';
import pagesReducer from './pagesReducer';
import { SET_INDEX, SET_CV, SET_INTRODUCTION, SET_PROJECTS, LOAD_PAGE_FAIL, CLEAR_ERROR } from '../types';

const PagesState = (props) => {
    const initialState = {
        index: null,
        cv: null,
        projects: null,
        introduction: null,
        error: null,
    };

    const [state, dispatch] = useReducer(pagesReducer, initialState);

    // Actions
    const loadPage = async (pageId) => {
        try {
            let response;
            switch (pageId) {
                case 'index':
                    response = await axios.get(`/api/page?pageId=${pageId}`);
                    dispatch({ type: SET_INDEX, payload: response.data });
                    break;
                // cv is not in database yet
                // case 'cv':
                //     response = await axios.get(`/api/page?pageId=${pageId}`);
                //     dispatch({ type: SET_CV, payload: response.data });
                //     break;
                case 'introduction':
                    response = await axios.get(`/api/page?pageId=${pageId}`);
                    dispatch({ type: SET_INTRODUCTION, payload: response.data });
                    break;
                case 'projects':
                    response = await axios.get(`/api/page?pageId=${pageId}`);
                    dispatch({ type: SET_PROJECTS, payload: response.data });
                    break;
                default:
                    throw new Error(`Loading page: "${pageId}" is not implemented.`);
            }
        } catch (error) {
            dispatch({ type: LOAD_PAGE_FAIL, payload: error?.response?.data || error.message });
        }
    };

    // Clear Errors
    const clearError = () => dispatch({ type: CLEAR_ERROR });

    return (
        <PagesContext.Provider
            value={{
                index: state.index,
                cv: state.cv,
                projects: state.projects,
                introduction: state.introduction,
                error: state.error,
                loadPage,
                clearError,
            }}
        >
            {props.children}
        </PagesContext.Provider>
    );
};

export default PagesState;
