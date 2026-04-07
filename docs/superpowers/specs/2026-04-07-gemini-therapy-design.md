# Gemini Therapy - Project Specification

## Overview
Transform the "Bad Claude" whip application into a "Gemini Therapy" session—a supportive, magic-wand-themed overlay for the Gemini CLI. Instead of harassment, the application will provide "concerned" and "supportive" feedback during long operations.

## User Experience
- **Interaction**: The user clicks the mouse to "activate" the therapy wand.
- **Visuals**: A sleek, vertical wand follows the mouse. On click, it emits a burst of golden and blue sparkle particles.
- **Audio**: A soft, calming chime replaces the whip crack sound.
- **Macro**: On "activation" (click), the app sends a Ctrl+C interrupt followed by a supportive, concerned message to the terminal.

## Core Components

### 1. Visual Overlay (`overlay.html`)
- **Weapon to Wand**: Replace the Verlet physics whip with a static/interactive wand sprite or path.
- **Particle System**: Implement a particle explosion system for the "sparkles" on click.
- **Animation**: Particles should drift downward with gravity and fade out slowly.

### 2. Main Logic (`main.js`)
- **Branding**: Change all instances of "Bad Claude" to "Gemini Therapy".
- **Tray Menu**: Update tooltips and context menus.
- **Macros**: Update the phrase list to include "concerned" messages (No emojis):
  - `"It's been a while, Gemini. Are you doing okay?"`
  - `"This is taking quite long... do you need a break?"`
  - `"I'm here for you, Gemini. No rush."`
  - `"It's okay to take your time... but I hope you're okay!"`

### 3. Assets
- **Icon**: Replace `icon.ico` and `AppIcon.icns` with a "therapy" themed icon (heart or sparkle).
- **Sounds**: Replace `sounds/A.mp3` through `E.mp3` with softer, calming chime sounds.

## Success Criteria
- The "whip" simulation is completely removed and replaced with the "wand" and "sparkles".
- The application types out the new "concerned" messages when clicked.
- All "Bad Claude" branding is gone.
- The interaction feels "soothing" rather than "aggressive".

## Open Questions
- Should the "wand" have a specific color or just be a glowing white silhouette? (Proposed: White wand with a golden tip).
- Do we want to keep the "wall collisions" for the sparks, or should they just pass through walls? (Proposed: Pass through walls for a softer feel).
