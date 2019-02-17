import React, { Component } from 'react';
import './loginOptions.css';

class LoginOptions extends Component {
  render() {
    return (
      <div className="bgColor">
        <button id="logOut" type="button">Log Out</button>
        <h1 id="logo">Team<span id="logoSec">Up</span></h1>
        <h2 id="slogan">Pick Up Sports Platform</h2>
        <div className="btnContainer">
          <button type="button" id="createGameBtn">Create User</button>
          <button id="joinGameBtn">Login</button>
        </div>
      </div>
    );
  }
}

export default LoginOptions;
