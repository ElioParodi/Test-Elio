import React from 'react';

interface ProgressHeaderProps {
  total: number;
  current: number;
  onReset: () => void;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({ total, current, onReset }) => {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  
  // Color calculation based on score
  let progressColor = "from-red-500 to-orange-500";
  if (percentage > 40) progressColor = "from-orange-500 to-yellow-500";
  if (percentage > 70) progressColor = "from-blue-500 to-indigo-600";
  if (percentage > 90) progressColor = "from-emerald-500 to-green-600";

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex items-center justify-center w-16 h-16 shrink-0">
               <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-gray-100"
                  strokeWidth="6"
                  stroke="currentColor"
                  fill="transparent"
                  r="28"
                  cx="32"
                  cy="32"
                />
                <circle
                  className={`transition-all duration-1000 ease-out ${percentage > 90 ? 'text-emerald-500' : 'text-blue-600'}`}
                  strokeWidth="6"
                  strokeDasharray={175} // 2 * pi * 28
                  strokeDashoffset={175 - (175 * percentage) / 100}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="28"
                  cx="32"
                  cy="32"
                />
              </svg>
              <span className="absolute text-sm font-black text-gray-800">{percentage}%</span>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-none mb-1">Audit SEO</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-700 font-bold border border-gray-200">
                   {current}
                </span>
                <span>su</span>
                <span className="text-gray-500">{total} punti totali</span>
              </div>
            </div>
          </div>

          <div className="w-full md:flex-1 flex items-center gap-4">
             <div className="w-full relative h-6 bg-gray-100 rounded-full overflow-hidden shadow-inner border border-gray-200">
                <div 
                  className={`h-full bg-gradient-to-r ${progressColor} transition-all duration-700 ease-out rounded-full shadow-sm flex items-center justify-end px-3`}
                  style={{ width: `${percentage}%` }}
                >
                  {percentage > 15 && (
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider drop-shadow-sm">
                      {current} Punti
                    </span>
                  )}
                </div>
             </div>
             <button 
               onClick={onReset}
               className="shrink-0 text-sm font-semibold text-gray-500 hover:text-red-600 transition-colors px-4 py-2 rounded-lg hover:bg-red-50 border border-transparent hover:border-red-100"
             >
               Reset
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
