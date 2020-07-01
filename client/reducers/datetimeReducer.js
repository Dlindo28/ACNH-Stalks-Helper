/**
 * @file Builds reducer for datetime state
 * @author Daniel Lindo
 */
import { SET_DATE } from "../actions/types";

const initState = {
  date: new Date(Date.now()),
};

/**
 * Redux reducer for datetime
 * @function datetimeReducer
 * @param {Object.<string, string>} state - previous state
 * @param {Object.<string, string>} action - dispatched action return
 * @returns {Object.<string, string>} - new state
 */
const datetimeReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: new Date(action.payload),
      };
    default:
      return state;
  }
};

export default datetimeReducer;
