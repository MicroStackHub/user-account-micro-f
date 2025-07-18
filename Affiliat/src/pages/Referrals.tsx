
import React, { useState } from 'react';
import { Link, useLocation, Routes, Route } from 'react-router-dom';

const ActiveReferrals: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const referrals = [
    {
      id: 1,
      referralId: 'alice@example.com',
      customer: 'Alice Johnson',
      country: 'USA',
      product: 'Premium Plan',
      dateJoined: '1/15/2024',
      convertedDate: '1/15/2024',
      status: 'Converted',
      orderValue: '$299.00',
      commission: '$45.99'
    },
    {
      id: 2,
      referralId: 'bob@example.com',
      customer: 'Bob Smith',
      country: 'Canada',
      product: 'Basic Plan',
      dateJoined: '1/14/2024',
      convertedDate: '-',
      status: 'Active',
      orderValue: '-',
      commission: '-'
    },
    {
      id: 3,
      referralId: 'carol@example.com',
      customer: 'Carol Williams',
      country: 'UK',
      product: 'Starter Plan',
      dateJoined: '1/13/2024',
      convertedDate: '-',
      status: 'Pending',
      orderValue: '-',
      commission: '-'
    },
    {
      id: 4,
      referralId: 'david@example.com',
      customer: 'David Brown',
      country: 'Australia',
      product: 'Standard Plan',
      dateJoined: '1/12/2024',
      convertedDate: '1/12/2024',
      status: 'Converted',
      orderValue: '$199.99',
      commission: '$32.50'
    },
    {
      id: 5,
      referralId: 'eva@example.com',
      customer: 'Eva Davis',
      country: 'Germany',
      product: 'Premium Plan',
      dateJoined: '1/11/2024',
      convertedDate: '-',
      status: 'Inactive',
      orderValue: '-',
      commission: '-'
    }
  ];

  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-3 py-1 rounded-full text-xs font-medium';
    switch (status) {
      case 'Converted':
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`;
      case 'Active':
        return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200`;
      case 'Pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`;
      case 'Inactive':
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Referrals</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">247</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Referrals</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">98</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversions</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">42</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💫</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">17.0%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search referrals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Converted</option>
              <option>Pending</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Show:</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium">10</span>
          </div>
        </div>
      </div>

      {/* Referrals Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Referral ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date Joined
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Order Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Commission
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {referrals.map((referral) => (
                <tr key={referral.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{referral.referralId}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{referral.country}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {referral.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {referral.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{referral.dateJoined}</div>
                    {referral.convertedDate !== '-' && (
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Converted: {referral.convertedDate}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getStatusBadge(referral.status)}>
                      {referral.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {referral.orderValue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600 dark:text-green-400">
                    {referral.commission}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button className="text-red-600 hover:text-red-700 font-medium">View</button>
                    <button className="text-gray-600 hover:text-gray-700 font-medium">Contact</button>
                    {referral.status === 'Converted' && (
                      <button className="text-blue-600 hover:text-blue-700 font-medium">Receipt</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ReferralProgram: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-white p-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Invite Friends & Earn Rewards</h2>
          <p className="text-red-100 text-lg mb-6">
            Share your unique referral link and earn commission for every successful referral!
          </p>
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                value="https://affiliate.example.com/ref/johndoe123"
                readOnly
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white"
              />
            </div>
            <button className="px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Copy Link
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm text-center">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🔗</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Share Your Link</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Share your unique referral link with friends via email, social media, or any other channel.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">👥</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Friends Sign Up</h3>
          <p className="text-gray-600 dark:text-gray-400">
            When someone clicks your link and signs up for our service, they become your referral.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm text-center">
          <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">💰</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Earn Commission</h3>
          <p className="text-gray-600 dark:text-gray-400">
            You earn a commission for every successful referral that makes a purchase within 30 days.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Commission Structure</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Plan</th>
                <th className="text-left py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Commission Rate</th>
                <th className="text-left py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Example Earning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="py-3 text-sm text-gray-900 dark:text-white">Basic Plan</td>
                <td className="py-3 text-sm text-gray-900 dark:text-white">15%</td>
                <td className="py-3 text-sm text-green-600 dark:text-green-400 font-semibold">$14.99</td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-gray-900 dark:text-white">Standard Plan</td>
                <td className="py-3 text-sm text-gray-900 dark:text-white">15%</td>
                <td className="py-3 text-sm text-green-600 dark:text-green-400 font-semibold">$29.99</td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-gray-900 dark:text-white">Premium Plan</td>
                <td className="py-3 text-sm text-gray-900 dark:text-white">15%</td>
                <td className="py-3 text-sm text-green-600 dark:text-green-400 font-semibold">$44.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Referrals: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Active Referrals', path: '/referrals' },
    { name: 'Referral Program', path: '/referrals/program' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Referrals</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Track your referrals and manage your referral program
        </p>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                location.pathname === tab.path
                  ? 'border-red-500 text-red-600 dark:text-red-400'
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
        <Route path="/program" element={<ReferralProgram />} />
      </Routes>
    </div>
  );
};

export default Referrals;
