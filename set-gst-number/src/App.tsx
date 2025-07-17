
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import GSTINForm from './components/GSTINForm';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <GSTINForm />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
