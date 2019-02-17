import React, { Component } from "react";
import firebase from "../../firebase.js";
import "./GetUser.css";
import { NavLink } from "react-router-dom";

class GetUser extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      new: this.props.match.params.key === "n",
      fullName: "",
      password: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.new);
    console.log(this.state.email);
    console.log(this.state.password);
    if (this.props.new) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(u => {})
        .then(u => {
          console.log(u);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(u => {})
        .catch(error => {
          console.log(error);
        });
    }
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
            <h1 id="header">
              {this.state.new ? "Create" : "Log Into"}
              <span id="headerSec"> Account</span>
            </h1>
          </div>
        </header>

        <div>
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <div id="inputBoxes">
                {this.state.new ? (
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Enter Full Name"
                    onChange={this.handleChange}
                    value={this.state.fullName}
                  />
                ) : (
                  ""
                )}

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
                {this.state.new ? (
                  <NavLink to="/">
                    <button id="createBtn" type="submit">
                      Create Account
                    </button>
                  </NavLink>
                ) : (
                  <NavLink to="/game-options">
                    <button id="createBtn" type="submit">
                      Login
                    </button>
                  </NavLink>
                )}

                <button
                  id="cancelBtn"
                  type="button"
                  onClick={this.props.history.goBack}
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
export default GetUser;
