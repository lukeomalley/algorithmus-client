import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="nav-header">
      <h1>Algorithmus</h1>
      <div className="nav-links">
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
