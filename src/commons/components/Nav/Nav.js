import React from 'react';
import SearchBox from './SearchBox/SearchBox';
import { Link } from 'react-router-dom';
import './Nav.scss';

// Nav Component
const Nav = () => {
  return (
    <header className="nav-header">
      <div className="header-items">
        <div className="header-items__logo">
          <Link to="/" className="logo-image"></Link>
        </div>
        <SearchBox />
      </div>
    </header>
  );
};

export default Nav;
