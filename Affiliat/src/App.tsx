
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Earnings from './pages/Earnings';
import Analytics from './pages/Analytics';
import AffiliateLinks from './pages/AffiliateLinks';
import Referrals from './pages/Referrals';
import MarketingTools from './pages/MarketingTools';
import Payouts from './pages/Payouts';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Support from './pages/Support';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/earnings/*" element={<Earnings />} />
            <Route path="/analytics/*" element={<Analytics />} />
            <Route path="/links/*" element={<AffiliateLinks />} />
            <Route path="/referrals/*" element={<Referrals />} />
            <Route path="/marketing/*" element={<MarketingTools />} />
            <Route path="/payouts/*" element={<Payouts />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/support/*" element={<Support />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
