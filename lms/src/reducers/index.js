import {combineReducers} from 'redux';
import CoursesReducer from './courses';

export default combineReducers({
    courses: CoursesReducer
})
