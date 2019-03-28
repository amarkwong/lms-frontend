import {combineReducers} from 'redux';
import CoursesReducer from './courses';
import UserReducer from './users';

export default combineReducers({
    courses: CoursesReducer,
    user: UserReducer
})
