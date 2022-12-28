import { combineReducers } from "@reduxjs/toolkit";
import adminBookReducer from "./adminBookReducer";
import authReducer from "./authReducer";
import airportReducer from "./airportReducer";
import countryReducer from "./countryReducer";
import flightReducer from "./flightReducer";
import passengerReducer from "./passengerReducer";
import userPropReducer from "./userPropReducer";
import notificationReducer from "./notificationReducer";

export default combineReducers({
  auth: authReducer,
  airport: airportReducer,
  country: countryReducer,
  flight: flightReducer,
  passenger: passengerReducer,
  book: adminBookReducer,
  user: userPropReducer,
  notif: notificationReducer,
});
