import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  description?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon, 
  description 
}) => {
  const { isDarkMode, colorScheme } = useTheme();

  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-green-600 dark:text-green-400';
    if (changeType === 'negative') return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  const getAccentColor = () => {
    switch (colorScheme) {
      case 'blue': return 'text-blue-600 dark:text-blue-400';
      case 'green': return 'text-green-600 dark:text-green-400';
      case 'purple': return 'text-purple-600 dark:text-purple-400';
      case 'red': return 'text-red-600 dark:text-red-400';
      default: return 'text-blue-600 dark:text-blue-400';
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm hover:shadow-md transition-all duration-200 p-6 group`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-3">
            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} mr-3 group-hover:scale-110 transition-transform duration-200`}>
              <div className={getAccentColor()}>
                {icon}
              </div>
            </div>
            <div>
              <h3 className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</h3>
            </div>
          </div>

          <div className="mb-2">
            <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{value}</p>
            {description && (
              <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'} mt-1`}>{description}</p>
            )}
          </div>

          {change && (
            <div className={`flex items-center text-sm ${getChangeColor()}`}>
              <svg className={`w-4 h-4 mr-1 ${changeType === 'negative' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              {change}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface QuickActionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  color?: 'blue' | 'green' | 'purple' | 'red';
}

const QuickAction: React.FC<QuickActionProps> = ({ title, description, icon, onClick, color = 'blue' }) => {
  const { isDarkMode } = useTheme();

  const getColorClasses = () => {
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30',
      green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30',
      purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30',
      red: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30'
    };
    return colors[color];
  };

  return (
    <button
      onClick={onClick}
      className={`${isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-50'} border rounded-xl p-6 text-left transition-all duration-200 w-full group shadow-sm hover:shadow-md`}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${getColorClasses()} group-hover:scale-110 transition-transform duration-200`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-1`}>{title}</h3>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
        </div>
        <svg className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} group-hover:translate-x-1 transition-transform duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

interface RecentActivityItemProps {
  title: string;
  description: string;
  time: string;
  type: 'success' | 'warning' | 'info' | 'error';
}

const RecentActivityItem: React.FC<RecentActivityItemProps> = ({ title, description, time, type }) => {
  const { isDarkMode } = useTheme();

  const getTypeColor = () => {
    const colors = {
      success: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
      warning: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
      info: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
      error: 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
    };
    return colors[type];
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
          </svg>
        );
      case 'info':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
        );
      case 'error':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        );
    }
  };

  return (
    <div className={`${isDarkMode ? 'border-gray-700' : 'border-gray-200'} border-b last:border-b-0 py-4`}>
      <div className="flex items-start space-x-3">
        <div className={`p-2 rounded-full ${getTypeColor()}`}>
          {getTypeIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{description}</p>
          <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mt-2`}>{time}</p>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const { isDarkMode, colorScheme } = useTheme();

  const getAccentColor = () => {
    switch (colorScheme) {
      case 'blue': return 'text-blue-600 dark:text-blue-400';
      case 'green': return 'text-green-600 dark:text-green-400';
      case 'purple': return 'text-purple-600 dark:text-purple-400';
      case 'red': return 'text-red-600 dark:text-red-400';
      default: return 'text-blue-600 dark:text-blue-400';
    }
  };

  const metrics = [
    {
      title: 'Total Users',
      value: '12,480',
      change: '+12.5% from last month',
      changeType: 'positive' as const,
      description: 'Active platform users',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 7c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 2.76 2.24 5 5 5s5-2.24 5-5zm-5 7c-3.31 0-10 1.67-10 5v3h20v-3c0-3.33-6.69-5-10-5z"/>
        </svg>
      )
    },
    {
      title: 'Revenue',
      value: '$84,340',
      change: '+8.2% from last month',
      changeType: 'positive' as const,
      description: 'Monthly revenue',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      )
    },
    {
      title: 'Orders',
      value: '2,847',
      change: '+15.3% from last month',
      changeType: 'positive' as const,
      description: 'Total orders processed',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h5c.55 0 1 .45 1 1s-.45 1-1 1h-1v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6H2c-.55 0-1-.45-1-1s.45-1 1-1h5z"/>
        </svg>
      )
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+0.5% from last month',
      changeType: 'positive' as const,
      description: 'Visitor to customer conversion',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      )
    }
  ];

  const quickActions = [
    {
      title: 'Create New Project',
      description: 'Start a new project with templates',
      color: 'blue' as const,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
      ),
      onClick: () => console.log('Create project')
    },
    {
      title: 'View Analytics',
      description: 'Check detailed analytics and reports',
      color: 'green' as const,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>
        </svg>
      ),
      onClick: () => console.log('View analytics')
    },
    {
      title: 'Team Management',
      description: 'Manage team members and permissions',
      color: 'purple' as const,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7h-3A1.5 1.5 0 0 0 14.04 8.37L11.5 16H14v6h6zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9.5l-2.54-7.63A1.5 1.5 0 0 0 5.5 6h-3A1.5 1.5 0 0 0 1.04 7.37L-1.5 15H1v7h6.5z"/>
        </svg>
      ),
      onClick: () => console.log('Team management')
    },
    {
      title: 'Settings',
      description: 'Configure system and user preferences',
      color: 'red' as const,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
        </svg>
      ),
      onClick: () => console.log('Settings')
    }
  ];

  const recentActivities = [
    {
      title: 'New user registration',
      description: 'John Doe has joined the platform',
      time: '2 minutes ago',
      type: 'success' as const
    },
    {
      title: 'System update completed',
      description: 'Version 2.1.0 has been deployed successfully',
      time: '1 hour ago',
      type: 'info' as const
    },
    {
      title: 'Payment processing issue',
      description: 'Order #12345 payment failed and requires attention',
      time: '3 hours ago',
      type: 'warning' as const
    },
    {
      title: 'Backup completed',
      description: 'Daily database backup finished successfully',
      time: '6 hours ago',
      type: 'success' as const
    }
  ];

  return (
    <div className="dashboard-container space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
            Dashboard Overview
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <div className={`inline-flex items-center px-4 py-2 rounded-lg border shadow-sm ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
            <svg className={`w-5 h-5 mr-2 ${getAccentColor()}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {new Date().toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm p-6`}>
            <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <QuickAction key={index} {...action} />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-1">
          <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm p-6`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Recent Activity
              </h2>
              <button className={`text-sm ${getAccentColor()} hover:underline font-medium`}>
                View All
              </button>
            </div>
            <div className="space-y-0">
              {recentActivities.map((activity, index) => (
                <RecentActivityItem key={index} {...activity} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart Section */}
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm p-6`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Performance Overview
          </h2>
          <select className={`${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-200 text-gray-700'} border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>

        {/* Simple Chart Visualization */}
        <div className={`h-64 w-full rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} p-4 flex items-end space-x-2`}>
          {[65, 78, 52, 89, 95, 77, 88, 92, 85, 79, 91, 96, 84, 87].map((height, index) => (
            <div
              key={index}
              className={`flex-1 rounded-t transition-all duration-300 hover:opacity-80 ${
                colorScheme === 'blue' ? 'bg-blue-500' :
                colorScheme === 'green' ? 'bg-green-500' :
                colorScheme === 'purple' ? 'bg-purple-500' :
                'bg-red-500'
              }`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;