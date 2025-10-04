import Header from './Header';
import BalanceCard from './BalanceCard';
import CurrencyCards from './CurrencyCards';
import SpendingChart from './SpendingChart';
import RecentTransactions from './RecentTransactions';

export default function MainContent() {
  return (
    <div className="flex-1 p-4 lg:p-6">
      {/* Header */}
      <Header />
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-4 lg:gap-6">
        {/* Left Column */}
        <div className="lg:max-w-sm flex flex-col gap-4">
          <BalanceCard />
          <CurrencyCards />
        </div>
        
        {/* Center Column */}
        <div className="flex flex-col gap-4">
          <RecentTransactions />
        </div>
      </div>

      {/* Spending Chart - Full Width Below */}
      <div className="mt-6">
        <SpendingChart />
      </div>
    </div>
  );
}