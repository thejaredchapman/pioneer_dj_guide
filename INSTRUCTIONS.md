# DDJ-FLX4 Master Trainer - Setup & Usage Instructions

## 🚀 Quick Start Guide

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

\`\`\`bash
npm install
\`\`\`

This will install all required packages including Angular 17 and dependencies.

### Step 2: Start the Development Server

\`\`\`bash
npm start
\`\`\`

Or alternatively:

\`\`\`bash
ng serve
\`\`\`

The app will be available at: **http://localhost:4200**

### Step 3: Open in Browser

Navigate to \`http://localhost:4200\` in your web browser. You should see the DDJ-FLX4 Master Trainer home screen!

---

## 📋 Hardware Setup

### For Windows Users (Rekordbox)

1. **Install Rekordbox**
   - Visit https://rekordbox.com/
   - Download and install Rekordbox
   - Create a free Pioneer DJ account

2. **Connect Your DDJ-FLX4**
   - Plug USB cable from controller to PC
   - Power on the controller
   - Windows will auto-install drivers

3. **Configure Rekordbox**
   - Open Rekordbox
   - Go to Preferences > Audio
   - Select "DDJ-FLX4 ASIO" as audio device
   - Click Apply

4. **Import Music**
   - File > Import > Import Folder
   - Select your music folder
   - Let Rekordbox analyze tracks

For detailed instructions, click "Setup Instructions" in the app!

### For Ubuntu Users (Mixxx)

1. **Install Mixxx**
\`\`\`bash
sudo add-apt-repository ppa:mixxx/mixxx
sudo apt update
sudo apt install mixxx
\`\`\`

2. **Connect Controller**
   - Plug USB cable from controller to PC
   - Power on the controller
   - Ubuntu will recognize it automatically

3. **Configure Mixxx**
   - Options > Preferences > Sound Hardware
   - Sample Rate: 48000 Hz
   - Select DDJ-FLX4 for Master and Headphones

4. **Enable Controller**
   - Options > Preferences > Controllers
   - Find "Pioneer DDJ-FLX4"
   - Check "Enable"

For detailed instructions, click "Setup Instructions" in the app!

---

## 🎓 How to Use the Trainer

### Home Screen

- View all 12 lessons organized by category
- See your progress stats in the sidebar
- Click any unlocked lesson to start learning

### Lesson Structure

Each lesson contains:
- **Steps**: Detailed instructions with images and tips
- **Knowledge Check**: Quiz to test understanding
- **Completion Rewards**: Earn XP and unlock next lesson

### Navigation

- **Next/Previous**: Move through lesson steps
- **Complete**: Finish lesson and take quiz
- **Review**: Go back and review completed lessons
- **Back to Lessons**: Return to home screen

### Progress System

- **XP**: Earn experience points by completing lessons
- **Levels**: Level up every 1000 XP
- **Ranks**: Progress through 7 DJ ranks
- **Achievements**: Unlock special achievements
- **Score**: Track your quiz performance

### Tips for Best Experience

1. **Follow lessons in order** - Each builds on previous knowledge
2. **Have your controller ready** - Practice along with lessons
3. **Use headphones** - Essential for learning to mix
4. **Take your time** - Don't rush, master each lesson
5. **Review as needed** - Revisit lessons anytime

---

## 🎮 Lesson Overview

### Beginner Basics (Lessons 1-3)
Start here if you've never used a DJ controller!

**Lesson 1: Controller Layout**
- Learn every button, knob, and fader
- Understand deck sections
- Master the mixer layout
- 10 detailed steps with images

**Lesson 2: Loading Tracks**
- Import music to your software
- Navigate your library
- Load tracks to decks
- Organize playlists

**Lesson 3: Playback Control**
- Play/pause functionality
- Cue button mastery
- Tempo adjustment
- Practice exercises

### Mixing Fundamentals (Lessons 4-6)
Learn the core skills of DJing!

**Lesson 4: Volume & EQ Control**
- TRIM knob setup
- EQ (HI/MID/LOW) usage
- Channel faders
- Signal flow understanding

**Lesson 5: Beatmatching Basics**
- SYNC button usage
- Manual beatmatching
- Tempo fader techniques
- Listening for alignment

**Lesson 6: Your First Transition**
- Prepare two tracks
- Simple crossfade mix
- Timing and phrasing
- Build confidence

### Creative Techniques (Lessons 7-9)
Add flair to your mixes!

**Lesson 7: EQ Transitions**
- Frequency mixing
- Bass swap technique
- Creative EQ cuts
- Smooth blending

**Lesson 8: Effects & FX**
- Echo effects
- Reverb usage
- Effect timing
- CFX button tricks

**Lesson 9: Hot Cues & Loops**
- Setting hot cues
- Loop creation
- Performance techniques
- Creative remixing

### Advanced Mastery (Lessons 10-12)
Become a pro DJ!

**Lesson 10: Advanced Transitions**
- Complex mixing techniques
- Multiple track layering
- Energy management

**Lesson 11: Phrasing & Structure**
- 8/16/32 bar phrases
- Track structure analysis
- Perfect timing

**Lesson 12: Final Challenge**
- 30-minute mix challenge
- Apply all learned skills
- Get your DJ Legend rank!

---

## 🛠️ Development Commands

### Start Development Server
\`\`\`bash
npm start
# or
ng serve
\`\`\`

### Build for Production
\`\`\`bash
npm run build
# or
ng build --configuration production
\`\`\`

### Run Tests
\`\`\`bash
npm test
# or
ng test
\`\`\`

### Build and Watch
\`\`\`bash
npm run watch
# or
ng build --watch
\`\`\`

---

## 📂 Project Structure Explained

\`\`\`
src/app/
│
├── components/
│   └── header/                 # Top navigation bar with stats
│
├── pages/
│   ├── home/                   # Main lesson selection page
│   ├── lesson/                 # Individual lesson viewer
│   └── setup/                  # Hardware setup instructions
│
├── services/
│   ├── lessons.service.ts      # Manages lesson data
│   └── progress.service.ts     # Tracks user progress (XP, levels)
│
├── models/
│   └── lesson.model.ts         # TypeScript interfaces
│
├── data/
│   └── lessons.data.ts         # All lesson content (12 lessons)
│
└── app.routes.ts               # Route configuration
\`\`\`

---

## 🎯 Progress Storage

Your progress is saved automatically in your browser's localStorage:

- **Completed lessons**
- **XP and level**
- **Quiz scores**
- **Achievements**
- **Total time practiced**

Progress persists even after closing the browser!

To reset progress: Clear browser cache or open DevTools > Application > Local Storage > Clear

---

## 🐛 Troubleshooting

### App won't start
- Make sure Node.js v18+ is installed
- Delete \`node_modules\` and run \`npm install\` again
- Check for port conflicts on 4200

### Controller not working
- Check USB connection
- Verify audio device in software settings
- Restart DJ software
- See detailed troubleshooting in Setup Instructions page

### Lessons not unlocking
- Complete previous lesson first
- Check that quiz was submitted
- Verify XP was awarded in header

### Progress not saving
- Check browser localStorage is enabled
- Try different browser
- Don't use incognito/private mode

---

## 💡 Pro Tips

1. **Practice with real tracks** - Use songs you know well
2. **Start simple** - Master basics before advanced techniques
3. **Record yourself** - Use software recording to hear your progress
4. **Join communities** - Reddit's r/Beatmatch, DJ forums
5. **Watch other DJs** - Learn from YouTube tutorials
6. **Set goals** - Practice 30 mins daily
7. **Build your library** - Organize music by BPM and genre
8. **Play for friends** - Get comfortable performing

---

## 🤝 Support & Community

- **GitHub Issues**: Report bugs or request features
- **Reddit**: r/Beatmatch for DJ community
- **Discord**: Join DJ communities
- **YouTube**: Search for DDJ-FLX4 tutorials

---

## 📄 License

MIT License - Free to use and modify!

---

## 🎉 Have Fun!

Remember: Every professional DJ was once a beginner. Take your time, practice regularly, and most importantly - have fun making music!

**Good luck on your DJ journey! 🎧🎵**
