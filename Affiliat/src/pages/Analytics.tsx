
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ConversionChart from '../components/Charts/ConversionChart';
import TopReferrers from '../components/Charts/TopReferrers';

const Performance: React.FC = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ConversionChart />
      <TopReferrers />
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-blue-600">1,247</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Clicks</div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-green-600">24.5%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-purple-600">$187.65</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Order Value</div>
        </div>
      </div>
    </div>
  </div>
);

const ConversionRates: React.FC = () => (
  <div className="space-y-6">
    <ConversionChart />
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Conversion Analysis</h3>
      <div className="space-y-4">
        {[
          { source: 'Social Media', rate: '28.5%', conversions: 142 },
          { source: 'Email Campaign', rate: '31.2%', conversions: 89 },
          { source: 'Blog Posts', rate: '22.8%', conversions: 67 },
          { source: 'Direct Links', rate: '19.4%', conversions: 45 },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
            <span className="font-medium text-gray-900 dark:text-white">{item.source}</span>
            <div className="text-right">
              <div className="font-semibold text-green-600">{item.rate}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{item.conversions} conversions</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TrafficSources: React.FC = () => (
  <div className="space-y-6">
    <TopReferrers />
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Traffic Source Details</h3>
      <div className="space-y-4">
        {[
          { source: 'Google Search', visits: 342, percentage: '35.2%', color: 'bg-blue-500' },
          { source: 'Facebook', visits: 298, percentage: '30.7%', color: 'bg-blue-600' },
          { source: 'Twitter', visits: 156, percentage: '16.1%', color: 'bg-blue-400' },
          { source: 'LinkedIn', visits: 89, percentage: '9.2%', color: 'bg-blue-700' },
          { source: 'Direct', visits: 87, percentage: '8.8%', color: 'bg-gray-500' },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
              <span className="font-medium text-gray-900 dark:text-white">{item.source}</span>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-900 dark:text-white">{item.visits}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{item.percentage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Analytics: React.FC = () => {
  const location = useLocation();
  
  const tabs = [
    { name: 'Performance', path: '/analytics/performance' },
    { name: 'Conversion Rates', path: '/analytics/conversion' },
    { name: 'Traffic Sources', path: '/analytics/traffic' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Analyze your affiliate performance and traffic sources
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
        <Route path="/" element={<Performance />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/conversion" element={<ConversionRates />} />
        <Route path="/traffic" element={<TrafficSources />} />
      </Routes>
    </div>
  );
};

export default Analytics;
