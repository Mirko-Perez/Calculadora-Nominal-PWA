import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { googleLogin, emailAndPasswordLogin } from "../actions/auth";

export const LoginScreen = () => {
  const dispacth = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const { email, password } = data;

  const handleEmailLogin = (e) => {
    e.preventDefault();
    dispacth(emailAndPasswordLogin(email, password));
  };

  const handleGoogleLogin = () => {
    console.log("login google");
    dispacth(googleLogin());
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <hr />

      <div className="row container">
        <form onSubmit={handleEmailLogin} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                id="icon_prefix2"
                className="materialize-textarea"
                type="email"
              />
              <label htmlFor="icon_prefix2">Email</label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password}
                name="password"
                id="icon_prefix"
                className="materialize-textarea"
                type="password"
              />
              <label htmlFor="icon_prefix">Password</label>
            </div>
          </div>

          <button className="btn" type="submit">
            Login
          </button>
          <hr />
          <GoogleButton
            onClick={() => {
              handleGoogleLogin();
            }}
          />
          <Link to="/register">Register in the platform</Link>
        </form>
      </div>
    </div>
  );
};
