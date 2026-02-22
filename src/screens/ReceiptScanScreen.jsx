import { ArrowLeft, Check, Info, Pencil } from 'lucide-react';
import { C } from '../constants';

const items = [
  { emoji: '🥛', name: 'Whole Milk', qty: '1L', estExp: 'Dec 30', confidence: 'high' },
  { emoji: '🍗', name: 'Chicken Breast', qty: '500g', estExp: 'Dec 25', confidence: 'high' },
  { emoji: '🥦', name: 'Broccoli', qty: '300g', estExp: 'Dec 27', confidence: 'medium' },
  { emoji: '🧀', name: 'Cheddar Cheese', qty: '200g', estExp: 'Jan 15', confidence: 'high' },
  { emoji: '🍞', name: 'Sourdough Bread', qty: '1 loaf', estExp: 'Dec 26', confidence: 'medium' },
  { emoji: '🥚', name: 'Free Range Eggs', qty: '12 pcs', estExp: 'Jan 8', confidence: 'high' },
  { emoji: '🫐', name: 'Blueberries', qty: '250g', estExp: 'Dec 26', confidence: 'low' },
  { emoji: '🥑', name: 'Avocados', qty: '3 pcs', estExp: 'Dec 28', confidence: 'medium' },
];

const confidenceColors = {
  high: { bg: '#E8F5E9', text: '#2E7D32', label: 'High' },
  medium: { bg: '#FFF8E1', text: '#F57F17', label: 'Medium' },
  low: { bg: '#FFEBEE', text: '#C62828', label: 'Low' },
};

export default function ReceiptScanScreen({ onBack }) {
  return (
    <div className="px-5 pt-2">
      {/* Header */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 mb-3 cursor-pointer border-none bg-transparent p-0"
      >
        <ArrowLeft size={18} color={C.textPrimary} />
        <span className="text-sm font-medium" style={{ color: C.textPrimary }}>Back</span>
      </button>

      <div className="mb-4">
        <h2 className="text-xl font-bold" style={{ color: C.textPrimary }}>Scan Results</h2>
        <div className="flex items-center gap-1.5 mt-1">
          <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E8F5E9' }}>
            <Check size={12} color={C.primary} />
          </div>
          <span className="text-xs" style={{ color: C.textSecondary }}>
            We found <span className="font-bold">8 items</span> on your receipt
          </span>
        </div>
      </div>

      {/* Info Card */}
      <div
        className="rounded-xl p-3 mb-4 flex items-start gap-2"
        style={{ backgroundColor: '#E3F2FD', border: '1px solid #BBDEFB' }}
      >
        <Info size={14} color="#1565C0" className="mt-0.5 flex-shrink-0" />
        <span className="text-[11px] leading-relaxed" style={{ color: '#1565C0' }}>
          Expiration dates are <span className="font-bold">estimated</span> based on typical shelf life.
          Tap any item to adjust.
        </span>
      </div>

      {/* Detected Items */}
      <div className="space-y-2.5 mb-6">
        {items.map((item) => {
          const conf = confidenceColors[item.confidence];
          return (
            <div key={item.name} className="bg-white rounded-2xl p-3.5 shadow-sm flex items-center gap-3">
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold" style={{ color: C.textPrimary }}>{item.name}</span>
                  <span className="text-xs" style={{ color: C.textSecondary }}>{item.qty}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[10px]" style={{ color: C.textSecondary }}>Est. {item.estExp}</span>
                  <span
                    className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: conf.bg, color: conf.text }}
                  >
                    {conf.label} confidence
                  </span>
                </div>
              </div>
              <button
                className="w-7 h-7 rounded-full flex items-center justify-center cursor-pointer border-none"
                style={{ backgroundColor: '#F3F4F6' }}
              >
                <Pencil size={12} color={C.textSecondary} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Confirm Button */}
      <div className="mb-6">
        <button
          className="w-full py-3.5 rounded-full text-white font-semibold text-sm cursor-pointer border-none"
          style={{ backgroundColor: C.primary }}
        >
          Confirm & Add to Pantry
        </button>
      </div>
    </div>
  );
}
