import React from "react";
import styled from "styled-components";

const LandingPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 740px;
  align-content: space-between;

  div {
    width: auto;
    /* border-style: solid; */
    /* border-color: white; */
    width: 100%;
    margin: 5px;
    height: 100%;
  }

  .title {
    position: relative;
    text-align: center;
    color: white;
    margin: 5px;
  }

  .footer {
    /* align-self: */
    text-align: center;
  }

  .about {
    text-align: center;
  }

  .title img {
    width: 100%;
    height: 100%;
  }

  .centered {
    position: absolute;
    margin-top: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
  }
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <div className="title">
        <img src="https://static.vecteezy.com/system/resources/previews/000/524/720/non_2x/fantasy-wide-sci-fi-martian-background-for-ui-game-vector.jpg" />
        <div className="centered">ALGORITHMUS</div>
      </div>

      <div className="about">About Algorithmus</div>
      <div className="footer">I am Footer</div>
    </LandingPageWrapper>
  );
};

export default LandingPage;
