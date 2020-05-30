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

export const logIn = () => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: true,
  });
};

export const logIn = () => (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: false,
  });
};
