import React, { useState } from 'react';
import './Menu.css';
import homeIcon from '../../assets/home.svg';
import shoppingBagIcon from '../../assets/shopping-bag-02.svg';
import usersIcon from '../../assets/users-01.svg';
import trophyIcon from '../../assets/trophy-01.svg';
import buildingIcon from '../../assets/building-08.svg';
import signalIcon from '../../assets/signal-01.svg';
import burgerIcon from '../../assets/burger-icon.svg';
import closeIcon from '../../assets/close-icon.svg';
import logo from '../../assets/Logo.svg';
import avatarIcon from '../../assets/avatar-icon.svg';
import flagRuIcon from '../../assets/flag-ru.svg';
import flagEnIcon from '../../assets/flag-en.svg';
import flagFrIcon from '../../assets/flag-fr.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';

const Menu: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!isLanguageMenuOpen);
  };

  return (
    <nav className="menu">
      <div className="menu__logo">
        <a href="https://karez79.github.io/sportrec/">
          <img src={logo} alt="SportRec Logo" />
        </a>
      </div>
      <div className={`menu__links ${isMobileMenuOpen ? 'menu__links--open' : ''}`}>
        <button className="menu__close-button" onClick={closeMobileMenu}>
          <img src={closeIcon} alt="Close Menu" />
        </button>
        <a className="menu__link" href="#"><img src={homeIcon} alt="Home" /> Лента</a>
        <a className="menu__link" href="#"><img src={shoppingBagIcon} alt="Marketplace" /> Маркетплейс</a>
        <a className="menu__link" href="#"><img src={usersIcon} alt="Ratings" /> Рейтинги</a>
        <a className="menu__link" href="#"><img src={trophyIcon} alt="Competitions" /> Соревнования</a>
        <a className="menu__link" href="#"><img src={buildingIcon} alt="Organizations" /> Организации</a>
        <a className="menu__link" href="#"><img src={signalIcon} alt="Live" /> Live</a>
      </div>
      <div className="menu__extras">
        <div className="menu__extra menu__language" onClick={toggleLanguageMenu}>
          <img src={flagRuIcon} alt="Flag RU" />
          <span>RU</span>
          <img src={arrowDownIcon} alt="Arrow Down" />
          {isLanguageMenuOpen && (
            <div className="menu__language-dropdown">
              <a className="menu__language-option" href="#"><img src={flagRuIcon} alt="Flag RU" /> RU</a>
              <a className="menu__language-option" href="#"><img src={flagEnIcon} alt="Flag EN" /> EN</a>
              <a className="menu__language-option" href="#"><img src={flagFrIcon} alt="Flag FR" /> FR</a>
            </div>
          )}
        </div>
        <a className="menu__extra" href="#"><img src={avatarIcon} alt="Avatar" /></a>
      </div>
      <div className="menu__burger" onClick={toggleMobileMenu}>
        <img src={burgerIcon} alt="Menu" />
      </div>
    </nav>
  );
};

export default Menu;
