import React, { Component } from 'react';
import './gameOptions.css';
import {NavLink} from "react-router-dom";

class GameOptions extends Component {
  render() {
    return (
      <div className="bgColor">
        <button id="logOut" type="button">Log Out</button>
        <h1 id="logo">Team<span id="logoSec">Up</span></h1>
        <div className="btnContainer">
          <button type="button" id="createGameBtn"><NavLink to="/create-game">Create Game</NavLink></button>
          <button id="joinGameBtn"><NavLink to="/game-list">Join Game</NavLink></button>
        </div>
      </div>
    );
  }
}

export default GameOptions;
