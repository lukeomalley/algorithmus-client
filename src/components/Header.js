import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  color: white;
  padding: 1rem 1rem;

  a {
    text-decoration: none;
    font-size: 28px;
    color: var(--mainWhite);
    margin-left: 20px;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Algorithmus</h1>
      <div>
        <Link to="/">Quests</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
