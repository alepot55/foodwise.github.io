import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Clock, Flame, Sparkles } from 'lucide-react';
import { C } from '../constants';

const days = [
  { short: 'Mon', num: '22', meals: true },
  { short: 'Tue', num: '23', meals: true },
  { short: 'Wed', num: '24', meals: true },
  { short: 'Thu', num: '25', meals: true },
  { short: 'Fri', num: '26', meals: false },
  { short: 'Sat', num: '27', meals: false },
  { short: 'Sun', num: '28', meals: false },
];

const meals = [
  { type: 'BREAKFAST', name: 'Classic Scrambled Eggs', time: '10 min', cal: '280 cal', pantryItems: 3, emoji: '🍳' },
  { type: 'LUNCH', name: 'Caprese Sandwich', time: '5 min', cal: '410 cal', pantryItems: 4, emoji: '🥪' },
  { type: 'DINNER', name: 'Teriyaki Salmon', time: '30 min', cal: '520 cal', pantryItems: 5, emoji: '🐟' },
];

const mealTypeColors = {
  BREAKFAST: '#FF9800',
  LUNCH: '#4CAF50',
  DINNER: '#5C6BC0',
};

export default function PlanScreen() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [activeToggle, setActiveToggle] = useState('upcoming');

  return (
    <div className="px-5 pt-2">
      {/* Header */}
      <div className="mb-3">
        <h2 className="text-xl font-bold" style={{ color: C.textPrimary }}>Meal Plan</h2>
        <div className="flex items-center gap-2 mt-1">
          <ArrowLeft size={14} color={C.textSecondary} className="cursor-pointer" />
          <span className="text-xs font-medium" style={{ color: C.textSecondary }}>
            Week of Dec 22 — Dec 28
          </span>
          <ArrowRight size={14} color={C.textSecondary} className="cursor-pointer" />
        </div>
      </div>

      {/* Toggle */}
      <div className="flex bg-gray-100 rounded-xl p-1 mb-4">
        {['upcoming', 'completed'].map((t) => (
          <button
            key={t}
            onClick={() => setActiveToggle(t)}
            className="flex-1 py-2 rounded-lg text-xs font-semibold cursor-pointer border-none"
            style={{
              backgroundColor: activeToggle === t ? '#fff' : 'transparent',
              color: activeToggle === t ? C.textPrimary : C.textSecondary,
              boxShadow: activeToggle === t ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
            }}
          >
            {t === 'upcoming' ? 'Upcoming' : 'Completed (3)'}
          </button>
        ))}
      </div>

      {/* Day Selector */}
      <div className="flex justify-between mb-4">
        {days.map((day, i) => (
          <button
            key={day.short}
            onClick={() => setSelectedDay(i)}
            className="flex flex-col items-center gap-0.5 cursor-pointer border-none bg-transparent p-0"
          >
            <span className="text-[10px] font-medium" style={{ color: C.textSecondary }}>
              {day.short}
            </span>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                backgroundColor: selectedDay === i ? C.primary : 'transparent',
                color: selectedDay === i ? '#fff' : C.textPrimary,
              }}
            >
              {day.num}
            </div>
            {day.meals && (
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.primary }} />
            )}
          </button>
        ))}
      </div>

      {/* Meal Cards */}
      <div className="space-y-3 mb-4">
        {meals.map((meal) => (
          <div key={meal.type} className="bg-white rounded-2xl overflow-hidden shadow-sm flex">
            <div className="w-1.5" style={{ backgroundColor: mealTypeColors[meal.type] }} />
            <div className="flex-1 p-4 flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${mealTypeColors[meal.type]}15` }}
              >
                <span className="text-xl">{meal.emoji}</span>
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold tracking-wider" style={{ color: mealTypeColors[meal.type] }}>
                  {meal.type}
                </span>
                <h4 className="text-sm font-bold mt-0.5" style={{ color: C.textPrimary }}>{meal.name}</h4>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] flex items-center gap-0.5" style={{ color: C.textSecondary }}>
                    <Clock size={10} /> {meal.time}
                  </span>
                  <span className="text-[10px] flex items-center gap-0.5" style={{ color: C.textSecondary }}>
                    <Flame size={10} /> {meal.cal}
                  </span>
                </div>
                <span className="text-[10px] mt-0.5 block" style={{ color: C.textSecondary }}>
                  Uses {meal.pantryItems} pantry items
                </span>
              </div>
              <button
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer bg-transparent"
                style={{ borderColor: '#D1D5DB' }}
              >
                <Check size={14} color="#D1D5DB" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Suggestion */}
      <div
        className="rounded-2xl p-4 mb-6"
        style={{ border: '2px dashed #C8E6C9', backgroundColor: '#F1F8E9' }}
      >
        <div className="flex items-start gap-2.5">
          <Sparkles size={18} color={C.primary} className="mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs leading-relaxed" style={{ color: C.textPrimary }}>
              <span className="font-bold">Foodwise suggests</span>: Cook the Chicken Stir-Fry tonight
              — your chicken expires tomorrow!
            </p>
            <button
              className="mt-2 px-4 py-1.5 rounded-full text-white text-xs font-semibold cursor-pointer border-none"
              style={{ backgroundColor: C.primary }}
            >
              Add to plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
