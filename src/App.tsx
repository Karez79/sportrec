import React from 'react';
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
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/ratings" element={<RatingsPage />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
          <Route path="/organizations" element={<OrganizationsPage />} />
          <Route path="/live" element={<LivePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
