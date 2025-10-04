/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { Home, BarChart3, DollarSign, ArrowUpRight, ArrowDownLeft, Settings, User } from 'lucide-react';
import Image from 'next/image';

const sidebarItems = [
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'home', icon: Home, label: 'Home' },
  { 
    id: 'transactions1', 
    icon: DollarSign, 
    secondaryIcon: ArrowUpRight,
    label: 'Pay',
    type: 'transaction'
  },
  { 
    id: 'transactions2', 
    icon: DollarSign, 
    secondaryIcon: ArrowDownLeft,
    label: 'Receive',
    type: 'transaction'
  },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export default function LeftSidebar() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <div className="w-20 flex flex-col items-center py-7 h-screen fixed left-0 top-0 z-50">
      {/* Logo - dashboardlogo.png */}
      <div className="mb-8">
        <Image
          src="/dashboardlogo.png"
          alt="Dashboard Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>

      {/* Navigation Items - Centered */}
      <div className="flex flex-col flex-1 justify-center">
        {sidebarItems.map((item, index) => {
          const IconComponent = item.icon;
          const SecondaryIconComponent = item.secondaryIcon;
          
          if (item.type === 'transaction') {
            return (
              <div key={item.id} className="flex flex-col items-center space-y-2 mb-0">
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                    activeItem === item.id
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  title={item.label}
                >
                  <IconComponent size={17} />
                  {SecondaryIconComponent && (
                    <SecondaryIconComponent size={10} className="-ml-1 -mt-2" />
                  )}
                </button>
              </div>
            );
          }
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border-white mb-0 ${
                activeItem === item.id
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              title={item.label}
            >
              <IconComponent size={20} strokeWidth={1.5} />
            </button>
          );
        })}
      </div>

      {/* Profile Avatar */}
      <div className="mt-auto">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
          <Image
            src="/sidebarpfp.webp"
            alt="Profile"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
