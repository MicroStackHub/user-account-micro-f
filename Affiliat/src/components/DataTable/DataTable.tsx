
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface Referral {
  id: string;
  customerName: string;
  email: string;
  dateJoined: string;
  status: 'Active' | 'Pending' | 'Converted';
  commission: number;
  orderValue?: number;
}

const DataTable: React.FC = () => {
  const { isDarkMode } = useTheme();

  const sampleReferrals: Referral[] = [
    {
      id: 'REF001',
      customerName: 'Alice Johnson',
      email: 'alice@example.com',
      dateJoined: '2024-01-15',
      status: 'Converted',
      commission: 45.99,
      orderValue: 299.99
    },
    {
      id: 'REF002',
      customerName: 'Bob Smith',
      email: 'bob@example.com',
      dateJoined: '2024-01-14',
      status: 'Active',
      commission: 0,
      orderValue: 0
    },
    {
      id: 'REF003',
      customerName: 'Carol Davis',
      email: 'carol@example.com',
      dateJoined: '2024-01-13',
      status: 'Pending',
      commission: 0,
      orderValue: 0
    },
    {
      id: 'REF004',
      customerName: 'David Wilson',
      email: 'david@example.com',
      dateJoined: '2024-01-12',
      status: 'Converted',
      commission: 32.50,
      orderValue: 199.99
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Converted':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Active':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Referral ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Customer
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
          </tr>
        </thead>
        <tbody className={`divide-y divide-gray-200 dark:divide-gray-700 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {sampleReferrals.map((referral) => (
            <tr key={referral.id} className={`hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} transition-colors`}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {referral.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {referral.customerName}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {referral.email}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {new Date(referral.dateJoined).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(referral.status)}`}>
                  {referral.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {referral.orderValue ? `$${referral.orderValue.toFixed(2)}` : '-'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600 dark:text-green-400">
                {referral.commission > 0 ? `$${referral.commission.toFixed(2)}` : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
