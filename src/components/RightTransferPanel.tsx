'use client';

import { useState } from 'react';
import { CreditCard, User, ArrowLeft, FileText } from 'lucide-react';
import Image from 'next/image';

export default function RightTransferPanel() {
  const [amount, setAmount] = useState('2,101.70');
  const [note, setNote] = useState('');

  const keypadNumbers = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', '⌫']
  ];

  const handleKeypadClick = (value: string) => {
    if (value === '⌫') {
      setAmount(prev => prev.slice(0, -1) || '0');
    } else {
      setAmount(prev => prev === '0' ? value : prev + value);
    }
  };

  return (
    <div className="w-80 bg-white rounded-2xl p-4 fixed right-0 top-0 h-screen flex flex-col overflow-hidden">
      {/* Card Selection */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
              <CreditCard size={12} />
            </div>
            <div className="text-xs font-semibold text-gray-600">Selected Card</div>
          </div>
        </div>
        
        {/* Recipient */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/matteo-ricci.jpg"
                alt="Matteo Ricci"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">Matteo Ricci</div>
              <div className="text-xs text-gray-500 font-medium">1111 **** 1720</div>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-xs">
            Change
          </button>
        </div>
      </div>

      {/* Amount Display */}
      <div className="mb-4">
        <div className="text-3xl font-bold text-gray-900 mb-1">${amount}</div>
        <div className="text-xs text-gray-500 font-medium">Balance: $126,887.09</div>
      </div>

      {/* Transfer Details */}
      <div className="mb-4 space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">Exchange rate</span>
          <span className="text-gray-900 font-semibold">1 USD = 0.95 EUR</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">Balance after transfer</span>
          <span className="text-gray-900 font-semibold">$124,785.39</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 font-medium">Transaction fee</span>
          <span className="text-green-600 font-semibold">$0.00 (free transfer)</span>
        </div>
      </div>

      {/* Note Field */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full px-3 py-2 pl-8 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 neu-shadow-sm"
          />
          <FileText size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Keypad */}
      <div className="mb-4">
        <div className="grid grid-cols-3 gap-2">
          {keypadNumbers.flat().map((number, index) => (
            <button
              key={index}
              onClick={() => handleKeypadClick(number)}
              className={`h-10 bg-gray-50 hover:bg-gray-100 rounded-md font-semibold text-gray-700 transition-all duration-200 neu-button ${
                number === '0' ? 'col-start-2' : ''
              }`}
            >
              {number === '⌫' ? <ArrowLeft size={16} /> : number}
            </button>
          ))}
        </div>
      </div>

      {/* Send Button */}
      <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-regular py-3 rounded-full transition-colors duration-200">
        Send
      </button>
    </div>
  );
}
