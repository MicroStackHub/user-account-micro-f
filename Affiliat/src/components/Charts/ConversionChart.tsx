
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ConversionData {
  stage: string;
  count: number;
  percentage: number;
  color: string;
}

const ConversionChart: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  const conversionData: ConversionData[] = [
    { stage: 'Clicks', count: 2847, percentage: 100, color: '#3b82f6' },
    { stage: 'Sign-ups', count: 1423, percentage: 50, color: '#10b981' },
    { stage: 'Trials', count: 854, percentage: 30, color: '#f59e0b' },
    { stage: 'Conversions', count: 284, percentage: 10, color: '#ef4444' }
  ];

  return (
    <div className={`p-6 rounded-lg border ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700 text-white' 
        : 'bg-white border-gray-200 text-gray-900'
    }`}>
      <h3 className="text-lg font-semibold mb-6">Conversion Funnel</h3>
      
      <div className="space-y-4">
        {conversionData.map((stage, index) => (
          <div key={stage.stage} className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">{stage.stage}</span>
              <div className="text-right">
                <span className="text-sm font-semibold">{stage.count.toLocaleString()}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                  ({stage.percentage}%)
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-300"
                  style={{
                    width: `${stage.percentage}%`,
                    backgroundColor: stage.color
                  }}
                />
              </div>
              
              {index < conversionData.length - 1 && (
                <div className="absolute right-0 top-4 text-xs text-gray-500 dark:text-gray-400">
                  -{(conversionData[index].percentage - conversionData[index + 1].percentage)}%
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {((conversionData[3].count / conversionData[0].count) * 100).toFixed(1)}%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Overall Conversion Rate
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionChart;
