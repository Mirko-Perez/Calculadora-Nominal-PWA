import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({ log }) => {
  return log ? <Navigate to="/app" /> : <Outlet />;
};
