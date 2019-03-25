import {Types} from '../actions/students';

const INITIAL_STATE = {
    items: [],
    mode: null,
};

export default function students(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_STUDENTS_SUCCESS:{
            return {
                ...state,
                items: action.payload.items
            }
        }
        case Types.STUDENTS_ERROR: {
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