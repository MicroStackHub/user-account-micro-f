
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { theme, toggleTheme, colorScheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 z-20 backdrop-blur-sm bg-white/95 dark:bg-gray-800/95 shadow-sm">
      <div className="flex items-center justify-between w-full">
        {/* Quick Navigation Pills */}
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          <Link 
            to="/dashboard" 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${location.pathname === '/dashboard' || location.pathname === '/' 
              ? `bg-${colorScheme}-primary text-white shadow-sm` 
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/earnings" 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${location.pathname === '/earnings' 
              ? `bg-${colorScheme}-primary text-white shadow-sm` 
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
          >
            Earnings
          </Link>
          <Link 
            to="/analytics" 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${location.pathname === '/analytics' 
              ? `bg-${colorScheme}-primary text-white shadow-sm` 
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
          >
            Analytics
          </Link>
          <Link 
            to="/marketing" 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${location.pathname === '/marketing' 
              ? `bg-${colorScheme}-primary text-white shadow-sm` 
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
          >
            Marketing
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {/* Enhanced Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search affiliate tools..."
              className="w-80 pl-10 pr-4 py-2.5 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-gray-300 dark:focus:ring-gray-600"
            />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-${colorScheme}-primary`}
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
              <button className={`p-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-${colorScheme}-primary`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center shadow-sm shadow-red-600/50 border-2 border-white dark:border-gray-800">
                <span className="text-xs text-white font-semibold">3</span>
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
              <div className="flex flex-col text-right">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">John Doe</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Affiliate Partner</span>
              </div>
              <div className="relative">
                <div className={`w-10 h-10 bg-gradient-to-br from-${colorScheme}-primary to-${colorScheme}-secondary rounded-lg flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-sm">JD</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
