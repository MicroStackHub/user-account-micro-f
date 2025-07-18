import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface EarningsChartProps {
  data?: Array<{ month: string; earnings: number; commissions: number }>;
  className?: string;
}

const EarningsChart: React.FC<EarningsChartProps> = ({ 
  data = [
    { month: 'Jan', earnings: 1200, commissions: 800 },
    { month: 'Feb', earnings: 1900, commissions: 1200 },
    { month: 'Mar', earnings: 3000, commissions: 2000 },
    { month: 'Apr', earnings: 5000, commissions: 3200 },
    { month: 'May', earnings: 4200, commissions: 2800 },
    { month: 'Jun', earnings: 6500, commissions: 4300 }
  ],
  className = ""
}) => {
  const { theme } = useTheme();

  const maxValue = Math.max(...data.map(d => Math.max(d.earnings, d.commissions)));
  const chartHeight = 200;
  const chartWidth = 500;
  const barWidth = chartWidth / data.length / 2.5;
  const barSpacing = chartWidth / data.length;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Earnings Overview</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Earnings</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Commissions</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <svg width={chartWidth} height={chartHeight + 40} className="w-full h-auto">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => (
            <line
              key={index}
              x1="0"
              y1={chartHeight - (chartHeight * ratio)}
              x2={chartWidth}
              y2={chartHeight - (chartHeight * ratio)}
              stroke={theme === 'dark' ? '#374151' : '#E5E7EB'}
              strokeWidth="1"
              strokeDasharray="3,3"
            />
          ))}

          {/* Bars */}
          {data.map((item, index) => {
            const x = index * barSpacing + barSpacing / 4;
            const earningsHeight = (item.earnings / maxValue) * chartHeight;
            const commissionsHeight = (item.commissions / maxValue) * chartHeight;

            return (
              <g key={item.month}>
                {/* Earnings bar */}
                <rect
                  x={x}
                  y={chartHeight - earningsHeight}
                  width={barWidth}
                  height={earningsHeight}
                  fill="#EF4444"
                  rx="4"
                  className="hover:opacity-80 transition-opacity"
                />
                {/* Commissions bar */}
                <rect
                  x={x + barWidth + 4}
                  y={chartHeight - commissionsHeight}
                  width={barWidth}
                  height={commissionsHeight}
                  fill="#3B82F6"
                  rx="4"
                  className="hover:opacity-80 transition-opacity"
                />
                {/* Month label */}
                <text
                  x={x + barWidth}
                  y={chartHeight + 20}
                  textAnchor="middle"
                  className="text-xs fill-gray-600 dark:fill-gray-300"
                >
                  {item.month}
                </text>
              </g>
            );
          })}

          {/* Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => (
            <text
              key={index}
              x="-10"
              y={chartHeight - (chartHeight * ratio) + 4}
              textAnchor="end"
              className="text-xs fill-gray-600 dark:fill-gray-300"
            >
              ${Math.round(maxValue * ratio / 1000)}k
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default EarningsChart;