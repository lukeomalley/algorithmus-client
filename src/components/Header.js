import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>Algorithmus</h1>
      <div className="nav-bar">
        <Link to="/" className="link">
          Quests
        </Link>
        <Link to="/shop" className="link">
          Shop
        </Link>
        <Link to="/profile" className="link">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Header;
