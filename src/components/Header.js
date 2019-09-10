import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.primaryColor};
  color: white;
  padding: 1rem 1rem;

  a {
    text-decoration: none;
    font-size: 28px;
    color: ${props => props.theme.mainWhite};
    margin-left: 20px;
    cursor: pointer;
  }
`;

const Header = ({ user }) => {
  return (
    <HeaderWrapper>
      <h1>Algorithmus</h1>
      {user ? (
        <div>
          <Link to="/quests">Quests</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/profile">
            <img src={user.img_url} alt="profile picture" />
            <p>{user.username}</p>
          </Link>
        </div>
      ) : null}
    </HeaderWrapper>
  );
};

export default Header;
