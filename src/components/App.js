import React, { Component } from 'react';
import logo from '../logo.svg';

import Routes from  "./Routes"
import SiteFooter from "./SiteFooter"

import { BrowserRouter } from "react-router-dom";

export default class App extends Component {

  render() {
    console.log("Rendering " + this.constructor.name);
    return (
      <BrowserRouter>
        <div>
          <Routes />
          <SiteFooter />
        </div>
      </BrowserRouter>
    );
  }
}
