import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import AffiliateDashboard from './components/AffiliateDashboard';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AffiliateDashboard />
    </ThemeProvider>
  );
};

export default App;