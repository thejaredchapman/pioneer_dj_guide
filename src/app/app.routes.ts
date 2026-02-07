import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'lesson/:id',
    loadComponent: () => import('./pages/lesson/lesson.component').then(m => m.LessonComponent)
  },
  {
    path: 'setup',
    loadComponent: () => import('./pages/setup/setup.component').then(m => m.SetupComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
