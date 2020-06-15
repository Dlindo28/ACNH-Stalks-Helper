import { SET_PRICE_INPUT, CLEAR_PRICE_INPUT } from "../actions/types";

const initState = {
  Sunday: null,
  MondayAM: null,
  MondayPM: null,
  TuesdayAM: null,
  TuesdayPM: null,
  WednesdayAM: null,
  WednesdayPM: null,
  ThursdayAM: null,
  ThursdayPM: null,
  FridayAM: null,
  FridayPM: null,
  SaturdayAM: null,
  SaturdayPM: null,
};

const priceInputReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PRICE_INPUT:
      const day = action.payload[0];
      return {
        ...state,
        [day]: action.payload[1],
      };
    case CLEAR_PRICE_INPUT:
      return initState;
    default:
      return state;
  }
};

export default priceInputReducer;
