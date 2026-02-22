import { useState } from 'react';
import BottomNav from './components/BottomNav';
import CookScreen from './screens/CookScreen';
import PantryScreen from './screens/PantryScreen';
import PlanScreen from './screens/PlanScreen';
import ShopScreen from './screens/ShopScreen';
import ProfileScreen from './screens/ProfileScreen';
import ReceiptScanScreen from './screens/ReceiptScanScreen';
import WeeklyRecapScreen from './screens/WeeklyRecapScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [subScreen, setSubScreen] = useState(null);

  const renderScreen = () => {
    if (subScreen === 'scan') return <ReceiptScanScreen onBack={() => setSubScreen(null)} />;
    if (subScreen === 'recap') return <WeeklyRecapScreen onBack={() => setSubScreen(null)} />;
    switch (activeTab) {
      case 0: return <CookScreen />;
      case 1: return <PantryScreen onScan={() => setSubScreen('scan')} />;
      case 2: return <PlanScreen />;
      case 3: return <ShopScreen />;
      case 4: return <ProfileScreen onRecap={() => setSubScreen('recap')} />;
      default: return <CookScreen />;
    }
  };

  // ShopScreen gestisce il suo layout interno (flex col con summary bar)
  const isShop = !subScreen && activeTab === 3;

  return (
    <div className="flex items-center justify-center h-[100dvh] md:min-h-screen md:h-auto md:bg-gray-200">
      <div
        className="relative bg-[#F8F9FA] overflow-hidden flex flex-col w-full h-[100dvh] md:w-[390px] md:h-[844px] md:rounded-[40px] md:shadow-[0_25px_60px_rgba(0,0,0,0.3)]"
      >
        {/* Status bar — solo su desktop (simulatore) */}
        <div className="hidden md:flex justify-between items-center px-6 pt-3 pb-1 text-xs font-semibold text-[#1A1A2E]">
          <span>9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-4 h-2.5 border border-[#1A1A2E] rounded-sm relative">
              <div className="absolute inset-0.5 bg-[#1A1A2E] rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Screen content */}
        {isShop ? (
          // Shop ha il suo scroll interno + summary bar, serve flex-1
          <div className="flex-1 flex flex-col min-h-0">
            {renderScreen()}
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
            {renderScreen()}
          </div>
        )}

        {/* Bottom Navigation */}
        {!subScreen && (
          <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        )}
      </div>
    </div>
  );
}
