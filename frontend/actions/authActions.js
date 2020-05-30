import { LOGIN, LOGOUT } from "./types";

/*

Might need this later:

export const logIn = (payload) => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload
  });
};
*/

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
