import type { Product } from "../types";

// Sources (read-only): GesturePad/website/{index,support/index,privacy/index}.html,
// release/STATE.md, release/METADATA-DRAFT.md, release/PRIVACY-POLICY-DRAFT.md,
// release/REVIEW-REPLY-2.4.5-MAC.md, Packages/GestureKit/Sources/GestureCore/GestureKey.swift,
// Packages/GestureKit/Sources/GestureConfig/Actions.swift, Packages/GestureKit/Sources/GestureNet/PSKTLS.swift.
const product: Product = {
  slug: "gesturepad",
  name: "GesturePad",
  tagline: "Draw a symbol or swipe on your iPhone or iPad to run actions on your Mac.",
  headline: "Your Mac, a gesture away",
  description:
    "GesturePad turns your iPhone or iPad into a gesture canvas for your Mac. Draw a symbol or tap and swipe with up to five fingers, and the Mac runs the action you set for the app in front.",
  category: "Productivity",
  platforms: ["macOS", "iOS", "iPadOS"],
  requirements: "macOS 14 or later · iPhone or iPad with iOS / iPadOS 17 or later · same Wi-Fi network",
  status: "in-review",
  statusNote: "Mac and iPhone/iPad apps in App Review",
  order: 7,

  accent: "#94d6ff",
  accentInk: "#06121f",
  heroLayout: "split",
  icon: "/apps/gesturepad/icon.png",
  screenshots: [
    {
      src: "/apps/gesturepad/01-profiles.jpg",
      alt: "GesturePad for Mac showing profiles for Everywhere, Chrome, VS Code and Logic Pro, with drawn symbols mapped to actions such as Mute / Unmute Sound",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
    {
      src: "/apps/gesturepad/02-draw-symbol.jpg",
      alt: "GesturePad on iPhone in Practice mode with a glowing M symbol drawn on the canvas",
      width: 736,
      height: 1600,
      frame: "phone",
    },
    {
      src: "/apps/gesturepad/03-gestures.jpg",
      alt: "The Gestures screen on the Mac listing drawn symbols such as Circle, M, S and Z with their assigned shortcuts",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
    {
      src: "/apps/gesturepad/04-practice-reference.jpg",
      alt: "Practice reference on iPhone listing two-finger gestures for click, volume, previous and next track, and pinch to zoom",
      width: 736,
      height: 1600,
      frame: "phone",
    },
    {
      src: "/apps/gesturepad/05-welcome.jpg",
      alt: "GesturePad welcome screen on iPhone with Try a Gesture and Pair with Your Mac buttons",
      width: 736,
      height: 1600,
      frame: "phone",
    },
  ],

  problem: {
    heading: "Reaching for the keyboard breaks the flow",
    body: "You are leaning back, reviewing a page in Chrome or listening through a mix in Logic Pro. Muting, skipping a track or pressing ⌘Z means reaching across the desk and finding the right keys. With GesturePad you draw an M or swipe two fingers on the device already in your hand.",
  },

  features: [
    {
      title: "Draw symbols",
      body: "Built-in shapes such as a circle, M, check, triangle and letters are recognized on your iPhone or iPad. Record your own symbol when the built-ins don't fit.",
    },
    {
      title: "Taps, swipes and pinches",
      body: "Use taps, double taps, long presses and swipes with one to five fingers, plus pinch and rotate. Each gesture can trigger a different action.",
    },
    {
      title: "Profiles for each app",
      body: "The same gesture can do different things in Chrome, VS Code or Logic Pro. Profiles follow the app in front, fall back to Everywhere, or stay put when you lock one.",
    },
    {
      title: "Ordered workflows",
      body: "Combine supported Mac actions in order, with delays where needed, then assign the workflow to any gesture.",
    },
    {
      title: "Useful Mac actions",
      body: "Open apps and websites, press keyboard shortcuts, type text, control media and volume, run a named Shortcut, or switch profiles.",
    },
    {
      title: "Practice without risk",
      body: "Practice mode recognizes gestures without sending anything to the Mac. Hold four fingers for 1.5 seconds to pause or resume control at any time.",
    },
    {
      title: "QR code pairing",
      body: "Scan the code on your Mac or type its 12-character pairing code. Codes work once, expire after five minutes, and every device is approved on the Mac.",
    },
    {
      title: "Encrypted, local connection",
      body: "Gestures travel only to your paired Mac over an encrypted local-network connection found with Bonjour. There is no GesturePad account or cloud relay.",
    },
  ],

  workflow: {
    heading: "Set up once, then just gesture",
    steps: [
      {
        title: "Set up on your Mac",
        body: "Choose gesture mappings, app-specific profiles and workflows in the GesturePad Mac app.",
      },
      {
        title: "Pair your device",
        body: "In Devices choose Pair New Device, then scan the QR code or enter the code on your iPhone or iPad and approve it on the Mac.",
      },
      {
        title: "Practice",
        body: "Try gestures in Practice mode. Nothing runs on the Mac until you return to the connected canvas.",
      },
      {
        title: "Control",
        body: "Draw, tap or swipe. The Mac runs the action mapped for the app in front.",
      },
    ],
  },

  differentiators: [
    {
      title: "Gestures instead of a button grid",
      body: "Most phone remotes for the Mac are grids of buttons you have to look at. GesturePad uses symbols and multi-finger gestures, so you can act without finding a button.",
    },
    {
      title: "Context-aware mappings",
      body: "One gesture can mean different things in different apps, with an Everywhere fallback and a manual lock, instead of a single global set of shortcuts.",
    },
    {
      title: "Recognized on the device",
      body: "Gestures are recognized on your iPhone or iPad and sent only to the Mac you paired. No account and no developer-operated server sit in between.",
    },
  ],

  faq: [
    {
      q: "What do I need?",
      a: "A Mac with macOS 14 or later and an iPhone or iPad with iOS / iPadOS 17 or later, on the same Wi-Fi network, with GesturePad open on the Mac.",
    },
    {
      q: "How much does it cost, and when can I get it?",
      a: "GesturePad is in App Review. Pricing will appear on the App Store listing.",
    },
    {
      q: "Is camera access required?",
      a: "No. The camera is used only to scan the Mac's pairing QR code, and you can type the pairing code instead. The camera is never used to recognize your gestures.",
    },
    {
      q: "What information leaves my iPhone or iPad?",
      a: "Recognized gesture events and any custom symbol samples you record go to your paired Mac over an encrypted local connection. The apps have no GesturePad account and include no analytics or crash-reporting SDK.",
    },
    {
      q: "Do four- and five-finger gestures work on iPad?",
      a: "iPadOS multitasking gestures can intercept some four- and five-finger input. Use the visible Pause control on the canvas if needed.",
    },
    {
      q: "Can I back up my mappings?",
      a: "Yes. The Mac app keeps local backups of its configuration and can import or export configuration files you choose.",
    },
  ],

  externalSite: "https://parthmudgal15105.github.io/gesturepad-site/",

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "My Mac does not appear",
        a: "Make sure GesturePad is running on the Mac and both devices are on the same Wi-Fi network. Check Local Network permission in system settings on each device. Guest Wi-Fi or network isolation can stop devices from finding each other. Bring the companion to the foreground and try again.",
      },
      {
        q: "Do I need to pair again after a disconnect?",
        a: "Usually not. Reopen GesturePad on both devices and check the network. If the companion is offline, open its Settings and choose Reconnect Now. Pair again only if you forgot the Mac, removed the device, or the stored pairing no longer works.",
      },
      {
        q: "A gesture is recognized, but the Mac action does not work",
        a: "Check the active profile, its mapping and whether GesturePad is paused. Keyboard and media actions need permission in System Settings → Privacy & Security → Accessibility on the Mac. The intended app should be in front for keyboard actions, and any app or named Shortcut used by a mapping must be installed. Practice never runs Mac actions.",
      },
      {
        q: "How do I pause control quickly?",
        a: "Use the companion's Pause control, or hold four fingers for 1.5 seconds to pause or resume.",
      },
      {
        q: "How do I remove a pairing?",
        a: "On the companion, open Settings and choose Forget This Mac. Also remove the device from the Mac app's Devices screen, which revokes its authorization. When you email support, include your Mac and device OS versions and the app version, and never send pairing codes or device keys.",
      },
    ],
  },

  privacy: {
    updated: "2026-11-04",
    summary:
      "GesturePad recognizes gestures on your iPhone or iPad and sends them to the Mac you pair over an encrypted local-network connection. The apps use no GesturePad cloud account or developer-operated relay service, and include no automatic analytics or crash-reporting SDK.",
    sections: [
      {
        heading: "Who is responsible",
        body: [
          "GesturePad is developed by Parth Mudgal. For privacy questions or requests, contact parthmudgal15105@gmail.com.",
        ],
      },
      {
        heading: "Information on your devices",
        body: [
          "The companion recognizes gestures on your iPhone or iPad. The Mac stores your gesture library, drawn-symbol samples, mappings, profiles, workflows and app settings locally. Local backups support recovery of the Mac's configuration.",
          "Pairing stores identifiers and names for your devices, connection information and authorization keys. Pairing keys are stored in Apple's Keychain. Settings and pairing details are also stored in app-local preferences. The Mac uses the foreground application's identity to select an app-specific profile.",
        ],
      },
      {
        heading: "Information exchanged with your paired Mac",
        body: [
          "GesturePad uses local-network discovery and an encrypted connection between the companion and your paired Mac. The Mac sends the configuration needed to recognize and display your mappings. The companion sends recognized gesture events; the Mac returns results and connection state. When you record or teach a custom symbol, its samples are sent to the Mac to update your library.",
          "The current apps do not use a GesturePad cloud account or a developer-operated service to relay gestures. Local recognition does not mean no information moves: paired devices exchange the information needed to provide Mac control.",
        ],
      },
      {
        heading: "Permissions and actions you choose",
        body: [
          "Local Network: discovers and connects the companion and Mac.",
          "Camera: scans a pairing QR code when you choose to use the scanner. A manual code option is available.",
          "Mac Accessibility: permits keyboard and media input for configured actions.",
          "User-selected files: allows the Mac app to import or export the configuration files you choose.",
          "A mapping can open a website, launch another app or run a named Shortcut. Those destinations may process information under their own policies. Review the actions you configure and the services they invoke.",
        ],
      },
      {
        heading: "Diagnostics, support and retention",
        body: [
          "The Mac app keeps recent activity for feedback. Development builds can write diagnostic information to local system logs. No automatic analytics or crash-reporting SDK is included in the current app source. If you email support, the information you choose to send is processed through the email service to respond to your request and investigate the issue.",
          "App settings and configurations remain on your devices until you change or remove them. Local backups, exported files, system logs and Keychain records can have different lifetimes; uninstalling an app may not remove every copy. You control any configuration exports and backups you make.",
        ],
      },
      {
        heading: "Your controls",
        body: [
          "You can practice without sending Mac actions, pause control, change mappings, revoke permissions in system settings, forget the paired Mac on the companion, and remove an authorized device on the Mac. To end a pairing, use both the companion's Forget This Mac and the Mac's Remove Device controls. See the support guide or contact us for help with locally stored information.",
        ],
      },
      {
        heading: "Websites are separate",
        body: [
          "The standalone GesturePad website is a static site hosted on GitHub Pages. It contains no analytics scripts, advertising, contact forms or embedded third-party media, and it does not set application cookies or use browser storage. Visiting it still sends ordinary web requests to its hosting provider; GitHub logs visitors' IP addresses for security purposes. This is separate from the apps' local gesture connection. Contacting us by email also involves your email provider and ours.",
        ],
      },
      {
        heading: "Changes and questions",
        body: [
          "We will update this page if the product's handling of information changes. The date above identifies the current version. Send privacy questions to parthmudgal15105@gmail.com.",
        ],
      },
    ],
    ownerToConfirm: [
      "The existing policy opens with “GesturePad is in preparation for release… App Store privacy disclosures will be completed for the submitted builds.” That line was dropped here because the apps are now in App Review; confirm, and confirm the App Privacy label you submitted (release/STATE.md notes the code supports “Data Not Collected”, but the answers were owner-only).",
      "The “Websites are separate” section describes the GitHub Pages site only. Decide what to say about parthmudgal.com hosting (host, logs, analytics) for this page.",
    ],
  },

  seoTitle: "GesturePad — Gesture control for Mac from iPhone and iPad",
  seoDescription:
    "GesturePad turns your iPhone or iPad into a gesture canvas for your Mac. Draw symbols or swipe with up to five fingers to run per-app shortcuts and workflows.",
  keywords: [
    "control mac with iphone",
    "iphone gesture control for mac",
    "custom gestures mac shortcuts",
    "iphone remote for mac",
    "ipad as mac controller",
    "draw gestures shortcuts",
  ],
};

export default product;
