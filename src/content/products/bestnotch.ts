import type { Product } from "../types";

// Sources: BestNotch/README.md, BestNotch/RELEASE.md, BestNotch/docs/app-store/{METADATA,SUBMISSION_RESULT}.md,
// BestNotch/docs/security/PRIVACY_DATA_FLOW.md, BestNotch/website/{index,privacy,support}.html,
// BestNotch/Packages/BestNotchKit/Sources/BestNotchKit/Clipboard/ClipboardStore.swift, BestNotch/App/Sources/App/{AppSettings,AppModel}.swift.

const product: Product = {
  slug: "bestnotch",
  name: "BestNotch",
  tagline: "Music, files, clipboard, and a focus timer, tucked into the top of your Mac's screen.",
  headline: "Put the top of your screen to work.",
  description:
    "BestNotch turns the notch area into one calm place for Now Playing, a file shelf, clipboard history, timers, and your next meeting. It works on Macs with or without a notch.",
  category: "Utilities",
  platforms: ["macOS"],
  requirements: "macOS 14 Sonoma or later, Apple silicon or Intel",
  status: "in-review",
  statusNote: "Mac App Store submission in review",
  order: 8,

  accent: "#FF8C3D",
  accentInk: "#111111",
  heroLayout: "stacked",
  icon: "/apps/bestnotch/icon.png",
  screenshots: [
    {
      src: "/apps/bestnotch/01-now-playing.jpg",
      alt: "BestNotch interface with sample data: the expanded panel showing album artwork, progress, and playback controls",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
    {
      src: "/apps/bestnotch/02-file-shelf.jpg",
      alt: "BestNotch interface with sample data: the File Shelf holding four example files",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
    {
      src: "/apps/bestnotch/03-focus-timer.jpg",
      alt: "BestNotch interface with sample data: a running focus timer with low-priority updates held",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
    {
      src: "/apps/bestnotch/04-status.jpg",
      alt: "BestNotch interface with sample data: battery, focus state, and active profile tiles",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
  ],

  problem: {
    heading: "Small tasks keep pulling you out of your work",
    body: "To skip a song you switch to the music app. To attach a file you dig through Finder again. To find the link you copied ten minutes ago you copy it again. Each trip is small, but together they break your focus. BestNotch keeps these things in one place at the top of the screen, a hover or ⌥⌘N away.",
  },

  features: [
    {
      title: "Now Playing",
      body: "See artwork and progress for Music and Spotify, and play, pause, or skip without switching apps.",
    },
    {
      title: "File Shelf",
      body: "Drag files onto the notch, switch apps, and drag them out where you need them. The Shelf keeps references only, so your originals never move.",
    },
    {
      title: "Clipboard history",
      body: "Opt-in and stored only on your Mac. Search, pin, pause, and exclude apps; by default it keeps 200 items for up to 7 days and skips password-manager content.",
    },
    {
      title: "Focus timer",
      body: "Run a focus session or Pomodoro. While you focus, low-priority updates wait and arrive as one summary when you are done.",
    },
    {
      title: "Profiles that follow your apps",
      body: "Browsing, coding, and music production each show the widgets you need, switched by the app in front. Lock a profile any time.",
    },
    {
      title: "Calendar",
      body: "See upcoming events and join meetings with one click. Events are read on demand and never stored.",
    },
    {
      title: "Downloads to Shelf",
      body: "Watch a folder you choose. When a download finishes, send it to the Shelf in one click.",
    },
    {
      title: "Battery",
      body: "Check battery level and charging at a glance, with optional alerts at 20% and 10%.",
    },
  ],

  workflow: {
    heading: "Out of the way until you need it",
    steps: [
      { title: "Open the island", body: "Hover over or click the notch area, or press ⌥⌘N. On Macs without a notch, a slim pill sits centered in the menu bar." },
      { title: "Pick a tab", body: "Switch between Now Playing, Shelf, Clipboard, Timer, and status from the top of the panel." },
      { title: "Get back to work", body: "Press Esc to close it. Timers, downloads, and meetings appear briefly as activities, then tuck away." },
    ],
  },

  differentiators: [
    {
      title: "Private by default",
      body: "Clipboard history is off until you turn it on, stays on your Mac, and skips concealed content. There are no accounts or analytics, and the only network request is Spotify artwork.",
    },
    {
      title: "Focus that holds updates",
      body: "Rather than adding more alerts to the top of the screen, a focus session queues low-priority updates and delivers one summary when it ends.",
    },
    {
      title: "Widgets that change with your work",
      body: "Instead of one fixed layout, profiles show different widgets for browsing, coding, or music production, based on the app in front.",
    },
  ],

  faq: [
    {
      q: "What do I need?",
      a: "macOS 14 Sonoma or later on an Apple silicon or Intel Mac. A notch is not required: on other Macs and displays, BestNotch shows a slim pill centered in the menu bar.",
    },
    {
      q: "When can I get it, and what does it cost?",
      a: "BestNotch has been submitted to the Mac App Store and is waiting for review. It was submitted as a free app. A download link will appear here once it is approved and released.",
    },
    {
      q: "Which music apps are supported?",
      a: "Apple Music and Spotify. Other players and browsers are not supported.",
    },
    {
      q: "Will clearing the Shelf delete my files?",
      a: "No. The Shelf only keeps references. Removing an item never touches the original file.",
    },
    {
      q: "Does BestNotch collect any data?",
      a: "No. There is no account, analytics, advertising, tracking, or crash reporting. Clipboard history, Shelf references, and settings stay in the app's private container on your Mac. The only network request downloads album artwork for the Spotify track you are playing, from Spotify.",
    },
    {
      q: "Does it work in full-screen apps?",
      a: "By default the island hides in full-screen apps, while important activities such as a finished timer still appear. You can change this in Settings.",
    },
  ],

  externalSite: "https://parthmudgal15105.github.io/bestnotch/",

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "The island does not appear on my external display",
        a: "Open Settings › General › Displays and choose All displays, then make sure that display is not switched off in the list below it.",
      },
      {
        q: "Now Playing does not show my music",
        a: "BestNotch supports Music and Spotify. For artwork and controls, allow BestNotch in System Settings › Privacy & Security › Automation.",
      },
      {
        q: "Clipboard history is empty",
        a: "Clipboard history is off until you turn it on in the Clipboard tab. If macOS asks, allow BestNotch in System Settings › Privacy & Security › Paste from Other Apps.",
      },
      {
        q: "How do I uninstall BestNotch?",
        a: "Quit BestNotch from its menu bar icon, then move the app to the Trash. Its data lives in its own container in ~/Library/Containers and can be deleted too.",
      },
      {
        q: "Reporting a bug",
        a: "Email support or open an issue at github.com/Parthmudgal15105/bestnotch/issues. Include your macOS version, your Mac model, and what you expected to happen.",
      },
    ],
  },

  privacy: {
    updated: "2026-11-05",
    summary:
      "BestNotch does not collect, transmit, sell, or share any personal data. There are no accounts, analytics, advertising, tracking, or crash reporting. The only network request downloads Spotify album artwork from the address Spotify provides.",
    sections: [
      {
        heading: "Data that stays on your Mac",
        body: [
          "The features below store information only in BestNotch's private app container on your Mac. None of it is sent to the developer or to anyone else.",
          "Clipboard history (off by default): text, links, and images you copy while it is on, up to your retention limits. Content marked concealed by password managers and apps you exclude are skipped. Delete it with Settings › Privacy › Erase Clipboard History, or turn the feature off.",
          "File Shelf: references (bookmarks) to files you drop on the Shelf, not copies. Remove items or clear the Shelf to delete them.",
          "Activity history: recent activities such as finished timers and downloads, kept 7 days by default. Delete it with Settings › Activities › Clear Activity History.",
          "Settings and profiles: your preferences. Delete the app and its container to remove them.",
        ],
      },
      {
        heading: "Permissions",
        body: [
          "BestNotch asks for access only when you use the related feature: Calendars (read-only, to show upcoming events), Automation for Music and Spotify (to show artwork and control playback), and a folder you choose (to notice finished downloads).",
          "Calendar events are read on demand and are not stored or transmitted.",
        ],
      },
      {
        heading: "Network",
        body: [
          "The only network request BestNotch makes is downloading the album artwork image for the Spotify track you are playing, from the address Spotify provides. No information about you is added to that request.",
        ],
      },
      {
        heading: "Children",
        body: ["BestNotch is suitable for all ages and collects no data from anyone, including children."],
      },
      {
        heading: "Changes and contact",
        body: [
          "If this policy changes, the new version will be posted on this page with a new effective date.",
          "Questions: email parthmudgal15105@gmail.com or open an issue at github.com/Parthmudgal15105/bestnotch/issues.",
        ],
      },
    ],
    ownerToConfirm: [
      "BestNotch is described internally as a working name pending an availability/trademark check. Confirm the name before promoting this page.",
      "The existing BestNotch privacy and support pages list GitHub issues as the only contact; this page adds parthmudgal15105@gmail.com. Confirm the email should be offered for BestNotch.",
      "The existing site lists a Developer ID direct-download edition as 'coming soon'. No download link is shown here; add one only once a notarized build is published.",
    ],
  },

  seoTitle: "BestNotch — Notch utilities and music controls for Mac",
  seoDescription:
    "BestNotch puts Now Playing, a file shelf, clipboard history, a focus timer and your calendar in your Mac's notch. Works without a notch. No account or tracking.",
  keywords: [
    "Mac notch app",
    "notch file shelf",
    "dynamic island for Mac",
    "clipboard history Mac",
    "Pomodoro timer menu bar",
    "now playing notch",
  ],
};

export default product;
