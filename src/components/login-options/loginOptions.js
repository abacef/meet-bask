import React, { Component } from "react";
import "./LoginOptions.css";
import { NavLink } from "react-router-dom";

class LoginOptions extends Component {
  render() {
    return (
      <div className="bgColor">
        <button id="logOut" type="button">
          Log Out
        </button>
        <h1 id="logo">
          Team<span id="logoSec">Up</span>
        </h1>
        <h2 id="slogan">Pick Up Sports Platform</h2>
        <div className="btnContainer">
          <NavLink to="/login-signupn">
            <button type="button" id="createGameBtn">
              Create User
            </button>
          </NavLink>
          <NavLink to="/login-signupe">
            <button id="joinGameBtn">Login</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default LoginOptions;
