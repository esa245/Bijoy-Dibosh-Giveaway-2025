import React, { useState } from 'react';
import { Comment, User } from '../types';
import { MessageCircle, Send } from 'lucide-react';

interface CommentSectionProps {
  currentUser: User | null;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ currentUser }) => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, user: 'করিম', text: 'জয় বাংলা! অফারটি খুব ভালো লেগেছে।', timestamp: '১০ মিনিট আগে' },
    { id: 2, user: 'সুমাইয়া', text: 'আমি ১০ জনকে শেয়ার করেছি! আশা করি জিতবো।', timestamp: '২০ মিনিট আগে' },
    { id: 3, user: 'রাফি', text: '#BijoyDibosh2025 #WinIphone', timestamp: '৩৫ মিনিট আগে' },
    { id: 4, user: 'আরিফ হোসেন', text: 'সবাইকে বিজয় দিবসের শুভেচ্ছা 🇧🇩', timestamp: '৪২ মিনিট আগে' },
    { id: 5, user: 'তানিয়া', text: 'আমার নাম কি লিস্টে আছে? শেয়ার করেছি।', timestamp: '৫০ মিনিট আগে' },
    { id: 6, user: 'রবিন খান', text: 'দারুণ সুযোগ! মিস করবেন না কেউ।', timestamp: '১ ঘণ্টা আগে' }
  ]);
  const [newComment, setNewComment] = useState('');
  // Initial large count as requested (9892)
  const [totalCount, setTotalCount] = useState(9892);

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      user: currentUser ? currentUser.name : 'অতিথি ব্যবহারকারী',
      text: newComment,
      timestamp: 'এখনই'
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setTotalCount(prev => prev + 1);
  };

  const toBengaliDigits = (num: number) => {
    return num.toString().replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-lg mx-auto mt-6 mb-12">
      <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
        <MessageCircle size={20} className="text-bdGreen" />
        মন্তব্য করুন ({toBengaliDigits(totalCount)})
      </h3>

      {/* Input */}
      <form onSubmit={handlePostComment} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder={currentUser ? "আপনার মন্তব্য লিখুন..." : "মন্তব্য করতে প্রথমে অংশগ্রহণ করুন"}
          disabled={!currentUser}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-bdGreen text-sm disabled:bg-gray-100"
        />
        <button 
          type="submit" 
          disabled={!currentUser || !newComment.trim()}
          className="bg-bdGreen text-white p-2 rounded-lg hover:bg-bdGreenDark disabled:opacity-50 transition-colors"
        >
          <Send size={20} />
        </button>
      </form>

      {/* List */}
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-sm text-gray-800">{comment.user}</span>
              <span className="text-xs text-gray-400">{comment.timestamp}</span>
            </div>
            <p className="text-gray-600 text-sm">{comment.text}</p>
          </div>
        ))}
        
        {/* Load more indicator */}
        <div className="text-center py-2 border-t border-gray-50 mt-2">
            <button className="text-xs font-medium text-gray-500 hover:text-bdGreen transition-colors">
                আরও {toBengaliDigits(totalCount - comments.length)} টি মন্তব্য দেখুন...
            </button>
        </div>
      </div>
    </div>
  );
};