/**
 * @file Builds reducer for yield state
 * @author Daniel Lindo
 */
import {
  SET_YIELD,
  CLEAR_YIELD,
  SET_CURPRICE,
  SET_PRICES_MISSING,
  SET_PROJECTED_PEAK,
} from "../actions/types";

const initState = {
  yield: 0,
  curPrice: 0,
  projectedPeak: "None",
};

/**
 * Redux reducer for yield
 * @function priceReducer
 * @param {Object.<string, number>} state - previous state
 * @param {Object.<string, number>} action - dispatched action return
 * @returns {Object.<string, number>} - new state
 */
const priceReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_YIELD:
      return {
        ...state,
        yield: action.payload,
      };
    case CLEAR_YIELD:
      return {
        ...state,
        yield: 0,
      };
    case SET_CURPRICE:
      return {
        ...state,
        curPrice: action.payload,
      };
    case SET_PRICES_MISSING:
      return {
        ...state,
        pricesMissing: action.payload,
      };
    case SET_PROJECTED_PEAK:
      return {
        ...state,
        projectedPeak: action.payload,
      };
    default:
      return state;
  }
};

export default priceReducer;
