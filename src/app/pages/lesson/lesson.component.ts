import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LessonsService } from '../../services/lessons.service';
import { ProgressService } from '../../services/progress.service';
import { Lesson, LessonStep, QuizQuestion } from '../../models/lesson.model';
import { MarkdownPipe } from '../../pipes/markdown.pipe';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule, RouterLink, MarkdownPipe],
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  lesson = signal<Lesson | null>(null);
  currentStepIndex = signal(0);
  showQuiz = signal(false);
  showComplete = signal(false);
  selectedAnswer = signal<number | null>(null);
  quizScore = signal(0);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lessonsService: LessonsService,
    private progressService: ProgressService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const lessonId = parseInt(params['id']);
      const lesson = this.lessonsService.getLessonById(lessonId);

      if (lesson) {
        this.lesson.set(lesson);
        this.currentStepIndex.set(0);
        this.showQuiz.set(false);
        this.showComplete.set(false);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  get currentStep(): LessonStep | null {
    const lesson = this.lesson();
    if (!lesson) return null;
    return lesson.steps[this.currentStepIndex()];
  }

  get progress(): number {
    const lesson = this.lesson();
    if (!lesson) return 0;
    return ((this.currentStepIndex() + 1) / lesson.steps.length) * 100;
  }

  // Map highlight parts to controller photos
  getControllerImage(highlightParts: string[] | undefined): string | null {
    if (!highlightParts || highlightParts.length === 0) return null;

    const partToImageMap: { [key: string]: string } = {
      'jog-wheel-left': 'jog-wheels.jpg',
      'jog-wheel-right': 'jog-wheels.jpg',
      'tempo-fader-left': 'tempo-controls.jpg',
      'tempo-fader-right': 'tempo-controls.jpg',
      'play-pause-left': 'transport-controls.jpg',
      'play-pause-right': 'transport-controls.jpg',
      'cue-left': 'transport-controls.jpg',
      'cue-right': 'transport-controls.jpg',
      'performance-pads-left': 'performance-pads.jpg',
      'performance-pads-right': 'performance-pads.jpg',
      'mixer-section': 'mixer-section.jpg',
      'browser-section': 'browser-section.jpg',
      'headphone-section': 'headphone-section.jpg',
      'fx-section': 'fx-section.jpg',
      'trim-knobs': 'mixer-section.jpg',
      'deck-left': 'full-controller.jpg',
      'deck-right': 'full-controller.jpg'
    };

    // Return the image for the first highlight part
    const imageName = partToImageMap[highlightParts[0]];
    return imageName ? `/assets/images/controller/${imageName}` : null;
  }

  // Format highlight part names for display
  formatHighlightPart(part: string): string {
    return part
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  nextStep() {
    const lesson = this.lesson();
    if (!lesson) return;

    if (this.currentStepIndex() < lesson.steps.length - 1) {
      this.currentStepIndex.update(i => i + 1);
    } else {
      // Last step, show quiz if available
      if (lesson.quiz && lesson.quiz.length > 0) {
        this.showQuiz.set(true);
      } else {
        this.completeLesson(100);
      }
    }
  }

  previousStep() {
    if (this.currentStepIndex() > 0) {
      this.currentStepIndex.update(i => i - 1);
    }
  }

  selectAnswer(index: number) {
    this.selectedAnswer.set(index);
  }

  submitQuiz() {
    const lesson = this.lesson();
    if (!lesson || !lesson.quiz) return;

    const correctAnswers = lesson.quiz.filter((q, i) =>
      this.selectedAnswer() === q.correctAnswer
    ).length;

    const score = Math.round((correctAnswers / lesson.quiz.length) * 100);
    this.quizScore.set(score);
    this.completeLesson(score);
  }

  completeLesson(score: number) {
    const lesson = this.lesson();
    if (!lesson) return;

    this.progressService.completeLesson(lesson.id, score, lesson.xp);
    this.showComplete.set(true);
  }

  continueToNext() {
    const lesson = this.lesson();
    if (!lesson) return;

    const nextLesson = this.lessonsService.getNextLesson(lesson.id);
    if (nextLesson) {
      this.router.navigate(['/lesson', nextLesson.id]);
    } else {
      this.router.navigate(['/']);
    }
  }

  reviewLesson() {
    this.currentStepIndex.set(0);
    this.showQuiz.set(false);
    this.showComplete.set(false);
    this.selectedAnswer.set(null);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  onImageError(event: Event) {
    // Hide image if it fails to load
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
