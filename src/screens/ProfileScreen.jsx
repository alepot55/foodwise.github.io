import {
  Bell,
  ChevronRight,
  HelpCircle,
  Info,
  SlidersHorizontal,
  Store,
  TrendingUp,
  Users,
} from 'lucide-react';
import { C } from '../constants';

const weekData = [
  { day: 'Mon', val: 2.1 },
  { day: 'Tue', val: 4.3 },
  { day: 'Wed', val: 1.8 },
  { day: 'Thu', val: 6.2 },
  { day: 'Fri', val: 3.1 },
  { day: 'Sat', val: 0 },
  { day: 'Sun', val: 0 },
];

const menuItems = [
  { icon: SlidersHorizontal, label: 'Dietary Preferences' },
  { icon: Bell, label: 'Notification Settings' },
  { icon: Users, label: 'Household Size' },
  { icon: Store, label: 'Connected Stores' },
  { icon: HelpCircle, label: 'Help & Support' },
  { icon: Info, label: 'About Foodwise' },
];

export default function ProfileScreen({ onRecap }) {
  const maxVal = Math.max(...weekData.map((d) => d.val));

  return (
    <div className="px-5 pt-2">
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white"
          style={{ backgroundColor: C.primary }}
        >
          AP
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: C.textPrimary }}>Alessandro Potenza</h2>
          <span className="text-xs" style={{ color: C.textSecondary }}>alessandro@mail.com</span>
          <br />
          <span className="text-xs font-medium cursor-pointer" style={{ color: C.primary }}>Edit profile →</span>
        </div>
      </div>

      {/* Savings Dashboard */}
      <div
        className="rounded-2xl p-5 mb-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)' }}
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
        <p className="text-white/80 text-xs font-medium mb-1">🌱 You saved this month</p>
        <p className="text-white text-4xl font-bold mb-1">€47.20</p>
        <p className="text-white/70 text-xs mb-3">That's 3.2 kg of food rescued!</p>
        <div className="w-full h-2 rounded-full bg-white/20 mb-1.5">
          <div className="h-full rounded-full bg-white" style={{ width: '78%' }} />
        </div>
        <div className="flex justify-between">
          <span className="text-white/60 text-[10px]">€47 / €60 goal</span>
          <span className="text-white/80 text-[10px] flex items-center gap-0.5">
            <TrendingUp size={10} /> ↑ 23% more than last month
          </span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        {[
          { icon: '📷', val: '12', label: 'Receipts scanned' },
          { icon: '🍽', val: '34', label: 'Meals cooked' },
          { icon: '♻️', val: '3.2 kg', label: 'Food saved' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-3 text-center shadow-sm">
            <span className="text-lg">{s.icon}</span>
            <p className="text-lg font-bold mt-0.5" style={{ color: C.textPrimary }}>{s.val}</p>
            <p className="text-[9px]" style={{ color: C.textSecondary }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Weekly Chart */}
      <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
        <h3 className="text-xs font-bold mb-3" style={{ color: C.textPrimary }}>Weekly Savings</h3>
        <div className="flex items-end justify-between gap-2" style={{ height: 100 }}>
          {weekData.map((d) => (
            <div key={d.day} className="flex flex-col items-center gap-1 flex-1">
              <span className="text-[9px] font-semibold" style={{ color: C.textSecondary }}>
                {d.val > 0 ? `€${d.val}` : ''}
              </span>
              <div
                className="w-full rounded-t-md"
                style={{
                  height: d.val > 0 ? `${(d.val / maxVal) * 70}px` : 4,
                  backgroundColor: d.val > 0 ? C.primary : '#E5E7EB',
                  minHeight: 4,
                }}
              />
              <span className="text-[9px]" style={{ color: C.textSecondary }}>{d.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sunday Recap CTA */}
      <button
        onClick={onRecap}
        className="w-full bg-white rounded-2xl p-4 mb-4 shadow-sm flex items-center gap-3 cursor-pointer border-none text-left"
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: '#FFF8E1' }}
        >
          <span className="text-lg">☀️</span>
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold" style={{ color: C.textPrimary }}>Sunday Check-in</p>
          <p className="text-[10px]" style={{ color: C.textSecondary }}>Sync your pantry in 30 seconds</p>
        </div>
        <ChevronRight size={16} color={C.textSecondary} />
      </button>

      {/* Settings Menu */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-6">
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-center gap-3 px-4 py-3.5 cursor-pointer"
              style={{ borderBottom: i < menuItems.length - 1 ? '1px solid #F3F4F6' : 'none' }}
            >
              <Icon size={18} color={C.textSecondary} />
              <span className="text-sm flex-1" style={{ color: C.textPrimary }}>{item.label}</span>
              <ChevronRight size={16} color="#D1D5DB" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
