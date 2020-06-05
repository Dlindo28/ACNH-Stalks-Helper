import { SET_DATE } from "../actions/types";

let date = new Date();

const initState = {
  date,
};

const datetimeReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: new Date(action.payload),
      };
    default:
      return state;
  }
};

export default datetimeReducer;
