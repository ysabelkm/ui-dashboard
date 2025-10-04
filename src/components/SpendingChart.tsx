'use client';

import { useState } from 'react';

const chartData = [
  { month: 'Jan', value: 45, amount: 85000 },
  { month: 'Feb', value: 60, amount: 92000 },
  { month: 'Mar', value: 40, amount: 78000 },
  { month: 'Apr', value: 75, amount: 105000 },
  { month: 'May', value: 85, amount: 118952.34 },
  { month: 'Jun', value: 70, amount: 98000 },
  { month: 'Jul', value: 55, amount: 87000 },
  { month: 'Aug', value: 65, amount: 95000 },
  { month: 'Sep', value: 80, amount: 112000 },
  { month: 'Oct', value: 90, amount: 125000 },
  { month: 'Nov', value: 75, amount: 108000 },
  { month: 'Dec', value: 60, amount: 92000 },
];

export default function SpendingChart() {
  const [selectedPeriod, setSelectedPeriod] = useState('Yearly');
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="bg-white rounded-2xl p-6 neu-shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Total Rate</h3>
        <select 
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 neu-shadow-sm"
        >
          <option value="Yearly">Yearly</option>
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
        </select>
      </div>

      {/* Chart */}
      <div className="relative h-48 flex items-end space-x-1">
        {chartData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            {/* Tooltip */}
            {hoveredBar === index && (
              <div className="absolute -top-20 px-4 py-3 rounded-xl text-sm font-bold shadow-2xl z-10" style={{ backgroundColor: 'var(--accent-gold)' }}>
                <div className="text-lg text-gray-900 font-bold">${data.amount.toLocaleString()}</div>
                <div className="text-xs font-semibold text-gray-700">Total Spend</div>
              </div>
            )}
            
            {/* Dotted Bar */}
            <div
              className={`w-full rounded-t-lg transition-all duration-200 cursor-pointer relative ${
                index === 4 
                  ? 'bg-yellow-400' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              style={{ 
                height: `${(data.value / maxValue) * 180}px`,
                backgroundImage: index === 4 
                  ? 'radial-gradient(circle, #FFD700 2px, transparent 2px)'
                  : 'radial-gradient(circle, #9ca3af 1.5px, transparent 1.5px)',
                backgroundSize: '6px 6px',
                backgroundPosition: '0 0'
              }}
              onMouseEnter={() => setHoveredBar(index)}
              onMouseLeave={() => setHoveredBar(null)}
            />
            
            {/* Month Label */}
            <div className="text-xs text-gray-500 mt-2 font-semibold">{data.month}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
