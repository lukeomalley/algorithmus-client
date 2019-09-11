import React from 'react';
import styled from 'styled-components';

import { SecondaryButton } from '../styled-components/Buttons';

const ItemWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  background: ${props => props.theme.mainWhite};
  justify-items: center;

  .details {
    text-align: center;
    color: ${props => props.theme.mainBlack};
    padding: 20px;
  }

  img {
    width: 90%;
    max-height: 250px;
    margin: 20px;
  }
`;

export default class Item extends React.Component {
  postItem = (item, token) => {
    fetch('http://localhost:3000/api/v1/lockers', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ item }),
    })
      .then(r => r.json())
      .then(data => {
        // (data) => item.CALLLBACK
        // this is where I am going to need to call the function that will toggle the state of the modal
        // pass it back to shop page
        // pass it back to app
        this.props.toggleShow(data);
      });
  };

  render() {
    // debugger;
    return (
      <ItemWrapper>
        <img src={this.props.item.img_url} alt={this.props.item.name} />
        <div className="details">
          <h2>{this.props.item.name}</h2>
          <p>{this.props.item.description}</p>
          <SecondaryButton
            onClick={() => this.postItem(this.props.item.id, localStorage.getItem('token'))}
          >
            Purchase Item
          </SecondaryButton>
          <span>{this.props.item.cost} doubloons</span>
        </div>
      </ItemWrapper>
    );
  }
}
