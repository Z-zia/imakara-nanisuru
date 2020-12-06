import { combineReducers } from "redux";

import userReducer from "./userReducer";
import clsActionReducer from "./clsActionReducer";
import pochipochiReducer from "./pochipochiReducer";

export default combineReducers({
  userReducer,
  clsActionReducer,
  pochipochiReducer
})