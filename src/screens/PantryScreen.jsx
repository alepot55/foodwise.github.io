import { useState } from 'react';
import { Camera, Check, ChevronRight, Clock, Package, ScanLine } from 'lucide-react';
import { C } from '../constants';

const filters = [
  { label: 'All', emoji: null, count: 36 },
  { label: 'Fruits', emoji: '🍎', count: 8 },
  { label: 'Vegetables', emoji: '🥬', count: 6 },
  { label: 'Dairy', emoji: '🥛', count: 5 },
  { label: 'Meat', emoji: '🥩', count: 4 },
  { label: 'Grains', emoji: '🌾', count: 7 },
  { label: 'Other', emoji: '📦', count: 6 },
];

const items = [
  { emoji: '🍗', name: 'Chicken Breast', qty: '450g', exp: 'Tomorrow', status: 'red', date: 'Dec 23', pct: 5, scanned: true },
  { emoji: '🍓', name: 'Strawberries', qty: '250g', exp: '2 days', status: 'amber', date: 'Dec 24', pct: 20, scanned: true },
  { emoji: '🥬', name: 'Spinach', qty: '200g', exp: '3 days', status: 'amber', date: 'Dec 25', pct: 30, scanned: false },
  { emoji: '🐟', name: 'Salmon Fillet', qty: '300g', exp: '2 days', status: 'amber', date: 'Dec 24', pct: 20, scanned: true },
  { emoji: '🫐', name: 'Blueberries', qty: '150g', exp: '6 days', status: 'green', date: 'Dec 28', pct: 60, scanned: false },
  { emoji: '🥛', name: 'Oat Milk', qty: '1L', exp: '14 days', status: 'green', date: 'Jan 5', pct: 85, scanned: true },
  { emoji: '🥑', name: 'Avocado', qty: '2 pcs', exp: '4 days', status: 'amber', date: 'Dec 26', pct: 35, scanned: false },
  { emoji: '🍝', name: 'Pasta', qty: '500g', exp: '83 days', status: 'green', date: 'Mar 15', pct: 95, scanned: true },
  { emoji: '🧀', name: 'Parmesan', qty: '200g', exp: '29 days', status: 'green', date: 'Jan 20', pct: 90, scanned: false },
  { emoji: '🥚', name: 'Eggs', qty: '6 pcs', exp: '11 days', status: 'green', date: 'Jan 2', pct: 75, scanned: true },
];

const statusColors = { red: C.danger, amber: C.secondary, green: C.primary };
const statusBg = { red: '#FFF0F0', amber: '#FFF8E1', green: '#F1F8E9' };

export default function PantryScreen({ onScan }) {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="px-5 pt-2">
      {/* ── Header ── */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-[22px] font-extrabold tracking-tight" style={{ color: C.textPrimary }}>
            Your Pantry
          </h2>
          <div className="flex items-center gap-1.5 mt-1">
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#E8F5E9' }}
            >
              <Check size={10} color={C.primary} strokeWidth={3} />
            </div>
            <span className="text-[11px] font-medium" style={{ color: C.textSecondary }}>
              Updated via receipt scan · 2h ago
            </span>
          </div>
        </div>
        <button
          className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer border-none shadow-sm"
          style={{ backgroundColor: '#E8F5E9' }}
          onClick={onScan}
        >
          <Camera size={18} color={C.primary} strokeWidth={2.5} />
        </button>
      </div>

      {/* ── Alert Banner ── */}
      <div
        className="rounded-2xl p-3.5 mb-4 flex items-center gap-3 cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
          border: '1px solid #FFE082',
        }}
      >
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: 'rgba(255, 152, 0, 0.15)' }}
        >
          <Clock size={20} color="#E65100" strokeWidth={2.5} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-bold leading-tight" style={{ color: '#BF360C' }}>
            3 items expiring soon
          </p>
          <p className="text-[11px] mt-0.5 leading-tight" style={{ color: '#E65100' }}>
            Cook them before they go to waste
          </p>
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-0.5 px-3 py-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: 'rgba(255, 152, 0, 0.15)' }}
        >
          <span className="text-[10px] font-bold" style={{ color: '#E65100' }}>Cook now</span>
          <ChevronRight size={12} color="#E65100" />
        </div>
      </div>

      {/* ── Filter Tabs ── */}
      <div className="flex gap-2 overflow-x-auto -mx-5 px-5 pb-3 no-scrollbar">
        {filters.map((f) => {
          const isActive = activeFilter === f.label;
          return (
            <button
              key={f.label}
              onClick={() => setActiveFilter(f.label)}
              className="flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] font-semibold cursor-pointer border-none whitespace-nowrap"
              style={{
                backgroundColor: isActive ? C.primary : '#fff',
                color: isActive ? '#fff' : C.textPrimary,
                boxShadow: isActive ? 'none' : '0 1px 3px rgba(0,0,0,0.06)',
                border: isActive ? 'none' : '1px solid #F3F4F6',
              }}
            >
              {f.emoji && <span className="text-[13px]">{f.emoji}</span>}
              {f.label}
              <span
                className="text-[10px] font-bold ml-0.5"
                style={{
                  color: isActive ? 'rgba(255,255,255,0.7)' : C.textSecondary,
                }}
              >
                {f.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Inventory Grid ── */}
      <div className="grid grid-cols-2 gap-2.5 pb-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer relative"
          >
            {/* Top accent bar */}
            <div
              className="h-[3px]"
              style={{ backgroundColor: statusColors[item.status] }}
            />

            {/* Scanned badge */}
            {item.scanned && (
              <div className="absolute top-2.5 right-2 flex items-center gap-0.5 px-1.5 py-0.5 rounded-md" style={{ backgroundColor: '#F3F4F6' }}>
                <ScanLine size={8} color={C.textSecondary} />
                <span className="text-[7px] font-semibold" style={{ color: C.textSecondary }}>Scanned</span>
              </div>
            )}

            <div className="px-3 pt-3 pb-3 flex flex-col items-center">
              <span className="text-[38px] leading-none mb-1.5">{item.emoji}</span>
              <span className="text-[12px] font-bold text-center leading-snug" style={{ color: C.textPrimary }}>
                {item.name}
              </span>
              <span className="text-[10px] mt-0.5 font-medium" style={{ color: C.textSecondary }}>
                {item.qty}
              </span>

              {/* Expiration bar */}
              <div className="w-full h-[5px] rounded-full mt-2.5 mb-1.5 overflow-hidden" style={{ backgroundColor: '#F3F4F6' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.max(item.pct, 4)}%`,
                    backgroundColor: statusColors[item.status],
                  }}
                />
              </div>

              {/* Expiry label */}
              <div
                className="flex items-center gap-1 px-2 py-0.5 rounded-full"
                style={{ backgroundColor: statusBg[item.status] }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: statusColors[item.status] }}
                />
                <span
                  className="text-[9px] font-semibold whitespace-nowrap"
                  style={{
                    color: item.status === 'red' ? C.danger : item.status === 'amber' ? '#E65100' : '#2E7D32',
                  }}
                >
                  {item.status === 'red' ? `Expires ${item.exp}!` : `Exp. ${item.date}`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
