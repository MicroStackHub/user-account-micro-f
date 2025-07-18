
import React, { useState } from 'react';

const Payouts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const payoutStats = [
    { label: 'Available Balance', value: '$2,456.78', icon: '💰', color: 'text-green-600 dark:text-green-400' },
    { label: 'Pending Payouts', value: '$892.34', icon: '⏳', color: 'text-yellow-600 dark:text-yellow-400' },
    { label: 'Total Paid', value: '$15,234.56', icon: '✅', color: 'text-blue-600 dark:text-blue-400' },
    { label: 'This Month', value: '$1,567.89', icon: '📅', color: 'text-purple-600 dark:text-purple-400' },
  ];

  const payoutHistory = [
    { id: 1, date: '2024-01-15', amount: '$1,234.56', method: 'PayPal', status: 'Completed', reference: 'TXN001234' },
    { id: 2, date: '2024-01-01', amount: '$892.34', method: 'Bank Transfer', status: 'Completed', reference: 'TXN001235' },
    { id: 3, date: '2023-12-15', amount: '$1,567.89', method: 'PayPal', status: 'Completed', reference: 'TXN001236' },
    { id: 4, date: '2023-12-01', amount: '$734.12', method: 'Bank Transfer', status: 'Completed', reference: 'TXN001237' },
    { id: 5, date: '2023-11-15', amount: '$2,145.67', method: 'PayPal', status: 'Completed', reference: 'TXN001238' },
  ];

  const paymentMethods = [
    { id: 1, type: 'PayPal', email: 'john@example.com', isDefault: true },
    { id: 2, type: 'Bank Transfer', account: '**** **** **** 1234', isDefault: false },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'history', name: 'Payout History' },
    { id: 'methods', name: 'Payment Methods' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Payouts</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your earnings and payment preferences
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-red-500 text-red-600 dark:text-red-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {payoutStats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <p className={`text-2xl font-bold mt-2 ${stat.color}`}>{stat.value}</p>
                  </div>
                  <div className="text-2xl">{stat.icon}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                <div className="text-2xl mb-2">💳</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Request Payout</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Withdraw available balance</div>
              </button>
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Payment Settings</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Manage payment methods</div>
              </button>
              <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Earnings Report</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Download detailed report</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payout History</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Your complete payout transaction history</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Method</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Reference</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {payoutHistory.map((payout) => (
                    <tr key={payout.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {payout.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
                        {payout.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {payout.method}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(payout.status)}`}>
                          {payout.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {payout.reference}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'methods' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Methods</h3>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
                Add Method
              </button>
            </div>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 dark:text-red-400 font-semibold">
                        {method.type === 'PayPal' ? '💳' : '🏦'}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">{method.type}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {method.type === 'PayPal' ? method.email : method.account}
                      </p>
                    </div>
                    {method.isDefault && (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 text-sm">
                      Edit
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 text-sm">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payouts;
