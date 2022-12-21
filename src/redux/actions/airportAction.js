import axios from "axios";
import { getAirportReducer } from "../reducers/airportReducer";

export const getAirport = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/airport/search`
    );

    dispatch(getAirportReducer(result.data.data));
  } catch (error) {
    throw error;
  }
};
