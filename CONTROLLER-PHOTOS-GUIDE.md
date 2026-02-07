# DDJ-FLX4 Controller Photos Guide

This guide explains how to add annotated photos of your DDJ-FLX4 controller to enhance the learning experience.

## Required Photos

You'll need to take the following photos of your actual DDJ-FLX4 controller and add annotations pointing to the described parts:

### 1. **Full Controller Overview** (`full-controller.jpg`)
A top-down photo of the entire controller showing all sections.

**Annotations needed:**
- Left Deck (overall area)
- Right Deck (overall area)
- Mixer Section (center)
- Browser Section (top center)
- Performance Pads (bottom of each deck)

### 2. **Jog Wheels** (`jog-wheels.jpg`)
Close-up of both jog wheels with clear annotations.

**Annotations needed:**
- Top surface/platter (for scratching/nudging)
- Outer ring (for scanning)
- Vinyl mode button
- LED indicators

### 3. **Transport Controls** (`transport-controls.jpg`)
Close-up of play/pause and cue buttons for both decks.

**Annotations needed:**
- Play/Pause button (left deck)
- Play/Pause button (right deck)
- CUE button (left deck)
- CUE button (right deck)
- CUE/LOOP CALL buttons (< >)

### 4. **Tempo/Pitch Controls** (`tempo-controls.jpg`)
Both tempo faders clearly visible.

**Annotations needed:**
- Tempo fader (left deck) - with direction indicators
- Tempo fader (right deck) - with direction indicators
- TEMPO/MASTER button
- LED display area

### 5. **Performance Pads** (`performance-pads.jpg`)
Both sets of 4 performance pads.

**Annotations needed:**
- Performance pads 1-4 (left deck)
- Performance pads 1-4 (right deck)
- Mode selection buttons (HOT CUE, PAD FX, BEAT JUMP, SAMPLER)

### 6. **Mixer Section** (`mixer-section.jpg`)
The center mixer area with all controls.

**Annotations needed:**
- TRIM knobs (channels 1 & 2)
- EQ knobs - HI (channels 1 & 2)
- EQ knobs - MID (channels 1 & 2)
- EQ knobs - LOW (channels 1 & 2)
- FILTER knobs (channels 1 & 2)
- Channel faders (1 & 2)
- Crossfader
- Master level knobs
- Level meters

### 7. **Browser Controls** (`browser-section.jpg`)
Top center area showing library navigation.

**Annotations needed:**
- BROWSE encoder (rotary knob)
- BACK button
- LOAD button left (◀)
- LOAD button right (▶)

### 8. **Headphone Section** (`headphone-section.jpg`)
Headphone controls on the mixer.

**Annotations needed:**
- HEADPHONES jack
- HEADPHONES level knob
- HEADPHONES MIX knob
- CUE buttons (on each channel)

### 9. **FX Section** (`fx-section.jpg`)
Effects controls area.

**Annotations needed:**
- CFX button
- FX SELECT buttons
- LEVEL/DEPTH knob
- BEAT buttons
- ON/OFF button

## How to Take the Photos

1. **Lighting**: Use bright, even lighting. Avoid shadows on the controller.
2. **Angle**: Take photos from directly above (top-down) for consistency.
3. **Resolution**: Use at least 1920x1080 resolution for clarity.
4. **Background**: Place controller on a clean, contrasting surface.
5. **Focus**: Ensure all text and buttons are clearly readable.

## Adding Annotations

You can use free tools to add annotations:

### Option 1: Use Photoshop/GIMP
1. Open the photo
2. Add arrows pointing to each control
3. Add text labels with white background for readability
4. Use consistent colors (e.g., red arrows, white text boxes)

### Option 2: Use Online Tools
- **Figma** (free): figma.com
- **Canva** (free): canva.com
- **Photopea** (free, like Photoshop): photopea.com

### Option 3: Use a Simple Drawing App
- macOS: Preview (built-in)
- Windows: Paint 3D
- iOS: Markup
- Android: Google Photos editor

## Annotation Style Guide

For consistency, use these styles:

- **Arrow color**: Red (#FF0000) or bright yellow (#FFD700)
- **Arrow width**: 3-5px
- **Text boxes**: White background with black text
- **Font**: Sans-serif, bold, 14-16pt
- **Labels**: Keep concise (e.g., "Jog Wheel", "Play Button")

## File Naming Convention

Save your annotated photos with these exact names in `src/assets/images/controller/`:

```
full-controller.jpg
jog-wheels.jpg
transport-controls.jpg
tempo-controls.jpg
performance-pads.jpg
mixer-section.jpg
browser-section.jpg
headphone-section.jpg
fx-section.jpg
```

## Mapping Photos to Lesson Highlights

The app will automatically show relevant photos based on `highlightParts` in each lesson step:

| Highlight Part ID | Photo to Display |
|-------------------|------------------|
| `jog-wheel-left` | `jog-wheels.jpg` |
| `jog-wheel-right` | `jog-wheels.jpg` |
| `tempo-fader-left` | `tempo-controls.jpg` |
| `tempo-fader-right` | `tempo-controls.jpg` |
| `play-pause-left` | `transport-controls.jpg` |
| `play-pause-right` | `transport-controls.jpg` |
| `cue-left` | `transport-controls.jpg` |
| `cue-right` | `transport-controls.jpg` |
| `performance-pads-left` | `performance-pads.jpg` |
| `performance-pads-right` | `performance-pads.jpg` |
| `mixer-section` | `mixer-section.jpg` |
| `browser-section` | `browser-section.jpg` |
| `headphone-section` | `headphone-section.jpg` |
| `fx-section` | `fx-section.jpg` |
| `trim-knobs` | `mixer-section.jpg` |
| `deck-left` | `full-controller.jpg` |
| `deck-right` | `full-controller.jpg` |

## Alternative: Find Official Images

If you don't have access to a DDJ-FLX4, you can:

1. Download official images from Pioneer DJ's website:
   - https://www.pioneerdj.com/en-us/product/controller/ddj-flx4/

2. Use YouTube screenshots from setup/tutorial videos

3. Search for "DDJ-FLX4 top view" on image search engines

## Example Annotation

Here's what a good annotation looks like:

```
[Photo of jog wheels with:]
- Red arrow pointing to top surface → "Touch here to scratch"
- Red arrow pointing to outer ring → "Rotate to scan track"
- Red arrow pointing to tempo fader → "Slide to adjust BPM"
- Text box: "JOG WHEELS - Main control for track manipulation"
```

## Next Steps

After adding photos:

1. Place all annotated images in `src/assets/images/controller/`
2. The app will automatically load and display them in lessons
3. Test by running `npm start` and viewing Lesson 1
4. Verify all annotations are clearly visible and accurate

## Optional: Create Interactive Hotspots

For an advanced implementation, consider:
- Adding clickable hotspots that show tooltips
- Creating SVG overlays for precise highlighting
- Building an interactive 3D model viewer

## Need Help?

If you need assistance:
1. Check if your images are properly named
2. Verify file paths in the component
3. Ensure images are in JPG or PNG format
4. Check browser console for loading errors
