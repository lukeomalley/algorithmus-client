import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../styled-components/Buttons";

const UserProfileWrapper = styled.div`
  display: flex;
  grid-template-columns: 1fr;
  height: 83vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .topSection {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 98%;
    height: 45%;
  }

  .bottomSection {
    display: flex;
    justify-content: space-between;
    width: 98%;
    height: 45%;
  }

  .imageContainer {
    display: flex;
  }

  .button {
    height: 20%;
  }

  .details {
    box-shadow: 0 4px 8px 0 rgba(237, 138, 110, 0.5);
    border-bottom: 3px solid ${props => props.theme.accentColor};
    width: 48%;
  }

  .leaderboard {
    box-shadow: 0 4px 8px 0 rgba(237, 138, 110, 0.5);
    border-bottom: 3px solid ${props => props.theme.accentColor};
    width: 48%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    /* align-content: center; */
    flex-wrap: wrap;
    overflow: scroll;
    p {
      align-self: center;
      font-size: 40px;
    }
  }

  .this {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .avatar {
    max-width: 100%;
    border-radius: 50%;
    /* margin-left: 160px; */
  }

  .itemsSection {
    display: flex;
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

export default class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      allUsers: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users")
      .then(r => r.json())
      .then(data => {
        this.setState({
          allUsers: data
        });
      });
  }

  render() {
    return (
      // console.log(user)
      <UserProfileWrapper>
        <div className="topSection">
          <div className="imageContainer">
            <img
              className="avatar"
              src={`https://api.adorable.io/avatars/285/${this.props.user.username}.png`}
              alt={this.props.user.username}
            />
          </div>
          {/* <div className="button">
            <PrimaryButton>Logout</PrimaryButton>
          </div> */}
        </div>
        <div className="bottomSection">
          <div className="details">
            <p>
              Doubloons: <span>{this.props.user.doubloon}</span>
            </p>
            <p>
              Experience Score: <span>{this.props.user.xp}</span>
            </p>
            <p>Items Owned: </p>
            <div className="itemsSection">
              {this.props.user.items ? (
                this.props.user.items.map(item => {
                  return <img src={`${item.img_url}`} className="item"></img>;
                })
              ) : (
                <p>You dont have items</p>
              )}
            </div>
          </div>

          <div className="leaderboard">
            <p>LeaderBoard</p>
            {this.state.allUsers.map(user => {
              return (
                <div className="this">
                  <img
                    src={`https://api.adorable.io/avatars/285/${user.username}.png`}
                    alt="avatar"
                    className="item"
                  />
                  <span>
                    @{user.username}({this.state.allUsers.indexOf(user) + 1})
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </UserProfileWrapper>
    );
  }
}

//{this.props.user.items.map(item => {
//   return <img src={`${item.img_url}`} className="item"></img>;
// })}
