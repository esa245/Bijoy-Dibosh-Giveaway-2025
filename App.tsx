import React, { useState } from 'react';
import { Header } from './components/Header';
import { RegistrationForm } from './components/RegistrationForm';
import { ShareChallenge } from './components/ShareChallenge';
import { SuccessView } from './components/SuccessView';
import { Leaderboard } from './components/Leaderboard';
import { CommentSection } from './components/CommentSection';
import { TermsModal, PrivacyModal } from './components/LegalModals';
import { User, AppStep } from './types';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.FORM);
  const [user, setUser] = useState<User | null>(null);
  
  // Modal states
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);

  const handleUserSubmit = (userData: User) => {
    setUser(userData);
    setStep(AppStep.CHALLENGE);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChallengeComplete = () => {
    setStep(AppStep.SUCCESS);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0fdf4]">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-6">
          
          {/* Main Content Area based on Step */}
          <div className="transition-all duration-500 ease-in-out">
            {step === AppStep.FORM && (
              <RegistrationForm onSubmit={handleUserSubmit} />
            )}

            {step === AppStep.CHALLENGE && user && (
              <div className="animate-fade-in">
                <ShareChallenge user={user} onComplete={handleChallengeComplete} />
              </div>
            )}

            {step === AppStep.SUCCESS && user && (
              <SuccessView user={user} />
            )}
          </div>

          {/* Social Proof Section (Visible always, but more relevant after step 1) */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             <Leaderboard />
             <CommentSection currentUser={user} />
          </div>

        </div>
      </main>

      {/* Modals */}
      {activeModal === 'terms' && <TermsModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'privacy' && <PrivacyModal onClose={() => setActiveModal(null)} />}

      <footer className="bg-gray-800 text-gray-400 py-6 text-center text-sm">
        <p>© ২০২৫ বিজয় উল্লাস ক্যাম্পেইন। সর্বস্বত্ব সংরক্ষিত।</p>
        <div className="mt-2 flex justify-center gap-4 text-xs">
          <button 
            onClick={() => setActiveModal('terms')} 
            className="hover:text-white hover:underline transition-colors"
          >
            শর্তাবলী
          </button>
          <span>|</span>
          <button 
            onClick={() => setActiveModal('privacy')} 
            className="hover:text-white hover:underline transition-colors"
          >
            গোপনীয়তা নীতি
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;