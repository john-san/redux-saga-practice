import User from "../models/user";
// enum is best because because it is type safe and also it is easy to read
export enum ActionTypes {
  GET_USER_BY_ID = "GET_USER_BY_ID",
  GET_USERS = "GET_USERS",
  GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
  GET_USERS_FAILURE = "GET_USERS_FAILURE",
  CREATE_USER = "CREATE_USER",
  CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
  CREATE_USER_FAILURE = "CREATE_USER_FAILURE",
  DELETE_USER = "DELETE_USER",
  DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
  DELETE_USER_FAILURE = "DELETE_USER_FAILURE",
  UPDATE_USER = "UPDATE_USER",
  UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
  UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE",
  UPDATE_USER_CANCEL = "UPDATE_USER_CANCEL",
}

/* Action Creators */
export const getUserById = (id: number) => ({
  type: ActionTypes.GET_USER_BY_ID,
  payload: id,
});

export const getUsers = () => ({
  type: ActionTypes.GET_USERS,
});

export const getUsersSuccess = (users: User[]) => ({
  type: ActionTypes.GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailure = (error: any) => ({
  type: ActionTypes.GET_USERS_FAILURE,
  payload: error,
});

export const createUser = (user: User) => ({
  type: ActionTypes.CREATE_USER,
  payload: user,
});

export const createUserSuccess = (user: User) => ({
  type: ActionTypes.CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserFailure = (error: any) => ({
  type: ActionTypes.CREATE_USER_FAILURE,
  payload: error,
});

export const deleteUser = (id: number) => ({
  type: ActionTypes.DELETE_USER,
  payload: id,
});

export const deleteUserSuccess = (id: number) => ({
  type: ActionTypes.DELETE_USER_SUCCESS,
  payload: id,
});

export const deleteUserFailure = (error: any) => ({
  type: ActionTypes.DELETE_USER_FAILURE,
  payload: error,
});

export const updateUser = (user: User) => ({
  type: ActionTypes.UPDATE_USER,
  payload: user,
});

export const updateUserSuccess = (user: User) => ({
  type: ActionTypes.UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserFailure = (error: any) => ({
  type: ActionTypes.UPDATE_USER_FAILURE,
  payload: error,
});

export const updateUserCancel = () => ({
  type: ActionTypes.UPDATE_USER_CANCEL,
});
