import { call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../actions/userActions";
import {
  getUsersSuccess,
  createUserSuccess,
  deleteUserSuccess,
  updateUserSuccess,
} from "../actions/userActions";
import { getUsers, createUser, deleteUser, updateUser } from "./userApi";
import User from "../models/user";

function* getUsersSaga() {
  try {
    const users: User[] = yield call(getUsers);
    yield put(getUsersSuccess(users)); // dispatches users to the reducer
  } catch (error) {
    console.log(error);
  }
}

function* createUserSaga(action: any) {
  try {
    const user: User = yield call(createUser, action.payload);
    yield put(createUserSuccess(user));
  } catch (error) {
    console.log(error);
  }
}

function* deleteUserSaga(action: any) {
  try {
    yield call(deleteUser, action.payload);
    yield put(deleteUserSuccess(action.payload));
  } catch (error) {
    console.log(error);
  }
}

function* updateUserSaga(action: any) {
  try {
    const user: User = yield call(updateUser, action.payload);
    yield put(updateUserSuccess(user));
  } catch (error) {
    console.log(error);
  }
}

export function* userSagas() {
  yield takeLatest(ActionTypes.GET_USERS, getUsersSaga);
  yield takeLatest(ActionTypes.CREATE_USER, createUserSaga);
  yield takeLatest(ActionTypes.DELETE_USER, deleteUserSaga);
  yield takeLatest(ActionTypes.UPDATE_USER, updateUserSaga);
}
