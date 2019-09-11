import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { PrimaryButton } from "../styled-components/Buttons";

const LoginFormWrapper = styled.form`
  display: grid;
  align-items: center;
  align-self: start;
  justify-content: center;
  height: 100%;
  border-left: 3px solid ${props => props.theme.accentColor};
  height: 500px;
  width: 500px;

  background: ${props => props.theme.primaryColor};

  h1 {
    text-align: center;
  }

  input[type="text"],
  input[type="password"] {
    font-size: 1.5rem;
    border: none;
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.mainWhite};
    border-bottom: 1px solid ${props => props.theme.mainWhite};
    font-family: "Inconsolata", monospace;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.accentColor};
  }
`;

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = e => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.authenticated) {
          localStorage.setItem("token", data.token);
          this.props.updateUser(data.user);
          this.props.history.push("/quests");
        } else {
          alert("Incorrect username or password");
        }
      });
  };

  render() {
    return (
      <LoginFormWrapper onSubmit={this.handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          value={this.state.password}
          onChange={this.handleChange}
        />
        <PrimaryButton type="submit">Login</PrimaryButton>
      </LoginFormWrapper>
    );
  }
}

export default withRouter(LoginForm);
