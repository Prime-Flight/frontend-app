import axios from "axios";
import { toast } from "react-toastify";
import {
  addPassengerReducer,
  getPassengerReducer,
  deletePassengerReducer,
} from "../reducers/passengerReducer";

export const addPassenger = (data) => async (dispatch, getState) => {
  const { token } = getState().auth;
  console.log(data);
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/passenger/save`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(result.data.message);
    // dispatch(addPassengerReducer(result.data.data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getPassenger = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/passenger/get`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(getPassengerReducer(result.data.data));
  } catch (error) {
    throw error;
  }
};

export const deletePassenger = (data) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.delete(
      `${process.env.REACT_APP_AUTH_API}/passenger/delete`,
      { data: data }
    );
    toast.success(result.data.message);
    dispatch(getPassenger());
    // dispatch(deletePassengerReducer(result.data.data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const putPassenger = (data) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.put(
      `${process.env.REACT_APP_AUTH_API}/passenger/update`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(result.data.message);
    // dispatch(getPassengerReducer(result.data.data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
