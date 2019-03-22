import CourseSagas from './courses';
import {all} from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        ...CourseSagas
    ])
}