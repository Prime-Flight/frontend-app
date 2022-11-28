import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

function GoogleLogin({ setToken, label }) {
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const data = {
          access_token: response.access_token,
        };
        const result = await axios.post(`${process.env.REACT_APP_AUTH_API}/api/v1/auth/google`, data);
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <div>
      <div className="m-auto">
        <Button
          sx={{
            mt: 5,
            width: "70ch",
            borderRadius: "20px",
          }}
          variant="contained"
          size="medium"
          onClick={googleLogin}
        >
          <GoogleIcon style={{ m: 15 }} /> {label}
        </Button>
      </div>
    </div>
  );
}

export default GoogleLogin;
