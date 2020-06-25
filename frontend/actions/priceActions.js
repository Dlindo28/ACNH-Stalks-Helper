/**
 * @file Actions available for yield dispatcher
 * @author Daniel Lindo
 */
import {
  SET_YIELD,
  CLEAR_YIELD,
  SET_CURPRICE,
  SET_PRICES_MISSING,
} from "./types";

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
 * @param {number} price - last input price
 * @returns {Object.<string, string>}
 */
export const setCurPrice = (price) => {
  return {
    type: SET_CURPRICE,
    payload: price,
  };
};

/**
 * Sets state of misssing prices, in comparison to curPrice
 * @param {*} isMissing - true if missing prices are found
 * @returns {Object.<string, *>}
 */
export const setPricesMissing = (isMissing) => {
  return {
    type: SET_PRICES_MISSING,
    payload: isMissing,
  };
};
