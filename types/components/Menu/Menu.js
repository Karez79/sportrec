import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Menu/Menu.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
import AuthModal from '../Auth/AuthModal';
const languages = [
    { code: 'RU', flag: flagRuIcon, label: 'RU' },
    { code: 'EN', flagEnIcon, label: 'EN' },
    { code: 'FR', flagFrIcon, label: 'FR' },
];
const Menu = () => {
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
    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setLanguageMenuOpen(false);
    };
    return (_jsxs("nav", { className: "menu", children: [_jsx("div", { className: "menu__logo", children: _jsx("a", { href: "https://karez79.github.io/sportrec/", children: _jsx("img", { src: logo, alt: "SportRec Logo" }) }) }), _jsxs("div", { className: `menu__links ${isMobileMenuOpen ? 'menu__links--open' : ''}`, children: [_jsx("button", { className: "menu__close-button", onClick: closeMobileMenu, children: _jsx("img", { src: closeIcon, alt: "Close Menu" }) }), _jsxs(Link, { className: "menu__link", to: "/", onClick: closeMobileMenu, children: [_jsx("img", { src: homeIcon, alt: "Home" }), " \u041B\u0435\u043D\u0442\u0430"] }), _jsxs(Link, { className: "menu__link", to: "/marketplace", onClick: closeMobileMenu, children: [_jsx("img", { src: shoppingBagIcon, alt: "Marketplace" }), " \u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441"] }), _jsxs(Link, { className: "menu__link", to: "/ratings", onClick: closeMobileMenu, children: [_jsx("img", { src: usersIcon, alt: "Ratings" }), " \u0420\u0435\u0439\u0442\u0438\u043D\u0433\u0438"] }), _jsxs(Link, { className: "menu__link", to: "/competitions", onClick: closeMobileMenu, children: [_jsx("img", { src: trophyIcon, alt: "Competitions" }), " \u0421\u043E\u0440\u0435\u0432\u043D\u043E\u0432\u0430\u043D\u0438\u044F"] }), _jsxs(Link, { className: "menu__link", to: "/organizations", onClick: closeMobileMenu, children: [_jsx("img", { src: buildingIcon, alt: "Organizations" }), " \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"] }), _jsxs(Link, { className: "menu__link", to: "/live", onClick: closeMobileMenu, children: [_jsx("img", { src: signalIcon, alt: "Live" }), " Live"] })] }), _jsx("div", { className: "menu__extras-container", children: _jsxs("div", { className: `menu__extras ${isLanguageMenuOpen ? 'menu__language--open' : ''}`, children: [_jsxs("div", { className: "menu__extra menu__language", onClick: toggleLanguageMenu, children: [_jsx("img", { src: selectedLanguage.flag, alt: `Flag ${selectedLanguage.label}` }), _jsx("span", { children: selectedLanguage.label }), _jsx("img", { src: arrowDownIcon, alt: "Arrow Down" }), isLanguageMenuOpen && (_jsx("div", { className: "menu__language-dropdown", children: languages.map((language) => (_jsxs("div", { className: "menu__language-option", onClick: () => selectLanguage(language), children: [_jsx("img", { src: language.flag, alt: `Flag ${language.label}` }), language.label] }, language.code))) }))] }), _jsx("div", { className: "menu__extra", onClick: () => setAuthModalOpen(true), children: _jsx("img", { src: avatarIcon, alt: "Avatar" }) })] }) }), _jsx("div", { className: "menu__burger", onClick: toggleMobileMenu, children: _jsx("img", { src: burgerIcon, alt: "Menu" }) }), _jsx(AuthModal, { isOpen: isAuthModalOpen, onRequestClose: () => setAuthModalOpen(false) })] }));
};
export default Menu;
