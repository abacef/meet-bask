import React, { Component } from "react";
import firebase from "../../firebase.js";

var myItems = [];

class JoinGroup extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        var myObj = {
          sport: childData.sport,
          players: childData.players,
          time: childData.time,
          location: childData.location,
          id: childData.id
        };
        myItems.push(myObj);
      });
      this.setState({
        items: myItems
      });
    });
  }

  render() {
    this.theItems = this.state.items.map(item => (
      <ul>
        {item.id}
        {item.sport}
        {item.players}
        {item.time}
        {item.location}
      </ul>
    ));
    return (
      <div>
        <h2>Games Available</h2>
        {this.theItems}
      </div>
    );
  }
}
export default JoinGroup;
