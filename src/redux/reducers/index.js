import { combineReducers } from "@reduxjs/toolkit";
import adminBookReducer from "./adminBookReducer";
import authReducer from "./authReducer";
import airportReducer from "./airportReducer";
import countryReducer from "./countryReducer";
import userPropReducer from "./userPropReducer";

export default combineReducers({
  auth: authReducer,
  airport: airportReducer,
  country: countryReducer,
  book: adminBookReducer,
  user: userPropReducer
});
