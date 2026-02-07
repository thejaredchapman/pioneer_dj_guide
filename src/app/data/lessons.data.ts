import { Lesson } from '../models/lesson.model';

export const LESSONS_DATA: Lesson[] = [
  {
    id: 1,
    title: 'Controller Layout',
    description: 'Learn all buttons & knobs',
    category: 'Beginner Basics',
    xp: 100,
    steps: [
      {
        title: 'Welcome to Your DDJ-FLX4',
        content: `The Pioneer DDJ-FLX4 is a 2-channel DJ controller designed for beginners. It has everything you need to start mixing tracks like a pro.

**Main Sections:**
- **Decks (Left & Right)**: Control two separate tracks
- **Mixer (Center)**: Blend and control volume/EQ
- **Browser Section**: Navigate and load tracks
- **Performance Pads**: Trigger hot cues, loops, and samples`,
        tips: ['Take your time to identify each section', 'Don\'t be intimidated - every button has a purpose!']
      },
      {
        title: 'The Deck Section - Jog Wheels',
        content: `Each deck has a **Jog Wheel** - the large circular disc at the top.

**Jog Wheel Functions:**
- **Top Surface (Platter)**: Touch while playing to scratch or nudge tempo
- **Outer Ring**: Use to quickly scan through tracks when paused
- **Vinyl Mode ON**: Touching stops the track (like a real vinyl record)
- **Vinyl Mode OFF**: Touching doesn't stop playback (good for beginners)

**Pro Tip**: When beatmatching, gently touch the side of the jog wheel to speed up or slow down the track slightly.`,
        highlightParts: ['jog-wheel-left', 'jog-wheel-right'],
        tips: ['Practice touching gently - you don\'t need to press hard']
      },
      {
        title: 'Tempo Controls',
        content: `Right below each jog wheel you'll find the **Tempo Fader** (also called Pitch Fader).

**Tempo Fader**:
- Slide UP to slow down the track
- Slide DOWN to speed up the track
- Range: Usually ±8% or ±16% BPM adjustment

**TEMPO/MASTER Button**:
- Press to toggle the tempo adjustment range
- LED indicates current range

**Why it matters**: Matching the tempo (BPM) of two tracks is the foundation of smooth mixing!`,
        highlightParts: ['tempo-fader-left', 'tempo-fader-right'],
        tips: ['Small adjustments make big differences', 'BPM = Beats Per Minute']
      },
      {
        title: 'Transport Controls',
        content: `These buttons control playback on each deck:

**PLAY/PAUSE Button (▶/❚❚)**:
- Press to start or pause the track
- Green LED lights when playing

**CUE Button**:
- Sets a temporary start point
- Press while playing to return to cue point
- Press and hold to preview from cue point

**SHIFT + CUE**: Return to beginning of track

**CUE/LOOP CALL Buttons (< >)**:
- Jump between hot cues
- Navigate saved loop points`,
        highlightParts: ['play-pause-left', 'cue-left', 'play-pause-right', 'cue-right'],
        tips: ['The CUE button is your safety net', 'Always set a cue point before mixing!']
      },
      {
        title: 'Performance Pads',
        content: `Below each deck are 4 **Performance Pads** - your creative tools!

**Pad Modes** (Select with buttons above pads):
- **HOT CUE**: Jump to saved points instantly
- **PAD FX**: Apply sound effects
- **BEAT JUMP**: Skip forward/backward by beats
- **SAMPLER**: Trigger sample sounds

**Each pad lights up in different colors depending on the mode**

We'll dive deep into these in later lessons, but for now, know they're your secret weapons for creative mixing!`,
        highlightParts: ['performance-pads-left', 'performance-pads-right'],
        tips: ['Try each mode with your favorite track', 'Hot Cues are the most commonly used']
      },
      {
        title: 'The Mixer Section',
        content: `The center section is your **Mixer** - where the magic happens!

**For Each Channel (1 & 2):**
- **TRIM Knob (Top)**: Adjusts input volume of the track
- **EQ Knobs (HI/MID/LOW)**: Control frequency levels
- **FILTER Knob**: Creative filter effect
- **Channel Fader**: Controls volume output to master
- **CUE Button**: Send channel to headphones for previewing

**Master Section:**
- **Crossfader**: Blend between channels 1 and 2
- **Master Level Knobs**: Overall output volume
- **Level Meters**: Show volume levels (don't let them hit red!)`,
        highlightParts: ['mixer-section'],
        tips: ['TRIM sets input, Channel Fader controls output', 'Keep master levels in the green/yellow range']
      },
      {
        title: 'Browser Controls',
        content: `Located at the top center, these buttons help you find and load tracks:

**BROWSE Encoder (Rotary Knob)**:
- Rotate to scroll through tracks
- Push to open folders or load selected track

**BACK Button**:
- Go back in folder structure

**LOAD Buttons (◀ ▶)**:
- Load selected track to Deck A (left) or Deck B (right)
- You can also press the browse encoder while hovering over a track

**SHIFT Functions**: Access additional navigation features`,
        highlightParts: ['browser-section'],
        tips: ['Organize your music in folders by genre/BPM', 'Analyze tracks before DJ sessions']
      },
      {
        title: 'Headphone Section',
        content: `Essential for previewing tracks before playing them to the audience!

**HEADPHONES Level Knob**:
- Adjusts headphone volume
- Located on the left side of the mixer

**HEADPHONES MIX Knob**:
- Turn fully LEFT: Hear only CUE (previewed channels)
- Turn fully RIGHT: Hear only MASTER (what audience hears)
- Middle: Hear both mixed together

**CUE Buttons** (on each channel):
- Press to send that channel to your headphones
- You can CUE multiple channels at once

**Pro Workflow**: CUE the next track, beatmatch it in your headphones, then bring it into the mix!`,
        highlightParts: ['headphone-section'],
        tips: ['Always use headphones when mixing', 'Keep one ear on CUE, one on MASTER']
      },
      {
        title: 'Smart CFX & FX Section',
        content: `The DDJ-FLX4 has built-in effects to spice up your mixes:

**CFX (Center FX) Button**:
- One-touch auto-remix effect
- Great for creative transitions

**FX SELECT Buttons**:
- Choose different effects (Echo, Reverb, Phaser, etc.)

**LEVEL/DEPTH Knob**:
- Controls effect intensity
- Turn clockwise to increase effect

**BEAT Buttons (1/2, 1/4, etc.)**:
- Set effect timing based on beat divisions

**ON/OFF Button**:
- Toggle effect on/off for selected channel

We'll explore effects in detail in Lesson 8!`,
        highlightParts: ['fx-section'],
        tips: ['Start with subtle effects', 'Echo and reverb are beginner-friendly']
      },
      {
        title: 'Quick Reference Summary',
        content: `**Left/Right Decks:**
- Jog Wheels: Scratch, nudge tempo
- Tempo Fader: Adjust BPM
- Play/Pause & Cue: Transport controls
- Performance Pads: Hot cues, FX, loops, samples

**Center Mixer:**
- TRIM: Input volume
- EQ (HI/MID/LOW): Frequency control
- Channel Faders: Channel volume
- Crossfader: Blend channels
- Master Level: Overall output

**Top Center:**
- Browser: Navigate music library
- Load Buttons: Send tracks to decks

**Effects:**
- FX Select: Choose effect type
- Level/Depth: Effect intensity

**Headphones:**
- Level: Headphone volume
- Mix: Balance CUE vs MASTER
- CUE Buttons: Preview channels

You now know every major control on the DDJ-FLX4! Time to practice.`,
        tips: ['Reference this lesson anytime you forget a control', 'Physical practice is key!']
      }
    ],
    quiz: [
      {
        question: 'What does the TEMPO fader do?',
        options: [
          'Controls the volume',
          'Adjusts the speed (BPM) of the track',
          'Changes the pitch without affecting speed',
          'Controls the bass frequency'
        ],
        correctAnswer: 1,
        explanation: 'The TEMPO fader adjusts the speed (BPM) of your track, allowing you to match beats with another track.'
      },
      {
        question: 'What is the main purpose of the CUE button on the mixer channels?',
        options: [
          'To play the track',
          'To pause the track',
          'To send the channel to your headphones for preview',
          'To add an effect'
        ],
        correctAnswer: 2,
        explanation: 'The CUE button sends that channel to your headphones so you can preview it before the audience hears it.'
      },
      {
        question: 'Which section of the DDJ-FLX4 do you use to navigate and load tracks?',
        options: [
          'Performance Pads',
          'Browser Controls',
          'EQ Section',
          'Jog Wheels'
        ],
        correctAnswer: 1,
        explanation: 'The Browser Controls (encoder and load buttons) let you navigate your music library and load tracks to decks.'
      }
    ]
  },
  {
    id: 2,
    title: 'Loading Tracks',
    description: 'Get music on your decks',
    category: 'Beginner Basics',
    xp: 150,
    steps: [
      {
        title: 'Preparing Your Music Library',
        content: `Before you can load tracks, your music needs to be in Rekordbox or Mixxx.

**Track Analysis**:
When you import music, the software analyzes:
- **BPM** (Beats Per Minute): Track speed
- **Key**: Musical key for harmonic mixing
- **Waveform**: Visual representation
- **Beat Grid**: For syncing and effects

**Best Practices**:
- Import entire music folders
- Let software fully analyze before DJing
- Create playlists by genre, mood, or BPM range
- Remove corrupted or low-quality files`,
        tips: ['Analyze tracks when you have time, not right before a gig', 'Organized playlists make mixing easier']
      },
      {
        title: 'Navigating Your Library',
        content: `Use the **BROWSE encoder** (rotary knob at top center) to navigate:

**Basic Navigation**:
1. **Rotate** the browse encoder to move up/down through tracks
2. **Push** the encoder to enter a folder/playlist
3. **Press BACK** to go up one level

**In Rekordbox**:
- Left panel: Playlists and folders
- Main panel: Track list
- Right panel: Track info and waveform

**Tips for Finding Tracks**:
- Sort by BPM to find similar-tempo tracks
- Use search function for quick access
- Star your favorite tracks`,
        highlightParts: ['browser-section'],
        tips: ['Learn keyboard shortcuts in your software for faster browsing', 'Create a "favorites" playlist for go-to tracks']
      },
      {
        title: 'Loading Track to Deck A (Left Deck)',
        content: `Let's load your first track!

**Method 1 - Using LOAD Button**:
1. Rotate BROWSE encoder to highlight a track
2. Press the **LEFT LOAD button** (◀)
3. Track loads to Deck A

**Method 2 - Using BROWSE Encoder**:
1. Make sure Deck A is selected (deck will show on screen)
2. Highlight your track
3. **Push the BROWSE encoder**

**What You'll See**:
- Waveform appears on your laptop screen
- Track info displays (artist, title, BPM)
- Deck switches to the newly loaded track`,
        highlightParts: ['browser-section', 'deck-left'],
        tips: ['Load tracks while the current track is playing', 'Always check BPM before loading']
      },
      {
        title: 'Loading Track to Deck B (Right Deck)',
        content: `Loading to the right deck is identical:

**Method 1 - Using LOAD Button**:
1. Rotate BROWSE encoder to highlight a track
2. Press the **RIGHT LOAD button** (▶)
3. Track loads to Deck B

**Method 2 - Using BROWSE Encoder**:
1. Make sure Deck B is selected
2. Highlight your track
3. Push the BROWSE encoder

**Pro Tip**: While one track plays on Deck A, load and prepare the next track on Deck B!`,
        highlightParts: ['browser-section', 'deck-right'],
        tips: ['Most DJs alternate between decks (A→B→A→B)', 'Load your opening track on Deck A before starting']
      },
      {
        title: 'Understanding Track Information',
        content: `When a track is loaded, pay attention to this info:

**BPM (Beats Per Minute)**:
- Shows track speed
- Typical ranges:
  - Hip-Hop: 80-115 BPM
  - House: 120-130 BPM
  - Techno: 125-135 BPM
  - Drum & Bass: 160-180 BPM

**Key**:
- Musical key (e.g., 8A, 5B, C major)
- Used for harmonic mixing
- Camelot Wheel notation in Rekordbox

**Time Remaining**:
- Shows how much track is left
- Use to plan your next mix

**Waveform**:
- Visual representation of the track
- Peaks show loud parts (drops, vocals)
- Helps identify intro/outro sections`,
        tips: ['Mix tracks within ±6 BPM for easiest transitions', 'Learn to read waveforms for better timing']
      },
      {
        title: 'Smart Loading Strategies',
        content: `**BPM Matching Strategy**:
When selecting your next track, look for:
- Similar BPM (within ±4-6 BPM is ideal)
- Compatible energy level
- Complementary keys (optional but nice)

**Reading Waveforms**:
- **Long intro**: Good for extended mixing
- **Short intro**: Quick transition needed
- **Big drop**: Plan to hit this at the right moment
- **Outro/Ending**: Where previous track should fade out

**Track Selection Tips**:
1. Know your music library well
2. Plan 2-3 tracks ahead mentally
3. Keep high-energy tracks for peak moments
4. Have "safety" tracks you know well
5. Consider the crowd's energy`,
        tips: ['Listen to your tracks before the gig', 'Make notes about good mixing points']
      },
      {
        title: 'Replacing a Currently Playing Track',
        content: `You CAN load a new track even if one is already playing on that deck!

**What Happens**:
- Current track stops immediately
- New track loads and is paused
- You'll need to restart playback

**When to Do This**:
- You loaded the wrong track
- You want to quickly change direction
- Emergency track swap needed

**Best Practice**:
Usually, load tracks on the OPPOSITE deck while one is playing:
- Track playing on Deck A → Load next track on Deck B
- Track playing on Deck B → Load next track on Deck A

This gives you time to prepare the next track without interruption!`,
        tips: ['Avoid loading over a currently playing track unless necessary', 'Always have a backup track in mind']
      },
      {
        title: 'Using Hot Cue Points for Quick Loading',
        content: `After loading a track, you can set **Hot Cues** for quick access:

**Hot Cues** = Saved points in your track that you can jump to instantly

**Setting Hot Cues**:
1. Load your track
2. Play or scrub to desired point
3. Hold SHIFT + Press Performance Pad (1-4)
4. That point is now saved!

**Using Hot Cues**:
- Press a lit Performance Pad to jump to that cue
- Great for starting at the perfect moment
- Useful for remixing and creative performance

**Common Hot Cue Points**:
- Pad 1: Start of intro
- Pad 2: First drop/main part
- Pad 3: Breakdown section
- Pad 4: Final chorus/outro

We'll explore Hot Cues more in Lesson 9!`,
        highlightParts: ['performance-pads-left', 'performance-pads-right'],
        tips: ['Prepare hot cues during practice, not live', 'Color-code hot cues for easy identification']
      },
      {
        title: 'Practice Exercise: The Load Challenge',
        content: `**Let's Practice! Complete this challenge:**

**Challenge**: Load 4 different tracks successfully

**Steps**:
1. Load any track to Deck A
2. Press PLAY to start it
3. While Deck A plays, load a different track to Deck B
4. Let Deck A play for 30 seconds
5. Press PLAY on Deck B (both decks playing now)
6. Press PAUSE on Deck A
7. Load a new track to Deck A
8. Repeat the process

**Goal**: Get comfortable loading tracks without stopping the music

**Success Criteria**:
- All 4 tracks load correctly
- No long silent pauses
- Smooth transitions between loading`,
        tips: ['Take your time - speed comes with practice', 'Focus on accuracy over speed']
      },
      {
        title: 'Troubleshooting Common Loading Issues',
        content: `**Problem: Track won't load**
- Solution: Check if deck is in "Vinyl Mode" - might be preventing load
- Solution: Ensure track is fully analyzed

**Problem: Wrong track loaded**
- Solution: Immediately load correct track or press CUE to pause

**Problem: Track loads but no sound**
- Solution: Check TRIM knob position
- Solution: Verify channel fader is up
- Solution: Press CUE button on mixer to check if audio is present in headphones

**Problem: Track loads at wrong position**
- Solution: Use jog wheel to scan to correct position
- Solution: Set a CUE point at your desired start

**Problem: Can't find my track**
- Solution: Use search function in software
- Solution: Check your import folders
- Solution: Re-analyze your library`,
        tips: ['Always have a backup USB with your music', 'Keep software updated for best compatibility']
      }
    ],
    quiz: [
      {
        question: 'What is the best practice when loading tracks?',
        options: [
          'Load new tracks on the same deck that is currently playing',
          'Load new tracks on the opposite deck while one is playing',
          'Stop all music before loading a new track',
          'Always load both tracks at the same time'
        ],
        correctAnswer: 1,
        explanation: 'Load your next track on the opposite deck so you can prepare it without stopping the currently playing track.'
      },
      {
        question: 'What information does track analysis provide?',
        options: [
          'Only the track title',
          'BPM, Key, Waveform, and Beat Grid',
          'Only the artist name',
          'Just the file size'
        ],
        correctAnswer: 1,
        explanation: 'Track analysis provides BPM (tempo), Key (for harmonic mixing), visual Waveform, and Beat Grid for syncing.'
      }
    ]
  },
  {
    id: 3,
    title: 'Playback Control',
    description: 'Play, pause, cue basics',
    category: 'Beginner Basics',
    xp: 150,
    steps: [
      {
        title: 'The Play/Pause Button',
        content: `The **PLAY/PAUSE button** (▶/❚❚) is your primary playback control.

**How It Works**:
- Press once: Starts playback from current position
- Press again: Pauses playback
- LED lights GREEN when playing
- LED is OFF when paused

**Important Behavior**:
- When paused, the playhead stays at the current position
- When you press play again, it resumes from where it stopped
- Does NOT return to the beginning automatically

**Basic Workflow**:
1. Load a track
2. Press PLAY/PAUSE to start
3. Press again to pause
4. Press again to continue`,
        highlightParts: ['play-pause-left', 'play-pause-right'],
        tips: ['LED color tells you playback status at a glance', 'Practice the play/pause rhythm']
      },
      {
        title: 'Understanding the CUE Button',
        content: `The **CUE button** is one of the most important controls for DJs.

**CUE Button Functions**:

**When Track is Stopped/Paused**:
- Press CUE: Sets a cue point at current position
- Red LED lights up when cue point is set

**When Track is Playing**:
- Press CUE: Track jumps back to cue point and pauses
- This is your "safety net" during mixing

**Press and Hold CUE (While Paused)**:
- Track plays as long as you hold the button
- Release: Returns to cue point
- This is called "Cue Preview"

**The CUE button lets you return to a safe starting point instantly!**`,
        highlightParts: ['cue-left', 'cue-right'],
        tips: ['Always set a cue point at your desired start position', 'Use CUE preview to practice timing']
      },
      {
        title: 'The Play-Cue Workflow',
        content: `Master DJs use PLAY and CUE together in a specific workflow:

**Standard DJ Workflow**:

**Step 1: Set Your Cue Point**
1. Load track and pause
2. Use jog wheel to find perfect start position
3. Press CUE to set cue point

**Step 2: Preview**
- Press and HOLD CUE to preview
- Listen in headphones
- Release to return to cue point

**Step 3: Start Playback**
- When ready, press PLAY/PAUSE
- Track begins from cue point

**Step 4: If Needed - Return to Cue**
- If timing is wrong, press CUE
- Track returns to cue point
- Try again by pressing PLAY

**This workflow gives you confidence and control!**`,
        highlightParts: ['play-pause-left', 'cue-left'],
        tips: ['Master this workflow before mixing tracks together', 'Cue point is your "do-over" button']
      },
      {
        title: 'Advanced Cue Techniques',
        content: `**Stutter Start (Tap CUE Technique)**:
- Set cue point at a beat
- Tap CUE repeatedly in rhythm
- Creates a "stutter" effect
- Great for dramatic entrances

**Cue Point Positioning**:
Where to set your cue point:
- **On the first beat** of a musical phrase
- NOT on a vocal or loud sound
- At the start of a clean intro
- 8 or 16 beats before a drop

**Back Cueing**:
- While track is paused
- Hold jog wheel and move backward
- Release and press CUE
- Sets cue point at new position

**SHIFT + CUE**:
- Returns to absolute beginning of track
- Ignores your set cue point
- Useful for starting over`,
        tips: ['Cue points work best on strong beats', 'Practice finding the "1" beat of a phrase']
      },
      {
        title: 'Using the Jog Wheel for Playback',
        content: `The **Jog Wheel** has different functions depending on playback state:

**When Track is PAUSED**:
- Rotate outer ring: Scan through track quickly
- Rotate top surface: Scan slowly with audio preview
- Use to find the perfect cue point

**When Track is PLAYING (Vinyl Mode OFF)**:
- Touch outer ring: Temporarily speed up/slow down
- Good for small tempo adjustments
- Track returns to normal when you release

**When Track is PLAYING (Vinyl Mode ON)**:
- Touch top surface: Track stops (like vinyl)
- Good for scratching and more control
- More advanced technique

**For now, keep Vinyl Mode OFF while learning!**`,
        highlightParts: ['jog-wheel-left', 'jog-wheel-right'],
        tips: ['Gentle touches work better than hard grips', 'Outer ring is safer for beginners']
      },
      {
        title: 'Tempo Adjustment (Pitch Control)',
        content: `The **TEMPO fader** (pitch fader) adjusts track speed:

**How It Works**:
- Slide DOWN: Track plays faster (higher BPM)
- Slide UP: Track plays slower (lower BPM)
- Center (0): Original track speed
- Range: Usually ±8% or ±16%

**LED Display**:
- Shows current tempo adjustment
- Example: +2.5% or -1.8%

**Why This Matters**:
To mix two tracks together, their tempos must match!

**Example**:
- Track A: 128 BPM
- Track B: 126 BPM
- Move Track B's tempo fader DOWN to speed it up to 128 BPM

We'll use this extensively in beatmatching (Lesson 5)!`,
        highlightParts: ['tempo-fader-left', 'tempo-fader-right'],
        tips: ['Small adjustments are usually enough', 'Match BPM values shown in software']
      },
      {
        title: 'Playback Practice Exercise 1',
        content: `**Exercise: Master Play-Cue Workflow**

**Setup**:
1. Load any track to Deck A
2. Find the first beat after the intro using jog wheel
3. Press CUE to set cue point

**Practice Drill**:
1. Press and HOLD CUE - listen to preview
2. Release CUE - returns to cue point
3. Press PLAY - track starts
4. After 8 beats, press CUE - returns to start
5. Repeat 10 times

**Goal**: Build muscle memory for play-cue workflow

**Success Criteria**:
- Can return to cue point instantly
- Comfortable with preview function
- Smooth, confident button pressing`,
        tips: ['Count beats out loud: 1, 2, 3, 4, 5, 6, 7, 8', 'Focus on timing, not speed']
      },
      {
        title: 'Playback Practice Exercise 2',
        content: `**Exercise: Tempo Adjustment**

**Setup**:
1. Load a track to Deck A
2. Note the original BPM (e.g., 128 BPM)
3. Press PLAY

**Practice Drill**:
1. Move tempo fader DOWN slowly - track speeds up
2. Watch BPM increase in software
3. Move tempo fader UP slowly - track slows down
4. Watch BPM decrease in software
5. Return to center (0%) - back to original tempo

**Try This**:
- Change tempo by +3%
- Count beats - do they feel faster?
- Change tempo by -3%
- Count beats - do they feel slower?

**Goal**: Understand how tempo changes affect the track`,
        tips: ['Listen carefully to the tempo change', 'Small percentages make big differences']
      },
      {
        title: 'Vinyl Mode - On vs Off',
        content: `The **VINYL button** changes jog wheel behavior:

**Vinyl Mode OFF (Recommended for Beginners)**:
- Touching top surface doesn't stop playback
- Only outer ring affects tempo
- Safer while learning
- Can't scratch

**Vinyl Mode ON (For Scratching)**:
- Touching top surface stops track immediately
- Mimics real vinyl turntable behavior
- Allows scratching
- Requires more control

**How to Toggle**:
- Press VINYL button above jog wheel
- LED ON = Vinyl Mode active
- LED OFF = Vinyl Mode inactive

**When to Use Each**:
- **OFF**: Mixing, beatmatching, learning
- **ON**: Scratching, advanced techniques

**Start with Vinyl Mode OFF until you're comfortable!**`,
        tips: ['You can switch modes anytime', 'Most house/techno DJs keep it OFF']
      },
      {
        title: 'Mastering Playback Control',
        content: `**Summary of Playback Controls**:

**PLAY/PAUSE**:
- Start/stop playback
- Green LED when playing

**CUE**:
- Set cue point (when paused)
- Return to cue (when playing)
- Preview (hold when paused)

**Jog Wheel**:
- Scan tracks (when paused)
- Nudge tempo (when playing)
- Scratch (Vinyl Mode ON)

**Tempo Fader**:
- Adjust track speed (BPM)
- Match tempos for mixing

**Next Steps**:
Now that you control playback, you're ready to learn volume and EQ control in Lesson 4!

**Remember**: Practice these basics until they become second nature. All advanced techniques build on this foundation.`,
        tips: ['Set cue points before mixing', 'Master the basics before moving forward']
      }
    ],
    quiz: [
      {
        question: 'What happens when you press the CUE button while a track is playing?',
        options: [
          'The track plays faster',
          'The track returns to the cue point and pauses',
          'The track volume increases',
          'Nothing happens'
        ],
        correctAnswer: 1,
        explanation: 'Pressing CUE while playing returns the track to your set cue point and pauses it - your safety net!'
      },
      {
        question: 'What does the Tempo Fader do?',
        options: [
          'Changes the volume',
          'Changes the track speed (BPM)',
          'Changes the EQ',
          'Changes the track key'
        ],
        correctAnswer: 1,
        explanation: 'The Tempo Fader adjusts the speed (BPM) of your track to match it with another track for mixing.'
      },
      {
        question: 'For beginners, should Vinyl Mode be ON or OFF?',
        options: [
          'Always ON',
          'OFF - it is safer while learning',
          'It doesn\'t matter',
          'Only ON for house music'
        ],
        correctAnswer: 1,
        explanation: 'Vinyl Mode OFF is recommended for beginners because touching the jog wheel won\'t stop playback unexpectedly.'
      }
    ]
  }
];

