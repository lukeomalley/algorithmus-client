import React from 'react';
import styled from 'styled-components';

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

const Item = ({ item }) => {
  const { name, img_url, description } = item;
  return (
    <ItemWrapper>
      <img src={img_url} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p></p>
      </div>
    </ItemWrapper>
  );
};

export default Item;
