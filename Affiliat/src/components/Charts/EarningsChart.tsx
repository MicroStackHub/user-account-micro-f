
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface EarningsData {
  month: string;
  earnings: number;
  commissions: number;
  bonuses: number;
  referrals: number;
}

const EarningsChart: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedMetric, setSelectedMetric] = useState<'earnings' | 'commissions' | 'bonuses' | 'referrals'>('earnings');
  
  const mockData: EarningsData[] = [
    { month: 'Jan', earnings: 1200, commissions: 800, bonuses: 400, referrals: 12 },
    { month: 'Feb', earnings: 1500, commissions: 1000, bonuses: 500, referrals: 18 },
    { month: 'Mar', earnings: 1800, commissions: 1200, bonuses: 600, referrals: 22 },
    { month: 'Apr', earnings: 2200, commissions: 1500, bonuses: 700, referrals: 28 },
    { month: 'May', earnings: 2500, commissions: 1800, bonuses: 700, referrals: 35 },
    { month: 'Jun', earnings: 2800, commissions: 2000, bonuses: 800, referrals: 42 },
    { month: 'Jul', earnings: 3200, commissions: 2300, bonuses: 900, referrals: 48 },
    { month: 'Aug', earnings: 2900, commissions: 2100, bonuses: 800, referrals: 45 },
    { month: 'Sep', earnings: 3500, commissions: 2600, bonuses: 900, referrals: 52 },
    { month: 'Oct', earnings: 3800, commissions: 2800, bonuses: 1000, referrals: 58 },
    { month: 'Nov', earnings: 4200, commissions: 3100, bonuses: 1100, referrals: 65 },
    { month: 'Dec', earnings: 4800, commissions: 3500, bonuses: 1300, referrals: 72 }
  ];

  const getMaxValue = () => {
    if (selectedMetric === 'referrals') {
      return Math.max(...mockData.map(d => d.referrals));
    }
    return Math.max(...mockData.map(d => d[selectedMetric]));
  };

  const getColor = (metric: string) => {
    const colors = {
      earnings: '#3b82f6',
      commissions: '#10b981',
      bonuses: '#f59e0b',
      referrals: '#8b5cf6'
    };
    return colors[metric as keyof typeof colors];
  };

  const maxValue = getMaxValue();
  const totalEarnings = mockData.reduce((sum, data) => sum + data.earnings, 0);
  const totalCommissions = mockData.reduce((sum, data) => sum + data.commissions, 0);
  const totalBonuses = mockData.reduce((sum, data) => sum + data.bonuses, 0);
  const totalReferrals = mockData.reduce((sum, data) => sum + data.referrals, 0);

  const metrics = [
    { key: 'earnings', label: 'Earnings', total: totalEarnings, prefix: '$', color: '#3b82f6' },
    { key: 'commissions', label: 'Commissions', total: totalCommissions, prefix: '$', color: '#10b981' },
    { key: 'bonuses', label: 'Bonuses', total: totalBonuses, prefix: '$', color: '#f59e0b' },
    { key: 'referrals', label: 'Referrals', total: totalReferrals, prefix: '', color: '#8b5cf6' }
  ];

  return (
    <div className={`p-6 rounded-lg border ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700 text-white' 
        : 'bg-white border-gray-200 text-gray-900'
    }`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h3 className="text-lg font-semibold mb-2 sm:mb-0">Earnings Overview</h3>
        <div className="flex flex-wrap gap-2">
          {metrics.map((metric) => (
            <button
              key={metric.key}
              onClick={() => setSelectedMetric(metric.key as any)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                selectedMetric === metric.key
                  ? 'text-white'
                  : isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
              }`}
              style={{
                backgroundColor: selectedMetric === metric.key ? metric.color : 'transparent',
                border: `1px solid ${metric.color}`
              }}
            >
              {metric.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 flex items-end justify-between space-x-1 mb-6">
        {mockData.map((data, index) => {
          const value = selectedMetric === 'referrals' ? data.referrals : data[selectedMetric];
          const height = (value / maxValue) * 100;
          
          return (
            <div key={index} className="flex flex-col items-center space-y-2 flex-1 group">
              <div className="relative h-48 flex items-end">
                <div
                  className="rounded-t transition-all duration-300 group-hover:opacity-80 cursor-pointer relative"
                  style={{
                    backgroundColor: getColor(selectedMetric),
                    height: `${height}%`,
                    width: '100%',
                    minHeight: '4px'
                  }}
                  title={`${data.month}: ${selectedMetric === 'referrals' ? '' : '$'}${value.toLocaleString()}`}
                >
                  {/* Hover tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {selectedMetric === 'referrals' ? value : `$${value.toLocaleString()}`}
                  </div>
                </div>
              </div>
              <span className="text-xs text-center font-medium">{data.month}</span>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        {metrics.map((metric) => (
          <div key={metric.key} className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: metric.color }}
              ></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {metric.label}
              </span>
            </div>
            <div className="text-sm font-semibold">
              {metric.prefix}{metric.total.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsChart;
