import axios from "axios";
import { toast } from "react-toastify";
import { setToken, setUser } from "../reducers/authReducer";

export const register = (data) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/register`,
      data
    );
    if (result.data.data.token) {
      localStorage.setItem("token", result.data.data.token);
      dispatch(setToken(result.data.data.token));
      toast.success("Register success!");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/login`,
      data
    );
    console.log(result);
    if (result.data.data.token) {
      localStorage.setItem("token", result.data.data.token);
      dispatch(setToken(result.data.data.token));
      toast.success("Login success!");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const me = (callback) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;

    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/auth/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(setUser(result.data));
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      dispatch(setToken(null));
      callback(error.response.status);
    }
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch(setToken(null));
  dispatch(setUser(null));
};

export const loginWithGoogle = (accessToken) => async (dispatch) => {
  try {
    const data = {
      access_token: accessToken,
    };
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/login/google`,
      data
    );
    if (result.data.token) {
      localStorage.setItem("token", result.data.token);
      dispatch(setToken(result.data.token));
      toast.success("Login success!");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
