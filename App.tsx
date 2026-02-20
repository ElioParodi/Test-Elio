import React, { useState, useEffect, useMemo } from 'react';
import { SEO_CHECKLIST_ITEMS, CATEGORY_LABELS } from './constants';
import { ChecklistCard } from './components/ChecklistCard';
import { ProgressHeader } from './components/ProgressHeader';
import { ChecklistState } from './types';
import { Filter, Trophy } from 'lucide-react';

const App: React.FC = () => {
  // Load initial state from local storage or default to empty
  const [checkedItems, setCheckedItems] = useState<ChecklistState>(() => {
    try {
      const saved = localStorage.getItem('seoChecklistState');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showCelebration, setShowCelebration] = useState(false);

  // Persistence
  useEffect(() => {
    localStorage.setItem('seoChecklistState', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => {
      const newState = { ...prev, [id]: !prev[id] };
      return newState;
    });
  };

  const resetList = () => {
    if (window.confirm('Sei sicuro di voler resettare tutti i controlli?')) {
      setCheckedItems({});
      setShowCelebration(false);
    }
  };

  // Score Calculation
  const totalScore = useMemo(() => SEO_CHECKLIST_ITEMS.reduce((acc, item) => acc + item.value, 0), []);
  const currentScore = useMemo(() => SEO_CHECKLIST_ITEMS.reduce((acc, item) => {
    return acc + (checkedItems[item.id] ? item.value : 0);
  }, 0), [checkedItems]);
  
  const isComplete = currentScore === totalScore && totalScore > 0;

  useEffect(() => {
    if (isComplete) {
      setShowCelebration(true);
    }
  }, [isComplete]);

  // Filter and Sort logic
  const filteredItems = useMemo(() => {
    const items = activeCategory === 'all' 
      ? [...SEO_CHECKLIST_ITEMS] 
      : SEO_CHECKLIST_ITEMS.filter(item => item.category === activeCategory);
    
    // Ordina per punteggio decrescente (punti più alti in cima)
    return items.sort((a, b) => b.value - a.value);
  }, [activeCategory]);

  const categories = ['all', ...Array.from(new Set(SEO_CHECKLIST_ITEMS.map(item => item.category)))];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-24">
      
      <ProgressHeader 
        total={totalScore} 
        current={currentScore} 
        onReset={resetList} 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-gray-200">
          <div className="flex items-center text-gray-500 mr-2">
            <Filter size={20} className="mr-2" />
            <span className="text-sm font-medium hidden sm:inline">Filtra per:</span>
          </div>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}
              `}
            >
              {cat === 'all' ? 'Tutti' : CATEGORY_LABELS[cat as keyof typeof CATEGORY_LABELS]}
            </button>
          ))}
        </div>

        {/* Completion Message */}
        {showCelebration && (
          <div className="mb-8 p-8 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 rounded-3xl shadow-xl text-white text-center transform animate-fade-in-up border-4 border-white/20">
            <div className="inline-flex p-3 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
              <Trophy size={48} className="text-yellow-300" />
            </div>
            <h2 className="text-4xl font-black mb-2 tracking-tight">Punteggio Massimo Raggiunto!</h2>
            <p className="text-xl opacity-90 font-medium">Hai completato l'audit ottenendo tutti i {totalScore} punti disponibili.</p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <ChecklistCard
              key={item.id}
              item={item}
              isChecked={!!checkedItems[item.id]}
              onToggle={toggleItem}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p>Nessun elemento trovato in questa categoria.</p>
          </div>
        )}

      </main>

      {/* Quick Action Footer for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 sm:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-center px-2">
          <div className="text-sm font-medium text-gray-500">Punteggio</div>
          <div className="text-lg font-bold text-blue-600">
            {currentScore} <span className="text-gray-400 text-sm font-normal">/ {totalScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
