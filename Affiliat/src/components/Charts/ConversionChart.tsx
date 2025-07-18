
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ConversionChartProps {
  data?: Array<{ day: string; conversions: number; clicks: number }>;
  className?: string;
}

const ConversionChart: React.FC<ConversionChartProps> = ({ 
  data = [
    { day: 'Mon', conversions: 45, clicks: 1200 },
    { day: 'Tue', conversions: 52, clicks: 1350 },
    { day: 'Wed', conversions: 48, clicks: 1180 },
    { day: 'Thu', conversions: 61, clicks: 1420 },
    { day: 'Fri', conversions: 55, clicks: 1290 },
    { day: 'Sat', conversions: 67, clicks: 1580 },
    { day: 'Sun', conversions: 71, clicks: 1640 }
  ],
  className = ""
}) => {
  const { theme } = useTheme();
  
  const maxConversions = Math.max(...data.map(d => d.conversions));
  const maxClicks = Math.max(...data.map(d => d.clicks));
  const chartHeight = 200;
  const chartWidth = 500;
  const pointSpacing = chartWidth / (data.length - 1);

  const conversionPoints = data.map((item, index) => ({
    x: index * pointSpacing,
    y: chartHeight - (item.conversions / maxConversions) * chartHeight
  }));

  const clickPoints = data.map((item, index) => ({
    x: index * pointSpacing,
    y: chartHeight - (item.clicks / maxClicks) * chartHeight
  }));

  const createPath = (points: Array<{ x: number; y: number }>) => {
    return points.reduce((path, point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }
      return `${path} L ${point.x} ${point.y}`;
    }, '');
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Conversion Trends</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Conversions</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Clicks</span>
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
          
          {/* Conversion line */}
          <path
            d={createPath(conversionPoints)}
            fill="none"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Click line */}
          <path
            d={createPath(clickPoints)}
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Conversion points */}
          {conversionPoints.map((point, index) => (
            <circle
              key={`conv-${index}`}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#10B981"
              className="hover:r-6 transition-all"
            />
          ))}
          
          {/* Click points */}
          {clickPoints.map((point, index) => (
            <circle
              key={`click-${index}`}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#8B5CF6"
              className="hover:r-6 transition-all"
            />
          ))}
          
          {/* Day labels */}
          {data.map((item, index) => (
            <text
              key={item.day}
              x={index * pointSpacing}
              y={chartHeight + 20}
              textAnchor="middle"
              className="text-xs fill-gray-600 dark:fill-gray-300"
            >
              {item.day}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default ConversionChart;
