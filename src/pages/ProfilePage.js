import React from "react";
import styled from "styled-components";

import UserProfile from "../components/UserProfile";

const ProfilePageWrapper = styled.div`
  width: 90vw;
  margin: 25px auto;
`;

const ProfilePage = ({ user, updateUser }) => {
  return (
    <ProfilePageWrapper>
      <UserProfile user={user} />
      <button
        onClick={() => {
          updateUser(null);
          window.localStorage.removeItem("token");
        }}
      >
        {" "}
        Logout
      </button>
    </ProfilePageWrapper>
  );
};

export default ProfilePage;
