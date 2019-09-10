import React from 'react';
import styled from 'styled-components';

import Item from '../components/Item';

const ShopPageContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
`;

const ShopPage = ({ items, user }) => {
  return (
    <ShopPageContainer>
      <ItemsContainer>
        {items.map(item => (
          <Item item={item}></Item>
        ))}
      </ItemsContainer>
    </ShopPageContainer>
  );
};

export default ShopPage;
