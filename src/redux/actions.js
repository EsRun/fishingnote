import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER, LOGIN, LOGOUT } from "./types";

export const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER,
  };
};

export const removeSubscriber = () => {
  return {
    type: REMOVE_SUBSCRIBER,
  };
};

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
