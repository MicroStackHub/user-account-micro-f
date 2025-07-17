
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const { isDarkMode } = useTheme();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      
      <main 
        className={`transition-all duration-300 ${isSidebarCollapsed ? 'ml-16' : 'ml-64'} min-h-screen`}
      >
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
