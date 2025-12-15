import React from 'react';

export const BottomAd: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-2 px-4 animate-fade-in">
      <div className="max-w-md mx-auto flex flex-col items-center justify-center">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Advertisement</span>
        
        {/* Ad Container - ID: 28130995 */}
        <div className="w-full h-[60px] bg-gray-100 rounded-lg border border-gray-300 border-dashed flex items-center justify-center overflow-hidden relative group cursor-pointer hover:bg-gray-50 transition-colors">
            
            {/* Visual Placeholder for the Ad ID */}
            <div className="text-center">
                <p className="text-lg font-bold text-gray-500 tracking-wider">28130995</p>
            </div>
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-xs text-gray-600 font-medium bg-white px-2 py-1 rounded shadow-sm">Visit Site</span>
            </div>
        </div>
      </div>
    </div>
  );
};