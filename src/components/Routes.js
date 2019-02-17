import React, { Component } from "react";
import {Route} from "react-router-dom";

import LoginOptions from "./loginOptions/loginOptions"
import LoginPlaceholder from "./LoginPlaceholder";
import GameListPlaceholder from "./GameListPlaceholder";
import CreateGameFolder from "./CreateGameFolder/CreateGameFolder";
import CreateUserFolder from "./CreateUserFolder/CreateUserFolder";
import GameOptions from "./gameOptions/gameOptions";
import GameInfoPlaceholder from "./GameInfoPlaceholder";

export default class Routes extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={LoginOptions}/>
        <Route path="/new-user" component={CreateUserFolder}/>
        <Route path="/login" component={LoginPlaceholder}/>
        <Route path="/game-options" component={GameOptions}/>
        <Route path="/game-list" component={GameListPlaceholder}/>
        <Route path="/create-game" component={CreateGameFolder}/>
        <Route path="/game-info" component={GameInfoPlaceholder}/> /* not used yet */
      </div>
    )
  }

}