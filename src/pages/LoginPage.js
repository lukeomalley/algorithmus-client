import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { PrimaryButton } from '../styled-components/Buttons';

const LoginContainer = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  height: 100vh;
  align-items: center;
  text-align: center;
  background-size: cover;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(237, 138, 110, 0.45)),
    url('https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=1080&w=1920');

  .title {
    text-align: center;
    font-size: 50px;
    letter-spacing: 20px;
    /* remove the letter spacing from the end of the right side of the title */
    margin-right: -20px;
  }
`;

const LoginPage = ({ updateUser }) => {
  const [login, setLogin] = useState(true);
  return (
    <LoginContainer>
      <h1 className="title">Algorithmus</h1>
      {login ? (
        <>
          <LoginForm updateUser={updateUser} />
          <PrimaryButton onClick={() => setLogin(false)}>Sign Up</PrimaryButton>
        </>
      ) : (
        <>
          <SignupForm updateUser={updateUser} />
          <PrimaryButton onClick={() => setLogin(true)}>Log In</PrimaryButton>
        </>
      )}
    </LoginContainer>
  );
};

export default LoginPage;
