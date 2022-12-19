import { combineReducers } from "@reduxjs/toolkit";
import adminBookReducer from "./adminBookReducer";
import authReducer from "./authReducer";
import airportReducer from "./airportReducer";
import countryReducer from "./countryReducer";

export default combineReducers({
  auth: authReducer,
  airport: airportReducer,
  country: countryReducer,
});
