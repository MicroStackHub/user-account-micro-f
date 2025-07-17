
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import EarningsChart from '../Charts/EarningsChart';

const Analytics: React.FC = () => {
  const { isDarkMode } = useTheme();

  const stats = [
    {
      title: 'Total Earnings',
      value: '$12,500',
      change: '+15.3%',
      positive: true,
      icon: '💰'
    },
    {
      title: 'Active Referrals',
      value: '248',
      change: '+8.2%',
      positive: true,
      icon: '👥'
    },
    {
      title: 'Conversion Rate',
      value: '3.8%',
      change: '+0.5%',
      positive: true,
      icon: '📈'
    },
    {
      title: 'Click-through Rate',
      value: '12.4%',
      change: '-2.1%',
      positive: false,
      icon: '🖱️'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg border ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-700 text-white' 
                : 'bg-white border-gray-200 text-gray-900'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.title}
                </p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${
                  stat.positive ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className="text-2xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EarningsChart />
        
        <div className={`p-6 rounded-lg border ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700 text-white' 
            : 'bg-white border-gray-200 text-gray-900'
        }`}>
          <h3 className="text-lg font-semibold mb-4">Top Performing Links</h3>
          <div className="space-y-3">
            {[
              { link: '/product/laptop-deal', clicks: 1250, conversions: 48 },
              { link: '/category/electronics', clicks: 980, conversions: 35 },
              { link: '/product/headphones', clicks: 756, conversions: 28 },
              { link: '/category/fashion', clicks: 654, conversions: 22 },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                <div>
                  <p className="font-medium">{item.link}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.clicks} clicks
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{item.conversions}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    conversions
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