// Add more lessons (4-12) following the same pattern
// For brevity, I'll add abbreviated versions of lessons 4-6

LESSONS_DATA.push(
  {
    id: 4,
    title: 'Volume & EQ Control',
    description: 'Master the mixer section',
    category: 'Mixing Fundamentals',
    xp: 200,
    steps: [
      {
        title: 'Understanding the Mixer Signal Flow',
        content: `The mixer is where you blend two tracks together. Let's understand the signal path:

**Signal Flow (Top to Bottom)**:
1. **TRIM** - Adjusts input gain (how loud the signal enters)
2. **EQ (HI/MID/LOW)** - Shape the sound frequencies
3. **FILTER** - Creative filtering effect
4. **Channel Fader** - Final volume control for this channel
5. **Crossfader** - Blends between channels 1 and 2
6. **Master Output** - What the audience hears

**Think of it like cooking**: TRIM is your ingredients, EQ is seasoning, Channel Fader is portion size, Crossfader is mixing dishes, Master is serving!

Each stage affects the next, so order matters!`,
        tips: ['Signal flows from top to bottom', 'Master one control before moving to the next']
      },
      {
        title: 'The TRIM Knob (Gain Control)',
        content: `The **TRIM knob** is at the top of each channel:

**What It Does**:
- Adjusts the input level BEFORE anything else
- Compensates for different recording levels
- Ensures consistent volume across tracks

**How to Set TRIM Properly**:
1. Load a track and play it
2. Watch the channel level meter (lights on mixer)
3. Adjust TRIM so the meter reaches orange/yellow at the loudest parts
4. It should NOT consistently hit red
5. Aim for consistent levels between tracks

**Level Meter Colors**:
- 🟢 **Green**: Good level
- 🟡 **Yellow**: Healthy volume
- 🟠 **Orange**: Perfect for peaks
- 🔴 **Red**: Too loud! Reduce TRIM

**Why It Matters**: Proper gain staging prevents distortion and makes mixing easier!`,
        highlightParts: ['trim-knobs'],
        tips: ['Set TRIM for each track when you load it', 'Yellow peaks are your target']
      }
    ],
    quiz: []
  },
  {
    id: 5,
    title: 'Beatmatching Basics',
    description: 'Sync your beats',
    category: 'Mixing Fundamentals',
    xp: 250,
    steps: [
      {
        title: 'What is Beatmatching?',
        content: `**Beatmatching** is the process of making two tracks play at the same tempo (BPM) and in sync.

**Why Beatmatch?**
When beats align, you can seamlessly blend tracks together without jarring transitions.

**Two Methods**:
1. **SYNC Button (Automatic)** - Controller does it for you
2. **Manual Beatmatching** - You match by ear using tempo fader

**The SYNC Button**:
- Located above each jog wheel
- Press once: Matches BPM to other deck
- LED lights up when active
- Great for beginners and certain mixing styles

**Manual Beatmatching**:
- Traditional DJ skill
- Listen for beat alignment
- Adjust tempo fader to match BPM
- Use jog wheel to nudge beats into place

We'll learn both methods!`,
        tips: ['SYNC is a tool, not cheating', 'Learning manual beatmatching improves your skills']
      }
    ],
    quiz: []
  },
  {
    id: 6,
    title: 'Your First Transition',
    description: 'Simple crossfade mix',
    category: 'Mixing Fundamentals',
    xp: 300,
    steps: [
      {
        title: 'Preparing for Your First Mix',
        content: `Let's put everything together for your first smooth transition!

**Pre-Mix Checklist**:
1. ✅ Two tracks loaded (Deck A & B)
2. ✅ Similar BPM (within 3-4 BPM)
3. ✅ TRIM set properly on both channels
4. ✅ Cue points set on both tracks
5. ✅ Headphones connected and working

**Track Selection Tips**:
- Choose tracks you know well
- Pick songs with long intros/outros
- Avoid tracks with instant vocals
- Ensure compatible energy levels

**Mental Preparation**:
- Take a deep breath
- Don't rush
- It's okay to make mistakes
- Focus on smooth, gradual changes

Ready? Let's mix!`,
        tips: ['Pick your two favorite tracks for your first mix', 'Practice makes perfect']
      }
    ],
    quiz: []
  }
);

