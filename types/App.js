import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import MarketplacePage from './pages/MarketplacePage/MarketplacePage';
import RatingsPage from './pages/RatingsPage/RatingsPage';
import CompetitionsPage from './pages/CompetitionsPage/CompetitionsPage';
import OrganizationsPage from './pages/OrganizationsPage/OrganizationsPage';
import LivePage from './pages/LivePage/LivePage';
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "App", children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/marketplace", element: _jsx(MarketplacePage, {}) }), _jsx(Route, { path: "/ratings", element: _jsx(RatingsPage, {}) }), _jsx(Route, { path: "/competitions", element: _jsx(CompetitionsPage, {}) }), _jsx(Route, { path: "/organizations", element: _jsx(OrganizationsPage, {}) }), _jsx(Route, { path: "/live", element: _jsx(LivePage, {}) })] })] }) }));
}
export default App;
