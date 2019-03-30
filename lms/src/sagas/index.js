import CourseSagas from './courses';
import UserSagas from './users';
import StudentSagas from './students';
import TeacherSagas from './teachers';
import {all} from 'redux-saga/effects';
import userSagas from './users';

export default function* rootSaga(){
    yield all(
        [ ...CourseSagas ],
        [...UserSagas],
        // [...StudentSagas],
        // [...TeacherSagas],
        )
}