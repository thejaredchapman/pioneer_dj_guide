import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LessonsService } from '../../services/lessons.service';
import { ProgressService } from '../../services/progress.service';
import { Lesson } from '../../models/lesson.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  lessons: Lesson[] = [];
  progress = this.progressService.progress;
  categories = [
    'Beginner Basics',
    'Mixing Fundamentals',
    'Creative Techniques',
    'Advanced Mastery'
  ];

  constructor(
    private lessonsService: LessonsService,
    private progressService: ProgressService
  ) {
    this.lessons = this.lessonsService.getAllLessons();
  }

  getLessonsByCategory(category: string): Lesson[] {
    return this.lessons.filter(l => l.category === category);
  }

  isLessonUnlocked(lessonId: number): boolean {
    if (lessonId === 1) return true;
    return this.progress().completedLessons.includes(lessonId - 1);
  }

  isLessonCompleted(lessonId: number): boolean {
    return this.progress().completedLessons.includes(lessonId);
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Beginner Basics': '🎓',
      'Mixing Fundamentals': '🎚️',
      'Creative Techniques': '🎨',
      'Advanced Mastery': '🔥'
    };
    return icons[category] || '📚';
  }
}
