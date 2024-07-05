import React from 'react';
import Menu from '../Menu/Menu';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Menu />
    </header>
  );
};

export default Header;
