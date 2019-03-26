import {Types} from '../actions/courses';

const INITIAL_STATE = {
    items: [],
    mode: '',
};

export default function courses(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_COURSES_SUCCESS:{
            return {
                ...state,
                items: action.payload.items
            }
        }
        case Types.COURSES_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        case Types.UPDATE_COURSE_REQUEST: {
            return {
                ...state,
            }
        }
        case Types.DELETE_COURSE_REQUEST: {
            return {
                ...state,
            }
        }
        case Types.SET_MODE: {
            return {
                ...state,
                mode: action.payload
            }
        }
        case Types.GET_MODE: {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
}