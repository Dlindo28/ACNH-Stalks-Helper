import { SET_PRICE_INPUT, CLEAR_PRICE_INPUT } from "./types";

export const setPriceInput = (day, price) => {
  return {
    type: SET_PRICE_INPUT,
    payload: [day, price],
  };
};

export const clearPriceInput = () => {
  return {
    type: CLEAR_PRICE_INPUT,
    payload: null,
  };
};
