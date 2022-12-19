import axios from "axios";
import { getCountryReducer } from "../reducers/countryReducer";

export const getCountry = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/country/list`
    );

    const countries = result.data.data.map((country) => {
      return {
        value: country,
        label: country,
      };
    });
    dispatch(getCountryReducer(countries));
  } catch (error) {
    throw error;
  }
};
