import { LOGIN, LOGOUT } from "./types";

export const logIn = () => {
  return {
    type: LOGIN,
    payload: true,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
    payload: false,
  };
};
