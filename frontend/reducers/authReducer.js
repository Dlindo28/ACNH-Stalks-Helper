import { LOGIN, LOGOUT } from "../actions/types";

const initState = {
  loggedIn: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
