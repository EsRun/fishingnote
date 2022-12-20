import { createReducer } from "@reduxjs/toolkit";
import { addSub, delSub, auth } from "./actions";

const initialState = {
  userState: "",
  isLogged: false,
};
/*
const subscribersReducer = (state = initialState, action) => {
  switch (action.type) {
    case addSub.type:
      return {
        ...state,
        userState: "활성",
      };
    case delSub.type:
      return {
        ...state,
        userState: "비활성",
      };
    case auth.type:
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};
*/
const subscribersReducer = createReducer([], {
  [addSub]: (state, action) => {
    state.push({});
  },
  [delSub]: (state, action) => {},
  [auth]: (state, action) => {},
});
export default subscribersReducer;
