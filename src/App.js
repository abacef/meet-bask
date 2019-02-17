import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import CreateGameFolder from "./components/CreateGameFolder/CreateGameFolder";
import GameOptions from "./components/gameOptions/gameOptions";
import LoginOptions from "./components/loginOptions/loginOptions";
import firebase from "./firebase.js";
import Routes from "./components/Routes";
// import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      currentItem: "",
      username: ""
    };
    this.authListener = this.authListener.bind(this);
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

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        //  localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //    localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;