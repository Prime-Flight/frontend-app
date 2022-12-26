import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import airportReducer from "./airportReducer";
import countryReducer from "./countryReducer";
import flightReducer from "./flightReducer";
import passengerReducer from "./passengerReducer";

export default combineReducers({
  auth: authReducer,
  airport: airportReducer,
  country: countryReducer,
  flight: flightReducer,
  passenger: passengerReducer,
});
