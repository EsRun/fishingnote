import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER, LOGIN, LOGOUT } from "./types";

const initialState = {
  UserName: "무늬오징어",
  isLogged: false,
};

const subscribersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        UserName: "갑오징어",
      };
    case REMOVE_SUBSCRIBER:
      return {
        ...state,
        UserName: "한치",
      };
    case LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};
export default subscribersReducer;
