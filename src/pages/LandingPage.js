import React from "react";
import styled from "styled-components";

const LandingPageWrapper = styled.div`
  display: flex;
  /* border-style: solid;
  border-color: white; */
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 790px;
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

  .details {
    /* align-self: flex-start; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  .about {
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }

  .title img {
    width: 100%;
    height: 100%;
    /* padding: 10px; */
  }

  .centered {
    position: absolute;
    /* text-shadow:  */
    margin-top: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
  }

  .bottomSection {
    display: flex;
  }

  .footer {
    height: 250px;
    border-style: solid;
    border-color: white;
    /* padding: 50px; */
    /* margin-left: 20px; */
    /* margin-bottom: 20px; */
    /* margin-right: 20px; */
    /* padding-top: 5px; */

    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <div className="title">
        <img src="https://static.vecteezy.com/system/resources/previews/000/524/720/non_2x/fantasy-wide-sci-fi-martian-background-for-ui-game-vector.jpg" />
        <div className="centered">ALGORITHMUS</div>
      </div>

      <div className="bottomSection">
        <div className="about">About Algorithmus</div>
        <div className="details">More Details</div>
      </div>

      <div className="footer">I am the Footer</div>
    </LandingPageWrapper>
  );
};

export default LandingPage;
