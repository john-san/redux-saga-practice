import User from "../models/user";
import { ActionTypes } from "../actions/userActions";

export interface UserState {
  users: User[];
  currentUser: User | null;
  initialFetch: boolean; // to check if the initial fetch has been done
}

const initialState: UserState = {
  users: [],
  currentUser: null,
  initialFetch: false,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_USER_BY_ID:
      return {
        ...state,
        currentUser: state.users.find(
          (user: User) => user.id === action.payload
        ),
      };
    case ActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        initialFetch: true,
      };
    case ActionTypes.CREATE_USER_SUCCESS:
      console.log(action.payload);
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
        currentUser: null,
      };
    case ActionTypes.UPDATE_USER_CANCEL:
      return {
        ...state,
        currentUser: null,
      };

    case ActionTypes.GET_USERS_FAILURE:
    case ActionTypes.CREATE_USER_FAILURE:
    case ActionTypes.DELETE_USER_FAILURE:
    case ActionTypes.UPDATE_USER_FAILURE:
      console.error(action.payload);
      return state;

    default:
      return state;
  }
};
