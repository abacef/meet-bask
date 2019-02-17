import React, { Component } from 'react';
import './gameOptions.css';

class GameOptions extends Component {
  render() {
    return (
      <div className="bgColor">
        <button id="logOut" type="button">Log Out</button>
        <h1 id="logo">Team<span id="logoSec">Up</span></h1>
        <div className="btnContainer">
          <button type="button" id="createGameBtn">Create Game</button>
          <button id="joinGameBtn">Join Game</button>
        </div>
      </div>
    );
  }
}

export default GameOptions;
