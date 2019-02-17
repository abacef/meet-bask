import React, { Component } from 'react';

import Routes from  "./Routes"

import { BrowserRouter } from "react-router-dom";

export default class App extends Component {

  render() {
    console.log("Rendering " + this.constructor.name);
    return (
      <BrowserRouter>
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}
