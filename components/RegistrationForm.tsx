import React, { useState } from 'react';
import { User } from '../types';
import { Smartphone, User as UserIcon, ArrowRight, Gift, CircleDollarSign } from 'lucide-react';

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
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto relative z-10 overflow-hidden">
      
      {/* Attached Header Section - Prizes */}
      <div className="grid grid-cols-2 border-b border-blue-100">
        {/* Prize 1 */}
        <div className="bg-blue-600 text-white p-5 flex flex-col items-center justify-center text-center relative group">
            <div className="absolute top-0 left-0 bg-bdRed text-white text-[10px] font-bold px-3 py-1 rounded-br-lg z-10 shadow-sm">১ম পুরস্কার</div>
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              <Gift className="text-yellow-300 mb-2" size={28} />
            </div>
            <p className="text-xs text-blue-100 mb-0.5">১০ জন পাবেন</p>
            <p className="font-bold text-sm text-white leading-tight">১০টি iPhone 15</p>
        </div>
        
        {/* Prize 2 */}
        <div className="bg-blue-50 text-blue-900 p-5 flex flex-col items-center justify-center text-center relative group border-l border-blue-100">
            <div className="absolute top-0 right-0 bg-bdGreen text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10 shadow-sm">২য় পুরস্কার</div>
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              <CircleDollarSign className="text-blue-600 mb-2" size={28} />
            </div>
            <p className="text-xs text-blue-600 mb-0.5">১০ জন পাবেন</p>
            <p className="font-bold text-sm leading-tight">১০,০০০ টাকা</p>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">অংশগ্রহণ করুন</h2>
          <p className="text-gray-500 text-sm mt-1">আইফোন এবং ক্যাশ প্রাইজ জিততে নিচের ফর্মটি পূরণ করুন</p>
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
    </div>
  );
};