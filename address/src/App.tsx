
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import AddressPage from './components/AddressPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <AddressPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
