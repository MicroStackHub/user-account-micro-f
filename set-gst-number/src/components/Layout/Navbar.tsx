
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface NavbarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isCollapsed, toggleSidebar }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <nav
      className={`fixed top-0 right-0 z-20 transition-all duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} ${isCollapsed ? 'left-16' : 'left-64'} h-16 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}
    >
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left side - Mobile menu toggle */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-md ${isDarkMode ? 'hover:bg-gray-200 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
            aria-label="Toggle sidebar"
          >
            <svg className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Center - Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <NavItem text="GST Settings" isActive />
          <NavItem text="Tax Configuration" hasDropdown />
          <NavItem text="Business Setup" hasDropdown />
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'} transition-colors`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center focus:outline-none"
              aria-label="User menu"
            >
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-transparent hover:border-blue-500 transition-all"
                />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white dark:border-gray-900"></div>
              </div>
            </button>

            {showUserMenu && (
              <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-20 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium">Business Owner</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">business@example.com</p>
                </div>
                <a href="#" className={`block px-4 py-2 text-sm ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  Profile
                </a>
                <a href="#" className={`block px-4 py-2 text-sm ${isDarkMode ? 'hover:bg-gray-700 text-red-400' : 'hover:bg-gray-100 text-red-600'}`}>
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  text: string;
  isActive?: boolean;
  hasDropdown?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ text, isActive = false, hasDropdown = false }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="relative group">
      <button
        className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200 ${isActive
          ? isDarkMode
            ? 'bg-blue-600 text-white shadow-sm'
            : 'bg-blue-100 text-blue-700 shadow-sm'
          : isDarkMode
            ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
      >
        {text}
        {hasDropdown && (
          <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Navbar;
