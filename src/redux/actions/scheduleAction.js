import axios from "axios";
import { toast } from "react-toastify";
import {
  getAllScheduleReducer,
  addScheduleReducer,
} from "../reducers/scheduleReducer";

export const getAllSchedules = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/flight/get-flight`
    );
    dispatch(getAllScheduleReducer(data.data));
  } catch (error) {
    throw error;
  }
};

export const addSchedules = (data) => async (dispatch, getState) => {
  const { token } = getState().auth;
  console.log(data);
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/flight/create`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(result.data.message);
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
