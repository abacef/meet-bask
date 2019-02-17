import React, { Component } from "react";
import {Route} from "react-router-dom";

import CreateOrJoin from "./routes/CreateOrJoin";
import Create from "./routes/Create";
import Join from "./routes/Join";

/**
 * This div is where the content of a route will render when someone selects the hyperlink bound to this
 * route in the nav bar
 *
 * This maps the hyperlink path to the component to render
 *
 * These route components exist in the package "routes"
 */
export default class Routes extends Component {

  render() {
    console.log("Rendering " + this.constructor.name);
    return (
      <div className="content">
        <Route exact path="/" component={CreateOrJoin}/>
        <Route path="/create" component={Create}/>
        <Route path="/join" component={Join}/>
      </div>
    )
  }
}