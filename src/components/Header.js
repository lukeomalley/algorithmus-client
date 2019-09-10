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
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .userlink {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    align-items: center;
  }

  .nav-links {
    display: flex;
  }
`;

const Header = ({ user }) => {
  return (
    <HeaderWrapper>
      <h1>Algorithmus</h1>
      {user ? (
        <div className="nav-links">
          <Link to="/quests">Quests</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/profile">
            <div className="userlink">
              <p>{user.username}</p>
              <img
                src={`https://api.adorable.io/avatars/285/${user.username}.png`}
                alt={user.username}
              />
            </div>
          </Link>
        </div>
      ) : null}
    </HeaderWrapper>
  );
};

export default Header;
