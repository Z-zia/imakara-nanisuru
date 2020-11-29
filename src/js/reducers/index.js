import { combineReducers } from "redux";

import userReducer from "./userReducer";
import clsActionReducer from "./clsActionReducer";

export default combineReducers({
  userReducer,
  clsActionReducer
})