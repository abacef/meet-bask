import React, { Component } from "react";
import {Route} from "react-router-dom";

import LoginOptions from "./loginOptions/loginOptions"
import LoginPlaceholder from "./LoginPlaceholder";
import GameListPlaceholder from "./GameListPlaceholder";
import CreateGameFolder from "./CreateGameFolder/CreateGameFolder";
import CreateUserFolder from "./CreateUserFolder/CreateUserFolder";

export default class Routes extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={LoginOptions}/>
        <Route exact path="/new-user" component={CreateUserFolder}/>
        <Route exact path="/login" component={LoginPlaceholder}/>
        <Route exact path="/game-list" component={GameListPlaceholder}/>
        <Route exact path="/create-game" component={CreateGameFolder}/>
      </div>
    )
  }

}