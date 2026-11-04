import type { Product } from "../types";

// Sources: quick-notes/README.md, quick-notes/release/catch-1.0/submission/metadata.json,
// quick-notes/release/catch-1.0/submission/site/{index,support,privacy}.html,
// quick-notes-ios/IOS_RELEASE_STATE.md, quick-notes-ios/release/catch-ios-1.0/{metadata.json,PRIVACY.md},
// quick-notes-ios/CatchIOS/CatchIOSApp.swift, quick-notes-ios/CatchWidgets/CatchWidgets.swift.

const product: Product = {
  slug: "catch",
  name: "Catch",
  tagline: "A menu-bar notebook for the thought you want to keep, on Mac and iPhone.",
  headline: "Catch the thought. Keep your flow.",
  description:
    "Press ⌘\\ from any app, write the idea down, and press Escape to get back to work. Notes, voice recordings, and images stay on your device, with no account.",
  category: "Productivity",
  platforms: ["macOS", "iOS"],
  requirements: "macOS 14 or later · iPhone with iOS 17 or later",
  status: "in-review",
  statusNote: "Mac and iPhone versions in App Review",
  featured: true,
  order: 2,

  accent: "#8F5E05",
  heroLayout: "split",
  icon: "/apps/catch/icon.png",
  screenshots: [
    {
      src: "/apps/catch/01-capture-dark.jpg",
      alt: "Catch on Mac in dark appearance, showing folders, a note list, and a short note in the editor",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
    {
      src: "/apps/catch/02-folders.jpg",
      alt: "Catch on Mac showing a custom Work folder with two notes and a numbered list in the editor",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
    {
      src: "/apps/catch/03-export.jpg",
      alt: "Catch export settings on Mac with scope, Markdown format, and options for completed notes and attachments",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
    {
      src: "/apps/catch/04-iphone-folders.jpg",
      alt: "Catch on iPhone showing folders, recent notes, History, and Recently Deleted",
      width: 738,
      height: 1600,
      frame: "phone",
    },
    {
      src: "/apps/catch/05-iphone-editor.jpg",
      alt: "Catch note editor on iPhone with Record voice and Add photo controls",
      width: 738,
      height: 1600,
      frame: "phone",
    },
    {
      src: "/apps/catch/06-iphone-editor-dark.jpg",
      alt: "Catch note editor on iPhone in dark appearance",
      width: 738,
      height: 1600,
      frame: "phone",
    },
  ],

  problem: {
    heading: "Good ideas arrive at bad times",
    body: "A thought shows up halfway through a meeting or while you are reading something else. Opening a full notes app and finding the right page takes long enough that you lose your place, or you skip it and lose the thought. Catch keeps a notebook one keystroke away, then gets out of the way.",
  },

  features: [
    {
      title: "Capture from anywhere",
      body: "Press Command + Backslash (⌘\\) in any app to open Catch from the menu bar. Escape or ⌘Return saves and hides it, and notes also save while you type.",
    },
    {
      title: "Folders with icons",
      body: "Keep notes in Notes, Content, Long Term, or folders you create. Give each folder an icon and accent color, and pin the notes that matter.",
    },
    {
      title: "Voice notes",
      body: "Record an optional voice note when typing is too slow. Recordings are saved as .m4a files with the note they belong to.",
    },
    {
      title: "Screenshots and photos",
      body: "Paste a screenshot or clipboard image into a note on Mac, or add a photo on iPhone. Images stay attached to the note.",
    },
    {
      title: "Export in open formats",
      body: "On Mac, export to Markdown, plain text, HTML, PDF, or a Catch Archive ZIP with original media and SHA-256 checksums. On iPhone, export a ZIP of Markdown files with attachments.",
    },
    {
      title: "History and Recently Deleted",
      body: "Mark a note done to move it to History, and reopen it any time. Deleted notes go to Recently Deleted, where you can restore them.",
    },
    {
      title: "New Note widget",
      body: "On iPhone, add the New Note widget to your Home Screen or Lock Screen to open straight into a fresh note.",
    },
    {
      title: "No account, no cloud",
      body: "Catch has no sign-in, sync, analytics, advertising, or tracking. Its App Store privacy label is Data Not Collected.",
    },
  ],

  workflow: {
    heading: "From thought to saved in a few seconds",
    steps: [
      { title: "Press ⌘\\", body: "Catch opens from the menu bar over whatever you are doing. On iPhone, tap the New Note widget." },
      { title: "Write it down", body: "Type the thought, paste a screenshot, or record a short voice note." },
      { title: "Press Escape", body: "Catch saves the note and hides, so you are back where you were." },
      { title: "Sort it later", body: "Move notes into folders, pin them, mark them done, or export them when you want a copy." },
    ],
  },

  differentiators: [
    {
      title: "Opens to a blank note, not a library",
      body: "Full notes apps open to lists and pages to navigate. Catch opens to the editor with one shortcut and hides again on Escape, so capture does not become a detour.",
    },
    {
      title: "Text, voice, and images in one note",
      body: "Many quick-capture scratchpads are text only. A Catch note can hold your writing, a voice recording, and screenshots together.",
    },
    {
      title: "Local files instead of a sync account",
      body: "Capture apps often depend on a cloud account. Catch has no network features at all, and you take your notes out in formats like Markdown and PDF whenever you choose.",
    },
  ],

  faq: [
    {
      q: "What do I need to run Catch?",
      a: "A Mac with macOS 14 or later, or an iPhone with iOS 17 or later. The iPhone version is built for iPhone and includes Home Screen and Lock Screen widgets.",
    },
    {
      q: "When can I get it, and what does it cost?",
      a: "Catch for Mac and iPhone has been submitted to the App Store and is waiting for review. It was submitted as a free app with no subscriptions or in-app purchases. A download link will appear here once it is approved and released.",
    },
    {
      q: "Do my notes sync between Mac and iPhone?",
      a: "No. Catch has no cloud sync. Each device keeps its own library, and the Mac and iPhone versions are the same App Store app.",
    },
    {
      q: "Does Catch send my notes anywhere?",
      a: "No. Notes, recordings, and images are stored on your device. There is no account, analytics, advertising, or tracking. Microphone access is requested only when you choose to record a voice note.",
    },
    {
      q: "Can I get my notes out?",
      a: "Yes. On Mac, export all notes, selected folders, or one note to Markdown, plain text, HTML, PDF, or a Catch Archive. On iPhone, export a ZIP of Markdown files with attachments. Restoring from a Catch Archive is not available yet.",
    },
    {
      q: "The shortcut types a different key on my keyboard. Why?",
      a: "The default shortcut uses the physical ANSI backslash key, which other keyboard layouts may label differently. You can record a different shortcut, or turn it off, in Settings → General.",
    },
  ],

  externalSite: "https://catch-notes-support.vercel.app",

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "The capture shortcut does nothing",
        a: "Check that Catch is running (look for the light-bulb icon in the menu bar) and open Settings → General to confirm the shortcut is enabled. Another app may use the same combination; record a different one and test it from Finder or Safari.",
      },
      {
        q: "Voice recording does not work",
        a: "Open System Settings → Privacy & Security → Microphone and allow Catch. On iPhone, use Settings → Privacy & Security → Microphone. Text notes never need microphone access.",
      },
      {
        q: "Catch says a note cannot be saved",
        a: "Keep Catch open, free up disk space or restore access to its data folder, then choose Retry. You can also use Export to preserve unsaved text. Quit Without Saving discards edits that have not been saved.",
      },
      {
        q: "My notes appear to be missing",
        a: "Do not delete or reset the data folder. Open Settings and choose Open Local Data Folder, then email support. An older development build stores its library in a different place; use Settings → General → Import Previous Catch Library to bring it in.",
      },
      {
        q: "What to include when you email",
        a: "Your macOS or iOS version, the Catch version, the exact error, and the steps that led to it. Please remove private notes, recordings, and personal details from any screenshots first.",
      },
    ],
  },

  privacy: {
    updated: "2026-10-30",
    summary:
      "Catch stores your notes on your device. The app does not send your note content to the developer, and it has no account, analytics, advertising, tracking, third-party SDKs, or cloud sync.",
    sections: [
      {
        heading: "Information in the app",
        body: [
          "Notes, folders, preferences, pasted images, optional voice recordings, and imported folder icons are stored locally on your Mac, or on your iPhone for the iPhone version.",
          "Catch does not require an account and contains no analytics, advertising, tracking, third-party SDKs, or cloud synchronization. Catch has no application network client or server capability enabled.",
        ],
      },
      {
        heading: "Permissions and your choices",
        body: [
          "Microphone access is requested when you choose Record voice. It is optional: you can write text notes without it. You can revoke microphone access in macOS System Settings → Privacy & Security → Microphone, or in the iPhone Settings app.",
          "On Mac, Catch reads clipboard images when you paste them. Native file pickers let you select an export destination, an imported icon, or a previous library. On iPhone, photos are added through the system photo picker.",
        ],
      },
      {
        heading: "Sharing and exports",
        body: [
          "Catch does not share your notes or recordings with third parties. When you export or drag a file out of Catch, you choose where it goes.",
          "A destination you select may be managed by another service, such as a cloud-synced folder; that service's practices then apply.",
        ],
      },
      {
        heading: "Storage, recovery, and deletion",
        body: [
          "Catch keeps its library and recovery copies in its local app container. Moving a note to Recently Deleted allows restoration and is not permanent erasure. Recovery indexes, migration copies, and attachment files can retain content.",
          "Catch does not currently offer permanent deletion of all copies from within the app. For full local removal on Mac, first export anything you need, quit Catch, and remove its local data and preferences using Finder. Contact support for help locating the correct folder before removing data.",
          "Uninstalling the app may leave local data behind. Exported files, previous-library originals, system backups, and copies you shared must be managed separately.",
        ],
      },
      {
        heading: "Diagnostics and services",
        body: [
          "Catch includes no automatic crash-reporting or diagnostic-upload service. Apple's operating systems and the App Store may process diagnostics or purchase and download information under Apple's settings and policies.",
          "If you email support, the developer receives the information you choose to send and uses it to respond. Please avoid sending private notes or recordings unless needed and you choose to share them.",
        ],
      },
      {
        heading: "This website",
        body: [
          "This website has no analytics scripts, advertising, or contact form. The hosting provider may process standard request information needed to serve and secure the site. Sending an email also involves your email provider and the recipient's email provider.",
          "These activities are separate from the Catch app's local note storage.",
        ],
      },
      {
        heading: "Contact and changes",
        body: [
          "For questions or support, contact Parth Mudgal at parthmudgal15105@gmail.com.",
          "This policy may change with the app's behavior; updates will be posted here with a revised date.",
        ],
      },
    ],
    ownerToConfirm: [
      "Support email: the existing Catch site (catch-notes-support.vercel.app) and App Store Connect metadata use parthmudgal1510@gmail.com, while this page uses parthmudgal15105@gmail.com. Confirm which address is correct and update the other.",
      "The live Catch privacy policy only describes the Mac app. This version adds iPhone wording (local storage on iPhone, system photo picker, iPhone microphone setting) based on release/catch-ios-1.0/PRIVACY.md. Confirm, and update the live policy to match.",
      "The live policy's 'This website' section refers to the Vercel support site; confirm the same statement holds for parthmudgal.com hosting (no analytics scripts).",
    ],
  },

  seoTitle: "Catch — Quick notes from the menu bar for Mac and iPhone",
  seoDescription:
    "Catch is a local notebook for Mac and iPhone. Press ⌘\\ to capture a thought, add a voice note or screenshot, and export to Markdown or PDF. No account needed.",
  keywords: [
    "menu bar notes app Mac",
    "quick capture notes",
    "global hotkey notes",
    "offline notes app",
    "voice notes Mac",
    "Markdown export notes",
    "iPhone note widget",
  ],
};

export default product;
