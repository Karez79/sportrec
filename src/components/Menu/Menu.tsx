import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../Auth/AuthModal';
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

const languages = [
  { code: 'RU', flag: flagRuIcon, label: 'RU' },
  { code: 'EN', flagEnIcon, label: 'EN' },
  { code: 'FR', flagFrIcon, label: 'FR' },
];

const Menu: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const selectLanguage = (language: typeof languages[0]) => {
    setSelectedLanguage(language);
    setLanguageMenuOpen(false);
  };

  const openAuthModal = () => {
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  return (
    <nav className="menu">
      <div className="menu__logo">
        <a href="https://sportrec-lime.vercel.app/">
          <img src={logo} alt="SportRec Logo" />
        </a>
      </div>
      <div className={`menu__links ${isMobileMenuOpen ? 'menu__links--open' : ''}`}>
        <button className="menu__close-button" onClick={closeMobileMenu}>
          <img src={closeIcon} alt="Close Menu" />
        </button>
        <Link className="menu__link" to="/" onClick={closeMobileMenu}>
          <img src={homeIcon} alt="Home" /> Лента
        </Link>
        <Link className="menu__link" to="/marketplace" onClick={closeMobileMenu}>
          <img src={shoppingBagIcon} alt="Marketplace" /> Маркетплейс
        </Link>
        <Link className="menu__link" to="/ratings" onClick={closeMobileMenu}>
          <img src={usersIcon} alt="Ratings" /> Рейтинги
        </Link>
        <Link className="menu__link" to="/competitions" onClick={closeMobileMenu}>
          <img src={trophyIcon} alt="Competitions" /> Соревнования
        </Link>
        <Link className="menu__link" to="/organizations" onClick={closeMobileMenu}>
          <img src={buildingIcon} alt="Organizations" /> Организации
        </Link>
        <Link className="menu__link" to="/live" onClick={closeMobileMenu}>
          <img src={signalIcon} alt="Live" /> Live
        </Link>
      </div>
      <div className="menu__extras-container">
        <div className={`menu__extras ${isLanguageMenuOpen ? 'menu__language--open' : ''}`}>
          <div className="menu__extra menu__language" onClick={toggleLanguageMenu}>
            <img src={selectedLanguage.flag} alt={`Flag ${selectedLanguage.label}`} />
            <span>{selectedLanguage.label}</span>
            <img src={arrowDownIcon} alt="Arrow Down" />
            <div className="menu__language-dropdown">
              {languages.map((language) => (
                <a
                  key={language.code}
                  className="menu__language-option"
                  href="#"
                  onClick={() => selectLanguage(language)}
                >
                  <img src={language.flag} alt={`Flag ${language.label}`} />
                  {language.label}
                </a>
              ))}
            </div>
          </div>
          <a className="menu__extra" href="#" onClick={openAuthModal}>
            <img src={avatarIcon} alt="Avatar" />
          </a>
        </div>
      </div>
      <div className="menu__burger" onClick={toggleMobileMenu}>
        <img src={burgerIcon} alt="Menu" />
      </div>
      <AuthModal isOpen={isAuthModalOpen} onRequestClose={closeAuthModal} />
    </nav>
  );
};

export default Menu;
