import { SET_DATA_SUFFICIENCY } from "../actions/types";

const initState = {
  sufficiency: false,
};

const dataSufficiencyReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_DATA_SUFFICIENCY:
      return {
        ...state,
        sufficiency: action.payload,
      };
    default:
      return state;
  }
};

export default dataSufficiencyReducer;
