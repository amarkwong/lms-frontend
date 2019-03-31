import { takeEvery, takeLatest, take, call, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/auth';

function* getCurrentUser() {
    try {
        const result = yield call(api.getCurrentUser);
        yield put(actions.getCurrentUserSuccess({
            user: result.data
        }));
    } catch (e) {
        yield put(actions.usersError({
            error: 'An error occurred when trying to get the current user'
        }));
    }
}

function* watchGetCurrentUserRequest() {
    yield takeLatest(actions.Types.GET_USERS_REQUEST, getCurrentUser);
}

function* logIn() {
    try {
        yield call(api.logIn);
        const result = yield call(api.getCurrentUser);
        yield put(actions.getCurrentUserSuccess({
            user: result.data
        }));
    } catch (e) {
        yield put(actions.usersError({
            error: 'An error occurred when trying to login'
        }));
    }
}

function* watchLogInRequest() {
    yield takeLatest(actions.Types.LOGIN_REQUEST, logIn);
}
// function* deleteUser(userId) {
//     try {
//         yield call(api.deleteUser, userId);

//         yield call(getCurrentUser);
//     } catch (e) {
//         yield put(actions.usersError({
//             error: 'An error occurred when trying to delete the user'
//         }));
//     }
// }

// function* watchDeleteUserRequest() {
//     while (true) {
//         const { payload } = yield take(actions.Types.DELETE_USER_REQUEST);
//         yield call(deleteUser, payload.userId);
//     }
// }

// function* createUser({ payload }) {
//     try {
//         console.log('SIGNUP fired');
//         yield call(api.signUp, 
//             payload.email,
//             payload.password
//         );
//         yield call(getCurrentUser);

//     } catch (e) {
//         yield put(actions.usersError({
//             error: 'An error occurred when trying to create the user'
//         }));
//     }
// }
// function* watchCreateUserRequest() {
//     yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
// }

function* signUp({ payload }) {
    try {
        console.log('SIGNUP fired');
        yield call(api.signUp, 
            payload.email,
            payload.password
        );
        yield call(getCurrentUser);

    } catch (e) {
        yield put(actions.usersError({
            error: 'An error occurred when trying to create the user'
        }));
    }
}
function* watchSignupRequest() {
    yield takeLatest(actions.Types.SIGNUP_REQUEST, signUp);
}



function* updateCurrentUser({ payload }) {
    try {
        yield call(api.signUp, {
            Name: payload.email,
            Password: payload.password,
            Role: payload.role,
        });

        yield call(getCurrentUser);

    } catch (e) {
        yield put(actions.usersError({
            error: 'An error occurred when trying to create the user'
        }));
    }
}
function* watchUpdateCurrentUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, updateCurrentUser);
}

const userSagas = [
    fork(watchGetCurrentUserRequest),
    fork(watchUpdateCurrentUserRequest),
    // fork(watchDeleteUserRequest),
    fork(watchSignupRequest),
    fork(watchLogInRequest),
];

export default userSagas;