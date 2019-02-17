import React, { Component } from "react";
import {Route} from "react-router-dom";

import CreateOrJoin from "./routes/CreateOrJoin";
import Create from "./routes/Create";
import Join from "./routes/Join";

export default class Routes extends Component {

  constructor() {
    super();
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

  // CREATE A COMPONENT THAT SHOWS THE CONFIRMATION DATA AND UPDATES WHEN THE DATABASE UPDATES. match.params.key
  // contains the database key for the event
  <div>
    {match.params.key.charAt(0) === "-" ?
      <h3>ID: {match.params.key}</h3> :
      <br/>
    }
  </div>
);