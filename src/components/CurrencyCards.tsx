import { Euro, PoundSterling, SwissFranc } from 'lucide-react';

const currencies = [
  { 
    icon: Euro, 
    name: 'Euro', 
    rate: '0.97',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  { 
    icon: PoundSterling, 
    name: 'British Pound', 
    rate: '0.82',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  { 
    icon: SwissFranc, 
    name: 'Swiss Franc', 
    rate: '1.10',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  },
];

export default function CurrencyCards() {
  return (
    <div className="grid grid-cols-3 gap-3 mb-4 max-w-sm">
      {currencies.map((currency, index) => {
        const IconComponent = currency.icon;
        return (
          <div key={index} className="bg-white rounded-2xl p-3 shadow-md">
            {/* Currency Icon */}
            <div className={`w-8 h-8 ${currency.iconBg} rounded-full flex items-center justify-center mb-6`}>
              <IconComponent size={14} className={currency.iconColor} />
            </div>
            
            {/* Currency Name */}
            <div className="text-xs font-regular text-gray-600 mb-1">{currency.name}</div>
            
            {/* Rate */}
            <div className="text-sm font-medium text-gray-900">{currency.rate}</div>
          </div>
        );
      })}
    </div>
  );
}