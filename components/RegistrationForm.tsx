import React, { useState } from 'react';
import { User } from '../types';
import { Smartphone, User as UserIcon, ArrowRight, Gift, Banknote } from 'lucide-react';

interface RegistrationFormProps {
  onSubmit: (user: User) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('দয়া করে আপনার নাম লিখুন');
      return;
    }
    if (!mobile.match(/^\d{11}$/)) {
      setError('সঠিক ১১ ডিজিটের মোবাইল নাম্বার দিন (যেমন: 017xxxxxxxx)');
      return;
    }
    onSubmit({ name, mobile });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-md mx-auto border-t-4 border-bdGreen">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">অংশগ্রহণ করুন</h2>
        <p className="text-gray-500 text-sm mt-1">আইফোন এবং ক্যাশ প্রাইজ জিততে নিচের ফর্মটি পূরণ করুন</p>
      </div>

      {/* Prize Highlights */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800 text-white p-3 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-bdRed text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">১ম পুরস্কার</div>
            <Gift className="text-yellow-400 mb-1" size={24} />
            <p className="text-xs text-gray-300">১০ জন পাবেন</p>
            <p className="font-bold text-sm text-yellow-300">১০টি iPhone</p>
        </div>
        
        <div className="bg-green-50 text-bdGreenDark p-3 rounded-xl shadow border border-bdGreen flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-bdGreen text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">২য় পুরস্কার</div>
            <Banknote className="text-bdGreen mb-1" size={24} />
            <p className="text-xs text-green-700">১০ জন পাবেন</p>
            <p className="font-bold text-sm">১০,০০০ টাকা</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <UserIcon className="absolute left-3 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="আপনার নাম"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bdGreen focus:border-transparent outline-none transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="relative">
          <Smartphone className="absolute left-3 top-3.5 text-gray-400" size={20} />
          <input
            type="tel"
            placeholder="মোবাইল নাম্বার (০১...)"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bdGreen focus:border-transparent outline-none transition-all"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            maxLength={11}
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

        <button
          type="submit"
          className="w-full bg-bdGreen hover:bg-bdGreenDark text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
        >
          পরবর্তী ধাপ
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
      
      <p className="text-xs text-center text-gray-400 mt-4">
        আপনার তথ্য নিরাপদ থাকবে এবং শুধুমাত্র বিজয়ীদের সাথে যোগাযোগের জন্য ব্যবহৃত হবে।
      </p>
    </div>
  );
};