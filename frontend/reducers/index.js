import { combineReducers } from "redux";
import authReducer from "./authReducer";
import datetimeReducer from "./datetimeReducer";
import dataSufficiencyReducer from "./dataSufficiencyReducer";

export default combineReducers({
  auth: authReducer,
  datetime: datetimeReducer,
  dataSufficiency: dataSufficiencyReducer,
});
