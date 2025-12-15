import React from 'react';
import { LeaderboardEntry } from '../types';
import { Medal } from 'lucide-react';

const MOCK_LEADERS: LeaderboardEntry[] = [
  { id: 1, name: 'রহিম চৌধুরী', shareCount: 154 },
  { id: 2, name: 'সাবিনা ইয়াসমিন', shareCount: 132 },
  { id: 3, name: 'তানভীর আহমেদ', shareCount: 98 },
  { id: 4, name: 'মেহেদী হাসান', shareCount: 87 },
  { id: 5, name: 'আয়েশা সিদ্দিকা', shareCount: 76 },
];

export const Leaderboard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-lg mx-auto mt-8">
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Medal className="text-yellow-500" />
          সর্বোচ্চ শেয়ারকারী
        </h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">LIVE</span>
      </div>
      
      <div className="space-y-3">
        {MOCK_LEADERS.map((leader, index) => (
          <div key={leader.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors">
            <div className="flex items-center gap-3">
              <div className={`
                w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm
                ${index === 0 ? 'bg-yellow-100 text-yellow-700' : ''}
                ${index === 1 ? 'bg-gray-200 text-gray-700' : ''}
                ${index === 2 ? 'bg-orange-100 text-orange-700' : ''}
                ${index > 2 ? 'bg-blue-50 text-blue-700' : ''}
              `}>
                {index + 1}
              </div>
              <span className="font-medium text-gray-700">{leader.name}</span>
            </div>
            <div className="text-sm font-bold text-bdGreen">
              {leader.shareCount} শেয়ার
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};