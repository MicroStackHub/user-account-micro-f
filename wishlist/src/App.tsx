import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Wishlist Application</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Your personalized wishlist management system</p>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;