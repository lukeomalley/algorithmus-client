import React from "react";
import styled from "styled-components";

import { SecondaryButton } from "../styled-components/Buttons";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  background: ${props => props.theme.mainWhite};

  .details {
    text-align: center;
    color: ${props => props.theme.mainBlack};
    padding: 20px;
  }

  img {
    width: 100%;
    max-height: 250px;
  }
`;

function postItem(item, token) {
  fetch("http://localhost:3000/api/v1/lockers", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ item })
  })
    .then(r => r.json())
    .then(data => {
      debugger;
    });
}

const Item = ({ item }) => {
  const { name, img_url, description, cost } = item;
  return (
    <ItemWrapper>
      <img src={img_url} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
        <SecondaryButton
          onClick={() => postItem(item.id, localStorage.getItem("token"))}
        >
          Purchase Item
        </SecondaryButton>
        <span>{cost} doubloons</span>
      </div>
    </ItemWrapper>
  );
};

export default Item;
