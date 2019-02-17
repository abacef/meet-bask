import React, { Component } from "react";
import {Route} from "react-router-dom";

import LoginOptions from "./loginOptions/loginOptions"

export default class Routes extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={LoginOptions}/>
      </div>
    )
  }
}