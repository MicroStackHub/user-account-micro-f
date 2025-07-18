
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // colorScheme removed as it's not used
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-8 py-4 sticky top-0 z-20 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
      <div className="flex items-center justify-between max-w-none w-full">
        {/* Quick Navigation Pills */}
        <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <Link 
            to="/dashboard" 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              location.pathname === '/dashboard' || location.pathname === '/' 
                ? 'bg-red-600 text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Dashboard
          </Link>
          <Link 
            to="/earnings" 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              location.pathname === '/earnings' 
                ? 'bg-red-600 text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Earnings
          </Link>
          <Link 
            to="/analytics" 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              location.pathname === '/analytics' 
                ? 'bg-red-600 text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Analytics
          </Link>
          <Link 
            to="/marketing" 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              location.pathname === '/marketing' 
                ? 'bg-red-600 text-white shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Marketing
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          {/* Enhanced Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search affiliate tools..."
              className="w-80 pl-10 pr-4 py-2.5 text-sm border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-gray-900">
                <span className="text-xs text-white font-semibold">3</span>
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200 dark:border-gray-700">
              <div className="flex flex-col text-right">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">John Doe</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Affiliate Partner</span>
              </div>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">JD</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