// Add lessons 7-12 (abbreviated for length)
for (let i = 7; i <= 12; i++) {
  const lessonTitles = [
    { title: 'EQ Transitions', desc: 'Mix with frequencies', cat: 'Creative Techniques', xp: 350 },
    { title: 'Effects & FX', desc: 'Add creative flair', cat: 'Creative Techniques', xp: 400 },
    { title: 'Hot Cues & Loops', desc: 'Advanced performance tools', cat: 'Creative Techniques', xp: 400 },
    { title: 'Advanced Transitions', desc: 'Pro-level mixing', cat: 'Advanced Mastery', xp: 500 },
    { title: 'Phrasing & Structure', desc: 'Perfect timing', cat: 'Advanced Mastery', xp: 500 },
    { title: 'Final Challenge', desc: 'Complete 30-min mix', cat: 'Advanced Mastery', xp: 1000 }
  ];

  const lessonInfo = lessonTitles[i - 7];

  LESSONS_DATA.push({
    id: i,
    title: lessonInfo.title,
    description: lessonInfo.desc,
    category: lessonInfo.cat,
    xp: lessonInfo.xp,
    steps: [
      {
        title: `${lessonInfo.title} - Coming Soon`,
        content: `This advanced lesson covers ${lessonInfo.desc.toLowerCase()}. Complete the previous lessons to unlock this content.

**What You'll Learn**:
- Advanced techniques for ${lessonInfo.title.toLowerCase()}
- Professional DJ workflows
- Creative approaches to mixing
- Practice exercises and challenges

**Prerequisites**:
- Complete lessons 1-${i - 1}
- Practice the fundamentals
- Have comfortable control of your DDJ-FLX4

Keep practicing and you'll unlock this lesson soon!`,
        tips: ['Master the basics first', 'Each lesson builds on previous knowledge']
      }
    ],
    quiz: []
  });
}
