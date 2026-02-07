import { Injectable, signal, effect } from '@angular/core';

export interface ThemeColors {
  name: string;
  primary: string;
  light: string;
  rgb: string; // RGB values for rgba usage
}

export const ACCENT_COLORS: ThemeColors[] = [
  { name: 'Pink', primary: '#e94560', light: '#ff6b7a', rgb: '233, 69, 96' },
  { name: 'Purple', primary: '#9b59b6', light: '#be7fd3', rgb: '155, 89, 182' },
  { name: 'Blue', primary: '#3498db', light: '#5dade2', rgb: '52, 152, 219' },
  { name: 'Green', primary: '#2ecc71', light: '#58d68d', rgb: '46, 204, 113' },
  { name: 'Orange', primary: '#e67e22', light: '#f39c12', rgb: '230, 126, 34' },
  { name: 'Red', primary: '#e74c3c', light: '#ec7063', rgb: '231, 76, 60' },
  { name: 'Teal', primary: '#1abc9c', light: '#48c9b0', rgb: '26, 188, 156' },
  { name: 'Indigo', primary: '#6c5ce7', light: '#a29bfe', rgb: '108, 92, 231' },
];

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Signals for reactive state
  isDarkMode = signal<boolean>(true);
  currentAccentIndex = signal<number>(0);

  constructor() {
    // Load saved preferences
    this.loadPreferences();

    // Apply theme on initialization
    effect(() => {
      this.applyTheme();
    });
  }

  get currentAccent(): ThemeColors {
    return ACCENT_COLORS[this.currentAccentIndex()];
  }

  toggleDarkMode(): void {
    this.isDarkMode.set(!this.isDarkMode());
    this.savePreferences();
  }

  setAccentColor(index: number): void {
    if (index >= 0 && index < ACCENT_COLORS.length) {
      this.currentAccentIndex.set(index);
      this.savePreferences();
    }
  }

  private applyTheme(): void {
    const root = document.documentElement;
    const accent = this.currentAccent;
    const isDark = this.isDarkMode();

    // Set CSS variables for accent colors
    root.style.setProperty('--accent-primary', accent.primary);
    root.style.setProperty('--accent-light', accent.light);
    root.style.setProperty('--accent-rgb', accent.rgb);

    // Set theme mode colors
    if (isDark) {
      root.style.setProperty('--bg-primary', '#1a1a2e');
      root.style.setProperty('--bg-secondary', '#16213e');
      root.style.setProperty('--bg-tertiary', '#0f0f23');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#999999');
      root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.05)');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.style.setProperty('--bg-primary', '#f5f5f5');
      root.style.setProperty('--bg-secondary', '#ffffff');
      root.style.setProperty('--bg-tertiary', '#e8e8e8');
      root.style.setProperty('--text-primary', '#1a1a1a');
      root.style.setProperty('--text-secondary', '#666666');
      root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--card-bg', '#ffffff');
      root.setAttribute('data-theme', 'light');
    }
  }

  private loadPreferences(): void {
    const savedDarkMode = localStorage.getItem('theme-dark-mode');
    const savedAccentIndex = localStorage.getItem('theme-accent-index');

    if (savedDarkMode !== null) {
      this.isDarkMode.set(savedDarkMode === 'true');
    }

    if (savedAccentIndex !== null) {
      const index = parseInt(savedAccentIndex, 10);
      if (!isNaN(index)) {
        this.currentAccentIndex.set(index);
      }
    }
  }

  private savePreferences(): void {
    localStorage.setItem('theme-dark-mode', this.isDarkMode().toString());
    localStorage.setItem('theme-accent-index', this.currentAccentIndex().toString());
  }
}
