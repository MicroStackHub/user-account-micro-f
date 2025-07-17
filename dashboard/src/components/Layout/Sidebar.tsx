import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  isCollapsed: boolean;
  onClick?: () => void;
  hasSubMenu?: boolean;
  subMenuItems?: { text: string; path: string }[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  text, 
  isActive = false, 
  isCollapsed,
  onClick,
  hasSubMenu = false,
  subMenuItems = []
}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const { isDarkMode, colorScheme } = useTheme();
  
  const toggleSubMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasSubMenu) {
      setIsSubMenuOpen(!isSubMenuOpen);
    }
  };
  
  // Get active color based on color scheme
  const getActiveColor = () => {
    if (isDarkMode) {
      switch(colorScheme) {
        case 'blue': return 'bg-blue-800 text-blue-100';
        case 'green': return 'bg-green-800 text-green-100';
        case 'purple': return 'bg-purple-800 text-purple-100';
        case 'red': return 'bg-red-800 text-red-100';
        default: return 'bg-blue-800 text-blue-100';
      }
    } else {
      switch(colorScheme) {
        case 'blue': return 'bg-blue-100 text-blue-800';
        case 'green': return 'bg-green-100 text-green-800';
        case 'purple': return 'bg-purple-100 text-purple-800';
        case 'red': return 'bg-red-100 text-red-800';
        default: return 'bg-blue-100 text-blue-800';
      }
    }
  };

  return (
    <div className="mb-1 group relative">
      <div 
        onClick={onClick || toggleSubMenu}
        className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${isActive 
          ? getActiveColor()
          : isDarkMode 
            ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
            : 'text-gray-700 hover:bg-gray-100'}`}
      >
        <div className={`flex-shrink-0 ${isActive ? '' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {icon}
        </div>
        {!isCollapsed && (
          <div className="ml-3 flex-grow flex justify-between items-center">
            <span className={`${isCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 font-medium text-sm`}>
              {text}
            </span>
            {hasSubMenu && (
              <svg 
                className={`w-4 h-4 transform transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''} ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
        )}
      </div>
      
      {/* Tooltip for collapsed mode */}
      {isCollapsed && (
        <div className="absolute left-full ml-2 top-0 z-50 w-auto p-2 rounded-md shadow-lg whitespace-nowrap hidden group-hover:block">
          <div className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900 border border-gray-200'}`}>
            {text}
          </div>
        </div>
      )}
      
      {/* Submenu */}
      {hasSubMenu && !isCollapsed && isSubMenuOpen && (
        <div className={`pl-12 mt-1 space-y-1 rounded-md overflow-hidden ${isDarkMode ? 'text-gray-300 bg-gray-800' : 'text-gray-600 bg-gray-50'}`}>
          {subMenuItems.map((item, index) => (
            <a 
              href={item.path}
              key={index} 
              className={`py-2 px-3 block text-sm cursor-pointer transition-colors ${isDarkMode ? 'hover:bg-gray-700 hover:text-white' : 'hover:bg-gray-100'}`}
            >
              {item.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  const { isDarkMode, colorScheme } = useTheme();
  
  // Get color based on color scheme
  const getAccentColor = () => {
    switch(colorScheme) {
      case 'blue': return 'text-blue-500';
      case 'green': return 'text-green-500';
      case 'purple': return 'text-purple-500';
      case 'red': return 'text-red-500';
      default: return 'text-blue-500';
    }
  };
  
  return (
    <div 
      className={`sidebar h-screen fixed left-0 top-0 z-30 transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isCollapsed ? 'w-16' : 'w-64'} border-r ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} shadow-lg`}
    >
      {/* Logo */}
      <div className={`flex items-center justify-between h-16 px-4 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} border-b`}>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className={`w-8 h-8 ${getAccentColor()}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M8 12l4 4 4-4z" />
            </svg>
          </div>
          {!isCollapsed && (
            <span className="ml-2 text-xl font-semibold tracking-wide transition-opacity duration-200 ease-in-out">
              METRONIC
            </span>
          )}
        </div>
        <button 
          onClick={toggleSidebar} 
          className={`p-1 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all`}
          aria-label="Toggle sidebar"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isCollapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
        {/* Dashboards Section */}
        <div className="mb-6">
          <h3 className={`uppercase text-xs font-semibold mb-2 ${isCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Dashboards
          </h3>
          <div className="space-y-1">
            <SidebarItem 
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0 8h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm10 0h6a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm0-12h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" />
              </svg>} 
              text="Dashboard" 
              isActive={true} 
              isCollapsed={isCollapsed} 
            />
            <SidebarItem 
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-4h2v4zm0-6h-2V7h2v4z" />
              </svg>} 
              text="Light Sidebar" 
              isCollapsed={isCollapsed} 
            />
            <SidebarItem 
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-4h2v4zm0-6h-2V7h2v4z" />
              </svg>} 
              text="Dark Sidebar" 
              isCollapsed={isCollapsed} 
            />
          </div>
        </div>

        {/* User Section */}
        <div className="mb-6">
          <h3 className={`uppercase text-xs font-semibold mb-2 ${isCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            User
          </h3>
          <div className="space-y-1">
            <SidebarItem 
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>} 
              text="Public Profile" 
              isCollapsed={isCollapsed} 
              hasSubMenu={true}
              subMenuItems={[
                { text: 'Overview', path: '/profile/overview' },
                { text: 'Projects', path: '/profile/projects' },
                { text: 'Campaigns', path: '/profile/campaigns' },
              ]}
            />
            <SidebarItem 
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
              </svg>} 
              text="My Account" 
              isCollapsed={isCollapsed} 
              hasSubMenu={true}
              subMenuItems={[
                { text: 'Overview', path: '/account/overview' },
                { text: 'Settings', path: '/account/settings' },
                { text: 'Security', path: '/account/security' },
              ]}
            />
            <SidebarItem 
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>} 
              text="Network" 
              isCollapsed={isCollapsed} 
            />
            <SidebarItem 
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>} 
              text="Authentication" 
              isCollapsed={isCollapsed} 
            />
          </div>
        </div>

        {/* Apps Section */}
        <div className="mb-6">
          <h3 className={`uppercase text-xs font-semibold mb-2 ${isCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Apps
          </h3>
          <div className="space-y-1">
            <SidebarItem 
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
              </svg>} 
              text="Store - Client" 
              isCollapsed={isCollapsed} 
            />
            <SidebarItem 
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1v5zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5zm-1-4.5H17v1h-2.5v-1zM13 9H9.5v1h2v1h-2v1H13V9zm6 1.5v-1c0-.55-.45-1-1-1h-2.5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2.5c.55 0 1-.45 1-1zm-1-.5h-2.5v-1H18v1z" />
              </svg>} 
              text="Store - Admin" 
              isCollapsed={isCollapsed} 
            />
            <SidebarItem 
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z" />
              </svg>} 
              text="Store - Services" 
              isCollapsed={isCollapsed} 
            />
            <SidebarItem 
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>} 
              text="AI Prompt" 
              isCollapsed={isCollapsed} 
            />
            <SidebarItem 
              icon={<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>} 
              text="Invoice Generator" 
              isCollapsed={isCollapsed} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;