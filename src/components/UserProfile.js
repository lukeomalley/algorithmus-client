import React from 'react';
import styled from 'styled-components';

const UserProfileWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  width: 50%;
  margin: 0 auto;
  justify-items: center;

  img {
    max-width: 50%;
  }
`;

const UserProfile = ({ user }) => {
  return (
    <UserProfileWrapper>
      <h2>{user.username}</h2>
      <img src={`https://api.adorable.io/avatars/285/${user.username}.png`} alt={user.username} />
    </UserProfileWrapper>
  );
};

export default UserProfile;
