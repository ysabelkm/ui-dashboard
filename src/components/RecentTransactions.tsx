import { DollarSign, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import Image from 'next/image';

const transactions = [
  { 
    id: 1, 
    name: 'Henrik Jansen', 
    status: 'Received', 
    amount: '+$428.00', 
    image: '/henrik-jansen.jpg',
    isPositive: true 
  },
  { 
    id: 2, 
    name: 'Multiplex', 
    status: 'Paid', 
    amount: '-$124.55', 
    image: '/multiplex.webp',
    isPositive: false 
  },
  { 
    id: 3, 
    name: 'Eva Novak', 
    status: 'Received', 
    amount: '+$57,120.20', 
    image: '/eva-novak.avif',
    isPositive: true 
  },
  { 
    id: 4, 
    name: 'Binance', 
    status: 'Paid', 
    amount: '-$1,714.29', 
    image: '/binance.webp',
    isPositive: false 
  },
  { 
    id: 5, 
    name: 'Matteo Ricci', 
    status: 'Received', 
    amount: '+$536.00', 
    image: '/matteo-ricci.jpg',
    isPositive: true 
  },
  { 
    id: 6, 
    name: 'Nike', 
    status: 'Paid', 
    amount: '-$328.96', 
    image: '/nike.webp',
    isPositive: false 
  },
];

export default function RecentTransactions() {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium text-gray-900">Recent Transactions</h3>
        <div className="flex items-center space-x-3">
          <button className="text-gray-400 hover:text-black font-regular text-sm">
            View All
          </button>
        </div>
      </div>

      {/* Transactions List */}
      <div className="space-y-2">
        {transactions.map((transaction) => {
          return (
            <div key={transaction.id} className="bg-white rounded-2xl p-3 shadow-sm flex items-center space-x-3">
              {/* Profile Image */}
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={transaction.image}
                  alt={transaction.name}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Transaction Details */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 truncate text-sm">{transaction.name}</div>
                <div className="flex items-center space-x-1">
                  <div className={`text-xs font-regular text-gray-400`}>
                    {transaction.status}
                  </div>
                  {transaction.status === 'Received' && (
                    <div className="flex items-center">
                      <DollarSign size={10} className="text-gray-500" />
                      <ArrowDownLeft size={6} className="text-gray-500 -ml-1 -mt-1" />
                    </div>
                  )}
                  {transaction.status === 'Paid' && (
                    <div className="flex items-center">
                      <DollarSign size={10} className="text-gray-500" />
                      <ArrowUpRight size={6} className="text-gray-500 -ml-1 -mt-1" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Amount */}
              <div className={`font-semibold text-sm ${
                transaction.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.amount}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}