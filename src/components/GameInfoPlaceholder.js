import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./GameInfoPlaceholder.css";

export default class GameInfoPlaceholder extends Component {
  render() {
    return (
      <div id="bgColor">
        <h1 className="header">
          {" "}
          You Have <span className="headerSec">Created</span> a Game!{" "}
        </h1>
        <div className="wrap">
          <h6 className="info"> Game Time: 7:00 PM</h6>
          <h6 className="info">Maximum Players: 8 </h6>
          <h6 className="info">Location: Harvard Square </h6>
          <h6 className="info">Players Registered: 1 </h6>
        </div>
        <div className="btnContainer">
          <NavLink to="/game-options">
            <button type="button" id="createBtn">
              Go Back Home
            </button>
          </NavLink>

          <NavLink to="/">
            <button type="button" id="cancelBtn">
              Sign Out
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}
