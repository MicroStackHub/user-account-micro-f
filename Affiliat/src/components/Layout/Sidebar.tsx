
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isSidebarCollapsed, toggleSidebar, theme } = useTheme();

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/earnings', label: 'Earnings', icon: '💰' },
    { path: '/analytics', label: 'Analytics', icon: '📈' },
    { path: '/links', label: 'Affiliate Links', icon: '🔗' },
    { path: '/referrals', label: 'Referrals', icon: '👥' },
    { path: '/marketing', label: 'Marketing Tools', icon: '🛠️' },
    { path: '/payouts', label: 'Payouts', icon: '💳' },
    { path: '/profile', label: 'Profile', icon: '👤' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
    { path: '/support', label: 'Support', icon: '🎧' },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white transition-all duration-300 z-30 shadow-lg ${
      isSidebarCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className={`flex items-center space-x-3 ${isSidebarCollapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          {!isSidebarCollapsed && (
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">AFFILIATE</span>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-6">
        <div className="space-y-1 px-3">
          <div className={`text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${isSidebarCollapsed ? 'hidden' : 'px-3 mb-3'}`}>
            Overview
          </div>
          {menuItems.slice(0, 3).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/')
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-600 dark:hover:text-red-400'
              } ${isSidebarCollapsed ? 'justify-center' : 'space-x-3'}`}
              title={isSidebarCollapsed ? item.label : ''}
            >
              <span className="text-lg">{item.icon}</span>
              {!isSidebarCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </div>

        <div className="space-y-1 px-3 mt-6">
          <div className={`text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${isSidebarCollapsed ? 'hidden' : 'px-3 mb-3'}`}>
            Marketing
          </div>
          {menuItems.slice(3, 6).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                location.pathname === item.path
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-600 dark:hover:text-red-400'
              } ${isSidebarCollapsed ? 'justify-center' : 'space-x-3'}`}
              title={isSidebarCollapsed ? item.label : ''}
            >
              <span className="text-lg">{item.icon}</span>
              {!isSidebarCollapsed && <span>{item.label}</span>}
              {item.path === '/referrals' && !isSidebarCollapsed && (
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1 font-medium">12</span>
              )}
            </Link>
          ))}
        </div>

        <div className="space-y-1 px-3 mt-6">
          <div className={`text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider ${isSidebarCollapsed ? 'hidden' : 'px-3 mb-3'}`}>
            Account
          </div>
          {menuItems.slice(6).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                location.pathname === item.path
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-600 dark:hover:text-red-400'
              } ${isSidebarCollapsed ? 'justify-center' : 'space-x-3'}`}
              title={isSidebarCollapsed ? item.label : ''}
            >
              <span className="text-lg">{item.icon}</span>
              {!isSidebarCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
