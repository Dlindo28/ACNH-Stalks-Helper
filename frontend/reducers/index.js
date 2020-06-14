import { combineReducers } from "redux";
import datetimeReducer from "./datetimeReducer";
import dataSufficiencyReducer from "./dataSufficiencyReducer";
import yieldReducer from "./yieldReducer";

export default combineReducers({
  datetime: datetimeReducer,
  dataSufficiency: dataSufficiencyReducer,
  yield: yieldReducer,
});
