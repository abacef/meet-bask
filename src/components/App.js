import React, { Component } from 'react';
import logo from '../logo.svg';
import fire from '../config/Fire';
import Routes from  "./Routes";
import SiteFooter from "./SiteFooter";
import Login from '../Login';
import Home from '../Home';

import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
     <div className="App">{this.state.user ? ( <Home/>) : (<Login />)}</div>
    );
}
}

 export default App;
