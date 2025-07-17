
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { sidebarConfig } from '../../config/sidebarConfig';
import type { MenuItem, SubMenuItem } from '../../config/sidebarConfig';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

interface SidebarItemProps extends MenuItem {
  isCollapsed: boolean;
}

const SidebarHeading: React.FC<{ text: string; isCollapsed: boolean }> = ({ text, isCollapsed }) => {
  const { isDarkMode } = useTheme();

  if (isCollapsed) return null;

  return (
    <div className={`px-4 py-2 mt-6 mb-2 text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
      {text}
    </div>
  );
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  isActive = false,
  isCollapsed,
  onClick,
  hasSubMenu = false,
  subMenuItems = [],
  badge
}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const { isDarkMode, colorScheme } = useTheme();

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasSubMenu && !isCollapsed) {
      setIsSubMenuOpen(!isSubMenuOpen);
    }
  };

  const handleItemClick = () => {
    if (onClick) {
      onClick();
    }
    if (hasSubMenu && !isCollapsed) {
      setIsSubMenuOpen(!isSubMenuOpen);
    }
  };

  const getActiveColor = () => {
    if (isDarkMode) {
      switch (colorScheme) {
        case 'blue': return 'bg-blue-600 text-white shadow-lg';
        case 'green': return 'bg-green-600 text-white shadow-lg';
        case 'purple': return 'bg-purple-600 text-white shadow-lg';
        case 'red': return 'bg-red-600 text-white shadow-lg';
        default: return 'bg-blue-600 text-white shadow-lg';
      }
    } else {
      switch (colorScheme) {
        case 'blue': return 'bg-blue-100 text-blue-800 shadow-sm';
        case 'green': return 'bg-green-100 text-green-800 shadow-sm';
        case 'purple': return 'bg-purple-100 text-purple-800 shadow-sm';
        case 'red': return 'bg-red-100 text-red-800 shadow-sm';
        default: return 'bg-blue-100 text-blue-800 shadow-sm';
      }
    }
  };

  return (
    <div className="mb-1 group relative">
      <div
        onClick={handleItemClick}
        className={`flex items-center ${isCollapsed ? 'justify-center px-2' : 'px-4'} py-3 rounded-lg cursor-pointer transition-all duration-200 ${isActive
          ? getActiveColor()
          : isDarkMode
            ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
            : 'text-gray-700 hover:bg-gray-100'}`}
      >
        <div className={`flex-shrink-0 ${isActive ? '' : isDarkMode ? 'text-gray-400' : 'text-gray-500'} ${isCollapsed ? 'w-5 h-5' : ''}`}>
          {icon}
        </div>
        {!isCollapsed && (
          <div className="ml-3 flex-grow flex justify-between items-center">
            <span className="font-medium text-sm">
              {text}
            </span>
            <div className="flex items-center space-x-2">
              {badge && (
                <span className={`px-2 py-1 text-xs rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                  {badge}
                </span>
              )}
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
          </div>
        )}
      </div>

      {isCollapsed && (
        <div className="absolute left-full ml-2 top-0 z-50 w-auto p-2 rounded-md shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className={`px-3 py-2 rounded-md text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-900 border border-gray-200 shadow-lg'}`}>
            {text}
            {badge && <span className="ml-2 text-xs opacity-75">{badge}</span>}
          </div>
        </div>
      )}

      {hasSubMenu && !isCollapsed && isSubMenuOpen && (
        <div className={`ml-8 mt-1 space-y-1 rounded-md overflow-hidden ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {subMenuItems.map((item, index) => (
            <a
              href={item.path}
              key={index}
              className={`py-2 px-3 block text-sm cursor-pointer transition-colors rounded-md ${isDarkMode ? 'hover:bg-gray-800 hover:text-white' : 'hover:bg-gray-100'}`}
              onClick={item.onClick}
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

  const getAccentColor = () => {
    switch (colorScheme) {
      case 'blue': return 'text-blue-500';
      case 'green': return 'text-green-500';
      case 'purple': return 'text-purple-500';
      case 'red': return 'text-red-500';
      default: return 'text-blue-500';
    }
  };

  const renderSidebarItems = () => {
    return sidebarConfig.map((item) => {
      if (item.type === 'heading') {
        return (
          <SidebarHeading 
            key={item.id} 
            text={item.text} 
            isCollapsed={isCollapsed} 
          />
        );
      }
      
      return (
        <SidebarItem
          key={item.id}
          {...item}
          isCollapsed={isCollapsed}
        />
      );
    });
  };

  return (
    <div
      className={`sidebar h-screen fixed left-0 top-0 z-30 transition-all duration-300 ease-in-out ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isCollapsed ? 'w-16' : 'w-64'} border-r ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} shadow-lg`}
    >
      <div className={`flex items-center ${isCollapsed ? 'justify-center px-2' : 'justify-between px-4'} h-16 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} border-b`}>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className={`w-8 h-8 ${getAccentColor()}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9C4,7.89 4.89,7 6,7H7V9H6V21H18V9H17V7H18C19.1,7 20,7.89 20,9V21C20,22.1 19.1,23 18,23Z"/>
            </svg>
          </div>
          {!isCollapsed && (
            <span className="ml-2 text-xl font-bold tracking-wide">
              REFUNDS
            </span>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className={`p-1.5 rounded-md ${isDarkMode ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'} focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all ${isCollapsed ? 'hidden lg:block' : ''}`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isCollapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            )}
          </svg>
        </button>
      </div>

      <div className={`${isCollapsed ? 'p-2' : 'p-4'} overflow-y-auto h-[calc(100vh-4rem)]`}>
        <div className="space-y-1">
          {renderSidebarItems()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
