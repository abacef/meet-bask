import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export default class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventKey: "-8768109650816836" // this is the event key (just made up for now) (and not a secure way to do iteither)
    }
  }
// &key=${this.state.eventKey} {`/create/confirm`}
  render() {
    return (
      <div>
        <h2>this is /create</h2>
        <p>these</p>
        <p>are</p>
        <p>lines</p>
        <p>in</p>
        <p>a</p>
        <p>form</p>
        <button><NavLink to="/">GO BACK!</NavLink></button>
        <button><NavLink to={this.state.eventKey}>Continue Creation</NavLink></button>
      </div>
    )
  }
}