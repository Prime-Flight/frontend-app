import axios from "axios";
import { toast } from "react-toastify";
import { getCheckoutReducer } from "../reducers/checkoutReducer";

export const getCheckout = (data) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/booking/checkout`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(getCheckoutReducer(result.data.data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
