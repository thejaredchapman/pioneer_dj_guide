# Theme Customization Guide

## Overview

The DDJ-FLX4 Trainer now includes a comprehensive theming system that allows users to customize the appearance of the application with:
- **Dark Mode / Light Mode** toggle
- **8 Accent Colors** to choose from

## Features

### Dark Mode
Toggle between dark and light modes for comfortable viewing in any lighting condition.

- **Dark Mode** (default): Optimized for low-light environments
- **Light Mode**: Bright, clean interface for well-lit spaces

### Accent Colors
Choose from 8 vibrant accent colors to personalize your experience:
1. **Pink** - The original default color (#e94560)
2. **Purple** - Royal and elegant (#9b59b6)
3. **Blue** - Cool and professional (#3498db)
4. **Green** - Fresh and natural (#2ecc71)
5. **Orange** - Warm and energetic (#e67e22)
6. **Red** - Bold and passionate (#e74c3c)
7. **Teal** - Modern and calming (#1abc9c)
8. **Indigo** - Deep and sophisticated (#6c5ce7)

## How to Use

1. Click the **🎨** button in the header to open theme settings
2. Toggle the **Dark/Light mode** button to switch themes
3. Select your preferred **accent color** from the color grid
4. Your preferences are automatically saved to localStorage

## Technical Implementation

### ThemeService
The `ThemeService` manages theme state using Angular signals and applies CSS custom properties dynamically.

**Location:** `src/app/services/theme.service.ts`

**Key Features:**
- Reactive state management with Angular signals
- Automatic localStorage persistence
- Dynamic CSS variable updates
- 8 predefined color palettes

### CSS Variables
The theme system uses CSS custom properties for easy customization:

```css
--accent-primary: Main accent color
--accent-light: Lighter accent variant
--accent-rgb: RGB values for rgba() usage
--bg-primary: Primary background color
--bg-secondary: Secondary background color
--bg-tertiary: Tertiary background color
--text-primary: Primary text color
--text-secondary: Secondary text color
--border-color: Border color
--card-bg: Card background color
```

### Theme Settings Component
The `ThemeSettingsComponent` provides the UI for theme customization.

**Location:** `src/app/components/theme-settings/theme-settings.component.ts`

**Features:**
- Floating panel interface
- Color picker grid
- Dark/light mode toggle
- Responsive design

## Persistence

Theme preferences are saved to browser localStorage:
- `theme-dark-mode`: Boolean for dark/light mode
- `theme-accent-index`: Number (0-7) for selected accent color

Preferences persist across browser sessions and are loaded automatically on app startup.

## Browser Compatibility

The theming system uses modern CSS features and is compatible with:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Modern mobile browsers

## For Developers

### Adding New Colors

To add a new accent color, edit `src/app/services/theme.service.ts`:

```typescript
export const ACCENT_COLORS: ThemeColors[] = [
  // ... existing colors
  { name: 'Your Color', primary: '#hexcode', light: '#hexcode', rgb: 'r, g, b' },
];
```

### Using Theme Variables in Components

Replace hardcoded colors with CSS variables:

```css
/* Before */
color: #e94560;
border: 2px solid rgba(233, 69, 96, 0.3);

/* After */
color: var(--accent-primary);
border: 2px solid rgba(var(--accent-rgb), 0.3);
```

### Accessing Theme State in TypeScript

Inject the `ThemeService` and use signals:

```typescript
constructor(public themeService: ThemeService) {}

ngOnInit() {
  const isDark = this.themeService.isDarkMode();
  const currentColor = this.themeService.currentAccent;
}
```

## Customization Tips

1. **Accent Colors** work best for:
   - Primary buttons and CTAs
   - Progress indicators
   - Highlights and important text
   - Border accents

2. **Dark Mode** is ideal for:
   - Evening/night sessions
   - Reducing eye strain
   - OLED screen battery savings

3. **Light Mode** is ideal for:
   - Daytime use
   - Well-lit environments
   - Print/screenshot clarity
