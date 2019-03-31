import {Types} from '../actions/teachers';

const INITIAL_STATE = {
    items: [],
    mode:''
};

export default function teachers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_TEACHERS_SUCCESS:{
            return {
                ...state,
                items: action.payload.items
            }
        }
        case Types.TEACHERS_ERROR: {
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