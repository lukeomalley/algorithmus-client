import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-image: url("https://d1yn1kh78jj1rr.cloudfront.net/image/preview/rZrBTAzPMjdockp2l/storyblocks-space-background-alien-fantasy-landscape-with-rocks-and-craters-with-blue-liquid-inside-orange-planet-empty-surface-cloudy-sky-and-falling-comet-computer-game-backdrop-cartoon-vector-illustration_BVgVNqnXZB_SB_PM.jpg");
  background-size: cover;

  .card {
    /* border-style: solid;
    border-color: white; */
    height: 500px;
    width: 500px;
    background: ${props => props.theme.primaryColor};
  }
`;

const LoginPage = props => {
  return (
    <LoginContainer>
      <div className="card">
        <LoginForm toggleLogin={props.toggleLogin} />
      </div>
    </LoginContainer>
  );
};

export default LoginPage;
