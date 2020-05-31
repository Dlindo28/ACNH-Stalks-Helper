import { SET_DATA_SUFFICIENCY } from "./types";

export const setDataSufficiency = (sufficiency) => {
  return {
    type: SET_DATA_SUFFICIENCY,
    payload: sufficiency,
  };
};
