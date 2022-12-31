import axios from "axios";
import { toast } from "react-toastify";
import { getTransactionReducer } from "../reducers/transactionReducer";

export const getTransaction = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/booking/my-transaction`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(getTransactionReducer(result.data.data));
  } catch (error) {
    throw error;
  }
};
