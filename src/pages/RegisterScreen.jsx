import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const { email, username, password, password2 } = data;

  const handleRegister = (e) => {
    e.preventDefault();

    // if (email.trim() === "" || email.trim().includes("@")) {
    //   return;
    // }

    // if (username.trim().length < 2) {
    //   return;
    // }

    // if (password.trim().length < 6) {
    //   return;
    // }

    // if (password.trim().length !== password2.trim().length) {
    //   return;
    // }

    dispatch(register(email, password, username));
  };

  return (
    <div className="container">
      <h3>Register</h3>
      <hr />

      <div className="row container">
        <form onSubmit={handleRegister} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">assignment_ind</i>
              <input
                onChange={handleChange}
                value={username}
                name="username"
                id="icon_prefix1"
                className="materialize-textarea"
                type="text"
              />
              <label htmlFor="icon_prefix1">Username</label>
            </div>
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
                id="icon_prefix3"
                className="materialize-textarea"
                type="password"
              />
              <label htmlFor="icon_prefix3">Password</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                value={password2}
                name="password2"
                id="icon_prefix4"
                className="materialize-textarea"
                type="password"
              />
              <label htmlFor="icon_prefix4">Confirm Password</label>
            </div>
          </div>

          <button className="btn" type="submit">
            Register
          </button>
          <hr />

          <Link to="/login">Login into Account</Link>
        </form>
      </div>
    </div>
  );
};
