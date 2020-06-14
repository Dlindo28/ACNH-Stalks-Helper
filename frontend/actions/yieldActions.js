import { SET_YIELD, CLEAR_YIELD, SET_CURPRICE } from "./types";

export const setYield = (percent) => {
  return {
    type: SET_YIELD,
    payload: percent,
  };
};

export const clearYield = () => {
  return {
    type: CLEAR_YIELD,
    payload: 0,
  };
};

export const setCurPrice = (price) => {
  return {
    type: SET_CURPRICE,
    payload: price,
  };
};
