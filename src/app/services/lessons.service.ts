import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson.model';
import { LESSONS_DATA } from '../data/lessons.data';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  private lessons: Lesson[] = LESSONS_DATA;

  getAllLessons(): Lesson[] {
    return this.lessons;
  }

  getLessonById(id: number): Lesson | undefined {
    return this.lessons.find(lesson => lesson.id === id);
  }

  getLessonsByCategory(category: string): Lesson[] {
    return this.lessons.filter(lesson => lesson.category === category);
  }

  getNextLesson(currentId: number): Lesson | undefined {
    return this.lessons.find(lesson => lesson.id === currentId + 1);
  }

  getPreviousLesson(currentId: number): Lesson | undefined {
    return this.lessons.find(lesson => lesson.id === currentId - 1);
  }
}
