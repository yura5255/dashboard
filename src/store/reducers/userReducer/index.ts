import { UserState, UserActions, UserActionTypes } from "./types";

const initialState: UserState = {
  user: {},
  message: null,
  loading: false,
  error: null,
  isAuth: false,
  selectedUser: null,
  allUsers: [],
}

const UserReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.START_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload.decodedToken,
        message: action.payload.message,
      };
    case UserActionTypes.LOGIN_USER_ERROR:
      return { ...state, loading: false, message: action.payload.message };
    case UserActionTypes.SERVER_ERROR:
      return { ...state, loading: false };
    case UserActionTypes.LOGOUT_USER:
      return {
        user: {},
        message: null,
        loading: false,
        error: null,
        isAuth: false,
        selectedUser: null,
        allUsers: [],
      };
    case UserActionTypes.USERS_LIST:
      return {
        ...state, loading: false, message: action.payload.message, allUsers: action.payload.allUser,
      }
    default:
      return state;
  }
};

export default UserReducer