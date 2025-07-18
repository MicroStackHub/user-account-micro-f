
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const PaymentHistory: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment History</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Method</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {[
              { date: '2024-01-15', amount: '$1,250.00', method: 'PayPal', status: 'Completed' },
              { date: '2024-01-01', amount: '$980.50', method: 'Bank Transfer', status: 'Completed' },
              { date: '2023-12-15', amount: '$1,420.75', method: 'PayPal', status: 'Completed' },
            ].map((payment, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{payment.date}</td>
                <td className="px-6 py-4 text-sm font-medium text-green-600">{payment.amount}</td>
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">{payment.method}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const PaymentMethods: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Methods</h3>
      <div className="space-y-4">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">PayPal</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">john@example.com</p>
            </div>
            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
              Primary
            </span>
          </div>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Bank Transfer</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">****1234</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
          </div>
        </div>
        <button className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-600">
          + Add Payment Method
        </button>
      </div>
    </div>
  </div>
);

const RequestPayout: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Request Payout</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 dark:text-blue-300">Available Balance</h4>
          <div className="text-2xl font-bold text-blue-600">$2,840.50</div>
          <p className="text-sm text-blue-700 dark:text-blue-400">Minimum payout: $100</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Payout Amount
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Payment Method
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white">
            <option>PayPal - john@example.com</option>
            <option>Bank Transfer - ****1234</option>
          </select>
        </div>
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Request Payout
        </button>
      </div>
    </div>
  </div>
);

const Payouts: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Payment History', path: '/payouts/history' },
    { name: 'Payment Methods', path: '/payouts/methods' },
    { name: 'Request Payout', path: '/payouts/request' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Payouts</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your payments and payout methods
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
        <Route path="/" element={<PaymentHistory />} />
        <Route path="/history" element={<PaymentHistory />} />
        <Route path="/methods" element={<PaymentMethods />} />
        <Route path="/request" element={<RequestPayout />} />
      </Routes>
    </div>
  );
};

export default Payouts;
