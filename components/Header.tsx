import React from 'react';
import { Flag } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-bdGreen text-white p-6 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-20 h-20 bg-bdRed rounded-full -translate-x-10 -translate-y-10 opacity-50 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-bdRed rounded-full translate-x-10 translate-y-10 opacity-40 blur-2xl"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2 mb-2">
           <Flag className="text-bdRed fill-bdRed" size={32} />
           <h1 className="text-3xl font-bold tracking-wider">বিজয় উল্লাস ২০২৫</h1>
        </div>
        <p className="text-emerald-100 text-sm md:text-base font-medium">
          ১৬ই ডিসেম্বর মহান বিজয় দিবস উপলক্ষে বিশাল ধামাকা!
        </p>
      </div>
    </header>
  );
};