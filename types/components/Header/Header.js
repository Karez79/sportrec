import { jsx as _jsx } from "react/jsx-runtime";
import Menu from '../Menu/Menu';
import './Header.css';
const Header = () => {
    return (_jsx("header", { className: "header", children: _jsx("div", { className: "header__container", children: _jsx(Menu, {}) }) }));
};
export default Header;
