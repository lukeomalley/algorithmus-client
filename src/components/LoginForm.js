import React, { Component } from 'react';
import styled from 'styled-components';

import { PrimaryButton } from '../styled-components/Buttons';

const LoginFormWrapper = styled.form`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    text-align: center;
  }

  input[type='text'],
  input[type='password'] {
    font-size: 1.5rem;
    border: none;
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.mainWhite};
    border-bottom: 1px solid ${props => props.theme.mainWhite};
  }

  input[type='text']:focus,
  input[type='password']:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.accentColor};
  }
`;

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.trget.value });
  };

  render() {
    return (
      <LoginFormWrapper onSubmit={this.props.toggleLogin}>
        <h1>Algorithmus Login</h1>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <PrimaryButton type="submit">Login</PrimaryButton>
      </LoginFormWrapper>
    );
  }
}
