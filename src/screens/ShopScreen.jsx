import { useState } from 'react';
import { Check, Pencil, Share2 } from 'lucide-react';
import { C } from '../constants';

const categories = [
  {
    icon: '🥩',
    title: 'Meat & Fish',
    items: [
      { key: 'chicken_thighs', name: 'Chicken Thighs', qty: '500g', reason: 'For: Thursday dinner' },
      { key: 'ground_beef', name: 'Ground Beef', qty: '400g', reason: 'For: Pasta Bolognese' },
    ],
  },
  {
    icon: '🥬',
    title: 'Vegetables',
    items: [
      { key: 'tomatoes', name: 'Tomatoes', qty: '4 pcs', reason: 'For: Caprese + Bolognese' },
      { key: 'bell_peppers', name: 'Bell Peppers', qty: '2 pcs', reason: '🔄 Weekly staple' },
      { key: 'onions', name: 'Onions', qty: '3 pcs', reason: '🔄 Weekly staple' },
    ],
  },
  {
    icon: '🥛',
    title: 'Dairy',
    items: [
      { key: 'greek_yogurt', name: 'Greek Yogurt', qty: '500g', reason: '🔄 Weekly staple' },
      { key: 'mozzarella', name: 'Mozzarella', qty: '125g', reason: 'For: Caprese Sandwich' },
    ],
  },
  {
    icon: '🍞',
    title: 'Pantry Staples',
    items: [
      { key: 'olive_oil', name: 'Olive Oil', qty: '500ml', reason: '⚠️ Running low' },
      { key: 'rice', name: 'Rice', qty: '1kg', reason: '🔄 Monthly restock' },
    ],
  },
];

export default function ShopScreen() {
  const [checked, setChecked] = useState({ onions: true });

  const toggle = (key) => setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="flex flex-col h-full">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-5 pt-2">
        {/* Header */}
        <div className="flex justify-between items-center mb-1">
          <div>
            <h2 className="text-xl font-bold" style={{ color: C.textPrimary }}>Shopping List</h2>
            <span className="text-xs" style={{ color: C.textSecondary }}>Auto-generated from your meal plan</span>
          </div>
          <button
            className="flex items-center gap-1 px-3 py-1.5 rounded-full cursor-pointer border-none"
            style={{ backgroundColor: '#F3F4F6' }}
          >
            <Pencil size={12} color={C.textSecondary} />
            <span className="text-xs font-medium" style={{ color: C.textSecondary }}>Edit</span>
          </button>
        </div>

        {/* Predicted Needs Banner */}
        <div
          className="rounded-xl p-3 my-3 flex items-center gap-2"
          style={{ backgroundColor: '#E8F5E9', border: '1px solid #C8E6C9' }}
        >
          <span className="text-base">🧠</span>
          <span className="text-xs" style={{ color: '#2E7D32' }}>
            Based on your habits, you'll need these by Friday
          </span>
        </div>

        {/* Shopping List */}
        <div className="space-y-4 pb-4">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xs font-bold mb-2 flex items-center gap-1.5" style={{ color: C.textPrimary }}>
                <span>{cat.icon}</span> {cat.title}
              </h3>
              <div className="space-y-2">
                {cat.items.map((item) => {
                  const isChecked = !!checked[item.key];
                  return (
                    <div
                      key={item.key}
                      onClick={() => toggle(item.key)}
                      className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm cursor-pointer"
                      style={{ opacity: isChecked ? 0.5 : 1 }}
                    >
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{
                          border: isChecked ? 'none' : '2px solid #D1D5DB',
                          backgroundColor: isChecked ? C.primary : 'transparent',
                        }}
                      >
                        {isChecked && <Check size={12} color="#fff" />}
                      </div>
                      <div className="flex-1">
                        <span
                          className="text-sm font-medium"
                          style={{
                            color: C.textPrimary,
                            textDecoration: isChecked ? 'line-through' : 'none',
                          }}
                        >
                          {item.name}
                        </span>
                        <span className="text-xs ml-2" style={{ color: C.textSecondary }}>{item.qty}</span>
                      </div>
                      <span className="text-[10px] max-w-[100px] text-right" style={{ color: C.textSecondary }}>
                        {item.reason}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Bar — sticky inside the screen, not fixed */}
      <div className="bg-white border-t border-gray-100 py-3 px-5 flex items-center justify-between">
        <span className="text-xs font-medium" style={{ color: C.textSecondary }}>
          12 items · Est. <span className="font-bold" style={{ color: C.textPrimary }}>€34.50</span>
        </span>
        <button
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-xs font-semibold cursor-pointer border-none"
          style={{ backgroundColor: C.primary }}
        >
          <Share2 size={12} />
          Share List
        </button>
      </div>
    </div>
  );
}
