/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = () => {
    return !!localStorage.getItem("authToken");
  };

  return isAuthenticated() ? children : <Navigate to="/login-mentor" />;
};

export default PrivateRoute;
