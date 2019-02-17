import React, { Component } from 'react';
import './gameOptions.css';
import {NavLink} from "react-router-dom";
import firebase from "../../firebase";

class GameOptions extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="bgColor">
        <button id="logOut" type="button">Log Out</button>
        <h1 id="logo">Team<span id="logoSec">Up</span></h1>
        <div className="btnContainer">
          <NavLink to="/create-game"><button type="button" id="createGameBtn">Create Game</button></NavLink>
          <NavLink to="/game-list"><button id="joinGameBtn">Join Game</button></NavLink>
        </div>
        <NavLink to="/"><button onClick={this.logout}>Logout</button></NavLink>
      </div>
    );
  }
}

export default GameOptions;
