import React, { Component } from "react";
import {Route} from "react-router-dom";

import CreateOrJoin from "./routes/CreateOrJoin";
import Create from "./routes/Create";
import Join from "./routes/Join";
import Confirm from "./routes/Confirm";

/**
 * This div is where the content of a route will render when someone selects the hyperlink bound to this
 * route in the nav bar
 *
 * This maps the hyperlink path to the component to render
 *
 * These route components exist in the package "routes"
 */
export default class Routes extends Component {

  constructor() {
    super();

    this.state = {
      newEventKey: ""
    };

    this.keyUpdate = this.keyUpdate.bind(this);
  }

  keyUpdate(eventKey) {
    this.setState({
      newEventKey: eventKey
    })
  }

  render() {
    console.log("Rendering " + this.constructor.name);
    return (
      <div className="content">
        <Route exact path="/" component={CreateOrJoin}/>
        <Route path="/create" component={Create}/>
        <Route path="/join" component={Join}/>
        <Route path="/:key" component={Child}/>
      </div>
    )
  }
}

const Child = ({ match }) => (

  // CREATE A COMPONENT THAT SHOWS THE CONFIRMATION DATA AND UPDATES WHEN THE DATABASE UPDATES
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);