import axios from "axios";
import { toast } from "react-toastify";
import { getOrderReducer } from "../reducers/orderReducer";

export const getOrder = (data) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/booking/order`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(getOrderReducer(result.data.data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
