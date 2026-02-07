import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ACCENT_COLORS } from '../../services/theme.service';

@Component({
  selector: 'app-theme-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="theme-settings">
      <button
        class="theme-toggle-btn"
        (click)="toggleSettings()"
        [attr.aria-label]="showSettings ? 'Close theme settings' : 'Open theme settings'"
        title="Theme Settings"
      >
        <span class="icon">🎨</span>
      </button>

      <div class="settings-panel" [class.open]="showSettings">
        <h3 class="panel-title">Theme Settings</h3>

        <div class="settings-group">
          <label class="settings-label">Dark Mode</label>
          <button
            class="mode-toggle-btn"
            (click)="toggleDarkMode()"
            [attr.aria-label]="themeService.isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <span class="icon">{{ themeService.isDarkMode() ? '🌙' : '☀️' }}</span>
            <span class="mode-text">{{ themeService.isDarkMode() ? 'Dark' : 'Light' }}</span>
          </button>
        </div>

        <div class="settings-group">
          <label class="settings-label">Accent Color</label>
          <div class="color-grid">
            <button
              *ngFor="let color of accentColors; let i = index"
              class="color-btn"
              [class.active]="themeService.currentAccentIndex() === i"
              [style.background]="color.primary"
              (click)="selectAccent(i)"
              [attr.aria-label]="'Select ' + color.name + ' accent color'"
              [title]="color.name"
            >
              <span class="checkmark" *ngIf="themeService.currentAccentIndex() === i">✓</span>
            </button>
          </div>
        </div>
      </div>

      <div
        class="overlay"
        [class.visible]="showSettings"
        (click)="toggleSettings()"
      ></div>
    </div>
  `,
  styles: [`
    .theme-settings {
      position: relative;
    }

    .theme-toggle-btn {
      background: var(--card-bg);
      border: 2px solid rgba(var(--accent-rgb), 0.3);
      border-radius: 12px;
      padding: 0.5rem 1rem;
      color: var(--text-primary);
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s;
      backdrop-filter: blur(10px);
    }

    .theme-toggle-btn:hover {
      border-color: var(--accent-primary);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(var(--accent-rgb), 0.3);
    }

    .theme-toggle-btn .icon {
      display: inline-block;
    }

    .settings-panel {
      position: absolute;
      top: calc(100% + 1rem);
      right: 0;
      background: var(--bg-secondary);
      border: 2px solid rgba(var(--accent-rgb), 0.3);
      border-radius: 16px;
      padding: 1.5rem;
      min-width: 280px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s;
      z-index: 1001;
    }

    .settings-panel.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .panel-title {
      font-size: 1.2rem;
      color: var(--text-primary);
      margin: 0 0 1.5rem 0;
      text-align: center;
      font-weight: 700;
    }

    .settings-group {
      margin-bottom: 1.5rem;
    }

    .settings-group:last-child {
      margin-bottom: 0;
    }

    .settings-label {
      display: block;
      font-size: 0.85rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.75rem;
      font-weight: 600;
    }

    .mode-toggle-btn {
      width: 100%;
      background: var(--card-bg);
      border: 2px solid rgba(var(--accent-rgb), 0.3);
      border-radius: 12px;
      padding: 0.75rem 1rem;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      cursor: pointer;
      transition: all 0.3s;
      font-size: 1rem;
      font-weight: 600;
    }

    .mode-toggle-btn:hover {
      border-color: var(--accent-primary);
      background: rgba(var(--accent-rgb), 0.1);
    }

    .mode-toggle-btn .icon {
      font-size: 1.3rem;
    }

    .color-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.75rem;
    }

    .color-btn {
      position: relative;
      width: 100%;
      aspect-ratio: 1;
      border: 3px solid transparent;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .color-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .color-btn.active {
      border-color: var(--text-primary);
      box-shadow: 0 0 0 2px var(--bg-secondary), 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .checkmark {
      font-weight: 900;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s;
    }

    .overlay.visible {
      opacity: 1;
      visibility: visible;
    }

    @media (max-width: 768px) {
      .settings-panel {
        right: -1rem;
        min-width: 260px;
      }

      .color-grid {
        gap: 0.5rem;
      }
    }
  `]
})
export class ThemeSettingsComponent {
  showSettings = false;
  accentColors = ACCENT_COLORS;

  constructor(public themeService: ThemeService) {}

  toggleSettings(): void {
    this.showSettings = !this.showSettings;
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  selectAccent(index: number): void {
    this.themeService.setAccentColor(index);
  }
}
