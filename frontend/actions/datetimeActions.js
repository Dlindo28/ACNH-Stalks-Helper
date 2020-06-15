/**
 * @file Actions available for datetime dispatcher
 * @author Daniel Lindo
 */
import { SET_DATE } from "./types";

/**
 * Set date state
 * @function setDate
 * @param {string} date - new date string input
 * @returns {Object.<string, string>}
 */
export const setDate = (date) => {
  return {
    type: SET_DATE,
    payload: date,
  };
};
