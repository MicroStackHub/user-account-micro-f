
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  children,
  className = '',
  actions
}) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        {actions && <div className="flex items-center space-x-2">{actions}</div>}
      </div>
      <div className="w-full h-80">
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;
