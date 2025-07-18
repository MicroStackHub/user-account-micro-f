
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import EarningsChart from '../components/Charts/EarningsChart';
import ConversionChart from '../components/Charts/ConversionChart';

const Dashboard: React.FC = () => {
  const { theme } = useTheme();

  const stats = [
    {
      label: 'Total Earnings',
      value: '$12,549',
      change: '+12.5%',
      trend: 'up',
      icon: '💰',
      description: 'All time earnings'
    },
    {
      label: 'This Month',
      value: '$3,234',
      change: '+8.1%',
      trend: 'up',
      icon: '📅',
      description: 'Current month earnings'
    },
    {
      label: 'Total Referrals',
      value: '1,234',
      change: '+15.2%',
      trend: 'up',
      icon: '👥',
      description: 'All referrals made'
    },
    {
      label: 'Active Referrals',
      value: '856',
      change: '+5.8%',
      trend: 'up',
      icon: '✅',
      description: 'Currently active'
    },
    {
      label: 'Conversion Rate',
      value: '4.2%',
      change: '+2.1%',
      trend: 'up',
      icon: '📊',
      description: 'Recent conversion'
    },
    {
      label: 'Avg Order Value',
      value: '$185',
      change: '-3.2%',
      trend: 'down',
      icon: '💳',
      description: 'Average purchase amount'
    }
  ];

  const timeFilters = ['7 Days', '30 Days', '90 Days', '1 Year'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Affiliate Dashboard
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Track your affiliate performance and earnings
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center space-x-3">
          {timeFilters.map((filter, index) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                index === 1
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Analytics Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                    <span className="text-xl">{stat.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-sm font-medium ${
                  stat.trend === 'up' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                }`}>
                  <svg 
                    className={`w-4 h-4 ${stat.trend === 'up' ? 'rotate-0' : 'rotate-180'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{stat.change}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EarningsChart />
        <ConversionChart />
      </div>

      {/* Earnings Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Earnings Overview</h2>
          <div className="flex space-x-2">
            {['Earnings', 'Commissions', 'Bonuses', 'Referrals'].map((tab, index) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Commission Earnings</h3>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-2">
              <div className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
              <span>$9,412 earned</span>
              <span>Goal: $12,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
