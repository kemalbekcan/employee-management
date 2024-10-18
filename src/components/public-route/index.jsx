import { useAuthToken } from "@/store/auth/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function PublicRoute({ children }) {
  const token = useAuthToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/", {
        replace: true,
      });
    }
  }, [token]);

  if (token) {
    return null;
  }

  return children;
}

PublicRoute.propTypes = {
  children: PropTypes.node,
};
