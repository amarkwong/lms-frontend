import {combineReducers} from 'redux';
import CoursesReducer from './courses';
import UserReducer from './users';
import TeachersReducer from './teachers';

export default combineReducers({
    courses: CoursesReducer,
    user: UserReducer,
    teachers: TeachersReducer,
})
