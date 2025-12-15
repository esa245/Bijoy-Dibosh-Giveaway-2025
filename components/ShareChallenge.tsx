import React, { useState, useEffect } from 'react';
import { Share2, Send, Copy, MessageCircle, Facebook } from 'lucide-react';
import { User } from '../types';

interface ShareChallengeProps {
  user: User;
  onComplete: () => void;
}

export const ShareChallenge: React.FC<ShareChallengeProps> = ({ user, onComplete }) => {
  const TARGET_SHARES = 10;
  const [shares, setShares] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Simulate progress logic
  const handleShare = async (platform: 'facebook' | 'messenger' | 'whatsapp' | 'native' | 'copy') => {
    setIsAnimating(true);
    
    // Simulate share counting delay
    setTimeout(() => {
        setShares(prev => {
            const newCount = Math.min(prev + 1, TARGET_SHARES);
            return newCount;
        });
        setIsAnimating(false);
    }, 1500);

    let url = encodeURIComponent(window.location.href);
    let text = encodeURIComponent(`বিজয় উল্লাস! আমি অংশগ্রহণ করেছি, আপনিও অংশ নিন এবং জিতে নিন আইফোন! #JoyBangla`);
    
    try {
      if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
      } else if (platform === 'messenger') {
         // Mobile deep link attempt for Messenger
         window.location.href = `fb-messenger://share/?link=${url}`; 
      } else if (platform === 'whatsapp') {
        window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
      } else if (platform === 'native') {
         if (navigator.share) {
             await navigator.share({
                 title: 'বিজয় উল্লাস ২০২৫',
                 text: decodeURIComponent(text),
                 url: window.location.href,
             });
         } else {
             alert("আপনার ব্রাউজারে শেয়ার অপশনটি নেই। লিংক কপি করে শেয়ার করুন।");
         }
      } else {
         navigator.clipboard.writeText(`${decodeURIComponent(text)} ${decodeURIComponent(url)}`);
         alert("লিংক কপি করা হয়েছে!");
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (shares >= TARGET_SHARES) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [shares, onComplete]);

  const progress = (shares / TARGET_SHARES) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 w-full max-w-lg mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">হ্যালো, <span className="text-bdGreen">{user.name}</span>! 👋</h3>
        <p className="text-gray-600 text-sm mt-1">
          রেজিস্ট্রেশন সফল! চূড়ান্ত বিজয়ী হতে <span className="font-bold text-bdRed">{TARGET_SHARES} জন</span> বন্ধুর সাথে শেয়ার করুন।
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs font-bold mb-1">
          <span className="text-bdGreen">শেয়ার সম্পন্ন: {shares}/{TARGET_SHARES}</span>
          <span className="text-gray-500">{progress.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-bdGreen to-green-400 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-[10px] text-center mt-1 text-gray-400">
            {shares < TARGET_SHARES 
                ? "শেয়ার বাটনে ক্লিক করে কাউন্টার পূর্ণ করুন" 
                : "অভিনন্দন! আপনি লক্ষ্য পূরণ করেছেন!"}
        </p>
      </div>

      {/* Action Buttons - Compact Grid */}
      <div className="grid grid-cols-2 gap-2">
        <button 
          onClick={() => handleShare('facebook')}
          disabled={shares >= TARGET_SHARES}
          className="bg-[#1877f2] hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 text-sm"
        >
          {isAnimating ? <span className="animate-spin text-xs">⌛</span> : <Facebook size={16} />}
          ফেসবুক
        </button>

        <button 
          onClick={() => handleShare('messenger')}
          disabled={shares >= TARGET_SHARES}
          className="bg-[#0084ff] hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 text-sm"
        >
          {isAnimating ? <span className="animate-spin text-xs">⌛</span> : <MessageCircle size={16} />}
          মেসেঞ্জার
        </button>
        
        <button 
          onClick={() => handleShare('whatsapp')}
          disabled={shares >= TARGET_SHARES}
          className="bg-[#25d366] hover:bg-green-600 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 text-sm"
        >
          {isAnimating ? <span className="animate-spin text-xs">⌛</span> : <Send size={16} />}
          হোয়াটসঅ্যাপ
        </button>

        <button 
          onClick={() => handleShare('native')}
          disabled={shares >= TARGET_SHARES}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 text-sm"
        >
          {isAnimating ? <span className="animate-spin text-xs">⌛</span> : <Share2 size={16} />}
          অন্যান্য
        </button>

        <button 
          onClick={() => handleShare('copy')}
          disabled={shares >= TARGET_SHARES}
          className="col-span-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 text-sm"
        >
          <Copy size={16} />
          লিংক কপি করুন
        </button>
      </div>

      <div className="mt-4 bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
        <h4 className="font-bold text-yellow-800 text-xs mb-1 flex items-center gap-1">
          <span className="text-sm">💡</span> টিপস:
        </h4>
        <ul className="list-disc list-inside text-[10px] text-yellow-700 space-y-0.5">
          <li>প্রতিটি শেয়ার আপনার জেতার সুযোগ বাড়িয়ে দেয়।</li>
          <li>বিভিন্ন গ্রুপে শেয়ার করুন দ্রুত পয়েন্ট পেতে।</li>
        </ul>
      </div>
    </div>
  );
};