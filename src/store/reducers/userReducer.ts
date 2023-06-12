import User from "../models/user";
import { ActionTypes } from "../actions/userActions";

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case ActionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case ActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case ActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};
