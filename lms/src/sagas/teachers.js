import {takeEvery, takeLatest, take, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/teachers';
import * as api from '../api/teachers';

function* getTeachers(){
	try {
        console.log('SAGA',' teacher fired')
        const result = yield call(api.fetchLecturers);
        console.log('SAGA', result)
		yield put(actions.getTeachersSuccess({
			items: result
        }));

	}catch(e){
        yield put(actions.teachersError({
            error: 'An error occurred when trying to get the teachers'
        }));
	}
}

function* watchGetTeachersRequest(){
	yield takeEvery(actions.Types.GET_TEACHERS_REQUEST, getTeachers);
}

// function* deleteTeacher(teacherId){
//     try{
//         yield call(api.deleteTeacher, teacherId);

//         yield call(getTeachers);
//     }catch(e){
//         yield put(actions.teachersError({
//             error: 'An error occurred when trying to delete the teacher'
//         }));
// 	}
// }

// function* watchDeleteTeacherRequest(){
//     while(true){
//         const {payload} = yield take(actions.Types.DELETE_TEACHER_REQUEST);
//         yield call(deleteTeacher, payload.teacherId);
//     }
// }

function* createTeacher({payload}){
    try{
        const returnvalue = yield call(api.createLecturer, {
            Name: payload.name,
            Description: payload.description,
            Price: payload.price,
            MaxStudents: payload.maxStudents,
            AvailableSeats: payload.availableSeats,
            ImageRef: payload.imageRef,
        });

        yield call(getTeachers);

    }catch(e){
        yield put(actions.teachersError({
            error: 'An error occurred when trying to create the teacher'
        }));
    }
}

function* watchCreateTeacherRequest(){
    yield takeLatest(actions.Types.CREATE_TEACHER_REQUEST, createTeacher);
}

const teacherSagas = [
	fork(watchGetTeachersRequest),
	// fork(watchDeleteTeacherRequest),
	fork(watchCreateTeacherRequest)
];

export default teacherSagas;