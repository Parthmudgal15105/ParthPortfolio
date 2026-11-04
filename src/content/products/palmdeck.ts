import type { Product } from "../types";

// Sources (read-only): BetterDeck/RELEASE.md, STATE.md, docs/appstore/metadata.md,
// docs/appstore/v1.1-drafts.md, docs/v1.1/RELEASE-READINESS.md, docs/site/privacy.html,
// docs/site/support.html, Apps/Mac/Sources/App/HotKey.swift, project.yml.
const product: Product = {
  slug: "palmdeck",
  name: "Palmdeck",
  tagline: "A floating button deck for your Mac that your iPhone or iPad can press too.",
  headline: "One tap for the things you do all day",
  description:
    "Palmdeck puts apps, shortcuts, snippets, media controls, Shortcuts and scripts on a floating deck that never steals focus. Pair an iPhone or iPad and press the same buttons from across the desk.",
  category: "Productivity",
  platforms: ["macOS", "iOS", "iPadOS"],
  requirements: "macOS 14 Sonoma or later · iPhone or iPad with iOS / iPadOS 17 or later for remote control",
  status: "in-review",
  statusNote: "Mac and iPhone/iPad apps in App Review",
  featured: true,
  order: 6,

  accent: "#5C5CE6",
  heroLayout: "split",
  icon: "/apps/palmdeck/icon.png",
  screenshots: [
    {
      src: "/apps/palmdeck/01-floating-deck.jpg",
      alt: "Palmdeck's floating deck on the Mac showing a Development profile for Xcode with Build, Run, Test and Stop buttons, mirrored on an iPhone",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
    {
      src: "/apps/palmdeck/02-editor.jpg",
      alt: "The Palmdeck editor on the Mac with profiles on the left, a button grid in the middle and the searchable action library on the right",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
    {
      src: "/apps/palmdeck/03-iphone-deck.jpg",
      alt: "Palmdeck on iPhone following the Mac's Development profile, with a running Focus timer tile",
      width: 736,
      height: 1600,
      frame: "phone",
    },
    {
      src: "/apps/palmdeck/04-live-tiles.jpg",
      alt: "Desk Controls profile on the Mac with live battery, memory, volume, focus timer and clock tiles, window layouts and media buttons",
      width: 920,
      height: 1000,
      frame: "plain",
    },
    {
      src: "/apps/palmdeck/05-starter-profiles.jpg",
      alt: "Palmdeck welcome screen offering starter profiles: Development, Music Production, Productivity, Content Creation, Desk Controls and Custom",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
  ],

  problem: {
    heading: "Small Mac chores add up",
    body: "Building a project means pressing ⌘B, switching to Terminal, opening a folder and pausing the music. Each step is small, but hunting through menus and remembering key combos breaks your focus dozens of times a day. Palmdeck turns each of those steps into one button you can press on the Mac or from your phone.",
  },

  features: [
    {
      title: "Floats without stealing focus",
      body: "The deck stays on top but never takes focus, so a shortcut goes to the app you are working in. Show or hide it with a global shortcut or from the menu bar.",
    },
    {
      title: "Profiles follow your app",
      body: "Profiles switch automatically with the app in front, such as Xcode, Logic Pro or Final Cut Pro. Pin a profile with one click when you want it to stay.",
    },
    {
      title: "260+ searchable actions",
      body: "Open apps and files, fire shortcuts, type snippets, control volume and media, arrange windows, and run Shortcuts or your own scripts. Search the library by name, app or goal.",
    },
    {
      title: "Workflows, not just buttons",
      body: "Chain actions with waits, “only if this app is open or in front” conditions, and stop-or-continue on errors. One button can also do different things on press, double-press and hold.",
    },
    {
      title: "iPhone and iPad remote",
      body: "Pair once by scanning a code on your Mac. Your iPhone or iPad shows the Mac's deck, follows its profile and page, and presses buttons over an encrypted local Wi-Fi connection.",
    },
    {
      title: "Live tiles and timers",
      body: "Buttons can show battery, memory, CPU, volume, the clock, Spotify's now playing, or a running countdown, stopwatch or pomodoro timer, on the Mac and on your phone.",
    },
    {
      title: "Editor with undo",
      body: "Drag actions onto the grid, set columns per page, make buttons wide, tall or large, and undo any change. Choose from 430 built-in icons, your installed apps' icons or your own images.",
    },
    {
      title: "Spotify and window helpers",
      body: "An optional helper adds Spotify control, window layouts and sleep. macOS asks for your consent before it controls another app.",
    },
  ],

  workflow: {
    heading: "From install to first tap",
    steps: [
      {
        title: "Pick a starter profile",
        body: "Start from Development, Music Production, Productivity, Content Creation, Desk Controls or a blank Custom profile. You can change everything later.",
      },
      {
        title: "Add your own buttons",
        body: "Open the editor, search the action library (try “mute” or “window”) and drag an action onto the page.",
      },
      {
        title: "Pair your iPhone or iPad",
        body: "On the Mac choose Settings ▸ iPhone ▸ Pair iPhone, scan the code with your phone's camera and approve it on the Mac.",
      },
      {
        title: "Press from anywhere on your desk",
        body: "Tap a button on the floating deck or on your phone. Each press shows clear success or error feedback.",
      },
    ],
  },

  differentiators: [
    {
      title: "Built for the Mac first",
      body: "Many deck apps are Windows-first or need a separate desktop hub. Palmdeck's deck is a native Mac panel that follows the app in front, and the phone simply mirrors it.",
    },
    {
      title: "One app, no subscription",
      body: "Some remotes unlock more keys or devices with subscriptions and add-ons. Palmdeck is one universal App Store app for Mac, iPhone and iPad, with no subscription, no in-app purchases and no account.",
    },
    {
      title: "Stays on your network",
      body: "Your iPhone talks directly to your Mac over an encrypted local Wi-Fi connection. There is no cloud relay, and the App Store privacy label is “Data Not Collected”.",
    },
  ],

  faq: [
    {
      q: "What do I need?",
      a: "A Mac with macOS 14 Sonoma or later. To use your phone as a remote, an iPhone or iPad with iOS / iPadOS 17 or later on the same Wi-Fi network as the Mac.",
    },
    {
      q: "How much does it cost, and when can I get it?",
      a: "Palmdeck is in App Review. Pricing will appear on the App Store listing once it is approved. A single App Store listing covers the Mac, iPhone and iPad apps.",
    },
    {
      q: "Does the iPhone app work without a Mac?",
      a: "The iPhone and iPad app is a remote for Palmdeck on your Mac. Without a paired Mac you can explore a demo deck that explains what each button would do.",
    },
    {
      q: "Why does Palmdeck ask for Accessibility permission?",
      a: "Accessibility permission is optional. It lets Palmdeck send the keyboard shortcuts, text and media keys you configure. Palmdeck does not read your screen or other apps' content.",
    },
    {
      q: "What data does Palmdeck collect?",
      a: "None. There are no accounts, analytics, advertising or servers. Your decks and settings stay on your devices, and pairing keys are kept in each device's Keychain.",
    },
    {
      q: "Can I back up or move my decks?",
      a: "Yes. Palmdeck keeps your last 10 versions automatically (Settings ▸ Backups), and File ▸ Export Deck saves a copy you can move to another Mac.",
    },
  ],

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "Pairing your iPhone or iPad",
        a: "On your Mac open Palmdeck ▸ Settings ▸ iPhone ▸ Pair iPhone, scan the code with your iPhone camera and approve the device on your Mac. Both devices must be on the same Wi-Fi network, and Palmdeck needs Local Network access on both (Settings ▸ Privacy & Security ▸ Local Network).",
      },
      {
        q: "Shortcuts, typing and media keys do nothing",
        a: "Allow Palmdeck in System Settings ▸ Privacy & Security ▸ Accessibility. If it is already on, turn it off and on again after updating the app.",
      },
      {
        q: "Spotify, window layout or sleep buttons don't work",
        a: "These use Palmdeck's optional helper. Open Settings ▸ Permissions ▸ Install Helper and confirm the folder, then allow the one-time macOS prompt when Palmdeck first controls Spotify or System Events.",
      },
      {
        q: "Adding scripts",
        a: "Edit a button, add a Run Script action and choose Add Script…. macOS asks once to let Palmdeck copy scripts into its Scripts folder. Shell scripts must start with a #! line. Scripts run with your user permissions, so only add scripts you trust.",
      },
      {
        q: "Backups",
        a: "Palmdeck keeps your last 10 versions automatically (Settings ▸ Backups). Use File ▸ Export Deck to keep a copy or move decks to another Mac. When you email support, include your macOS / iOS version.",
      },
    ],
  },

  privacy: {
    updated: "2026-11-03",
    summary:
      "Palmdeck does not collect any data. It has no accounts, analytics, advertising, tracking or servers.",
    sections: [
      {
        heading: "What stays on your devices",
        body: [
          "Your decks, buttons, settings and backups are stored only on your Mac and iPhone. Pairing keys are stored in each device's Keychain. Nothing is sent to us or to any third party.",
        ],
      },
      {
        heading: "Local network",
        body: [
          "When you pair your iPhone with your Mac, the two apps talk directly over your local network using an encrypted connection. This traffic never leaves your network.",
        ],
      },
      {
        heading: "Permissions",
        body: [
          "On the Mac, Accessibility permission (optional) lets Palmdeck send the keyboard shortcuts, text and media keys you configure when you press a button. Palmdeck does not read your screen or other apps' content.",
          "Scripts you add run on your Mac; their output is not stored or transmitted.",
        ],
      },
      {
        heading: "Children",
        body: ["Palmdeck collects no personal information from anyone, including children."],
      },
      {
        heading: "Changes and contact",
        body: [
          "If this policy changes, the new version will be posted on this page. Questions: parthmudgal15105@gmail.com.",
        ],
      },
    ],
    ownerToConfirm: [
      "The existing policy (effective 3 November 2026) predates the helper scripts: it does not mention the macOS Automation (Apple Events) consent used for Spotify and System Events, or that Spotify now-playing data is read and shown on your own devices. Consider adding a sentence.",
      "The policy says “Mac and iPhone”; the current build also supports iPad. Consider saying “iPhone and iPad”.",
      "App Privacy answers (“Data Not Collected”) were published for build 2; RELEASE-READINESS says no change is needed for the current build — please confirm.",
    ],
  },

  seoTitle: "Palmdeck — Button deck for Mac, iPhone and iPad",
  seoDescription:
    "Palmdeck puts apps, shortcuts, snippets, media and scripts on a floating Mac deck. Press the same buttons from your iPhone or iPad over encrypted local Wi-Fi.",
  keywords: [
    "stream deck alternative for mac",
    "mac macro pad app",
    "use iphone as stream deck",
    "mac shortcut buttons",
    "mac automation workflows",
    "floating launcher for mac",
  ],
};

export default product;
