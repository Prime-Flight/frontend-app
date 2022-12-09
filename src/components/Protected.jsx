import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { me } from "../redux/actions/authAction";

function Protected({ children, roles }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      if (token) {
        dispatch(
          me((status) => {
            if (status === 401) {
              navigate("/login");
            }
          })
        );
      }
    })();
  }, [token, navigate, dispatch]);

  useEffect(() => {
    if (user) {
      if (!roles.some((role) => role === user.role)) {
        navigate("/login");
      }
    }
  }, [user, roles, navigate]);

  if (!token) {
    return <Navigate to={`/login`} />;
  }

  return children;
}

export default Protected;
