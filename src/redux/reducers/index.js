import { combineReducers } from "@reduxjs/toolkit";
import adminBookReducer from "./adminBookReducer";
import authReducer from "./authReducer";
import userPropReducer from "./userPropReducer";

export default combineReducers({
  auth: authReducer,
  user: userPropReducer,
  book: adminBookReducer
});
