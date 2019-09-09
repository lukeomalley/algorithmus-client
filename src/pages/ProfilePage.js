import React from 'react';

import * as themes from '../themes';

const ProfilePage = ({ theme, setTheme }) => {
  console.log(themes);
  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={() => setTheme('blueTheme')}>Change Theme</button>
    </div>
  );
};

export default ProfilePage;
