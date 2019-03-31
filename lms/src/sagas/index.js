import CourseSagas from './courses';
import UserSagas from './users';
import StudentSagas from './students';
import TeacherSagas from './teachers';
import { all } from 'redux-saga/effects';
import userSagas from './users';

export default function* rootSaga() {
    console.log('course sagas',...CourseSagas);
    console.log('user sagas',...UserSagas);
    console.log('Teacher sagas',...TeacherSagas);
    yield all(
        // [...CourseSagas, ...UserSagas]
        [...UserSagas,...CourseSagas,...TeacherSagas]
    )
}