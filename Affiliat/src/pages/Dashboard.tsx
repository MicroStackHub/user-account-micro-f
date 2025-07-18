
import React from 'react';
import EarningsChart from '../components/Charts/EarningsChart';
import ConversionChart from '../components/Charts/ConversionChart';

const Dashboard: React.FC = () => {
  // We'll use useTheme in the component later when needed

  const stats = [
    {
      title: 'Total Earnings',
      value: '$12,534',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: '💰',
      description: 'All time earnings'
    },
    {
      title: 'This Month',
      value: '$3,247',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: '📈',
      description: 'Current month earnings'
    },
    {
      title: 'Total Referrals',
      value: '1,234',
      change: '+15.3%',
      changeType: 'positive' as const,
      icon: '👥',
      description: 'All referrals made'
    },
    {
      title: 'Active Referrals',
      value: '89',
      change: '+5.8%',
      changeType: 'positive' as const,
      icon: '✅',
      description: 'Currently active referrals'
    },
    {
      title: 'Conversion Rate',
      value: '4.2%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: '🎯',
      description: 'Recent conversion performance'
    },
    {
      title: 'Avg Order Value',
      value: '$127',
      change: '-3.2%',
      changeType: 'negative' as const,
      icon: '🛒',
      description: 'Average purchase amount'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Affiliate Dashboard
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Track your affiliate performance and earnings
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md">
              7 Days
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              30 Days
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              90 Days
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              1 Year
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <span className="text-xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
              </div>
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                stat.changeType === 'positive'
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                  : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
              }`}>
                <span>{stat.changeType === 'positive' ? '↗' : '↘'}</span>
                <span>{stat.change}</span>
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EarningsChart />
        <ConversionChart />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Earnings Overview */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Earnings Overview</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-red-600 text-white rounded-md">Earnings</button>
              <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Commissions</button>
              <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Bonuses</button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Commission Earnings</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Last 30 days</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900 dark:text-white">$2,847</p>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="flex items-center space-x-3">
                <span className="text-lg">🔗</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Generate New Link</span>
              </div>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="flex items-center space-x-3">
                <span className="text-lg">📊</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">View Analytics</span>
              </div>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="flex items-center space-x-3">
                <span className="text-lg">💳</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Request Payout</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
