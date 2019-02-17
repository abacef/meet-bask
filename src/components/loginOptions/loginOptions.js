import React, { Component } from 'react';
import './loginOptions.css';
import {NavLink} from "react-router-dom";

class LoginOptions extends Component {
  render() {
    return (
      <div className="bgColor">
        <button id="logOut" type="button">Log Out</button>
        <h1 id="logo">Team<span id="logoSec">Up</span></h1>
        <h2 id="slogan">Pick Up Sports Platform</h2>
        <div className="btnContainer">
          <button type="button" id="createGameBtn"><NavLink to="/new-user">Create User</NavLink></button>
          <button id="joinGameBtn"><NavLink to="/login">Login</NavLink></button>
        </div>
      </div>
    );
  }
}

export default LoginOptions;
