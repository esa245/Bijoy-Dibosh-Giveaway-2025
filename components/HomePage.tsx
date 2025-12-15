import React from 'react';
import { ArrowRight, Flag, Star, Award } from 'lucide-react';

interface HomePageProps {
  onStart: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto relative z-10 overflow-hidden border-b-4 border-bdGreen">
      
      {/* Hero Graphic Area */}
      <div className="bg-gradient-to-br from-bdGreen to-bdGreenDark relative h-48 flex items-center justify-center overflow-hidden">
         {/* Decorative Circles */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-10 -translate-y-10"></div>
         <div className="absolute bottom-0 left-0 w-24 h-24 bg-bdRed opacity-20 rounded-full -translate-x-5 translate-y-5"></div>
         
         {/* Main Icon */}
         <div className="relative z-10 text-center animate-bounce-slow">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-2 border-4 border-bdRed">
               <Flag className="text-bdGreenDark fill-bdRed" size={40} />
            </div>
         </div>
      </div>

      <div className="p-8 text-center">
        <div className="mb-6">
           <h2 className="text-2xl font-bold text-gray-800 mb-2">
             ১৬ই ডিসেম্বর <br/> 
             <span className="text-bdRed">মহান বিজয় দিবস</span>
           </h2>
           <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span className="text-sm font-semibold text-gray-500 tracking-widest uppercase">বিজয় উল্লাস ২০২৫</span>
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
           </div>
           
           <p className="text-gray-600 leading-relaxed text-sm">
             বিজয়ের ৫৩ বছর পূর্তি উপলক্ষে আমরা আয়োজন করেছি এক বিশাল অনলাইন উৎসব! স্বাধীনতার এই আনন্দ ছড়িয়ে দিন সবার মাঝে এবং জিতে নিন আকর্ষণীয় সব পুরস্কার।
           </p>
        </div>

        {/* Why Participate Section */}
        <div className="bg-green-50 rounded-xl p-4 mb-6 text-left border border-green-100">
           <h3 className="font-bold text-bdGreenDark text-sm mb-2 flex items-center gap-2">
             <Award size={16} />
             কেন অংশগ্রহণ করবেন?
           </h3>
           <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4 marker:text-bdRed">
             <li>আইফোন ১৫ জেতার সুবর্ণ সুযোগ।</li>
             <li>১০,০০০ টাকার ইনস্ট্যান্ট ক্যাশ প্রাইজ।</li>
             <li>বিজয় দিবসের এই আনন্দ ভাগাভাগি করে নেওয়া।</li>
           </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-bdRed hover:bg-red-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group text-lg"
        >
          অংশগ্রহণ করুন
          <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="text-[10px] text-gray-400 mt-4">
          *শর্তাবলী প্রযোজ্য। লটারি ২০ই ডিসেম্বর অনুষ্ঠিত হবে।
        </p>
      </div>
    </div>
  );
};