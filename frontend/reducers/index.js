import { combineReducers } from "redux";
import authReducer from "./authReducer";
import datetimeReducer from "./datetimeReducer";

export default combineReducers({
  auth: authReducer,
  datetime: datetimeReducer,
});
