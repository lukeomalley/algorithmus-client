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

export default class ShopPage extends React.Component {
  render() {
    if (this.props.show === false) {
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
