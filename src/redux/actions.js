import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER, AUTH } from "./types";
import { createAction } from "@reduxjs/toolkit";

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

export const auth = () => {
  return {
    type: AUTH,
  };
};
