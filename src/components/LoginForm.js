import React, { Component } from "react";

export default class LoginForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" disabled />
        <button type="submit" onClick={this.props.toggleLogin}>
          Login
        </button>
      </form>
    );
  }
}
