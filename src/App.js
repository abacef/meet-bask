import React, { Component } from "react";
import CreateGameFolder from "./components/CreateGameFolder/CreateGameFolder";
import GameOptions from "./components/gameOptions/gameOptions";
import LoginOptions from "./components/loginOptions/loginOptions";
import firebase from "./firebase.js";
// import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("items");
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    };
    itemsRef.push(item);
    this.setState({
      currentItem: "",
      username: ""
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // componentDidMount() {
  //   const itemsRef = firebase.database().ref("items");
  //   itemsRef.on("value", snapshot => {
  //     let items = snapshot.val();
  //     let newState = [];
  //     for (let item in items) {
  //       newState.push({
  //         id: item,
  //         title: items[item].title,
  //         user: items[item].user
  //       });
  //     }
  //     this.setState({
  //       items: newState
  //     });
  //   });
  // }
  render() {
    return (
      <LoginOptions />
      
    );
  }
}
export default App;
