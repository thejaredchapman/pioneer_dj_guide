# DDJ-FLX4 Master Trainer

A gamified, interactive web application to learn how to use the Pioneer DDJ-FLX4 DJ controller. Perfect for complete beginners!

## Features

- 🎓 **12 Progressive Lessons** - From complete basics to advanced DJ techniques
- 🏆 **Gamification** - Earn XP, level up, and unlock achievements
- 📚 **Comprehensive Guides** - Step-by-step instructions for every control
- 🎮 **Interactive Learning** - Quizzes and practical exercises
- 💻 **Multi-Platform Setup** - Instructions for Windows (Rekordbox) and Ubuntu (Mixxx)
- 📊 **Progress Tracking** - Monitor your learning journey

## Lessons Overview

### Beginner Basics
1. **Controller Layout** - Learn all buttons & knobs
2. **Loading Tracks** - Get music on your decks
3. **Playback Control** - Play, pause, cue basics

### Mixing Fundamentals
4. **Volume & EQ Control** - Master the mixer section
5. **Beatmatching Basics** - Sync your beats
6. **Your First Transition** - Simple crossfade mix

### Creative Techniques
7. **EQ Transitions** - Mix with frequencies
8. **Effects & FX** - Add creative flair
9. **Hot Cues & Loops** - Advanced performance tools

### Advanced Mastery
10. **Advanced Transitions** - Pro-level mixing
11. **Phrasing & Structure** - Perfect timing
12. **Final Challenge** - Complete 30-min mix

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Pioneer DDJ-FLX4 controller
- DJ software (Rekordbox for Windows, Mixxx for Ubuntu)

### 📸 Adding Controller Photos (Recommended!)

For the best learning experience, add annotated photos of your DDJ-FLX4 controller!

**See [ADDING-PHOTOS.md](./ADDING-PHOTOS.md) for complete instructions.**

Quick steps:
1. Take 9 photos of your controller
2. Add annotations (arrows and labels)
3. Save to `src/assets/images/controller/`
4. Enjoy enhanced visual learning!

The app works without photos (shows text labels), but photos make lessons much clearer.

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/ddj-flx4-trainer-angular.git
cd ddj-flx4-trainer-angular
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm start
\`\`\`

4. Open your browser and navigate to:
\`\`\`
http://localhost:4200
\`\`\`

## Build for Production

To build the app for production:

\`\`\`bash
npm run build
\`\`\`

The build artifacts will be stored in the \`dist/\` directory.

## Project Structure

\`\`\`
ddj-flx4-trainer-angular/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable components
│   │   │   └── header/
│   │   ├── pages/               # Route pages
│   │   │   ├── home/
│   │   │   ├── lesson/
│   │   │   └── setup/
│   │   ├── services/            # Angular services
│   │   │   ├── lessons.service.ts
│   │   │   └── progress.service.ts
│   │   ├── models/              # TypeScript interfaces
│   │   │   └── lesson.model.ts
│   │   ├── data/                # Lesson content
│   │   │   └── lessons.data.ts
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json
\`\`\`

## Technology Stack

- **Angular 17** - Modern web framework with standalone components
- **TypeScript** - Type-safe development
- **RxJS** - Reactive programming
- **Angular Signals** - State management
- **CSS3** - Styling and animations
- **LocalStorage** - Progress persistence

## Features in Detail

### Progress System
- Level up by earning XP from completed lessons
- 7 rank tiers from "Bedroom DJ" to "DJ Legend"
- Persistent progress saved in browser localStorage

### Lesson System
- Step-by-step guided tutorials
- Interactive quizzes to test knowledge
- Tips and pro techniques in every lesson
- Controller part highlighting
- Review completed lessons anytime

### Setup Guides
- Windows + Rekordbox installation
- Ubuntu + Mixxx installation
- Troubleshooting common issues
- Audio configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Pioneer DJ for the DDJ-FLX4 controller
- Rekordbox DJ software
- Mixxx open-source DJ software
- The DJ community for inspiration

## Support

If you encounter any issues or have questions:
1. Check the Setup Instructions in the app
2. Review the troubleshooting section
3. Open an issue on GitHub

## Roadmap

- [ ] Add video tutorials
- [ ] Interactive controller simulator
- [ ] Community features (share mixes, tips)
- [ ] Mobile responsive improvements
- [ ] Additional controller support
- [ ] Advanced lessons (scratching, harmonic mixing)

---

**Happy Mixing! 🎧**
