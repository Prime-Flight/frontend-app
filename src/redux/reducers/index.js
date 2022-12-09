import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import airportReducer from "./airportReducer";
import countryReducer from "./countryReducer";

export default combineReducers({
  auth: authReducer,
  airport: airportReducer,
  country: countryReducer,
});
