import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useTheme } from '../../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode, isSidebarCollapsed, toggleSidebar } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        {/* Navbar */}
        <Navbar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
        
        {/* Page Content */}
        <div className="pt-16 p-6">
          {children}
        </div>
      </div>
      
      {/* Mobile Sidebar Overlay */}
      <div 
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity lg:hidden ${isSidebarCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      />
    </div>
  );
};

export default Layout;