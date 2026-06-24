/**
 * ============================================================
 *  BIRTHDAY PORTAL — MASTER CONFIG FILE  (config.js)
 *
 *  This is the ONLY file you need to edit.
 *  Open it in Notepad / any text editor.
 *  Change the values between quotes " " to update the site.
 *  Save the file, then refresh your browser — done!
 *
 *  Use the Admin Panel (master code login) for live changes.
 *  Type  export config  in the Admin Panel to save them here.
 * ============================================================
 */

window.SITE_CONFIG = {

  /* ─────────────────────────────────────────────────────────
     ACCESS CODES
     userCode   : what the birthday person types to enter
     masterCode : your secret code → opens hidden Admin Panel
  ───────────────────────────────────────────────────────── */
  access: {
    userCode:         "birthday2026",
    masterCode:       "admin@master",
    wrongCodeMessage: "Hmm, that's not quite right 💭 Try again?",
  },

  /* ─────────────────────────────────────────────────────────
     THEME
     fontDisplay     : pixel / heading font  (any Google Font)
     fontBody        : body text font        (any Google Font)
     backgroundStyle : "gradient" | "solid" | "stars"
     animationLevel  : "full" | "reduced" | "none"
     soundEnabled    : true | false
  ───────────────────────────────────────────────────────── */
  theme: {
    fontDisplay:      "Press Start 2P",
    fontBody:         "Quicksand",

    colorPink:        "#f89fca",
    colorRose:        "#f45d96",
    colorBlush:       "#ffe1ef",
    colorCream:       "#fff9fb",
    colorMint:        "#bcebdc",
    colorLavender:    "#c8b8ff",
    colorInk:         "#5a3150",
    colorMuted:       "#8c627c",

    backgroundStyle:  "gradient",
    backgroundSolid:  "#fff6fb",
    animationLevel:   "full",
    soundEnabled:     true,
  },

  /* ─────────────────────────────────────────────────────────
     SOUNDS  — file path relative to index.html, or null
     Example: "assets/unlock.mp3"
  ───────────────────────────────────────────────────────── */
  sounds: {
    unlock:   null,
    burst:    null,
    next:     null,
    complete: null,
  },

  /* ─────────────────────────────────────────────────────────
     PAGES
     Each object = one full screen of the site.

     id        : unique name, no spaces  (e.g. "page-letter")
     type      : "unlock" | "video" | "text" | "gallery"
                 "countdown" | "message"
     visible   : true = show  |  false = hide
     lock      : null | "timer" | "master"
     lockUntil : date string, only needed when lock:"timer"
                 format → "2026-06-21T13:00:00+05:30"
  ───────────────────────────────────────────────────────── */
  pages: [

    /* ── PAGE 1 — UNLOCK GATE ── */
    {
      id:        "page-unlock",
      type:      "unlock",
      visible:   true,
      lock:      null,
      lockUntil: null,
      content: {
        eyebrow:          "birthday access portal",
        title:            "Enter Access Code",
        subtitle:         "A tiny pastel loading quest awaits ✨",
        buttonLabel:      "Unlock",
        inputPlaceholder: "type anything magical",
        loaderMessages: [
          "collecting sparkles...",
          "wrapping ribbons...",
          "lighting candles...",
          "Access granted 🎉"
        ],
        glitchText: "ACCESS GRANTED",
      }
    },

    /* ── PAGE 2 — VIDEO / WISH ── */
    {
      id:        "page-video",
      type:      "video",
      visible:   true,
      lock:      null,
      lockUntil: null,
      content: {
        eyebrow:               "Wish you a very",
        title:                 "HAPPYY BIRTHDAYY 🎂",
        videoSrc:              "ips.mp4",
        videoPlaceholderTitle: "🎬",
        videoPlaceholderText:  "Your special video will play here.",
        nextButton:            "Next →",
        prevButton:            null,
      }
    },

    /* ── PAGE 3 — ARCHIVE STATUS ── */
    {
      id:        "page-archive",
      type:      "text",
      visible:   true,
      lock:      null,
      lockUntil: null,
      content: {
        eyebrow:    "archive status",
        title:      "The archive has memories still locked,\nFound some Recovered Fragments",
        body:       null,
        nextButton: "Next →",
        prevButton: "← Back",
      }
    },

    /* ── PAGE 4 — PHOTO GALLERY ── */
    {
      id:        "page-fragments",
      type:      "gallery",
      visible:   true,
      lock:      "timer",
      lockUntil: "2026-06-21T13:00:00+05:30",
      content: {
        eyebrow: "The Archive of US",
        title:   "Recovered Fragments",
        photos: [
          { src: null,           alt: "Photo 01", caption: "Caption placeholder for a recovered memory."     },
          { src: "IMG_9002.jpg", alt: "Photo 02", caption: "Caption placeholder for a sweet little moment."  },
          { src: null,           alt: "Photo 03", caption: "Caption placeholder for something unforgettable."},
          { src: null,           alt: "Photo 04", caption: "Caption placeholder for a hidden clue."          },
        ],
        question:   "Which fragment should unlock next?",
        choices:    ["Fragment A", "Fragment B", "Fragment C"],
        nextButton: "Next →",
        prevButton: "← Back",
      }
    },

    /* ── PAGE 5 — FINAL COUNTDOWN ── */
    {
      id:        "page-final",
      type:      "countdown",
      visible:   true,
      lock:      null,
      lockUntil: null,
      content: {
        eyebrow:         "archive locked",
        title:           "Full archive access available after traveller returns home.",
        countdownLabel:  "Countdown to full archive access",
        countdownTarget: "2026-06-25T13:00:00+05:30",
        folders: [
          { label: "Folder 1", locked: true },
          { label: "Folder 2", locked: true },
          { label: "Folder 3", locked: true },
          { label: "Folder 4", locked: true },
        ],
        prevButton: "← Back",
        nextButton: null,
      }
    },

    /* ── ADD MORE PAGES BELOW ─────────────────────────────
       Copy any block above and paste it here.
       Change the id (must be unique), type, and content.
       Set visible: false to hide until you are ready.

    {
      id:        "page-letter",
      type:      "message",
      visible:   false,
      lock:      null,
      lockUntil: null,
      content: {
        eyebrow:    "a note for you",
        title:      "Dear friend,",
        body:       "Write your heartfelt message here...",
        nextButton: "Next →",
        prevButton: "← Back",
      }
    },
    ─────────────────────────────────────────────────────── */

  ],

};
/* ── End of config.js ── */
