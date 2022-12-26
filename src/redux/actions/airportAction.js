import axios from "axios";
import { getAirportReducer } from "../reducers/airportReducer";

export const getAirport = (search) => async (dispatch, getState) => {
  const { token } = getState().auth;
  if (search) {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_AUTH_API}/airport/search?keyword=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(getAirportReducer(data?.data.airport[0]));
    } catch (error) {
      throw error;
    }
  }
};
