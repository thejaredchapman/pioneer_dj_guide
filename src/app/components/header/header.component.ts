import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../../services/progress.service';
import { ThemeSettingsComponent } from '../theme-settings/theme-settings.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ThemeSettingsComponent],
  template: `
    <header class="header">
      <div class="header-content">
        <div class="header-top">
          <h1 class="title">
            <a routerLink="/">🎧 DDJ-FLX4 Master Trainer</a>
          </h1>
          <app-theme-settings></app-theme-settings>
        </div>

        <div class="stats">
          <div class="stat-box">
            <span class="stat-label">Level</span>
            <span class="stat-value">{{ progress().level }}</span>
          </div>

          <div class="stat-box">
            <span class="stat-label">XP</span>
            <span class="stat-value">{{ progress().xp }}</span>
            <span class="stat-max">/ {{ nextLevelXP() }}</span>
          </div>

          <div class="stat-box">
            <span class="stat-label">Score</span>
            <span class="stat-value">{{ progress().totalScore }}</span>
          </div>

          <div class="stat-box">
            <span class="stat-label">Rank</span>
            <span class="stat-value">{{ currentRank }}</span>
          </div>
        </div>

        <div class="progress-container">
          <div class="progress-bar">
            <div
              class="progress-fill"
              [style.width.%]="progressPercentage"
            ></div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-primary) 100%);
      padding: 1.5rem 2rem;
      border-bottom: 3px solid var(--accent-primary);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .header-content {
      max-width: 1400px;
      margin: 0 auto;
    }

    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      gap: 1rem;
    }

    .title {
      font-size: 2rem;
      color: var(--accent-primary);
      margin: 0;
      text-align: center;
      font-weight: 700;
      text-shadow: 0 0 20px rgba(var(--accent-rgb), 0.5);
      flex: 1;
    }

    .title a {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s;
    }

    .title a:hover {
      color: var(--accent-light);
    }

    .stats {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }

    .stat-box {
      background: var(--card-bg);
      padding: 0.75rem 1.5rem;
      border-radius: 12px;
      border: 2px solid rgba(var(--accent-rgb), 0.3);
      text-align: center;
      backdrop-filter: blur(10px);
      transition: transform 0.3s, border-color 0.3s;
    }

    .stat-box:hover {
      transform: translateY(-2px);
      border-color: rgba(var(--accent-rgb), 0.6);
    }

    .stat-label {
      display: block;
      font-size: 0.75rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.25rem;
    }

    .stat-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--accent-primary);
      text-shadow: 0 0 10px rgba(var(--accent-rgb), 0.3);
    }

    .stat-max {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-left: 0.25rem;
    }

    .progress-container {
      max-width: 600px;
      margin: 0 auto;
    }

    .progress-bar {
      height: 20px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      overflow: hidden;
      border: 2px solid rgba(var(--accent-rgb), 0.3);
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-light) 100%);
      transition: width 0.5s ease;
      box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.5);
    }

    @media (max-width: 768px) {
      .header {
        padding: 1rem;
      }

      .header-top {
        flex-direction: column;
        align-items: stretch;
      }

      .title {
        font-size: 1.5rem;
        text-align: center;
      }

      .stats {
        gap: 0.75rem;
      }

      .stat-box {
        padding: 0.5rem 1rem;
      }

      .stat-value {
        font-size: 1.2rem;
      }
    }
  `]
})
export class HeaderComponent {
  progress = this.progressService.progress;
  currentRank = this.progressService.getCurrentRank();
  progressPercentage = this.progressService.getProgressPercentage();

  nextLevelXP = computed(() => this.progress().level * 1000);

  constructor(private progressService: ProgressService) {}
}
