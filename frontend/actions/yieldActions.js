/**
 * @file Actions available for yield dispatcher
 * @author Daniel Lindo
 */
import { SET_YIELD, CLEAR_YIELD, SET_CURPRICE } from "./types";

/**
 * Set new price yield
 * @param {string} percent - new yield input
 * @returns {Object.<string, number>}
 */
export const setYield = (percent) => {
  return {
    type: SET_YIELD,
    payload: percent,
  };
};

/**
 * Clear price yield (set to zero)
 * @returns {Object.<string, string>}
 */
export const clearYield = () => {
  return {
    type: CLEAR_YIELD,
    payload: 0,
  };
};

/**
 * Set new current price
 * @param {string} price - last input price
 * @returns {Object.<string, string>}
 */
export const setCurPrice = (price) => {
  return {
    type: SET_CURPRICE,
    payload: price,
  };
};
