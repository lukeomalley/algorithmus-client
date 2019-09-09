import React from 'react';
import styled from 'styled-components';

const ShopPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  width: 90vw;
  margin: 0 auto;
`;

const ShopPage = () => {
  return (
    <ShopPageContainer>
      <h1>Shop Page</h1>
    </ShopPageContainer>
  );
};

export default ShopPage;
