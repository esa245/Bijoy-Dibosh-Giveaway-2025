import React from 'react';
import { ArrowRight, Flag, Star, Award, Gift, CircleDollarSign } from 'lucide-react';

interface HomePageProps {
  onStart: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-md mx-auto relative z-10 px-4 pt-4 pb-12">
      
      {/* Banner Section */}
      <div className="flex flex-col items-center justify-center text-center mb-8">
         <div className="relative mb-4">
            <div className="w-24 h-24 bg-bdGreen/10 rounded-full flex items-center justify-center animate-bounce-slow">
               <Flag className="text-bdRed" size={48} fill="currentColor" />
            </div>
            <Star className="absolute top-0 right-0 text-yellow-400 fill-yellow-400 animate-pulse" size={24} />
         </div>

         <h2 className="text-3xl font-bold text-bdGreenDark mb-2">
           ১৬ই ডিসেম্বর <br/> 
           <span className="text-bdRed">মহান বিজয় দিবস</span>
         </h2>
         
         <div className="bg-bdGreen/10 px-4 py-1 rounded-full inline-block mb-4">
            <span className="text-sm font-bold text-bdGreenDark tracking-widest uppercase">গিভএওয়ে ক্যাম্পেইন ২০২৫</span>
         </div>
         
         <p className="text-gray-600 text-center leading-relaxed font-medium">
           বিজয়ের আনন্দ ছড়িয়ে দিন সবার মাঝে এবং জিতে নিন আকর্ষণীয় পুরস্কার!
         </p>
      </div>

      {/* Prizes Section - Direct on background */}
      <div className="mb-10">
         <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
           <Award className="text-bdRed" size={20} />
           আজকের পুরস্কার
         </h3>
         
         <div className="space-y-6">
           {/* Item 1 */}
           <div className="flex items-center gap-4 group">
              <div className="bg-bdRed/10 p-3 rounded-full text-bdRed group-hover:scale-110 transition-transform">
                  <Gift size={28} />
              </div>
              <div>
                  <h4 className="font-bold text-gray-800 text-lg">১ম পুরস্কার</h4>
                  <p className="text-gray-600 text-sm">১০টি নতুন iPhone 15</p>
              </div>
           </div>

           {/* Item 2 */}
           <div className="flex items-center gap-4 group">
              <div className="bg-bdGreen/10 p-3 rounded-full text-bdGreen group-hover:scale-110 transition-transform">
                  <CircleDollarSign size={28} />
              </div>
              <div>
                  <h4 className="font-bold text-gray-800 text-lg">২য় পুরস্কার</h4>
                  <p className="text-gray-600 text-sm">১০,০০০ টাকা নিশ্চিত ক্যাশ প্রাইজ</p>
              </div>
           </div>
         </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onStart}
        className="w-full bg-bdRed hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-lg border-b-4 border-red-800"
      >
        অংশগ্রহণ করুন
        <ArrowRight size={24} />
      </button>
      
      <p className="text-xs text-center text-gray-400 mt-6">
        *শর্তাবলী প্রযোজ্য। লটারি ২০ই ডিসেম্বর অনুষ্ঠিত হবে।
      </p>
    </div>
  );
};