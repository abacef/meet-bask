import React, { Component } from "react";
import {Route} from "react-router-dom";

import Welcome from "./routes/Welcome";
import Stuff from "./routes/Stuff";
import Bugs from "./routes/Bugs";

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
        <Route exact path="/" component={Welcome}/>
        <Route path="/stuff" component={Stuff}/>
        <Route path="/bugs" component={Bugs}/>
      </div>
    )
  }
}