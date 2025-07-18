
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="ml-64 transition-all duration-300">
        <Navbar />
        <main className="px-6 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
