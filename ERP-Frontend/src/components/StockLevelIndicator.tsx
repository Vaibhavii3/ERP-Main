import React from 'react';
import { StockLevel } from '../types';

interface StockLevelIndicatorProps {
  stockLevel: StockLevel;
  warehouseName: string;
}

const StockLevelIndicator: React.FC<StockLevelIndicatorProps> = ({ stockLevel, warehouseName }) => {
  const { quantity, threshold } = stockLevel;
  
  // Calculate percentage of stock relative to threshold
  const percentage = Math.min(Math.round((quantity / (threshold * 2)) * 100), 100);
  
  // Determine color based on stock level
  const getColorClass = () => {
    if (quantity <= threshold * 0.5) return 'bg-red-500';
    if (quantity <= threshold) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{warehouseName}</span>
        <span className={`text-xs font-medium ${quantity <= threshold ? 'text-red-600' : 'text-gray-600'}`}>
          {quantity} units {quantity <= threshold && '(Low Stock)'}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${getColorClass()}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StockLevelIndicator;