import React from 'react';
import { ArrowRight, Flag, Star, Award, Gift, CircleDollarSign } from 'lucide-react';

interface HomePageProps {
  onStart: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-md mx-auto relative z-10 px-4 pt-6 pb-16">
      
      {/* Banner Section */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
         <div className="relative mb-6">
            <div className="w-28 h-28 bg-white/60 backdrop-blur-md border-4 border-bdRed/30 rounded-full flex items-center justify-center animate-bounce-slow shadow-xl">
               <Flag className="text-bdRed drop-shadow-md" size={56} fill="currentColor" />
            </div>
            <Star className="absolute -top-2 -right-2 text-yellow-500 fill-yellow-500 animate-pulse drop-shadow-sm" size={32} />
         </div>

         <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-bdGreenDark to-bdGreen mb-3 drop-shadow-sm leading-tight">
           ১৬ই ডিসেম্বর <br/> 
           <span className="text-bdRed drop-shadow-md">মহান বিজয় দিবস</span>
         </h2>
         
         <div className="bg-white border-2 border-bdGreen/20 px-6 py-2 rounded-full inline-block mb-6 shadow-md transform hover:scale-105 transition-transform">
            <span className="text-base font-extrabold text-bdGreenDark tracking-widest uppercase">গিভএওয়ে ক্যাম্পেইন ২০২৫</span>
         </div>
         
         <div className="bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-white/50">
           <p className="text-gray-900 text-lg text-center leading-relaxed font-bold">
             বিজয়ের আনন্দ ছড়িয়ে দিন সবার মাঝে এবং <br/>
             <span className="text-bdRed underline decoration-wavy underline-offset-4 decoration-2">জিতে নিন আকর্ষণীয় পুরস্কার!</span>
           </p>
         </div>
      </div>

      {/* Prizes Section - Highlighted Rows */}
      <div className="mb-12 space-y-5">
         <h3 className="text-center font-black text-xl text-bdGreenDark mb-6 uppercase tracking-wider flex items-center justify-center gap-3">
           <span className="w-12 h-1.5 bg-bdRed rounded-full opacity-80"></span>
           আজকের পুরস্কার
           <span className="w-12 h-1.5 bg-bdRed rounded-full opacity-80"></span>
         </h3>
         
         {/* Prize 1 */}
         <div className="flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-red-50 via-white/50 to-transparent border-l-8 border-bdRed shadow-sm hover:shadow-md transition-shadow">
             <div className="bg-white p-4 rounded-full shadow-lg text-bdRed shrink-0 ring-4 ring-red-50">
                 <Gift size={32} strokeWidth={2.5} />
             </div>
             <div>
                 <div className="bg-bdRed text-white text-[10px] font-bold px-2 py-0.5 rounded w-fit mb-1">১ম পুরস্কার</div>
                 <h4 className="font-black text-gray-900 text-2xl leading-none">iPhone 15</h4>
                 <p className="text-gray-700 font-bold text-sm mt-1">সর্বমোট ১০ জন বিজয়ী</p>
             </div>
         </div>

         {/* Prize 2 */}
         <div className="flex items-center gap-5 p-4 rounded-2xl bg-gradient-to-r from-green-50 via-white/50 to-transparent border-l-8 border-bdGreen shadow-sm hover:shadow-md transition-shadow">
             <div className="bg-white p-4 rounded-full shadow-lg text-bdGreen shrink-0 ring-4 ring-green-50">
                 <CircleDollarSign size={32} strokeWidth={2.5} />
             </div>
             <div>
                 <div className="bg-bdGreen text-white text-[10px] font-bold px-2 py-0.5 rounded w-fit mb-1">২য় পুরস্কার</div>
                 <h4 className="font-black text-gray-900 text-2xl leading-none">১০,০০০ টাকা</h4>
                 <p className="text-gray-700 font-bold text-sm mt-1">নিশ্চিত ক্যাশ প্রাইজ</p>
             </div>
         </div>
      </div>

      {/* Action Button */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-bdRed to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <button
          onClick={onStart}
          className="relative w-full bg-gradient-to-r from-bdRed to-red-600 hover:to-red-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 text-xl ring-4 ring-red-100 hover:ring-red-200 uppercase tracking-wide transform group-hover:-translate-y-1"
        >
          অংশগ্রহণ করুন
          <ArrowRight size={28} strokeWidth={3} className="animate-pulse" />
        </button>
      </div>
      
      <p className="text-xs font-bold text-center text-bdGreenDark/60 mt-8 bg-bdGreen/5 py-2 rounded-lg mx-auto w-3/4">
        *শর্তাবলী প্রযোজ্য। লটারি ২০ই ডিসেম্বর অনুষ্ঠিত হবে।
      </p>
    </div>
  );
};