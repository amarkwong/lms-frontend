// import { takeEvery, call, fork, put } from 'redux-saga';
// import * as actions from '../actions/courses';
// import * as api from '../aip/courses';

// function* getCourses(){
//     try{
//         const result = yield call(api.getCourses);
//     }catch(e){

//     }
// }

// function* watchGetCoursesRequest(){
//     yield takeEvery(actions.Types.GET_COURSES_REQUEST, getCourses);
// }

// const coursesSagas = [
//     fork (watch)
// ]

import {takeEvery, takeLatest, take, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/courses';
import * as api from '../api/courses';

function* getCourses(){
	try {
        const result = yield call(api.getCourses);
		yield put(actions.getCoursesSuccess({
			items: result.data 
		}));
	}catch(e){
        yield put(actions.coursesError({
            error: 'An error occurred when trying to get the courses'
        }));
	}
}

function* watchGetCoursesRequest(){
	yield takeEvery(actions.Types.GET_COURSES_REQUEST, getCourses);
}

function* deleteCourse(courseId){
    try{
        yield call(api.deleteCourse, courseId);

        yield call(getCourses);
    }catch(e){
        yield put(actions.coursesError({
            error: 'An error occurred when trying to delete the course'
        }));
	}
}

function* watchDeleteCourseRequest(){
    while(true){
        const {payload} = yield take(actions.Types.DELETE_COURSE_REQUEST);
        yield call(deleteCourse, payload.courseId);
    }
}

function* createCourse({payload}){
    try{
        yield call(api.createCourse, {
            firstName: payload.firstName,
            lastName: payload.lastName
        });

        yield call(getCourses);

    }catch(e){
        yield put(actions.coursesError({
            error: 'An error occurred when trying to create the course'
        }));
    }
}

function* watchCreateCourseRequest(){
    yield takeLatest(actions.Types.CREATE_COURSE_REQUEST, createCourse);
}

const courseSagas = [
	fork(watchGetCoursesRequest),
	fork(watchDeleteCourseRequest),
	fork(watchCreateCourseRequest)
];

export default courseSagas;