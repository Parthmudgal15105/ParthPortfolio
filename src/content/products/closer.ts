import type { Product } from "../types";

// Sources: closer/README.md, closer-web/src/app/{page,privacy/page,support/page,download/page}.tsx,
// closer-web/src/lib/release.json, closer-web/src/lib/publisher.ts.
const product: Product = {
  slug: "closer",
  name: "Closer",
  tagline: "See every running Mac app, keep what matters, and quit the rest in one review.",
  headline: "A little less open on your Mac.",
  description:
    "Closer lists your running Mac apps in one window. Mark the ones to keep, then quit one, a few, or all the rest with a normal quit that still lets each app ask you to save.",
  category: "Utilities",
  platforms: ["macOS"],
  requirements: "macOS 14 Sonoma or later, Apple silicon",
  status: "available",
  statusNote: "Version 0.1.0 · Developer ID signed and notarized",
  order: 1,

  accent: "#30452a",
  accentInk: "#ffffff",
  heroLayout: "split",
  icon: "/apps/closer/icon.svg",
  screenshots: [
    {
      src: "/apps/closer/01-workspace-light.jpg",
      alt: "Closer window listing running Mac apps with Show, Keep open and Quit controls, plus Quit selected and Quit all eligible buttons",
      width: 1520,
      height: 1360,
      frame: "mac",
    },
    {
      src: "/apps/closer/02-review-before-quitting.jpg",
      alt: "Review before quitting sheet listing the exact two test apps that will receive a quit request",
      width: 880,
      height: 784,
      frame: "plain",
    },
    {
      src: "/apps/closer/03-keep-open.jpg",
      alt: "Closer in dark mode with one test app selected and another marked Kept open, remembered on this Mac",
      width: 1520,
      height: 1360,
      frame: "mac",
    },
    {
      src: "/apps/closer/04-workspace-dark.jpg",
      alt: "Closer workspace in dark mode showing running and kept-open counts above the app list",
      width: 1520,
      height: 1360,
      frame: "mac",
    },
  ],

  problem: {
    heading: "Apps pile up, and the Dock does not tell the whole story",
    body: "By the afternoon you might have a browser, two chat apps, a design tool and something you opened once this morning, some of them hidden. Quitting them one by one is slow, and quit-everything shortcuts can take the music or the project you still need with them. Closer gives you one clear list and a deliberate way to close what you are done with.",
  },

  features: [
    {
      title: "Every running app, listed",
      body: "Each row is a regular running Mac app, including hidden ones. It is not a window list or a list of background processes.",
    },
    {
      title: "Keep open",
      body: "Switch on Keep open for the apps you need and Closer leaves them out of every quit action. Your choices are remembered on this Mac, and Finder and Closer are always protected.",
    },
    {
      title: "Review before a batch",
      body: "Select a few apps or choose Quit all eligible, then check the exact list before anything is sent. Search only filters the view, and the review shows apps outside your search too.",
    },
    {
      title: "Normal quit, never force",
      body: "Closer asks each app to quit the standard Mac way, so it can show its own save prompt or decline. Closer never force quits.",
    },
    {
      title: "Honest results",
      body: "If an app is still open after about eight seconds, the batch stops. Expand App results to see what closed, then use Review remaining when you are ready.",
    },
    {
      title: "Show an app first",
      body: "Show brings a running app forward so you can check its windows or a save dialog before deciding.",
    },
    {
      title: "Keyboard and larger text",
      body: "Command-F searches, Command-R refreshes and Escape cancels a preview. View › Larger Text doubles the interface text size.",
    },
  ],

  workflow: {
    heading: "From everything to just enough",
    steps: [
      {
        title: "See the whole picture",
        body: "Open Closer from Applications or its menu-bar icon to review your running apps in one place. Search to find one quickly.",
      },
      {
        title: "Keep the important ones",
        body: "Turn on Keep open for the apps you are still using. Closer remembers these choices next time.",
      },
      {
        title: "Review and quit",
        body: "Quit a single app, or select several and confirm the exact list. Each app gets a normal quit request.",
      },
      {
        title: "Check what remains",
        body: "Read the results, answer any save prompts, and review the apps that are still open. Nothing retries on its own.",
      },
    ],
  },

  differentiators: [
    {
      title: "Polite by design",
      body: "Some quit utilities add force quit or automatic idle quitting. Closer only sends normal quit requests you confirm, so each app keeps control of its own save prompts.",
    },
    {
      title: "No special permissions",
      body: "Several bulk-quit tools ask for Accessibility access. Closer uses standard macOS application APIs and does not need Accessibility or Screen Recording permission.",
    },
    {
      title: "A reviewed list, not a blind command",
      body: "Launcher commands can quit everything in one keystroke. Closer shows the exact apps first, including ones hidden by your search, and stops when an app does not close.",
    },
  ],

  faq: [
    {
      q: "What do I need to run Closer?",
      a: "A Mac with Apple silicon running macOS 14 Sonoma or later. Version 0.1.0 has been tested on macOS 27.0.1. Intel Macs are not supported.",
    },
    {
      q: "How much does it cost?",
      a: "Closer is free to download and use. It is proprietary freeware published by Parth Mudgal, not open source.",
    },
    {
      q: "Will I lose unsaved work?",
      a: "Closer sends normal quit requests, so each app handles its own save prompts or can decline to quit. Closer does not inspect documents or guarantee that work is saved, so save important work first.",
    },
    {
      q: "Does Closer collect any data?",
      a: "No. It has no account, analytics or network access. Your Keep open choices and text size setting stay in local macOS preferences.",
    },
    {
      q: "Is the download safe to open?",
      a: "The download comes directly from GitHub Releases and is Developer ID signed and notarized by Apple. Move Closer.app to Applications and approve the normal first-open confirmation if macOS shows one.",
    },
    {
      q: "How do I update?",
      a: "There is no automatic updater. When a new release is available, quit Closer and replace the app in Applications.",
    },
  ],

  primaryCta: {
    label: "Download for Mac",
    href: "https://github.com/Parthmudgal15105/closer-releases/releases/download/v0.1.0/Closer-0.1.0-1-arm64-notarized.zip",
    kind: "download",
  },
  externalSite: "https://closer-web-eight.vercel.app",

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "How do I install Closer?",
        a: "Download the ZIP, extract it if your browser has not already done so, and move Closer.app to Applications. Open it there and approve the normal macOS first-open confirmation. Do not bypass an unexpected security warning; contact support instead.",
      },
      {
        q: "Why didn't an app quit?",
        a: "An app can decline or take time to respond, often while showing a save prompt. A batch stops at an unresolved app after roughly eight seconds. Check that app, then use Review remaining. Closer never force quits or retries automatically.",
      },
      {
        q: "Does searching change which apps can quit?",
        a: "No. Search only changes the visible list. Quit all eligible can include apps outside your search, so read the confirmation list before continuing.",
      },
      {
        q: "Does Closer need special permissions?",
        a: "No Accessibility or Screen Recording permission is needed. It uses macOS application APIs to find regular running apps and send normal quit requests.",
      },
      {
        q: "How do I uninstall?",
        a: "Quit Closer, then move Closer.app from Applications to the Trash. Its local preferences may remain in macOS user defaults; email support if you need help removing them. When reporting a problem, include your macOS version, Mac chip, Closer version and steps to reproduce.",
      },
    ],
  },

  privacy: {
    updated: "2026-10-31",
    summary:
      "Closer works locally on your Mac. It does not collect personal information, usage analytics or tracking data, and it has no account system or network features.",
    sections: [
      {
        heading: "The Mac app",
        body: [
          "Closer operates locally on your Mac. It does not collect personal information, usage analytics or tracking data. Application preferences are stored locally and are not transmitted to the publisher.",
          "Closer has no account system, remote APIs, analytics SDKs or crash-reporting uploads. It uses system frameworks with no third-party package dependencies. The app does not send a list of your running apps anywhere.",
          "Running-app names are held in memory while the app is in use. Closer uses macOS application information to show regular running apps and send normal quit requests. It does not inspect your documents or detect whether your work is saved.",
          "macOS may contact Apple for its own notarization or revocation checks when an app is opened. That is operating-system activity, separate from Closer.",
        ],
      },
      {
        heading: "Local preferences",
        body: [
          "Your Keep open choices and Larger Text setting are stored locally in macOS user defaults. Keep choices identify applications by bundle identity or path. These preferences do not leave the Mac through Closer.",
          "Moving Closer to the Trash removes the app but may leave these local preferences behind.",
        ],
      },
      {
        heading: "Websites and downloads",
        body: [
          "App downloads go directly to GitHub Releases. GitHub may process request information and record download counts; this is separate from Closer and covered by GitHub's privacy statement.",
          "The websites that describe Closer are served by a hosting provider that may process IP addresses and request information to deliver and secure pages. Hosting logs are separate from the Mac app's local behavior.",
        ],
      },
      {
        heading: "Support email",
        body: [
          "If you email support, your message and email address are received by the publisher through Gmail and used to respond. Do not include passwords or private documents. No specific hosting or email retention period is promised.",
        ],
      },
      {
        heading: "Questions and changes",
        body: [
          "Parth Mudgal publishes Closer. For privacy questions, email parthmudgal15105@gmail.com.",
          "This policy took effect on 31 October 2026. Future changes will be reflected on this page with an updated effective date.",
        ],
      },
    ],
    ownerToConfirm: [
      "The original policy describes closer-web (Vercel, no analytics or cookies). Confirm that parthmudgal.com's own hosting and analytics setup is accurately covered by the generic 'Websites and downloads' wording.",
    ],
  },

  seoTitle: "Closer — Quit Mac apps safely, keep what matters",
  seoDescription:
    "Closer is a free Mac utility that lists running apps, keeps the ones you need open, and quits the rest with a reviewed, normal quit. For Apple silicon Macs.",
  keywords: [
    "quit all apps mac",
    "close all apps mac",
    "mac app quitter",
    "quit multiple apps mac",
    "running apps mac utility",
    "free mac utility apple silicon",
  ],
};

export default product;
