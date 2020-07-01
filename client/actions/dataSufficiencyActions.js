/**
 * @file Actions available for data sufficiency dispatcher
 * @author Daniel Lindo
 */
import { SET_DATA_SUFFICIENCY } from "./types";

/**
 * Set data sufficiency state
 * @function setDataSufficiency
 * @param {boolean} sufficiency - true if data is sufficient
 * @returns {Object.<string, boolean>}
 */
export const setDataSufficiency = (sufficiency) => {
  return {
    type: SET_DATA_SUFFICIENCY,
    payload: sufficiency,
  };
};
