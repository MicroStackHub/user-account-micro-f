import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Referrals from './pages/Referrals';
import AffiliateLinks from './pages/AffiliateLinks';
import Earnings from './pages/Earnings';
import Payouts from './pages/Payouts';
import MarketingTools from './pages/MarketingTools';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Support from './pages/Support';
import './App.css';

type Page = 'dashboard' | 'analytics' | 'referrals' | 'affiliate-links' | 'earnings' | 'payouts' | 'marketing-tools' | 'profile' | 'settings' | 'support';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'referrals':
        return <Referrals />;
      case 'affiliate-links':
        return <AffiliateLinks />;
      case 'earnings':
        return <Earnings />;
      case 'payouts':
        return <Payouts />;
      case 'marketing-tools':
        return <MarketingTools />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      case 'support':
        return <Support />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Layout>
          {renderPage()}
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;