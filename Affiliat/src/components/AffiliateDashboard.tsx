
import React from 'react';
import Layout from './Layout/Layout';
import Analytics from './Analytics/Analytics';
import DataTable from './DataTable/DataTable';

const AffiliateDashboard: React.FC = () => {
  return (
    <Layout>
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

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Referrals
          </h2>
          <DataTable />
        </div>
      </div>
    </Layout>
  );
};

export default AffiliateDashboard;
