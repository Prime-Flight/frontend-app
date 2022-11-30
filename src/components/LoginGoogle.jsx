import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { loginWithGoogle } from "../redux/actions/authAction";
import GoogleIcon from "@mui/icons-material/Google";

function LoginGoogle({ label }) {
  const dispatch = useDispatch();

  const googleLogin = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      dispatch(loginWithGoogle(access_token));
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  return (
    <Button variant="outlined" startIcon={<GoogleIcon />} onClick={googleLogin}>
      {label}
    </Button>
  );
}

export default LoginGoogle;
