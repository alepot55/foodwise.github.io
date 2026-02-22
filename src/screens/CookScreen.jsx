import { Bell, ChevronRight, Clock, Flame, Leaf, Sparkles } from 'lucide-react';
import { C } from '../constants';

const expiringItems = [
  { emoji: '🍗', name: 'Chicken Breast', exp: 'Tomorrow', urgent: true },
  { emoji: '🍓', name: 'Strawberries', exp: 'In 2 days', urgent: false },
  { emoji: '🥬', name: 'Spinach', exp: 'In 3 days', urgent: false },
  { emoji: '🐟', name: 'Salmon Fillet', exp: 'In 2 days', urgent: false },
];

const recipes = [
  {
    name: 'Vegetable Omelette',
    desc: 'Uses 3 expiring ingredients',
    ingredients: ['🥚', '🫑', '🧅'],
    time: '15 min',
    cal: '320 cal',
    saves: '€2.40',
    gradient: 'linear-gradient(135deg, #FFF8E1 0%, #FFE0B2 100%)',
    emoji: '🍳',
  },
  {
    name: 'Chicken Stir-Fry',
    desc: 'Uses 3 expiring ingredients',
    ingredients: ['🍗', '🥬', '🧄'],
    time: '25 min',
    cal: '480 cal',
    saves: '€4.10',
    gradient: 'linear-gradient(135deg, #FBE9E7 0%, #FFCCBC 100%)',
    emoji: '🥘',
  },
  {
    name: 'Berry Smoothie Bowl',
    desc: 'Uses 2 expiring ingredients',
    ingredients: ['🍓', '🥛', '🍌'],
    time: '5 min',
    cal: '220 cal',
    saves: '€1.80',
    gradient: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)',
    emoji: '🫐',
  },
];

export default function CookScreen() {
  return (
    <div className="px-5 pt-2">
      {/* ── Header ── */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2.5">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#E8F5E9' }}
          >
            <Leaf size={20} color={C.primary} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-[17px] font-extrabold tracking-tight" style={{ color: C.textPrimary }}>
              Foodwise
            </h1>
          </div>
        </div>
        <button className="relative p-2 -mr-2 cursor-pointer bg-transparent border-none">
          <Bell size={22} color={C.textSecondary} />
          <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#F8F9FA]" style={{ backgroundColor: C.danger }} />
        </button>
      </div>

      {/* ── Greeting ── */}
      <div className="mb-6">
        <h2 className="text-[22px] font-extrabold leading-tight tracking-tight" style={{ color: C.textPrimary }}>
          Good evening, Alessandro 👋
        </h2>
        <p className="text-[13px] mt-1 flex items-center gap-1" style={{ color: C.secondary }}>
          You have <span className="font-bold">3 items expiring soon</span>
          <ChevronRight size={14} />
        </p>
      </div>

      {/* ── Primary CTA ── */}
      <div
        className="rounded-2xl p-5 mb-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #43A047 0%, #00897B 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/[0.07]" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/[0.05]" />

        <div className="relative">
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles size={18} color="rgba(255,255,255,0.8)" />
            <span className="text-white/70 text-[11px] font-semibold uppercase tracking-wider">Magic Cook</span>
          </div>
          <h3 className="text-white text-[21px] font-extrabold leading-tight mb-1">What's for dinner?</h3>
          <p className="text-white/75 text-[13px] mb-5 leading-snug">
            Find recipes using what you already have
          </p>
          <button
            className="w-full py-3.5 rounded-full text-white font-bold text-[15px] flex items-center justify-center gap-2 cursor-pointer border-none shadow-lg"
            style={{
              backgroundColor: 'rgba(0,0,0,0.25)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            🍳 Find Recipes
          </button>
          <p className="text-white/50 text-[11px] text-center mt-3 font-medium">
            36 ingredients available · 12 recipes suggested
          </p>
        </div>
      </div>

      {/* ── Expiring Soon ── */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FFF3E0' }}>
              <span className="text-sm">⚠️</span>
            </div>
            <h3 className="text-[13px] font-bold" style={{ color: C.textPrimary }}>Use these first</h3>
          </div>
          <span className="text-[11px] font-semibold cursor-pointer" style={{ color: C.primary }}>See all</span>
        </div>

        <div className="flex gap-2.5 overflow-x-auto -mx-5 px-5 pb-1 no-scrollbar">
          {expiringItems.map((item) => (
            <div
              key={item.name}
              className="flex-shrink-0 bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer"
              style={{ width: 128 }}
            >
              {/* Colored top accent */}
              <div
                className="h-1"
                style={{ backgroundColor: item.urgent ? C.danger : C.secondary }}
              />
              <div className="px-3 pt-3 pb-3 flex flex-col items-center">
                <span className="text-[36px] leading-none mb-2">{item.emoji}</span>
                <span
                  className="text-[12px] font-bold text-center leading-snug mb-2"
                  style={{ color: C.textPrimary }}
                >
                  {item.name}
                </span>
                <div
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: item.urgent ? '#FFF0F0' : '#FFF8E1',
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: item.urgent ? C.danger : C.secondary }}
                  />
                  <span
                    className="text-[10px] font-semibold whitespace-nowrap"
                    style={{ color: item.urgent ? C.danger : '#E65100' }}
                  >
                    {item.exp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Suggested Recipes ── */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-[13px] font-bold" style={{ color: C.textPrimary }}>Suggested for you</h3>
          <span className="text-[11px] font-semibold cursor-pointer" style={{ color: C.primary }}>See all →</span>
        </div>

        <div className="space-y-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.name}
              className="bg-white rounded-2xl p-3 flex gap-3.5 shadow-sm cursor-pointer"
            >
              {/* Thumbnail */}
              <div
                className="w-[76px] h-[76px] rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: recipe.gradient }}
              >
                <span className="text-[32px] leading-none">{recipe.emoji}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <div>
                  <h4 className="text-[13px] font-bold leading-tight" style={{ color: C.textPrimary }}>
                    {recipe.name}
                  </h4>
                  <p className="text-[11px] mt-0.5 leading-snug" style={{ color: C.textSecondary }}>
                    {recipe.desc}
                  </p>
                </div>

                {/* Ingredients row */}
                <div className="flex items-center gap-1 mt-1.5">
                  {recipe.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="w-[22px] h-[22px] rounded-full bg-gray-50 flex items-center justify-center text-[12px] leading-none"
                      style={{ border: '1px solid #F3F4F6' }}
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                {/* Meta row */}
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[10px] flex items-center gap-1 font-medium" style={{ color: C.textSecondary }}>
                    <Clock size={10} strokeWidth={2.5} />
                    {recipe.time}
                  </span>
                  <span className="text-[10px] flex items-center gap-1 font-medium" style={{ color: C.textSecondary }}>
                    <Flame size={10} strokeWidth={2.5} />
                    {recipe.cal}
                  </span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full ml-auto"
                    style={{ backgroundColor: '#E8F5E9', color: '#2E7D32' }}
                  >
                    Saves {recipe.saves}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
