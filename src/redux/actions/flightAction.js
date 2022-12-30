import axios from "axios";
import { toast } from "react-toastify";
import { getFlightReducer } from "../reducers/flightReducer";

export const getFlight = (data) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/booking/flights/search?departure_iata=${data.departure_iata}&arrival_iata=${data.arrival_iata}&flight_date=${data.flight_date}&seat_total=${data.seat_total}&page=${data.page}&record=${data.record}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(getFlightReducer(result.data.data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
