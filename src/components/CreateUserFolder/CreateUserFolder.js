import React, { Component } from "react";
import firebase from "../../firebase.js";
import './CreateUserFolder.css';

class CreateUserFolder extends Component {
  constructor() {
    super();
    this.state = {

      fullName: "",
      password: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("user");
    const item = {
      fullName: this.state.fullName,
      password: this.state.password,
      email: this.state.email,
    };
    itemsRef.push(item);
    this.setState({
      fullName: "",
      password: "",
      email: "",
    });
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
            <h1 id="header">Create <span id="headerSec">Account</span></h1>
          </div>

        </header>

        <div>
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <div id="inputBoxes">

                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Enter Full Name"
                  onChange={this.handleChange}
                  value={this.state.fullName}
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </div>

              <div className="btnContainer">
                <button id="createBtn" type="button">Create</button>
                <button id="cancelBtn" type="button">Cancel</button>
              </div>

            </form>
          </section>
        </div>
      </div>
    );
  }
}
export default CreateUserFolder;