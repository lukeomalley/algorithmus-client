import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

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
  }
`;

const LoginPage = ({ updateUser }) => {
  const [signup, setSignup] = useState(true);
  return (
    <LoginContainer>
      <h1 className="title">Algorithmus</h1>
      {signup ? (
        <>
          <LoginForm updateUser={updateUser} />
          <button onClick={() => setSignup(false)}>Sign Up</button>
        </>
      ) : (
        <>
          <SignupForm updateUser={updateUser} />
          <button onClick={() => setSignup(true)}>Log In</button>
        </>
      )}
    </LoginContainer>
  );
};

export default LoginPage;
