import { ArrowUpDown, EyeOff, DollarSign, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function BalanceCard() {
  return (
    <div className="rounded-3xl p-2 pb-6 mb-4 bg-white shadow-sm max-w-sm">
      {/* Yellow Card for Currency Header and Main Balance */}
      <div className="rounded-3xl p-3 mb-4" style={{ backgroundColor: '#F9F967' }}>
        {/* Currency Header */}
        <div className="flex justify-between items-start mb-3">
          <div className="text-center flex-1">
            <div className="text-lg font-medium text-green-900 mb-1">USD</div>
            <div className="text-xs text-green-900 font-regular">1 USD = EUR 0.95 • GBR 0.79</div>
          </div>
          <button className="p-1 hover:bg-gray-200 hover:bg-opacity-20 rounded-full transition-colors duration-200">
            <EyeOff size={16} className="text-gray-600" />
          </button>
        </div>
        
        {/* Main Balance */}
        <div className="text-center mb-4">
          <div className="text-4xl font-bold text-gray-900 mb-2">$26,887.09</div>
          <div className="text-lg font-medium text-green-900">+$421.03</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-8">
        <button className="flex flex-col items-center space-y-1 hover:scale-105 transition-transform duration-200">
          <div className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center">
            <DollarSign size={18} className="text-gray-600" />
            <ArrowUpRight size={10} className="text-gray-600 -ml-1 -mt-2" />
          </div>
          <span className="font-semibold text-gray-600 text-xs">Pay</span>
        </button>

        <div className="border-l border-gray-300 h-10"></div>

        <button className="flex flex-col items-center space-y-1 hover:scale-105 transition-transform duration-200">
          <div className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center">
            <ArrowUpDown size={18} className="text-gray-600" />
          </div>
          <span className="font-semibold text-gray-600 text-xs">Transfer</span>
        </button>

        <div className="border-l border-gray-300 h-10"></div>

        <button className="flex flex-col items-center space-y-1 hover:scale-105 transition-transform duration-200">
          <div className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center">
            <DollarSign size={18} className="text-gray-600" />
            <ArrowDownLeft size={10} className="text-gray-600 -ml-1 -mt-2" />
          </div>
          <span className="font-semibold text-gray-600 text-xs">Receive</span>
        </button>
      </div>
      </div>
  );
}