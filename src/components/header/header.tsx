import React from 'react';
import HeaderInfo from './header-info/Header-info';
import HeaderNav from './header-nav/Header-nav';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <HeaderInfo />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
