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

function* deleteCourse(payload){
    console.log('SAGA delete',payload.id);
    try{
        yield call(api.deleteCourse, payload.id);

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
            Name: payload.name,
            Description: payload.description,
            Price: payload.price,
            MaxStudents: payload.maxStudents,
            AvailableSeats: payload.availableSeats,
            ImageRef: payload.imageRef,
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

function* updateCourse({payload}){
    try{
        yield call(api.updateCourse, payload.id,{
            Name: payload.name,
            Description: payload.description,
            Price: payload.price,
            MaxStudents: payload.maxStudents,
            AvailableSeats: payload.availableSeats,
            ImageRef: payload.imageRef,
        });
        yield call(getCourses);

    }catch(e){
        yield put(actions.coursesError({
            error: 'An error occurred when trying to update the course'
        }));
    }
}

function* watchUpdateCourseRequest(){
    yield takeLatest(actions.Types.UPDATE_COURSE_REQUEST, updateCourse);
}

function* setMode(mode){

}

const courseSagas = [
	fork(watchGetCoursesRequest),
	fork(watchDeleteCourseRequest),
	fork(watchCreateCourseRequest),
	fork(watchUpdateCourseRequest)
];

export default courseSagas;