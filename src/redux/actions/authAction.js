import axios from "axios";
import { toast } from "react-toastify";
import { setToken, setUser, setUserDetails } from "../reducers/authReducer";
import { useNavigate } from "react-router-dom";

export const register = (data) => async (dispatch) => {
  try {
    // const navigate = useNavigate();
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/register`,
      data
    );
    if (result.data.data.token) {
      localStorage.setItem("token", result.data.data.token);
      dispatch(setToken(result.data.data.token));
      toast.success("Register success!");
    }
    toast.success(result.data.message);
    // if (result.data.status === true) {
    //   toast.success("Register success! silahkan login");
    //   navigate("/login");
    // }
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
      `${process.env.REACT_APP_AUTH_API}/auth/whoami`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setUser(result.data.data));
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      dispatch(setToken(null));
      callback(error.response.status);
    }
  }
};

export const verify = () => async (getState) => {
  try {
    const { token } = getState().auth;

    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/verification-email`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(result.data.message);
  } catch (error) {
    // toast.error(error.response.data.message);
    throw error;
  }
};

export const details = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/user/details`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(result);
    dispatch(setUserDetails(result.data.data));
  } catch (error) {
    throw error;
  }
};

export const updateDetails = (data) => async (getState) => {
  try {
    const { token } = getState().auth;
    console.log(data);
    const result = await axios.put(
      `${process.env.REACT_APP_AUTH_API}/user/update-details`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success(result.data.message);
    dispatch(setUserDetails(result.data.data));
  } catch (error) {
    // toast.error(error.response.data.message);
    throw error;
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
    if (result.data.data.token) {
      localStorage.setItem("token", result.data.data.token);
      dispatch(setToken(result.data.data.token));
      toast.success("Login success!");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// export const saveToken = (token) => async (dispatch) => {
//   try {
//     localStorage.setItem("token", token);
//     dispatch(setToken(token));
//   } catch (error) {
//     toast.error(error.message);
//   }
// };
