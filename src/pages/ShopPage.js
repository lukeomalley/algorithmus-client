import React from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal.js';

import Item from '../components/Item';

const ShopPageContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  grid-gap: 20px;
`;

const ShopPage = ({ items, user }) => {
  return (
    <ShopPageContainer>
      <ItemsContainer>
        {items.map(item => (
          <Item key={item.id} item={item}></Item>
        ))}
      </ItemsContainer>
    </ShopPageContainer>
  );
};

export default class ShopPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (this.props.show === false) {
      // debugger;
      return (
        <ShopPageContainer>
          <ItemsContainer>
            {this.props.items.map(item => (
              <Item item={item} toggleShow={this.props.toggleShow}></Item>
            ))}
          </ItemsContainer>
        </ShopPageContainer>
      );
    } else {
      return <Modal message={this.props.modalMessage} close={this.props.close} />;
    }
  }
}

// export default ShopPage;
