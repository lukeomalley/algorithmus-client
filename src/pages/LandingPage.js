import React from "react";
import styled from "styled-components";

const LandingPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 700px;
  align-content: space-between;

  div {
    width: auto;
    border-style: solid;
    border-color: white;
    width: 100%;
    margin: 5px;
    height: 100%;
  }

  .title {
    margin: 5px;
  }
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <h1 className="title">ALGORITHMUS</h1>
      <div className="landingImg">Nice Image Here</div>
      <div className="about">About Algorithmus</div>
      <div className="loginButton">FLEX BOX FTW</div>
      <div className="footer">I am Footer</div>
    </LandingPageWrapper>
  );
};

export default LandingPage;
