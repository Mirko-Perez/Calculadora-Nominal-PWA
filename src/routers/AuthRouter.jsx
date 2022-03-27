import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../pages/LoginScreen";
import { RegisterScreen } from "../pages/RegisterScreen";

import { firebase } from "../firebase/config-firebase";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { AppRouter } from "./AppRouter";

export const AuthRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/app" element={<AppRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
