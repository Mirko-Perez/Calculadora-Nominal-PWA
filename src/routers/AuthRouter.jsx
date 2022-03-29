import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../pages/LoginScreen";
import { RegisterScreen } from "../pages/RegisterScreen";

import { firebase } from "../firebase/config-firebase";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { AppRouter } from "./AppRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { loadData } from "../helpers/loadData";
import { leerRegistros } from "../actions/nominal";

export const AuthRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);

        const nominaData = await loadData(user.uid);

        dispatch(leerRegistros(nominaData));
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute log={log} />}>
            <Route path="/app" element={<AppRouter />} />
          </Route>

          <Route element={<PublicRoute log={log} />}>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
