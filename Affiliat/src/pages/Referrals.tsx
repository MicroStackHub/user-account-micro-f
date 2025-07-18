
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import DataTable from '../components/DataTable/DataTable';

const ActiveReferrals: React.FC = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Active Referrals</h3>
        <div className="text-3xl font-bold text-green-600">156</div>
        <div className="text-sm text-green-600 mt-1">+15.2% this month</div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">This Month</h3>
        <div className="text-3xl font-bold text-blue-600">24</div>
        <div className="text-sm text-blue-600 mt-1">New referrals</div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Total Value</h3>
        <div className="text-3xl font-bold text-purple-600">$28,450</div>
        <div className="text-sm text-purple-600 mt-1">From active referrals</div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Active Referrals</h3>
      <DataTable />
    </div>
  </div>
);

const PendingReferrals: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Pending Referrals (8)</h3>
      <div className="space-y-4">
        {[
          { name: 'Alex Johnson', email: 'alex@example.com', date: '2024-01-15', status: 'Email Verification' },
          { name: 'Sarah Wilson', email: 'sarah@example.com', date: '2024-01-14', status: 'Account Setup' },
          { name: 'Mike Brown', email: 'mike@example.com', date: '2024-01-13', status: 'Payment Pending' },
        ].map((referral, index) => (
          <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
            <div>
              <div className="font-medium text-gray-900 dark:text-white">{referral.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{referral.email}</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-yellow-600">{referral.status}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{referral.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ReferralHistory: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Referral History</h3>
      <DataTable />
    </div>
  </div>
);

const Referrals: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Active Referrals', path: '/referrals/active' },
    { name: 'Pending Referrals', path: '/referrals/pending' },
    { name: 'Referral History', path: '/referrals/history' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Referrals</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your referrals and track their progress
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
        <Route path="/" element={<ActiveReferrals />} />
        <Route path="/active" element={<ActiveReferrals />} />
        <Route path="/pending" element={<PendingReferrals />} />
        <Route path="/history" element={<ReferralHistory />} />
      </Routes>
    </div>
  );
};

export default Referrals;
