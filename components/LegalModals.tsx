import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children, icon }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col relative animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50 rounded-t-2xl">
          <div className="flex items-center gap-2 text-bdGreen font-bold text-lg">
            {icon}
            <span>{title}</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar text-sm leading-relaxed text-gray-700">
          {children}
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-gray-50 rounded-b-2xl">
          <button 
            onClick={onClose}
            className="w-full bg-bdGreen text-white py-2 rounded-lg font-bold hover:bg-bdGreenDark transition-colors"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export const TermsModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <Modal title="শর্তাবলী (Terms & Conditions)" onClose={onClose} icon={<FileText size={20} />}>
    <ul className="space-y-3 list-disc pl-4 marker:text-bdRed">
      <li>এই প্রতিযোগিতায় অংশগ্রহণ করতে হলে অবশ্যই বাংলাদেশের নাগরিক হতে হবে।</li>
      <li>সঠিক নাম এবং সচল মোবাইল নাম্বার প্রদান করতে হবে, যাতে পুরস্কার জয়ের পর যোগাযোগ করা সম্ভব হয়।</li>
      <li>আইফোন জেতার সুযোগ পেতে পোস্টটি অবশ্যই <strong>Public</strong> মোডে শেয়ার করতে হবে।</li>
      <li>ন্যূনতম ১০ জন বন্ধুর সাথে শেয়ার করার টার্গেট পূরণ করতে হবে।</li>
      <li>একই ব্যক্তি একাধিক ভুয়া নাম বা নাম্বার ব্যবহার করলে তার এন্ট্রি বাতিল বলে গণ্য হবে।</li>
      <li>লটারির ফলাফল আগামী <strong>২০ই ডিসেম্বর</strong> আমাদের অফিসিয়াল পেজে প্রকাশ করা হবে।</li>
      <li>কর্তৃপক্ষ যেকোনো সময় ক্যাম্পেইনের নিয়ম পরিবর্তন বা পরিবর্ধন করার ক্ষমতা রাখে।</li>
    </ul>
  </Modal>
);

export const PrivacyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <Modal title="গোপনীয়তা নীতি (Privacy Policy)" onClose={onClose} icon={<Shield size={20} />}>
    <div className="space-y-4">
      <p>
        আমরা আপনার ব্যক্তিগত তথ্যের গোপনীয়তাকে অত্যন্ত গুরুত্ব দিই। এই ক্যাম্পেইনে সংগৃহীত তথ্য সম্পর্কে আমাদের নীতি নিচে দেওয়া হলো:
      </p>
      
      <div>
        <h4 className="font-bold text-gray-900 mb-1">১. তথ্য সংগ্রহ:</h4>
        <p>আমরা শুধুমাত্র আপনার নাম এবং মোবাইল নাম্বার সংগ্রহ করছি যা লটারির ড্র এবং বিজয়ীদের সাথে যোগাযোগের জন্য ব্যবহৃত হবে।</p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">২. তথ্যের ব্যবহার:</h4>
        <p>আপনার নাম্বার কোনো থার্ড পার্টি বা বিজ্ঞাপন সংস্থার কাছে বিক্রি বা শেয়ার করা হবে না। এটি শুধুমাত্র এই ইভেন্টের জন্যই প্রযোজ্য।</p>
      </div>

      <div>
        <h4 className="font-bold text-gray-900 mb-1">৩. ডাটা মুছে ফেলা:</h4>
        <p>ক্যাম্পেইন শেষ হওয়ার ৩০ দিনের মধ্যে অংশগ্রহণকারীদের সকল তথ্য আমাদের ডাটাবেস থেকে মুছে ফেলা হবে।</p>
      </div>
    </div>
  </Modal>
);