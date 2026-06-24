# 🎂 Birthday Portal — File Guide

## Folder Structure
```
birthday-portal/
│
├── index.html     ← Open in Chrome. Don't edit.
├── config.js      ← ✏️ Edit this to change EVERYTHING.
├── engine.js      ← Site engine. Don't edit.
├── styles.css     ← Visual styles. OK to edit colors/CSS.
├── admin.css      ← Admin panel styles. Don't edit.
├── README.md      ← This file.
│
└── assets/        ← Put photos, videos, sound files here.
```

---

## Quick Start

1. **Drop your files** — put photos, videos, sounds into `assets/`
2. **Open `index.html`** in Chrome
3. **Login as master** — type `admin@master` on the unlock screen
4. **Admin Panel opens** (top-right, draggable)
5. **Type commands** in the input box → press Enter → see changes live
6. **Save permanently** — type `export config` → replace `config.js` with download

---

## config.js — All Settings

Open `config.js` in **Notepad** or **VS Code**.
Every setting has a comment explaining it.

| Section  | Controls |
|----------|----------|
| `access` | User code, master code, wrong-code message |
| `theme`  | 8 colors, 2 fonts, background style, animations, sound |
| `sounds` | Paths to .mp3 files for unlock, burst, next, complete |
| `pages`  | All page content — add/remove/reorder pages here |

---

## Admin Panel Commands

### Text
```
set title "New Title" on page-video
set eyebrow "new label" on page-archive
set subtitle "new text" on page-unlock
set body "new paragraph" on page-archive
set caption 2 "New caption" on page-fragments
set folder 1 "Our Trip" on page-final
set question "Pick your favourite?" on page-fragments
```

### Colors
```
set color rose #ff3377
set color ink #3a1f30
set color mint #aaffcc
set color lavender #d4c8ff
```
Available color names: `pink` `rose` `blush` `cream` `mint` `lavender` `ink` `muted`

### Fonts (any Google Font)
```
set font display "Pacifico"
set font body "Nunito"
```

### Background
```
set background gradient
set background solid #fff0f5
set background stars
```

### Animations & Sound
```
set animation full
set animation reduced
set animation none
set sound on
set sound off
```

### Pages
```
show page page-letter
hide page page-fragments
lock page page-fragments timer 2026-07-01T13:00:00+05:30
lock page page-fragments master
unlock page page-fragments
```

### Access Codes
```
set usercode "priya2026"
set mastercode "mysecret"
```

### Countdown Date
```
set countdown 2026-07-10T00:00:00+05:30 on page-final
```

### Utility
```
reload           — re-renders entire site
export config    — downloads updated config.js
```

---

## Adding a New Page

In `config.js`, find the comment `ADD MORE PAGES BELOW` and paste:

```js
{
  id:        "page-letter",   // unique id, lowercase, no spaces
  type:      "message",       // unlock|video|text|gallery|countdown|message
  visible:   true,
  lock:      null,
  lockUntil: null,
  content: {
    eyebrow:    "a note for you",
    title:      "Dear friend,",
    body:       "Write your message here...",
    nextButton: "Next →",
    prevButton: "← Back",
  }
},
```

---

## Adding Photos

1. Copy photo files into `assets/`
2. Open `config.js` → find `page-fragments` → find the `photos` array
3. Change `src: null` to `src: "assets/your-photo.jpg"`
4. Update `caption` and `alt` text

---

## Adding Sounds

1. Copy `.mp3` files into `assets/`
2. Open `config.js` → find the `sounds` section
3. Update paths:
```js
sounds: {
  unlock:   "assets/unlock.mp3",
  burst:    "assets/pop.mp3",
  next:     "assets/click.mp3",
  complete: "assets/tada.mp3",
},
```

---

## Default Access Codes
- **User code:** `birthday2026`
- **Master code:** `admin@master`

Change these in `config.js` or via the Admin Panel.

---

## Mobile — Reopen Admin Panel
Triple-tap the **bottom-right corner** of the screen to reopen the Admin Panel after closing it.

---

*No coding needed. Just edit config.js and use the Admin Panel.*
