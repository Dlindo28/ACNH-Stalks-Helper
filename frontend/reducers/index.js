import { combineReducers } from "redux";
import datetimeReducer from "./datetimeReducer";
import dataSufficiencyReducer from "./dataSufficiencyReducer";
import yieldReducer from "./yieldReducer";
import priceInputReducer from "./priceInputReducer";

export default combineReducers({
  datetime: datetimeReducer,
  dataSufficiency: dataSufficiencyReducer,
  yield: yieldReducer,
  priceInput: priceInputReducer,
});
