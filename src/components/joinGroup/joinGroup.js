import React, { Component } from "react";
import firebase from "../../firebase.js";

var myItems = [];

class JoinGroup extends Component {
  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        var myObj = {
          sport: childData.sport,
          players: childData.players,
          time: childData.time,
          location: childData.location
        };
        myItems.push(myObj);
      });
    });
  }

  render() {
    return <div className="wrapper">{myItems.map(item => <li>Hello</li>)}</div>;
  }
}
export default JoinGroup;
