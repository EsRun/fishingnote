import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER, AUTH } from "./types";

const initialState = {
  UserName: "무늬오징어",
  isLogged: false,
};

const subscribersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        UserName: "추가",
      };
    case REMOVE_SUBSCRIBER:
      return {
        ...state,
        UserName: "삭제",
      };
    case AUTH:
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};
export default subscribersReducer;
