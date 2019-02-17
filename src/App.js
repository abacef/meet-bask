import React, { Component } from "react";
import CreateGameFolder from "./components/CreateGameFolder/CreateGameFolder";
import GameOptions from "./components/gameOptions/gameOptions";
import JoinGroup from "./components/joinGroup/joinGroup";
import firebase from "./firebase.js";
// import "./App.css";

class App extends Component {
  render() {
    return <JoinGroup />;
  }
}
export default App;
