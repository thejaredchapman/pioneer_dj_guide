import { Injectable, signal } from '@angular/core';
import { UserProgress, RANKS } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private readonly STORAGE_KEY = 'ddj-flx4-progress';

  progress = signal<UserProgress>(this.loadProgress());

  private loadProgress(): UserProgress {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      level: 1,
      xp: 0,
      totalScore: 0,
      completedLessons: [],
      lessonScores: {},
      achievements: [],
      timeSpent: 0
    };
  }

  private saveProgress(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.progress()));
  }

  addXP(amount: number): void {
    const current = this.progress();
    const newXP = current.xp + amount;
    const newLevel = Math.floor(newXP / 1000) + 1;

    this.progress.set({
      ...current,
      xp: newXP,
      level: newLevel
    });
    this.saveProgress();
  }

  completeLesson(lessonId: number, score: number, xp: number): void {
    const current = this.progress();

    if (!current.completedLessons.includes(lessonId)) {
      current.completedLessons.push(lessonId);
    }

    current.lessonScores[lessonId] = score;
    current.totalScore += score;

    this.progress.set(current);
    this.addXP(xp);
    this.checkAchievements();
  }

  unlockAchievement(achievementId: string): void {
    const current = this.progress();
    if (!current.achievements.includes(achievementId)) {
      current.achievements.push(achievementId);
      this.progress.set(current);
      this.saveProgress();
    }
  }

  private checkAchievements(): void {
    const current = this.progress();

    if (current.completedLessons.length >= 1) {
      this.unlockAchievement('first-steps');
    }
    if (current.completedLessons.length >= 6) {
      this.unlockAchievement('beat-master');
    }
    if (current.completedLessons.length >= 9) {
      this.unlockAchievement('smooth-operator');
    }
    if (current.completedLessons.length >= 12) {
      this.unlockAchievement('dj-legend');
    }
  }

  getCurrentRank(): string {
    const xp = this.progress().xp;
    for (let i = RANKS.length - 1; i >= 0; i--) {
      if (xp >= RANKS[i].minXP) {
        return RANKS[i].name;
      }
    }
    return RANKS[0].name;
  }

  getProgressPercentage(): number {
    const xp = this.progress().xp;
    const level = this.progress().level;
    const xpForCurrentLevel = (level - 1) * 1000;
    const xpForNextLevel = level * 1000;
    const xpInCurrentLevel = xp - xpForCurrentLevel;
    return (xpInCurrentLevel / 1000) * 100;
  }

  resetProgress(): void {
    this.progress.set({
      level: 1,
      xp: 0,
      totalScore: 0,
      completedLessons: [],
      lessonScores: {},
      achievements: [],
      timeSpent: 0
    });
    this.saveProgress();
  }
}
