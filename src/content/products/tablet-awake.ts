import type { Product } from "../types";

// Sources: ../tablet-awake/README.md, publishing/README.md,
// publishing/store-listing.md, publishing/privacy-policy.html,
// app/src/main/AndroidManifest.xml, app/build.gradle (v1.1, minSdk 26).
const product: Product = {
  slug: "tablet-awake",
  name: "Tablet Awake",
  tagline: "One button keeps your Android tablet's screen on while you use other apps.",
  headline: "Keep your tablet awake with one tap",
  description:
    "Tablet Awake is a one-button Android app that stops your tablet's screen from going to sleep, even while other apps are on screen. Stop it from the app or its notification to return to normal sleep.",
  category: "Utilities",
  platforms: ["Android"],
  requirements: "Android 8.0 or newer. Tested on a Samsung tablet running Android 12.",
  status: "coming-soon",
  statusNote: "Preparing for Google Play",
  order: 13,

  accent: "#5EEAD4",
  accentInk: "#062a26",
  heroLayout: "stacked",
  icon: "/apps/tablet-awake/icon.png",
  screenshots: [
    {
      src: "/apps/tablet-awake/01-active.jpg",
      alt: "Tablet Awake on a tablet showing \"Screen sleep is paused\" in teal and a Stop keeping awake button",
      width: 1800,
      height: 1080,
      frame: "plain",
    },
    {
      src: "/apps/tablet-awake/02-stopped.jpg",
      alt: "Tablet Awake showing \"Screen sleep is normal\" and a Keep tablet awake button",
      width: 1800,
      height: 1080,
      frame: "plain",
    },
  ],

  problem: {
    heading: "The screen sleeps at the worst moment",
    body: "You prop a tablet up with a recipe, sheet music or a reference document, and the screen dims just as your hands are busy. Changing the system timeout means remembering to change it back. Tablet Awake is a switch you turn on for the session and off when you are done.",
  },

  features: [
    {
      title: "One big button",
      body: "Tap Keep tablet awake to pause screen sleep. Tap Stop keeping awake to return to normal.",
    },
    {
      title: "Works across apps",
      body: "Switch to any other app and the screen stays on. A tiny teal indicator shows it is active.",
    },
    {
      title: "Stop from the notification",
      body: "An ongoing notification shows it is running and has a Stop action, so you never need to hunt for the app.",
    },
    {
      title: "Leaves your settings alone",
      body: "Your normal screen-timeout setting is never changed, so stopping puts everything back as it was.",
    },
    {
      title: "No internet, no account",
      body: "The app does not request internet access and has no ads, analytics or sign-in.",
    },
  ],

  workflow: {
    heading: "How it works",
    steps: [
      {
        title: "Allow the overlay",
        body: "Allow Display over other apps when asked. It powers the small teal indicator that keeps the screen on.",
      },
      {
        title: "Tap Keep tablet awake",
        body: "Screen sleep pauses. Open whatever app you need.",
      },
      {
        title: "Stop when you are done",
        body: "Tap Stop in the app or the notification, and the tablet sleeps normally again.",
      },
    ],
  },

  differentiators: [
    {
      title: "A switch, not a rule set",
      body: "Some keep-awake apps work through per-app lists or timers. Tablet Awake is a single on/off switch for the whole session.",
    },
    {
      title: "Always visible while on",
      body: "A teal indicator and an ongoing notification make it obvious when screen sleep is paused, so it is not left on by accident.",
    },
    {
      title: "Minimal permissions",
      body: "No internet permission, no ads and no analytics. Only the overlay, foreground-service and notification permissions it needs.",
    },
  ],

  faq: [
    {
      q: "When can I get it?",
      a: "Tablet Awake is built and being prepared for Google Play. It is not available to download yet.",
    },
    {
      q: "Does it work after a restart?",
      a: "No. Open the app and turn it on again after restarting your tablet. The power button can still turn the screen off at any time, and battery restrictions or force-stopping the app can stop it.",
    },
    {
      q: "Will it drain my battery?",
      a: "Keeping the screen on uses battery. Keep your tablet plugged in during long sessions.",
    },
    {
      q: "Why does it need Display over other apps?",
      a: "Android only keeps the screen on for the app in front. Tablet Awake shows a tiny, non-interactive teal indicator over other apps that asks Android to keep the screen on. It does not read other apps or capture touches.",
    },
  ],

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "The screen still turns off",
        a: "Check that Display over other apps is allowed for Tablet Awake and that the teal indicator is visible. Exclude the app from battery optimization if your tablet restricts background apps.",
      },
      {
        q: "I don't see the notification",
        a: "Allow notifications for Tablet Awake in Android settings. On newer Android versions the app asks for this permission.",
      },
      {
        q: "It stopped after a restart",
        a: "This is expected. Open the app and tap Keep tablet awake again.",
      },
    ],
  },

  privacy: {
    updated: "2026-10-13",
    summary:
      "Tablet Awake does not collect, transmit, sell or share personal information. It has no accounts, advertising, analytics, tracking or third-party SDKs, and it does not request internet access.",
    sections: [
      {
        heading: "Who this policy covers",
        body: [
          "Tablet Awake is developed by Parth Mudgal. This policy covers the Android app Tablet Awake (com.parth.tabletawake).",
        ],
      },
      {
        heading: "Information collection and sharing",
        body: [
          "The app does not collect, transmit, sell or share personal information. It has no accounts, advertising, analytics, tracking or third-party SDKs. It does not request internet access.",
        ],
      },
      {
        heading: "Device permissions",
        body: [
          "The app uses a small, non-interactive overlay window with Android's keep-screen-on flag, and a foreground service to continue this user-requested operation when other apps are visible.",
          "Display over other apps permission is required for the teal indicator. The app does not read other apps or capture touches.",
          "A notification shows the operation and provides a Stop action. On supported Android versions, the app requests permission to display notifications.",
        ],
      },
      {
        heading: "Storage and control",
        body: [
          "The app does not maintain user profiles or a personal-data database.",
          "You can stop keeping the screen awake from the app or its notification. You can uninstall the app through Android settings.",
        ],
      },
      {
        heading: "Support",
        body: [
          "If you contact the developer by email, your email provider and the developer receive the information you choose to send. It is used to respond to your request.",
          "Contact: parthmudgal15105@gmail.com",
        ],
      },
      {
        heading: "Changes",
        body: ["Any changes to this policy will be published here with an updated effective date."],
      },
    ],
    ownerToConfirm: [
      "Support email: the draft policy had a placeholder (REPLACE_WITH_PUBLIC_SUPPORT_EMAIL); parthmudgal15105@gmail.com is used here. Confirm it is the public support address for Google Play.",
      "Effective date kept from the draft (October 13, 2026); update it when the policy is first published for Play submission.",
    ],
  },

  seoTitle: "Tablet Awake — Keep your Android tablet screen on",
  seoDescription:
    "A one-button Android app that keeps your tablet's screen on while you use other apps. Stop it from the notification. No internet, ads or account. Coming soon.",
  keywords: [
    "keep screen on Android",
    "keep tablet screen awake",
    "stop screen timeout Android",
    "screen awake app",
    "prevent tablet sleep",
    "keep screen on while using other apps",
  ],
};

export default product;
