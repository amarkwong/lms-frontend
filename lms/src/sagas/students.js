import {takeEvery, takeLatest, take, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/students';
import * as api from '../api/students';

function* getStudents(){
	try {
        const result = yield call(api.fetchStudents);
		yield put(actions.getStudentsSuccess({
			items: result.data 
        }));
	}catch(e){
        yield put(actions.studentsError({
            error: 'An error occurred when trying to get the students'
        }));
	}
}

function* watchGetStudentsRequest(){
	yield takeEvery(actions.Types.GET_STUDENTS_REQUEST, getStudents);
}

// function* deleteStudent(studentId){
//     try{
//         yield call(api.deleteStudent, studentId);

//         yield call(getStudents);
//     }catch(e){
//         yield put(actions.studentsError({
//             error: 'An error occurred when trying to delete the student'
//         }));
// 	}
// }

// function* watchDeleteStudentRequest(){
//     while(true){
//         const {payload} = yield take(actions.Types.DELETE_STUDENT_REQUEST);
//         yield call(deleteStudent, payload.studentId);
//     }
// }

function* createStudent({payload}){
    try{
        const returnvalue = yield call(api.createStudent, {
            Name: payload.name,
            Description: payload.description,
            Price: payload.price,
            MaxStudents: payload.maxStudents,
            AvailableSeats: payload.availableSeats,
            ImageRef: payload.imageRef,
        });

        yield call(getStudents);

    }catch(e){
        yield put(actions.studentsError({
            error: 'An error occurred when trying to create the student'
        }));
    }
}

function* watchCreateStudentRequest(){
    yield takeLatest(actions.Types.CREATE_STUDENT_REQUEST, createStudent);
}

const studentSagas = [
	fork(watchGetStudentsRequest),
	// fork(watchDeleteStudentRequest),
	fork(watchCreateStudentRequest)
];

export default studentSagas;