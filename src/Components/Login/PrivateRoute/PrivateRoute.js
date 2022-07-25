import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { currentUser } = useAuth();
  return currentUser.email ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
