import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../styled-components/Buttons";

const UserProfileWrapper = styled.div`
  display: flex;
  grid-template-columns: 1fr;
  height: 83vh;
  /* border-style: solid;
  border-color: white; */
  flex-direction: column;
  align-items: center;
  /* align-content: space-around; */
  justify-content: space-around;

  .topSection {
    display: flex;
    justify-content: center;
    align-content: center;
    /* border-style: solid;
    border-color: white; */
    width: 98%;
    height: 45%;
  }

  .bottomSection {
    display: flex;
    justify-content: space-between;
    /* border-style: solid;
    border-color: white; */
    width: 98%;
    height: 45%;
  }

  .imageContainer {
    display: flex;
    /* margin: 5px; */
    /* border-style: solid;
    border-color: white; */
  }

  .button {
    /* border-style: solid;
    border-color: white; */
    height: 20%;
  }

  .details {
    /* border-style: solid;
    border-color: white; */
    box-shadow: 0 4px 8px 0 rgba(237, 138, 110, 0.5);
    width: 48%;
  }

  .leaderboard {
    box-shadow: 0 4px 8px 0 rgba(237, 138, 110, 0.5);

    width: 48%;
  }

  .avatar {
    max-width: 100%;
    border-radius: 50%;
    /* margin-left: 160px; */
  }

  .itemsSection {
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
  }

  .item {
    width: 70px;
    height: 70px;
    margin: 8px;
  }

  p {
    font-size: 40px;
    margin: 6px;
  }

  span {
    color: rgb(237, 138, 110);
  }
`;

const UserProfile = ({ user }) => {
  console.log(user);
  return (
    // console.log(user)
    <UserProfileWrapper>
      <div className="topSection">
        <div className="imageContainer">
          <img
            className="avatar"
            src={`https://api.adorable.io/avatars/285/${user.username}.png`}
            alt={user.username}
          />
        </div>
        {/* <div className="button">
          <PrimaryButton>Logout</PrimaryButton>
        </div> */}
      </div>
      <div className="bottomSection">
        <div className="details">
          <p>
            Doubloons: <span>{user.doubloon}</span>
          </p>
          <p>
            Experience Score: <span>{user.xp}</span>
          </p>
          <p>Items Owned: </p>
          <div className="itemsSection">
            {user.items.map(item => {
              return <img src={`${item.img_url}`} className="item"></img>;
            })}
          </div>
        </div>

        <div className="leaderboard">Rankings Board</div>
      </div>
    </UserProfileWrapper>
  );
};

export default UserProfile;
