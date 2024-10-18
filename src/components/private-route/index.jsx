import { useAuthToken, useAuthUser } from "@/store/auth/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function PrivateRoute({ children }) {
  const user = useAuthUser();
  const token = useAuthToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/uyelik/giris-yap", {
        replace: true,
      });
    }
  }, [token]);

  if (!user) {
    return null;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
