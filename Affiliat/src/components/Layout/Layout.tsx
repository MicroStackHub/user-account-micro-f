
import React, { useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, isSidebarCollapsed } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        isSidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <Navbar />
        <main className="flex-1 p-6 lg:p-8 overflow-hidden">
          <div className="h-full w-full max-w-none">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
