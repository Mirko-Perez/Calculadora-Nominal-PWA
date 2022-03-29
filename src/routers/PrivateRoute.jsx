import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ log }) => {
  return log ? <Outlet /> : <Navigate to="/*" />;
};
