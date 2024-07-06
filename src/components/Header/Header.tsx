import React from 'react';
import Menu from '../Menu/Menu';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Menu />
      </div>
    </header>
  );
};

export default Header;
