import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
import RightTransferPanel from './RightTransferPanel';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-green-50">
      {/* Left Sidebar */}
      <LeftSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-16 mr-80 min-h-screen">
        <MainContent />
      </div>
      
      {/* Right Transfer Panel - Fixed */}
      <RightTransferPanel />
    </div>
  );
}
