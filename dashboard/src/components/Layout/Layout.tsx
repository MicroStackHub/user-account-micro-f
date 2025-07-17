import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useTheme } from '../../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode, isSidebarCollapsed, toggleSidebar, colorScheme } = useTheme();

  // Apply dark class to body for global styling
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    
    // Apply color scheme class
    document.body.dataset.colorScheme = colorScheme;
    
    return () => {
      document.body.classList.remove('dark');
      delete document.body.dataset.colorScheme;
    };
  }, [isDarkMode, colorScheme]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'ml-16 sm:ml-20' : 'ml-16 sm:ml-64'}`}>
        {/* Navbar */}
        <Navbar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
        
        {/* Page Content */}
        <div className="pt-20 px-4 sm:px-6 md:px-8 pb-10">
          <main className="max-w-7xl mx-auto">
            {children}
          </main>
        </div>
      </div>
      
      {/* Mobile Sidebar Overlay */}
      <div 
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-black bg-opacity-60 z-20 transition-opacity lg:hidden ${isSidebarCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      />
    </div>
  );
};

export default Layout;