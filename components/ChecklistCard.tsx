import React, { useState } from 'react';
import { Check, Circle, Info, ChevronDown, ChevronUp, HelpCircle, Target, Search } from 'lucide-react';
import { ChecklistItem } from '../types';
import { CATEGORY_COLORS } from '../constants';

interface ChecklistCardProps {
  item: ChecklistItem;
  isChecked: boolean;
  onToggle: (id: string) => void;
}

export const ChecklistCard: React.FC<ChecklistCardProps> = ({ item, isChecked, onToggle }) => {
  const [showInfo, setShowInfo] = useState(false);
  const categoryStyle = CATEGORY_COLORS[item.category];
  const Icon = item.icon;

  return (
    <div
      className={`
        relative flex flex-col rounded-xl border-2 transition-all duration-300 w-full overflow-hidden
        ${isChecked 
          ? 'bg-green-50 border-green-500 shadow-sm' 
          : 'bg-white border-gray-100 hover:border-blue-300 hover:shadow-lg'
        }
        ${showInfo ? 'ring-2 ring-blue-500/20' : ''}
      `}
    >
      {/* Clickable Header/Main Area */}
      <div 
        onClick={() => onToggle(item.id)}
        className="p-5 cursor-pointer flex-1 flex flex-col select-none"
      >
        <div className="flex items-start justify-between w-full mb-4">
          <div className="flex flex-col gap-1.5">
            <span 
              className={`
                text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider w-fit
                ${isChecked ? 'bg-green-200 text-green-800' : categoryStyle}
              `}
            >
              {item.category}
            </span>
          </div>
          <div 
            className={`
              transition-all duration-300 transform
              ${isChecked ? 'text-green-600 scale-110' : 'text-gray-300 group-hover:text-blue-400'}
            `}
          >
            {isChecked ? <Check size={26} strokeWidth={3} /> : <Circle size={26} />}
          </div>
        </div>
        
        <div className="flex gap-4 items-start">
          <div 
            className={`
              p-2 rounded-lg shrink-0 transition-colors duration-300
              ${isChecked ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}
            `}
          >
            <Icon size={24} strokeWidth={1.5} />
          </div>
          <p 
            className={`
              font-bold text-lg leading-tight mt-0.5
              ${isChecked ? 'text-green-900' : 'text-gray-800'}
            `}
          >
            {item.text}
          </p>
        </div>
      </div>

      {/* Info Toggle Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowInfo(!showInfo);
        }}
        className={`
          flex items-center justify-between w-full px-5 py-3 text-xs font-bold uppercase tracking-widest border-t transition-colors
          ${showInfo 
            ? 'bg-blue-600 text-white border-blue-600' 
            : 'bg-gray-50 text-gray-500 border-gray-100 hover:bg-gray-100'}
        `}
      >
        <span className="flex items-center gap-2">
          <Info size={14} />
          Guida Rapida
        </span>
        {showInfo ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Info Panel Content */}
      {showInfo && (
        <div className="bg-white p-5 space-y-4 border-t border-blue-100 animate-fade-in-up">
          <section>
            <h4 className="flex items-center gap-2 text-blue-600 font-bold mb-1 text-sm">
              <HelpCircle size={14} /> Cos'è?
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.whatIsIt}</p>
          </section>
          
          <section>
            <h4 className="flex items-center gap-2 text-emerald-600 font-bold mb-1 text-sm">
              <Target size={14} /> A cosa serve?
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.purpose}</p>
          </section>

          <section className="bg-orange-50 p-3 rounded-lg">
            <h4 className="flex items-center gap-2 text-orange-700 font-bold mb-1 text-sm">
              <Search size={14} /> Come controllare
            </h4>
            <p className="text-orange-900 text-sm leading-relaxed italic">"{item.howToCheck}"</p>
          </section>
        </div>
      )}

      {isChecked && (
        <div className="absolute inset-0 bg-green-400/5 pointer-events-none" />
      )}
    </div>
  );
};
