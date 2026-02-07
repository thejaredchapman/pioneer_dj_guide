export interface Lesson {
  id: number;
  title: string;
  description: string;
  category: string;
  xp: number;
  steps: LessonStep[];
  quiz?: QuizQuestion[];
}

export interface LessonStep {
  title: string;
  content: string;
  image?: string;
  highlightParts?: string[];
  tips?: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  level: number;
  xp: number;
  totalScore: number;
  completedLessons: number[];
  lessonScores: { [key: number]: number };
  achievements: string[];
  timeSpent: number;
}

export interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
}

export const RANKS = [
  { minXP: 0, name: 'Bedroom DJ', icon: '🎧' },
  { minXP: 1000, name: 'Opening Act', icon: '🎵' },
  { minXP: 2500, name: 'Club Regular', icon: '🎶' },
  { minXP: 5000, name: 'Resident DJ', icon: '⭐' },
  { minXP: 8000, name: 'Headliner', icon: '🌟' },
  { minXP: 12000, name: 'Festival Star', icon: '🎪' },
  { minXP: 15000, name: 'DJ Legend', icon: '👑' }
];
