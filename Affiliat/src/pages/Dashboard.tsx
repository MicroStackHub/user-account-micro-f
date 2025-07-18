import React from 'react';
import Analytics from '../components/Analytics/Analytics';
import EarningsChart from '../components/Charts/EarningsChart';
import ConversionChart from '../components/Charts/ConversionChart';
import TopReferrers from '../components/Charts/TopReferrers';
import DataTable from '../components/DataTable/DataTable';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 max-w-none">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Affiliate Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
            Track your affiliate performance and earnings
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors">
            Generate Report
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Export Data
          </button>
        </div>
      </div>

      <Analytics />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <EarningsChart />
        <ConversionChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <DataTable />
        </div>
        <div>
          <TopReferrers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;