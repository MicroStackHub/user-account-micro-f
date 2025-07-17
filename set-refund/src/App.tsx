
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import RefundPage from './components/RefundPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <RefundPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
