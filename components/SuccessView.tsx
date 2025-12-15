import React from 'react';
import { User } from '../types';
import { Trophy, CheckCircle, MessageSquare } from 'lucide-react';

interface SuccessViewProps {
  user: User;
}

export const SuccessView: React.FC<SuccessViewProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg mx-auto text-center border-t-8 border-bdGreen animate-fade-in-up">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
        <CheckCircle className="text-bdGreen w-10 h-10" />
      </div>
      
      <h2 className="text-3xl font-bold text-bdGreen mb-2">অভিনন্দন!</h2>
      <h3 className="text-xl font-semibold text-gray-700 mb-4">{user.name}</h3>
      
      <p className="text-gray-600 mb-6">
        আপনি সফলভাবে প্রতিযোগিতায় অংশগ্রহণ করেছেন। আপনার এন্ট্রি আমাদের ডাটাবেসে জমা হয়েছে। 
        ২০ই ডিসেম্বর লটারির ফলাফল আমাদের পেজে জানানো হবে।
      </p>

      <div className="bg-gradient-to-r from-bdGreen to-bdGreenDark text-white p-4 rounded-xl shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center gap-2 mb-1">
           <Trophy className="text-yellow-300" />
           <span className="font-bold text-lg">আপনার কুপন কোড</span>
        </div>
        <div className="text-2xl font-mono tracking-widest font-bold text-yellow-300">
           VICTORY{Math.floor(1000 + Math.random() * 9000)}
        </div>
        <p className="text-xs text-green-200 mt-1">এটি স্ক্রিনশট দিয়ে রাখুন</p>
      </div>

      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
        <MessageSquare size={16} />
        <span>নিচে একটি কমেন্ট করে আপনার উপস্থিতি জানান দিন 👇</span>
      </div>
    </div>
  );
};