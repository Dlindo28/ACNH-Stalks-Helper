/**
 * @file Actions available for yield dispatcher
 * @author Daniel Lindo
 */
import {
  SET_YIELD,
  CLEAR_YIELD,
  SET_CURPRICE,
  SET_PRICES_MISSING,
  SET_PROJECTED_PEAK,
} from "./types";

/**
 * Set new price yield
 * @function setYield
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
 * @function clearYield
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
 * @function setCurPrice
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
 * @function setPricesMissing
 * @param {*} isMissing - true if missing prices are found
 * @returns {Object.<string, *>}
 */
export const setPricesMissing = (isMissing) => {
  return {
    type: SET_PRICES_MISSING,
    payload: isMissing,
  };
};

/**
 * Sets day projected to be peak price
 * @function setProjectedPeak
 * @param {string} day - tprojected peak day
 * @returns {Object.<string, *>}
 */
export const setProjectedPeak = (day) => {
  return {
    type: SET_PROJECTED_PEAK,
    payload: day,
  };
};
