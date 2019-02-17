import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export default class CreateOrJoin extends Component {

  render() {
    return (
      <div>
        <h2>Ball Up!</h2>
        <button><NavLink to="/create">Create Game</NavLink></button>
        <button><NavLink to="/join">Join Game</NavLink></button>
      </div>
    )
  }
}