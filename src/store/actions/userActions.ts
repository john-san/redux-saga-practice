import User from "../models/user";
// enum is best because because it is type safe and also it is easy to read
export enum ActionTypes {
  GET_USERS = "GET_USERS",
  GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
  CREATE_USER = "CREATE_USER",
  CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
  DELETE_USER = "DELETE_USER",
  DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
  UPDATE_USER = "UPDATE_USER",
  UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
}

/* Action Creators */
export const getUsers = () => ({
  type: ActionTypes.GET_USERS,
});

export const getUsersSuccess = (users: User[]) => ({
  type: ActionTypes.GET_USERS_SUCCESS,
  payload: users,
});

export const createUser = (user: User) => ({
  type: ActionTypes.CREATE_USER,
  payload: user,
});

export const createUserSuccess = (user: User) => ({
  type: ActionTypes.CREATE_USER_SUCCESS,
  payload: user,
});

export const deleteUser = (id: number) => ({
  type: ActionTypes.DELETE_USER,
  payload: id,
});

export const deleteUserSuccess = (id: number) => ({
  type: ActionTypes.DELETE_USER_SUCCESS,
  payload: id,
});

export const updateUser = (user: User) => ({
  type: ActionTypes.UPDATE_USER,
  payload: user,
});

export const updateUserSuccess = (user: User) => ({
  type: ActionTypes.UPDATE_USER_SUCCESS,
  payload: user,
});
