import React from 'react';

import * as themes from '../themes';

const ProfilePage = ({ updateUser }) => {
  console.log(themes);
  return (
    <div>
      <h1>Profile Page</h1>
      <button
        onClick={() => {
          updateUser(null);
          window.localStorage.removeItem('token');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
