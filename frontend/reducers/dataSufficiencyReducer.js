/**
 * @file Builds reducer for data sufficiency state
 * @author Daniel Lindo
 */
import { SET_DATA_SUFFICIENCY } from "../actions/types";

const initState = {
  sufficiency: false,
};

/**
 * Redux reducer for data sufficiency
 * @function dataSufficiencyReducer
 * @param {Object.<string, boolean>} state - previous state
 * @param {Object.<string, boolean>} action - dispatched action return
 * @returns {Object.<string, boolean>} - new state
 */
const dataSufficiencyReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_DATA_SUFFICIENCY:
      return {
        ...state,
        sufficiency: action.payload,
      };
    default:
      return state;
  }
};

export default dataSufficiencyReducer;
