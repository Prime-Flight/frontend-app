import axios from "axios";
import { getCountryReducer } from "../reducers/countryReducer";

export const getCountry = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/country/list`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(getCountryReducer(result.data.data));
  } catch (error) {
    throw error;
  }
};
