import type { Product } from "../types";

// Sources (read-only): workout-calendar (branch release/v1) appstore/metadata.json,
// RELEASE_STATE.md, README.md, dist/index.html, tests/fixtures/make-demo.cjs (screenshots use
// this fictional demo journal), live support/privacy pages at
// https://parthmudgal15105.github.io/gym-app-site/ and /privacy.html (fetched 2026-11-05).
const product: Product = {
  slug: "gym",
  name: "Gym Journal",
  tagline: "A private workout calendar for lifters on iPhone, Mac and the web. No account needed.",
  headline: "Log every set. See your month at a glance.",
  description:
    "Gym Journal is a workout calendar for people who lift. Pick what you trained, log weight and reps, and see your streaks and progress, with everything stored on your device.",
  category: "Health & fitness",
  platforms: ["iOS", "macOS", "Web"],
  requirements: "iPhone with iOS 17 or later · Mac with macOS 14 or later · web version in a modern browser",
  status: "in-review",
  statusNote: "iPhone and Mac apps in App Review · web version live",
  order: 9,

  accent: "#7559a8",
  heroLayout: "stacked",
  icon: "/apps/gym/icon.png",
  screenshots: [
    {
      src: "/apps/gym/01-calendar.jpg",
      alt: "Gym Journal on the Mac showing a November calendar with Chest, Tricep, Back, Bicep, Legs and Shoulders sessions and the selected day's exercises",
      width: 1800,
      height: 1125,
      frame: "mac",
    },
    {
      src: "/apps/gym/02-log-workout.jpg",
      alt: "Logging a workout on iPhone: Chest and Tricep selected, with bench press and cable pushdown sets in kilograms",
      width: 736,
      height: 1600,
      frame: "phone",
    },
    {
      src: "/apps/gym/03-insights.jpg",
      alt: "Insights on the Mac showing workout days, sets recorded and a bench press progress chart rising from 45 kg to 60 kg",
      width: 1800,
      height: 1125,
      frame: "mac",
    },
    {
      src: "/apps/gym/04-iphone-calendar.jpg",
      alt: "The monthly calendar on iPhone with workout days, favorite body part and longest streak",
      width: 736,
      height: 1600,
      frame: "phone",
    },
    {
      src: "/apps/gym/05-profile.jpg",
      alt: "Profile on the Mac with training goals, equipment notes and bodyweight check-ins with waist and arm measurements",
      width: 1800,
      height: 1125,
      frame: "mac",
    },
  ],

  problem: {
    heading: "A notes app is not a training log",
    body: "After chest day you type “60×8, 57.5×9” into a note. A month later you can't tell when you last trained legs or whether your bench actually went up. Gym Journal puts each session on a calendar and turns the same sets into progress you can read.",
  },

  features: [
    {
      title: "Pick what you trained",
      body: "Choose Chest, Back, Triceps, Biceps, Legs, Shoulders or Abs, and your default exercises for each are added automatically. Edit the defaults any time.",
    },
    {
      title: "Sets in your units",
      body: "Log weight and reps in kg, kg per dumbbell, kg per side, plates or bodyweight.",
    },
    {
      title: "Notes and discomfort flags",
      body: "Add workout notes and flag any exercise that caused discomfort, so you remember next time. Training notes are collected in one place.",
    },
    {
      title: "Monthly calendar and streaks",
      body: "See every training day at a glance, with workout days this month, your most-trained body part and your longest streak.",
    },
    {
      title: "Insights that answer questions",
      body: "Switch between all time, this month or the last 90 days. Exercise progress shows your best set over time, alongside body-part balance and workout days per week.",
    },
    {
      title: "Bodyweight check-ins",
      body: "Record your bodyweight, with optional waist and arm measurements, and see how it changes.",
    },
    {
      title: "Backup and restore",
      body: "Export a JSON backup file at any time and restore it on your iPhone or Mac.",
    },
    {
      title: "Private by default",
      body: "No account, no sign-in, no ads and no tracking. Everything you enter stays on your device.",
    },
  ],

  workflow: {
    heading: "Log a workout in four steps",
    steps: [
      {
        title: "Tap Log today",
        body: "Open today's workout from the calendar.",
      },
      {
        title: "Pick body parts",
        body: "Select what you trained, for example Chest and Triceps. Your usual exercises appear.",
      },
      {
        title: "Enter weight and reps",
        body: "Log each set, then tap Done. The calendar and Insights update immediately.",
      },
      {
        title: "Review your month",
        body: "Check your streak, see which body parts you've skipped and follow your best sets over time.",
      },
    ],
  },

  differentiators: [
    {
      title: "No account, no cloud",
      body: "Many popular lifting trackers ask you to sign up and sell subscription tiers. Gym Journal has no account at all, and its App Store privacy label is “Data Not Collected”.",
    },
    {
      title: "Calendar first",
      body: "Instead of starting from a routine builder, Gym Journal opens on your month, so gaps and streaks are obvious before you log a single set.",
    },
    {
      title: "Free on iPhone, Mac and the web",
      body: "The same journal runs on iPhone, Mac and in the browser. A plain JSON backup file moves your data between them.",
    },
  ],

  faq: [
    {
      q: "What do I need?",
      a: "An iPhone with iOS 17 or later or a Mac with macOS 14 or later. The web version runs in a modern browser.",
    },
    {
      q: "How much does it cost, and when can I get it?",
      a: "The iPhone and Mac apps are free and waiting for App Review. You can use the web version today.",
    },
    {
      q: "Where is my data?",
      a: "Only on your device, inside the app. There is no account and no cloud sync. The web version keeps your journal in your browser's storage on that device.",
    },
    {
      q: "How do I move data between devices?",
      a: "Use Back up your data to export a JSON file, then Restore a backup on the other device.",
    },
    {
      q: "What happens if I delete the app?",
      a: "Deleting the app removes its data from that device, so keep a backup file.",
    },
  ],

  secondaryCtas: [
    {
      label: "Try the web version",
      href: "https://gym-journal-kappa.vercel.app",
      kind: "web",
    },
  ],
  externalSite: "https://parthmudgal15105.github.io/gym-app-site/",
  sourceUrl: "https://github.com/Parthmudgal15105/gym",

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "Where is my data?",
        a: "Only on your device, inside the app. There's no account and no cloud sync.",
      },
      {
        q: "How do I move data between devices?",
        a: "Use Back up your data to export a JSON file (share sheet on iPhone, save panel on Mac), then Restore a backup on the other device.",
      },
      {
        q: "I deleted the app. Is my data gone?",
        a: "Deleting the app removes its data. Keep a backup file so you can restore it.",
      },
      {
        q: "Other ways to get help",
        a: "You can also open an issue at github.com/Parthmudgal15105/gym-app-site/issues.",
      },
    ],
  },

  privacy: {
    updated: "2026-11-02",
    summary: "Gym Journal does not collect, transmit, sell, or share any personal data.",
    sections: [
      {
        heading: "What you enter stays on your device",
        body: [
          "Everything you enter (workouts, sets, measurements, profile and notes) is stored only on your device, in the app's own storage.",
        ],
      },
      {
        heading: "No accounts or tracking",
        body: [
          "The app has no accounts, analytics, advertising, tracking, or third-party SDKs, and it makes no network requests.",
        ],
      },
      {
        heading: "Backups",
        body: [
          "Backup files are created only when you choose to export, and they're saved where you pick.",
        ],
      },
      {
        heading: "Deleting your data",
        body: ["Deleting the app deletes its data from that device."],
      },
      {
        heading: "Questions",
        body: [
          "Open an issue at github.com/Parthmudgal15105/gym-app-site/issues, or email parthmudgal15105@gmail.com.",
        ],
      },
    ],
    ownerToConfirm: [
      "The existing policy only says “Questions: open an issue.” The email address was added here per the site brief; confirm you want it listed.",
      "The policy covers the iPhone and Mac apps. It does not mention the web version (gym-journal-kappa.vercel.app), which stores data in browser localStorage and is served by Vercel (which logs requests). Consider a short web-version paragraph.",
      "The Mac build includes the outgoing-network sandbox entitlement (added in build 2, per RELEASE_STATE.md). Confirm the statement “it makes no network requests” still holds for the shipped Mac app.",
    ],
  },

  seoTitle: "Gym Journal — Private workout log for iPhone and Mac",
  seoDescription:
    "Gym Journal is a free workout calendar for lifters. Log sets in kg, plates or bodyweight, track streaks and best sets, and keep your data on your device.",
  keywords: [
    "workout log app",
    "gym journal app",
    "workout calendar",
    "strength training tracker",
    "workout tracker no account",
    "private lifting log",
    "gym log for mac",
  ],
};

export default product;
