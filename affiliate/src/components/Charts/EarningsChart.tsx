
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface EarningsData {
  month: string;
  earnings: number;
  commissions: number;
}

const mockData: EarningsData[] = [
  { month: 'Jan', earnings: 1200, commissions: 800 },
  { month: 'Feb', earnings: 1500, commissions: 1000 },
  { month: 'Mar', earnings: 1800, commissions: 1200 },
  { month: 'Apr', earnings: 2200, commissions: 1500 },
  { month: 'May', earnings: 2500, commissions: 1800 },
  { month: 'Jun', earnings: 2800, commissions: 2000 },
];

const EarningsChart: React.FC = () => {
  const { isDarkMode } = useTheme();
  const maxValue = Math.max(...mockData.map(d => Math.max(d.earnings, d.commissions)));

  return (
    <div className={`p-6 rounded-lg border ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700 text-white' 
        : 'bg-white border-gray-200 text-gray-900'
    }`}>
      <h3 className="text-lg font-semibold mb-4">Earnings Overview</h3>
      <div className="h-64 flex items-end justify-between space-x-2">
        {mockData.map((data, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 flex-1">
            <div className="flex space-x-1 h-40 items-end">
              <div
                className="bg-blue-500 rounded-t"
                style={{
                  height: `${(data.earnings / maxValue) * 100}%`,
                  width: '12px'
                }}
              />
              <div
                className="bg-green-500 rounded-t"
                style={{
                  height: `${(data.commissions / maxValue) * 100}%`,
                  width: '12px'
                }}
              />
            </div>
            <span className="text-xs text-center">{data.month}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-4 text-sm">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span>Earnings</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span>Commissions</span>
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;
