import axios from "axios";
import { toast } from "react-toastify";
import { getNotifReducer } from "../reducers/notificationReducer";

export const getNotification = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/notification/get`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(getNotifReducer(result.data.data));
  } catch (error) {
    throw error;
  }
};

export const readNotification = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.put(
      `${process.env.REACT_APP_AUTH_API}/notification/read`,
      id,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(result.data.message);
    dispatch(getNotification());
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
