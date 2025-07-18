
import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import EarningsChart from '../Charts/EarningsChart';

interface AnalyticsData {
  totalEarnings: number;
  thisMonthEarnings: number;
  totalReferrals: number;
  activeReferrals: number;
  conversionRate: number;
  averageOrderValue: number;
  commissionsEarned: number;
  bonusEarnings: number;
}

const Analytics: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalEarnings: 12450.75,
    thisMonthEarnings: 2840.50,
    totalReferrals: 156,
    activeReferrals: 89,
    conversionRate: 24.5,
    averageOrderValue: 187.65,
    commissionsEarned: 8920.30,
    bonusEarnings: 3530.45
  });

  const getStatsCards = () => [
    {
      title: 'Total Earnings',
      value: `$${analyticsData.totalEarnings.toLocaleString()}`,
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: '💰',
      description: 'All-time earnings'
    },
    {
      title: 'This Month',
      value: `$${analyticsData.thisMonthEarnings.toLocaleString()}`,
      change: '+8.3%',
      changeType: 'positive' as const,
      icon: '📈',
      description: 'Current month earnings'
    },
    {
      title: 'Total Referrals',
      value: analyticsData.totalReferrals.toString(),
      change: '+15.2%',
      changeType: 'positive' as const,
      icon: '👥',
      description: 'All referrals made'
    },
    {
      title: 'Active Referrals',
      value: analyticsData.activeReferrals.toString(),
      change: '+5.8%',
      changeType: 'positive' as const,
      icon: '✅',
      description: 'Currently active referrals'
    },
    {
      title: 'Conversion Rate',
      value: `${analyticsData.conversionRate}%`,
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: '🎯',
      description: 'Referral to sale conversion'
    },
    {
      title: 'Avg Order Value',
      value: `$${analyticsData.averageOrderValue}`,
      change: '-3.2%',
      changeType: 'negative' as const,
      icon: '🛒',
      description: 'Average purchase amount'
    }
  ];

  const quickActions = [
    { 
      title: 'Generate Referral Link', 
      description: 'Create a new referral link',
      icon: '🔗',
      color: 'blue',
      action: () => console.log('Generate link')
    },
    { 
      title: 'View Payout History', 
      description: 'Check your payment history',
      icon: '💳',
      color: 'green',
      action: () => console.log('View payouts')
    },
    { 
      title: 'Marketing Materials', 
      description: 'Download promotional content',
      icon: '📋',
      color: 'purple',
      action: () => console.log('Marketing materials')
    },
    { 
      title: 'Performance Report', 
      description: 'Generate detailed analytics',
      icon: '📊',
      color: 'orange',
      action: () => console.log('Generate report')
    }
  ];

  const getColorClasses = (type: 'positive' | 'negative') => {
    return type === 'positive' 
      ? 'text-green-600 dark:text-green-400' 
      : 'text-red-600 dark:text-red-400';
  };

  const getButtonColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-500 hover:bg-blue-600',
      green: 'bg-green-500 hover:bg-green-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      orange: 'bg-orange-500 hover:bg-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Analytics Overview
        </h2>
        <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          {(['7d', '30d', '90d', '1y'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                timeRange === range
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : range === '90d' ? '90 Days' : '1 Year'}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getStatsCards().map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg border ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-200'
            } hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${getColorClasses(stat.changeType)}`}>
                  {stat.change}
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {stat.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EarningsChart />
        
        {/* Performance Breakdown */}
        <div className={`p-6 rounded-lg border ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Performance Breakdown
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Commission Earnings</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ${analyticsData.commissionsEarned.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full" 
                style={{ width: '72%' }}
              ></div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Bonus Earnings</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                ${analyticsData.bonusEarnings.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: '28%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`p-6 rounded-lg border ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className={`p-4 rounded-lg border text-left transition-all hover:shadow-md ${
                isDarkMode
                  ? 'border-gray-600 hover:border-gray-500 bg-gray-750'
                  : 'border-gray-200 hover:border-gray-300 bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-xl">{action.icon}</span>
                <span className={`w-2 h-2 rounded-full ${getButtonColor(action.color)}`}></span>
              </div>
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                {action.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {action.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
