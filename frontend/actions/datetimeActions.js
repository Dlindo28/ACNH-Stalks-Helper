import { SET_DATE } from "./types";

export const setDate = (date) => {
  console.log("setting date to: " + date.toString());
  return {
    type: SET_DATE,
    payload: date,
  };
};
