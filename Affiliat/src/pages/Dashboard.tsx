
import React from 'react';
import Analytics from '../components/Analytics/Analytics';
import EarningsChart from '../components/Charts/EarningsChart';
import ConversionChart from '../components/Charts/ConversionChart';
import TopReferrers from '../components/Charts/TopReferrers';
import DataTable from '../components/DataTable/DataTable';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Affiliate Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Track your affiliate performance and earnings
        </p>
      </div>

      <Analytics />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <EarningsChart />
        <ConversionChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopReferrers />
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Performance Breakdown
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Commission Earnings</span>
              <span className="text-lg font-semibold text-green-600">$8,920.3</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Bonus Earnings</span>
              <span className="text-lg font-semibold text-green-600">$1,530.45</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Referrals
        </h2>
        <DataTable />
      </div>
    </div>
  );
};

export default Dashboard;
