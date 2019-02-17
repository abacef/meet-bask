import React, { Component } from "react";
import firebase from "../firebase.js";

class CreateGameFolder extends Component {
  constructor() {
    super();
    this.state = {
      sport: "Basketball",
      players: "",
      time: "",
      location: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("items");
    const item = {
      sport: this.state.sport,
      players: this.state.players,
      time: this.state.time,
      location: this.state.location
    };
    itemsRef.push(item);
    this.setState({
      sport: "",
      players: "",
      time: "",
      location: ""
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // componentDidMount() {
  //   const itemsRef = firebase.database().ref("items");
  //   itemsRef.on("value", snapshot => {
  //     let items = snapshot.val();
  //     let newState = [];
  //     for (let item in items) {
  //       newState.push({
  //         id: item,
  //         title: items[item].title,
  //         user: items[item].user
  //       });
  //     }
  //     this.setState({
  //       items: newState
  //     });
  //   });
  // }
  render() {
    return (
      <div className="app">
        <header>
          <div className="wrapper">
            <h1>Create Game</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <select
                name="sport"
                onChange={this.handleChange}
                value={this.state.value}
              >
                <option value="">Choose Game Type</option>
                <option value="Soccer">Soccer</option>
                <option value="Basketball">Basketball</option>
                <option value="Lacrosse">Lacrosse</option>
              </select>
              <input
                type="text"
                name="players"
                placeholder="Number Of Players?"
                onChange={this.handleChange}
                value={this.state.players}
              />
              <input
                type="time"
                name="time"
                onChange={this.handleChange}
                value={this.state.time}
              />
              <input
                type="text"
                name="location"
                placeholder="Where will the game be?"
                onChange={this.handleChange}
                value={this.state.location}
              />

              <button>Create</button>
              <button>Cancel</button>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
export default CreateGameFolder;
