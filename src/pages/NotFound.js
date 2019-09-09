import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>I literally have no idea what you are looking for</h1>
      <Link to="/">Return To Home</Link>
    </div>
  );
};

export default NotFound;
