import {Types} from '../actions/users';

const INITIAL_STATE = {
    user: {}
};

export default function users(state = INITIAL_STATE, action) {
    console.log('REDUCER',action.type);
    switch (action.type) {
        case Types.GET_CURRENT_USER_SUCCESS:{
            return {
                ...state,
                user: action.payload
            }
        }
        case Types.SIGNUP_REQUEST:{
            console.log('REDUCER signup');
            return {
                ...state,
                user: action.payload
            }
        }
        case Types.SIGNUP_SUCCESS:{
            return {
                ...state,
                user: action.payload.user
            }
        }
        // case Types.CREATE_USER_REQUEST:{
        //     console.log('REDUCER signup');
        //     return {
        //         ...state,
        //         user: action.payload
        //     }
        // }
        // case Types.CREATE_USER_SUCCESS:{
        //     return {
        //         ...state,
        //         user: action.payload.user
        //     }
        // }
        case Types.USERS_ERROR: {
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