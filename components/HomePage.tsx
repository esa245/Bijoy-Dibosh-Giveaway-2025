import React from 'react';
import { ArrowRight, Flag, Star, Award } from 'lucide-react';

interface HomePageProps {
  onStart: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-md mx-auto relative z-10 px-2">
      
      {/* Hero Graphic Area - Standalone Banner */}
      <div className="bg-gradient-to-br from-bdGreen to-bdGreenDark rounded-3xl shadow-lg shadow-green-900/10 mb-8 relative h-52 flex items-center justify-center overflow-hidden">
         {/* Decorative Circles */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-10 -translate-y-10"></div>
         <div className="absolute bottom-0 left-0 w-24 h-24 bg-bdRed opacity-20 rounded-full -translate-x-5 translate-y-5"></div>
         
         {/* Main Icon */}
         <div className="relative z-10 text-center animate-bounce-slow">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl mx-auto mb-3 border-[6px] border-bdRed/20 backdrop-blur-sm">
               <Flag className="text-bdGreenDark fill-bdRed" size={48} />
            </div>
         </div>
      </div>

      <div className="text-center">
        <div className="mb-8">
           <h2 className="text-4xl font-bold text-bdGreenDark mb-3 drop-shadow-sm">
             ১৬ই ডিসেম্বর <br/> 
             <span className="text-bdRed">মহান বিজয় দিবস</span>
           </h2>
           
           <div className="flex items-center justify-center gap-3 mb-5">
              <Star className="text-yellow-500 fill-yellow-500" size={20} />
              <span className="text-base font-bold text-gray-600 tracking-widest uppercase border-b-2 border-bdGreen/30 pb-0.5">বিজয় উল্লাস ২০২৫</span>
              <Star className="text-yellow-500 fill-yellow-500" size={20} />
           </div>
           
           <p className="text-gray-700 leading-relaxed font-medium text-lg px-2">
             বিজয়ের ৫৩ বছর পূর্তি উপলক্ষে আমাদের এই বিশাল অনলাইন উৎসব! আনন্দ ছড়িয়ে দিন সবার মাঝে।
           </p>
        </div>

        {/* Why Participate Section - Transparent/Blended */}
        <div className="mb-10 text-left">
           <h3 className="font-bold text-bdGreenDark text-xl mb-4 flex items-center justify-center gap-2">
             <Award className="text-bdRed" size={24} />
             পুরস্কার সমূহ
           </h3>
           <div className="space-y-3">
             <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white shadow-sm flex items-center gap-4 hover:bg-white/80 transition-colors">
                <div className="bg-red-100 p-2 rounded-full text-bdRed">
                    <span className="font-bold">১ম</span>
                </div>
                <span className="text-gray-800 font-bold text-lg">আইফোন ১৫ (১০ টি)</span>
             </div>
             <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white shadow-sm flex items-center gap-4 hover:bg-white/80 transition-colors">
                <div className="bg-green-100 p-2 rounded-full text-bdGreen">
                    <span className="font-bold">২য়</span>
                </div>
                <span className="text-gray-800 font-bold text-lg">১০,০০০ টাকা ক্যাশ প্রাইজ</span>
             </div>
           </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-bdRed hover:bg-red-700 text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group text-xl ring-4 ring-red-100"
        >
          অংশগ্রহণ করুন
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="text-xs text-gray-500 mt-6 font-medium">
          *শর্তাবলী প্রযোজ্য। লটারি ২০ই ডিসেম্বর অনুষ্ঠিত হবে।
        </p>
      </div>
    </div>
  );
};