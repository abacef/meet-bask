import React, { Component } from "react";
import {Route} from "react-router-dom";

import LoginOptions from "./login-options/loginOptions"
import CreateGame from "./create-game/CreateGame";
import GetUser from "./get-user/GetUser";
import GameOptions from "./game-options/GameOptions";
import GameInfoPlaceholder from "./GameInfoPlaceholder";
import JoinGroup from "./join-group/JoinGroup";

export default class Routes extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={LoginOptions}/>
        <Route path="/login-signup:key" component={Child}/>
        <Route path="/game-options" component={GameOptions}/>
        <Route path="/game-list" component={JoinGroup}/>
        <Route path="/create-game" component={CreateGame}/>
        <Route path="/game-info" component={GameInfoPlaceholder}/>
      </div>
    )
  }

}

const Child = ({ match }) => (
  <GetUser new={match.params.key === "n"}/>
);