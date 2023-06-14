import { call, put, takeLatest, select } from "redux-saga/effects";
import { ActionTypes } from "../actions/userActions";
import {
  getUsersSuccess,
  createUserSuccess,
  deleteUserSuccess,
  updateUserSuccess,
  getUsersFailure,
  createUserFailure,
  deleteUserFailure,
  updateUserFailure,
} from "../actions/userActions";
import { getUsers, createUser, deleteUser, updateUser } from "./userApi";
import User from "../models/user";

function* getUsersSaga() {
  try {
    console.log("users");
    const users: User[] = yield select((state) => state.users.users);
    // if users is empty, fetch users from the API
    if (users.length == 0) {
      const fetchedUsers: User[] = yield call(getUsers);
      yield put(getUsersSuccess(fetchedUsers)); // dispatches users to the reducer
    }
  } catch (error) {
    yield put(getUsersFailure(error));
  }
}

function* createUserSaga(action: any) {
  try {
    const user: User = yield call(createUser, action.payload);
    yield put(createUserSuccess(user));
  } catch (error) {
    yield put(createUserFailure(error));
  }
}

function* deleteUserSaga(action: any) {
  try {
    yield call(deleteUser, action.payload);
    yield put(deleteUserSuccess(action.payload));
  } catch (error) {
    yield put(deleteUserFailure(error));
  }
}

function* updateUserSaga(action: any) {
  try {
    const user: User = yield call(updateUser, action.payload);
    yield put(updateUserSuccess(user));
  } catch (error) {
    yield put(updateUserFailure(error));
  }
}

export function* userSagas() {
  yield takeLatest(ActionTypes.GET_USERS, getUsersSaga);
  yield takeLatest(ActionTypes.CREATE_USER, createUserSaga);
  yield takeLatest(ActionTypes.DELETE_USER, deleteUserSaga);
  yield takeLatest(ActionTypes.UPDATE_USER, updateUserSaga);
}
