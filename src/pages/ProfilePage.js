import React from 'react';
import styled from 'styled-components';

const ProfilePageWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  text-align: center;
`;

const ProfilePage = ({ updateUser, user }) => {
  return (
    <ProfilePageWrapper>
      <h1>{user.username}</h1>
      <button
        onClick={() => {
          updateUser(null);
          window.localStorage.removeItem('token');
        }}
      >
        Logout
      </button>
    </ProfilePageWrapper>
  );
};

export default ProfilePage;
