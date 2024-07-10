import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import MarketplacePage from './pages/MarketplacePage/MarketplacePage';
import RatingsPage from './pages/RatingsPage/RatingsPage';
import CompetitionsPage from './pages/CompetitionsPage/CompetitionsPage';
import OrganizationsPage from './pages/OrganizationsPage/OrganizationsPage';
import OrganizationDetailPage from './pages/OrganizationDetailPage/OrganizationDetailPage';
import LivePage from './pages/LivePage/LivePage';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import AuthModal from './components/Auth/AuthModal';

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
          <Route path="/organizations/:id" element={<OrganizationDetailPage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/users/:id" element={<UserDashboard />} />
        </Routes>
        <AuthModal isOpen={false} onRequestClose={() => {}} />
      </div>
    </Router>
  );
}

export default App;
