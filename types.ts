export interface User {
  name: string;
  mobile: string;
}

export interface Comment {
  id: number;
  user: string;
  text: string;
  timestamp: string;
}

export interface LeaderboardEntry {
  id: number;
  name: string;
  shareCount: number;
}

export enum AppStep {
  HOME = 'HOME',
  FORM = 'FORM',
  CHALLENGE = 'CHALLENGE',
  SUCCESS = 'SUCCESS'
}