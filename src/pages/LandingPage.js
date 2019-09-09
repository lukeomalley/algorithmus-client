import React from "react";
import styled from "styled-components";

const LandingPageWrapper = styled.div`
  display: flex;
  /* border-style: solid;
  border-color: white; */
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100vh;
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
  }

  .centered {
    position: absolute;
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 250px;
    padding-top: 10px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  }

  .luke,
  .kolton {
    width: 75px;
    height: 75px;
    border-radius: 50%;
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
        <div className="about">
          <h3>About</h3>
          {/* <div>
            Algorithmus is a site designed for those who wish to further their
            skills as a software developer. The algorithms and code challenges
            found here are geared towards preparing junior developers for
            technical interviews.{" "}
          </div> */}
        </div>
        <div className="details">More Details</div>
      </div>

      <div className="footer">
        <img
          className="kolton"
          src={
            "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p320x320/66725145_2360914713988878_219171073013317632_n.jpg?_nc_cat=103&_nc_oc=AQlkcXK_7MqyzM4fQrUI4m99ug6LrMoQysX5Zk7gCz5BVrDqO4zatI54zGPQJAwuj_0&_nc_ht=scontent-iad3-1.xx&oh=c65a37a177971ed6d61b427fb3473cc8&oe=5E041EF3"
          }
        />
        <p>
          <span>🔥</span>Kolton Starr || Luke O'Malley<span>🔥</span>
        </p>
        <img
          className="luke"
          src={
            "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/c0.24.320.320a/p320x320/11863322_10207962970698525_6376937075346576264_n.jpg?_nc_cat=101&_nc_oc=AQnkPDvJhs4q6lCvVINUPwF17EEiWwB3tPRnVAnSKvwy6itCnYbNvqxYRKuP74YXuM8&_nc_ht=scontent-iad3-1.xx&oh=a4169f3803a84461578a3b0e3e6dce6c&oe=5E13D5E7"
          }
        />
      </div>
    </LandingPageWrapper>
  );
};

export default LandingPage;
