/**
 * @file Root Reducer - combines all other reducers
 * @author Daniel Lindo
 */
import { combineReducers } from "redux";
import datetimeReducer from "./datetimeReducer";
import dataSufficiencyReducer from "./dataSufficiencyReducer";
import priceReducer from "./priceReducer";

export default combineReducers({
  datetime: datetimeReducer,
  dataSufficiency: dataSufficiencyReducer,
  prices: priceReducer,
});
