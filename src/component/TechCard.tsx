import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Technology } from '../types';


interface TechCardProps {
  technology: Technology; 
  isAdded: boolean; 
  onAddToStack: (tech: Technology) => void; 
}

export const TechCard: React.FC<TechCardProps> = ({
  technology,
  isAdded,
  onAddToStack,
}) => {




  const [imageError, setImageError] = useState(false);

  return (
    <div
      id={`tech-card-${technology.id}`}
      className={`bg-white rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between ${
        isAdded
          ? 'border-2 border-[#ec4899] shadow-sm hover:shadow-lg'
          : 'border-2 border-slate-100 hover:shadow-lg hover:-translate-y-1.5'
      }`}
    >
      
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 flex items-center justify-center">
            {!imageError ? (
              <img
                src={technology.icon}
                alt={`${technology.name} icon`}
                className="w-9 h-9 object-contain"
                onError={() => setImageError(true)}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : (


              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                {technology.name.slice(0, 2).toUpperCase()}
              </div>
            )}
          </div>

          
          {technology.badge ? (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#fdf2f8] text-[#db2777]">
              {technology.badge}
            </span>
          ) : (
            <div className="h-6" />
          )}
        </div>

        
        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
          {technology.name}
        </h3>

        
        <p className="text-sm text-slate-500 leading-relaxed min-h-[48px] mb-6">
          {technology.description}
        </p>
      </div>

      
      <div>
        <div className="flex items-center justify-between text-xs mb-4">
          

          
          <span className="bg-slate-100/90 text-slate-700 text-xs px-3 py-1.5 rounded-lg font-medium">
            {technology.category}
          </span>

          
          <span className="text-slate-500 text-xs font-medium">
            {technology.difficulty}
          </span>

          
          <span className="text-slate-800 text-xs font-bold flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{technology.rating.toFixed(1)}</span>
          </span>
        </div>

        
        <button
          id={`add-btn-${technology.id}`}
          type="button"
          aria-disabled={isAdded}
          onClick={(e) => {
            e.stopPropagation();
            onAddToStack(technology);
          }}
          className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center gap-1.5 ${
            isAdded
              ? 'bg-[#fdf2f8] text-[#db2777] cursor-not-allowed'
              : 'bg-brand-gradient text-white hover:opacity-90 active:scale-[0.99] cursor-pointer'
          }`}
        >
          <span>{isAdded ? '✓ Added to Stack' : 'Add to Stack'}</span>
        </button>
      </div>
    </div>
  );
};
