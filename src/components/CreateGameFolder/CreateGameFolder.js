import React, { Component } from "react";
import firebase from "../../firebase.js";
import './CreateGameFolder.css';

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
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
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
    this.props.history.push('/');
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (

      <div className="bgColor">
        <header>
        
          <div>
            <h1 id="header">Create <span id="headerSec">Game</span></h1>
          </div>

        </header>

        <div>
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
            <div id="inputBoxes">
            <select
                id="sport"
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
                id="players"
                type="text"
                name="players"
                placeholder="Number Of Players?"
                onChange={this.handleChange}
                value={this.state.players}
              />
              <input
                id="time"
                type="time"
                name="time"
                onChange={this.handleChange}
                value={this.state.time}
              />
              <input
                id="location"
                type="text"
                name="location"
                placeholder="Where will the game be?"
                onChange={this.handleChange}
                value={this.state.location}
              />
            </div>
              
              <div className="btnContainer">
                <button id="createBtn" type="submit">Create</button>
                <button id="cancelBtn" type="button" onClick={this.goBack}>Cancel</button>
              </div>
              
            </form>
          </section>
        </div>
      </div>
    );
  }
}
export default CreateGameFolder;
