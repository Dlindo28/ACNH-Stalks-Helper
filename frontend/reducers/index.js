import { combineReducers } from "redux";
import datetimeReducer from "./datetimeReducer";
import dataSufficiencyReducer from "./dataSufficiencyReducer";

export default combineReducers({
  datetime: datetimeReducer,
  dataSufficiency: dataSufficiencyReducer,
});
