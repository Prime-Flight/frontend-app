import axios from "axios";
import { toast } from "react-toastify";
import { getFlightReducer } from "../reducers/flightReducer";

export const getFlight = (data) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/booking/flights`,
      data,
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
