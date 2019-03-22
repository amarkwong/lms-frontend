import {Types} from '../actions/courses';

const INITIAL_STATE = {
    items: []
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
        default: {
            return state;
        }
    }
}