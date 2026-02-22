import { ChefHat, Refrigerator, CalendarDays, ShoppingCart, User } from 'lucide-react';
import { C } from '../constants';

const tabs = [
  { icon: ChefHat, label: 'Cook' },
  { icon: Refrigerator, label: 'Pantry' },
  { icon: CalendarDays, label: 'Plan' },
  { icon: ShoppingCart, label: 'Shop' },
  { icon: User, label: 'Profile' },
];

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <div className="bg-white border-t border-gray-100" style={{ paddingBottom: 20 }}>
      <div className="flex justify-around items-center pt-2">
        {tabs.map((tab, i) => {
          const Icon = tab.icon;
          const isActive = activeTab === i;
          return (
            <button
              key={tab.label}
              onClick={() => onTabChange(i)}
              className="flex flex-col items-center gap-0.5 cursor-pointer bg-transparent border-none p-0"
            >
              <Icon
                size={24}
                color={isActive ? C.primary : '#9CA3AF'}
                fill={isActive ? C.primary : 'none'}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className="text-[10px] font-semibold"
                style={{ color: isActive ? C.primary : '#9CA3AF' }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
