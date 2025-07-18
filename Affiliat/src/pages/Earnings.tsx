
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import EarningsChart from '../components/Charts/EarningsChart';

const CurrentMonth: React.FC = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Current Month</h3>
        <div className="text-3xl font-bold text-green-600">$2,840.5</div>
        <div className="text-sm text-green-600 mt-1">+8.3% from last month</div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Commissions</h3>
        <div className="text-3xl font-bold text-blue-600">$2,140.3</div>
        <div className="text-sm text-blue-600 mt-1">24 transactions</div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bonuses</h3>
        <div className="text-3xl font-bold text-purple-600">$700.2</div>
        <div className="text-sm text-purple-600 mt-1">3 bonuses earned</div>
      </div>
    </div>
    <EarningsChart />
  </div>
);

const PreviousMonths: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Previous Months</h3>
      <div className="space-y-4">
        {[
          { month: 'November 2024', earnings: '$3,240.75', change: '+12.5%' },
          { month: 'October 2024', earnings: '$2,880.20', change: '+8.2%' },
          { month: 'September 2024', earnings: '$2,665.80', change: '+5.3%' },
          { month: 'August 2024', earnings: '$2,531.45', change: '+2.1%' },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium text-gray-900 dark:text-white">{item.month}</span>
            <div className="text-right">
              <div className="font-semibold text-gray-900 dark:text-white">{item.earnings}</div>
              <div className="text-sm text-green-600">{item.change}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AnnualReport: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Annual Report 2024</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-green-600">$32,450.75</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Earnings</div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-blue-600">289</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Referrals</div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-purple-600">24.5%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-orange-600">$112.15</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Commission</div>
        </div>
      </div>
    </div>
  </div>
);

const Earnings: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Current Month', path: '/earnings/current' },
    { name: 'Previous Months', path: '/earnings/previous' },
    { name: 'Annual Report', path: '/earnings/annual' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Earnings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Track your affiliate earnings and performance
        </p>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                location.pathname === tab.path
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<CurrentMonth />} />
        <Route path="/current" element={<CurrentMonth />} />
        <Route path="/previous" element={<PreviousMonths />} />
        <Route path="/annual" element={<AnnualReport />} />
      </Routes>
    </div>
  );
};

export default Earnings;
