import React from 'react';
import { useTheme, useColorScheme } from '../contexts/ThemeContext';
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  LinkIcon,
  ChartBarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon,
  MousePointerClickIcon
} from '@heroicons/react/24/outline';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ComponentType<{ className?: string }>;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, icon: Icon }) => {
  const { getColorClasses } = useColorScheme();

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
          <div className="flex items-center mt-2">
            {trend === 'up' ? (
              <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <ArrowDownIcon className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${
              trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {change}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-2xl ${getColorClasses('primary')} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${getColorClasses('text')}`} />
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Earnings',
      value: '$2,847.52',
      change: '+12.5%',
      trend: 'up' as const,
      icon: CurrencyDollarIcon,
    },
    {
      title: 'Active Referrals',
      value: '156',
      change: '+8.2%',
      trend: 'up' as const,
      icon: UserGroupIcon,
    },
    {
      title: 'Clicks This Month',
      value: '1,247',
      change: '-3.1%',
      trend: 'down' as const,
      icon: MousePointerClickIcon,
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+0.8%',
      trend: 'up' as const,
      icon: ChartBarIcon,
    },
  ];

  const recentReferrals = [
    { id: 1, name: 'John Smith', email: 'john@example.com', earnings: '$25.00', date: 'Today' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', earnings: '$15.50', date: 'Yesterday' },
    { id: 3, name: 'Mike Wilson', email: 'mike@example.com', earnings: '$32.75', date: '2 days ago' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', earnings: '$18.25', date: '3 days ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome back! Here's what's happening with your affiliate program.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-fade-in-up">
        {stats.map((stat, index) => (
          <div key={stat.title} style={{ animationDelay: `${index * 100}ms` }}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Earnings Chart */}
        <div className="card animate-fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Earnings Overview</h3>
            <select className="form-input text-sm py-2 px-3 w-auto">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Chart placeholder - earnings data</p>
          </div>
        </div>

        {/* Recent Referrals */}
        <div className="card animate-fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Referrals</h3>
            <button className="btn-ghost text-sm py-2 px-3">View All</button>
          </div>
          <div className="space-y-4">
            {recentReferrals.map((referral) => (
              <div key={referral.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-primary to-red-hover rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {referral.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{referral.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{referral.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">{referral.earnings}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{referral.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card animate-fade-in-up">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="btn-secondary flex items-center justify-center space-x-2 py-4">
            <LinkIcon className="w-5 h-5" />
            <span>Generate Link</span>
          </button>
          <button className="btn-secondary flex items-center justify-center space-x-2 py-4">
            <UserGroupIcon className="w-5 h-5" />
            <span>Invite Friends</span>
          </button>
          <button className="btn-secondary flex items-center justify-center space-x-2 py-4">
            <ChartBarIcon className="w-5 h-5" />
            <span>View Analytics</span>
          </button>
          <button className="btn-secondary flex items-center justify-center space-x-2 py-4">
            <EyeIcon className="w-5 h-5" />
            <span>Track Performance</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
```

```text
The Dashboard component has been updated with the new code provided in the changes snippet.
```