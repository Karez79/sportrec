import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
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
  const navigate = useNavigate();

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

  const handleProfileClick = async () => {
    const userString = localStorage.getItem('user');
    if (!userString) {
      console.error('User not found in localStorage.');
      openAuthModal();
      return;
    }

    try {
      const user = JSON.parse(userString);
      console.log('User from localStorage:', user);

      if (user && user.id) {
        const { data: userDetails, error: userDetailsError } = await supabase
          .from('users')
          .select('id, email, organization_id')
          .eq('id', user.id)
          .single();

        if (userDetailsError) {
          console.error('Error fetching user details:', userDetailsError);
          return;
        }

        if (!userDetails) {
          console.error('User not found in database.');
          return;
        }

        console.log('User details from DB:', userDetails);

        const organizationId = userDetails.organization_id;
        if (organizationId) {
          console.log(`Organization user with email: ${userDetails.email}`);
          navigate(`/organizations/${organizationId}`);
        } else {
          console.log(`Regular user with email: ${userDetails.email}`);
          navigate(`/users/${userDetails.id}`);
        }
      }
    } catch (error) {
      console.error('Unexpected error fetching user details:', error);
    }
  };

  return (
    <>
      <nav className="menu">
        <div className="menu__logo">
          <a href="/">
            <img src={logo} alt="SportRec Logo" />
          </a>
        </div>
        <div className={`menu__links ${isMobileMenuOpen ? 'menu__links--open' : ''}`}>
          <button className="menu__close-button" onClick={closeMobileMenu}>
            <img src={closeIcon} alt="Close Menu" />
          </button>
          <a className="menu__link" href="/" onClick={closeMobileMenu}>
            <img src={homeIcon} alt="Home" /> Лента
          </a>
          <a className="menu__link" href="/marketplace" onClick={closeMobileMenu}>
            <img src={shoppingBagIcon} alt="Marketplace" /> Маркетплейс
          </a>
          <a className="menu__link" href="/ratings" onClick={closeMobileMenu}>
            <img src={usersIcon} alt="Ratings" /> Рейтинги
          </a>
          <a className="menu__link" href="/competitions" onClick={closeMobileMenu}>
            <img src={trophyIcon} alt="Competitions" /> Соревнования
          </a>
          <a className="menu__link" href="/organizations" onClick={closeMobileMenu}>
            <img src={buildingIcon} alt="Organizations" /> Организации
          </a>
          <a className="menu__link" href="/live" onClick={closeMobileMenu}>
            <img src={signalIcon} alt="Live" /> Live
          </a>
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
            <a className="menu__extra" href="#" onClick={handleProfileClick}>
              <img src={avatarIcon} alt="Profile" />
            </a>
          </div>
          <button className="menu__burger" onClick={toggleMobileMenu}>
            <img src={burgerIcon} alt="Burger Icon" />
          </button>
        </div>
      </nav>
      <AuthModal isOpen={isAuthModalOpen} onRequestClose={closeAuthModal} />
    </>
  );
};

export default Menu;
