import { useState } from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';
import { C } from '../constants';

const allItems = [
  { emoji: '🥛', name: 'Oat Milk', qty: '1L' },
  { emoji: '🧀', name: 'Parmesan', qty: '200g' },
  { emoji: '🥚', name: 'Eggs', qty: '6 pcs' },
  { emoji: '🍝', name: 'Pasta', qty: '500g' },
  { emoji: '🫐', name: 'Blueberries', qty: '150g' },
  { emoji: '🥑', name: 'Avocado', qty: '2 pcs' },
  { emoji: '🍞', name: 'Bread', qty: '1 loaf' },
  { emoji: '🧈', name: 'Butter', qty: '250g' },
  { emoji: '🥕', name: 'Carrots', qty: '500g' },
  { emoji: '🍎', name: 'Apples', qty: '4 pcs' },
  { emoji: '🫒', name: 'Olive Oil', qty: '500ml' },
  { emoji: '🍚', name: 'Rice', qty: '1kg' },
];

export default function WeeklyRecapScreen({ onBack }) {
  const [currentItem, setCurrentItem] = useState(0);

  const total = allItems.length;
  const item = allItems[currentItem];
  const progress = (currentItem / total) * 100;

  const advance = () => {
    if (currentItem < total - 1) setCurrentItem((p) => p + 1);
  };

  return (
    <div className="px-5 pt-2 flex flex-col h-full">
      {/* Header */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 mb-3 cursor-pointer border-none bg-transparent p-0"
      >
        <ArrowLeft size={18} color={C.textPrimary} />
        <span className="text-sm font-medium" style={{ color: C.textPrimary }}>Back</span>
      </button>

      <div className="text-center mb-2">
        <h2 className="text-xl font-bold" style={{ color: C.textPrimary }}>Sunday Check-in ☀️</h2>
        <p className="text-xs mt-1" style={{ color: C.textSecondary }}>
          Let's sync your pantry in 30 seconds
        </p>
      </div>

      {/* Progress */}
      <div className="mb-2">
        <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: C.primary }}
          />
        </div>
        <p className="text-[10px] text-center mt-1" style={{ color: C.textSecondary }}>
          {currentItem} of {total} items checked
        </p>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-8 shadow-md w-full text-center">
          <span className="text-7xl block mb-4">{item.emoji}</span>
          <h3 className="text-xl font-bold mb-1" style={{ color: C.textPrimary }}>{item.name}</h3>
          <p className="text-sm mb-1" style={{ color: C.textSecondary }}>{item.qty}</p>
          <p className="text-base font-medium mt-4 mb-6" style={{ color: C.textPrimary }}>
            Still have this?
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={advance}
              className="flex-1 py-3.5 rounded-full flex items-center justify-center gap-2 cursor-pointer font-semibold text-sm border-none"
              style={{ backgroundColor: '#FFEBEE', color: C.danger, maxWidth: 140 }}
            >
              <X size={18} />
              No, used it
            </button>
            <button
              onClick={advance}
              className="flex-1 py-3.5 rounded-full flex items-center justify-center gap-2 cursor-pointer font-semibold text-sm border-none"
              style={{ backgroundColor: '#E8F5E9', color: C.primary, maxWidth: 140 }}
            >
              <Check size={18} />
              Yes
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-[10px] py-4" style={{ color: C.textSecondary }}>
        Swipe or tap to move through items quickly
      </p>
    </div>
  );
}
