import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./types";

const initialState = {
  UserName: "무늬오징어",
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
    default:
      return state;
  }
};
export default subscribersReducer;
