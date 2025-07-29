
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isSidebarCollapsed, toggleSidebar } = useTheme(); // theme removed as it's not used

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

  const { colorScheme } = useTheme();
  
  return (
    <div className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300 ease-in-out z-30 shadow-md ${isSidebarCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <div className={`flex items-center gap-3 ${isSidebarCollapsed ? 'justify-center' : 'justify-start'}`}>
          <div style={{
            width: '2rem',
            height: '2rem',
            background: 'linear-gradient(to bottom right, #ef4444, #dc2626)',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.875rem' }}>A</span>
          </div>
          {!isSidebarCollapsed && (
            <span style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #ef4444, #dc2626)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>AFFILIATE</span>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          style={{
            padding: '0.5rem',
            borderRadius: '0.5rem',
            transition: 'background-color 0.2s ease'
          }}
        >
          <svg style={{ width: '1rem', height: '1rem' }} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <nav style={{ marginTop: '1.5rem' }}>
        <div style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: isSidebarCollapsed ? '0' : '0 0.75rem',
            marginBottom: isSidebarCollapsed ? '0' : '0.75rem',
            display: isSidebarCollapsed ? 'none' : 'block'
          }}>
            Overview
          </div>
          {menuItems.slice(0, 3).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.625rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                backgroundColor: location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/') 
                  ? '#dc2626' 
                  : 'transparent',
                color: location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/') 
                  ? 'white' 
                  : '#374151',
                boxShadow: location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/') 
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  : 'none',
                marginBottom: '0.25rem'
              }}
              title={isSidebarCollapsed ? item.label : ''}
             
             >
               <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
               {!isSidebarCollapsed && <span>{item.label}</span>}
             </Link>
          ))}

          <div style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginTop: '1.5rem',
            padding: isSidebarCollapsed ? '0' : '0 0.75rem',
            marginBottom: isSidebarCollapsed ? '0' : '0.75rem',
            display: isSidebarCollapsed ? 'none' : 'block'
          }}>
            Management
          </div>
          {menuItems.slice(3, 7).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.625rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                backgroundColor: location.pathname === item.path 
                  ? '#dc2626' 
                  : 'transparent',
                color: location.pathname === item.path 
                  ? 'white' 
                  : '#374151',
                boxShadow: location.pathname === item.path 
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  : 'none',
                marginBottom: '0.25rem',
                justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                gap: isSidebarCollapsed ? '0' : '0.75rem'
              }}
              title={isSidebarCollapsed ? item.label : ''}
            >
              <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
              {!isSidebarCollapsed && <span>{item.label}</span>}
              {item.path === '/referrals' && !isSidebarCollapsed && (
                <span style={{ 
                  marginLeft: 'auto', 
                  backgroundColor: '#ef4444', 
                  color: 'white', 
                  fontSize: '0.75rem', 
                  borderRadius: '9999px', 
                  paddingLeft: '0.5rem', 
                  paddingRight: '0.5rem', 
                  paddingTop: '0.25rem', 
                  paddingBottom: '0.25rem', 
                  fontWeight: 500 
                }}>12</span>
              )}
            </Link>
          ))}
        </div>

        <div style={{ 
          marginTop: '1.5rem', 
          paddingLeft: '0.75rem', 
          paddingRight: '0.75rem' 
        }}>
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#6b7280',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: isSidebarCollapsed ? '0' : '0 0.75rem',
            marginBottom: isSidebarCollapsed ? '0' : '0.75rem',
            display: isSidebarCollapsed ? 'none' : 'block'
          }}>
            Account
          </div>
          {menuItems.slice(6).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.625rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                backgroundColor: location.pathname === item.path 
                  ? '#dc2626' 
                  : 'transparent',
                color: location.pathname === item.path 
                  ? 'white' 
                  : '#374151',
                boxShadow: location.pathname === item.path 
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  : 'none',
                marginBottom: '0.25rem',
                justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                gap: isSidebarCollapsed ? '0' : '0.75rem'
              }}
              title={isSidebarCollapsed ? item.label : ''}
            >
              <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
              {!isSidebarCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
import React from 'react';
import { useTheme, useColorScheme } from '../../contexts/ThemeContext';
import { 
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  LinkIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  MegaphoneIcon,
  UserIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: string;
}

const sidebarItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
  { id: 'analytics', label: 'Analytics', icon: ChartBarIcon, href: '/analytics' },
  { id: 'referrals', label: 'Referrals', icon: UserGroupIcon, href: '/referrals', badge: '12' },
  { id: 'links', label: 'Affiliate Links', icon: LinkIcon, href: '/affiliate-links' },
  { id: 'earnings', label: 'Earnings', icon: CurrencyDollarIcon, href: '/earnings' },
  { id: 'payouts', label: 'Payouts', icon: BanknotesIcon, href: '/payouts' },
  { id: 'marketing', label: 'Marketing Tools', icon: MegaphoneIcon, href: '/marketing-tools' },
  { id: 'profile', label: 'Profile', icon: UserIcon, href: '/profile' },
  { id: 'settings', label: 'Settings', icon: CogIcon, href: '/settings' },
  { id: 'support', label: 'Support', icon: QuestionMarkCircleIcon, href: '/support' },
];

const Sidebar: React.FC = () => {
  const { isSidebarCollapsed, toggleSidebar, isDarkMode } = useTheme();
  const { getColorClasses } = useColorScheme();
  const [activeItem, setActiveItem] = React.useState('dashboard');

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-50 ${
        isSidebarCollapsed ? 'w-16' : 'w-64'
      }`}>
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {!isSidebarCollapsed && (
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 ${getColorClasses('primary')} rounded-lg flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">Affiliate</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Dashboard</p>
              </div>
            </div>
          )}
          
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {isSidebarCollapsed ? (
              <ChevronRightIcon className="w-5 h-5" />
            ) : (
              <ChevronLeftIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 relative group ${
                  isActive 
                    ? `${getColorClasses('primary')} text-white shadow-lg`
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSidebarCollapsed ? 'mx-auto' : ''}`} />
                
                {!isSidebarCollapsed && (
                  <>
                    <span className="font-medium text-sm">{item.label}</span>
                    {item.badge && (
                      <span className={`ml-auto px-2 py-1 text-xs rounded-full ${
                        isActive 
                          ? 'bg-white/20 text-white'
                          : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </>
                )}

                {/* Tooltip for collapsed state */}
                {isSidebarCollapsed && (
                  <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                    {item.label}
                    {item.badge && (
                      <span className="ml-2 px-2 py-1 text-xs bg-red-500 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
          <div className={`flex items-center space-x-3 p-3 rounded-xl transition-colors hover:bg-gray-100 dark:hover:bg-gray-700/50 ${
            isSidebarCollapsed ? 'justify-center' : ''
          }`}>
            <div className="w-8 h-8 bg-gradient-to-r from-red-primary to-red-hover rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">JD</span>
            </div>
            
            {!isSidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Premium Member</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
