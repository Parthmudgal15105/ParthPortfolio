import type { Product } from "../types";

// Sources: dual-screen-video/README.md, CHANGELOG.md, store/LISTING.md, store/PRIVACY.md,
// extension/manifest.json, live Chrome Web Store listing (v1.3.3, updated 2026-11-02, observed 2026-11-05).
const product: Product = {
  slug: "mac-video-fullscreen",
  name: "Mac Video Fullscreen",
  tagline: "Watch video full-window on one Mac monitor while your other displays stay usable.",
  headline: "Watch on one monitor. Keep working on the others.",
  description:
    "Mac Video Fullscreen is a Chrome extension that expands a video into a maximized window instead of native macOS fullscreen. Your other monitors stay available, even with “Displays have separate Spaces” turned off.",
  category: "Utilities",
  platforms: ["Chrome"],
  requirements: "Chrome 102 or later on macOS",
  status: "available",
  statusNote: "Free on the Chrome Web Store",
  order: 4,

  accent: "#15ebdd",
  accentInk: "#111820",
  heroLayout: "stacked",
  icon: "/apps/mac-video-fullscreen/icon.png",
  screenshots: [
    {
      src: "/apps/mac-video-fullscreen/01-windowed-video.jpg",
      alt: "A YouTube livestream filling a maximized Chrome window with only a thin title bar and the cyan exit control in the top-right corner",
      width: 1280,
      height: 800,
      frame: "plain",
    },
    {
      src: "/apps/mac-video-fullscreen/02-player-controls.jpg",
      alt: "The same windowed video with YouTube's own player controls and settings menu still available",
      width: 1280,
      height: 800,
      frame: "plain",
    },
  ],

  problem: {
    heading: "Fullscreen video can black out your other monitors",
    body: "Say you want a lecture on your second display while you take notes on the main one. If “Displays have separate Spaces” is off on your Mac, clicking fullscreen can leave the other monitors black and unusable. Turning that setting on changes how your whole desktop behaves. Mac Video Fullscreen avoids the fullscreen transition instead.",
  },

  features: [
    {
      title: "Windowed fullscreen",
      body: "Moves the video tab into a maximized Chrome window, hides the tabs and address bar, and expands the original player. A thin title bar remains.",
    },
    {
      title: "No new Space",
      body: "It never requests native macOS fullscreen or creates a separate Space, so your Mission Control settings stay as they are.",
    },
    {
      title: "YouTube and Netflix built in",
      body: "A cyan corner button appears automatically on YouTube and Netflix. The site's own playback, subtitle and player controls keep working.",
    },
    {
      title: "Other video sites",
      body: "On other sites, start playback and activate the extension from Chrome's Extensions menu. It looks for a visible HTML5 video or an eligible fullscreen-capable embed.",
    },
    {
      title: "Return the same tab",
      body: "Press Escape or click the corner button to put the tab back in its original window and position. If a return fails, try again with the same control.",
    },
    {
      title: "Keyboard shortcuts",
      body: "Toggle with Command-Shift-9, or set your own at chrome://extensions/shortcuts. While expanded, Up and Down change volume, M mutes, and Shift-Period or Shift-Comma change speed.",
    },
    {
      title: "Controls in your language",
      body: "The extension's own controls follow Chrome's display language, including Japanese, German, Italian, French and Spanish, with right-to-left layout for Arabic and Urdu.",
    },
  ],

  workflow: {
    heading: "Three steps to a second-screen video",
    steps: [
      {
        title: "Pick your display",
        body: "Move the Chrome window to the monitor you want to watch on.",
      },
      {
        title: "Start the video",
        body: "Play a video on YouTube, Netflix or another supported site.",
      },
      {
        title: "Expand it",
        body: "Click the cyan corner button, the toolbar icon, or press Command-Shift-9. Press Escape when you are done.",
      },
    ],
  },

  differentiators: [
    {
      title: "Keeps the original player",
      body: "Some tools pop video out into a separate floating player. This extension keeps the site's own video element in place, so playback, subtitles and protected streams carry on as normal.",
    },
    {
      title: "Made for multi-monitor Macs",
      body: "Many windowed-fullscreen tools only fill the browser window. This one moves the tab into its own maximized window on the display you choose, aimed at Macs with separate Spaces turned off.",
    },
    {
      title: "Narrow, local permissions",
      body: "Automatic access covers only YouTube and Netflix. Other sites get temporary access only when you activate it, with no analytics or data sent anywhere.",
    },
  ],

  faq: [
    {
      q: "What do I need?",
      a: "Chrome 102 or later. The extension is built and tested primarily for Chrome on macOS. Windows and Linux have default shortcuts, but verification focuses on macOS.",
    },
    {
      q: "Is it free?",
      a: "Yes. Mac Video Fullscreen is free on the Chrome Web Store.",
    },
    {
      q: "Does it split my screen or play two videos?",
      a: "No. It expands one existing video tab into its own window. Arrange your other windows yourself. It does not add picture-in-picture or always-on-top controls.",
    },
    {
      q: "Why does the green fullscreen button still black out my monitors?",
      a: "The green button and the site's fullscreen button still use native macOS fullscreen. Use the extension's corner button, toolbar icon or shortcut for windowed viewing.",
    },
    {
      q: "Does it work on every streaming site?",
      a: "Not every one. Standard HTML5 videos and eligible embeds often work, but closed or custom players may not. It does not bypass DRM, logins or subscriptions.",
    },
    {
      q: "Does it collect data?",
      a: "No. There are no analytics, ads or data sent to the developer. It keeps only the tab ID, original window ID and tab position in Chrome session storage so it can return your tab.",
    },
  ],

  primaryCta: {
    label: "Add to Chrome",
    href: "https://chromewebstore.google.com/detail/kjmofjkabeoifpkinleocejiddmfppjk",
    kind: "chrome",
  },

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "The corner button doesn't appear",
        a: "It loads automatically only on YouTube and Netflix. On other sites, start playback, then click the extension in Chrome's Extensions menu or press Command-Shift-9. Activate it again after navigating or reloading on those sites.",
      },
      {
        q: "The shortcut doesn't work",
        a: "Another extension may use Command-Shift-9. Open chrome://extensions/shortcuts, find Mac Video Fullscreen, and change or clear the binding. Some embedded players may not deliver shortcuts inside the popup window; the corner button always works.",
      },
      {
        q: "I updated the extension and the video window is stuck",
        a: "Updating or reloading the extension clears its saved return state. Reload the video page, then use the corner button to return the tab to a normal window. The original tab position is no longer available, and reloading may restart playback.",
      },
      {
        q: "I closed the video window and lost my tab",
        a: "Closing the popup window closes its tab, like any Chrome window. Press Escape or use the corner button instead to keep the tab.",
      },
      {
        q: "No player was found",
        a: "Start playback first, then try again. Closed shadow-root players, custom canvas players and some embeds are not supported.",
      },
    ],
  },

  privacy: {
    updated: "2026-10-25",
    summary:
      "Mac Video Fullscreen runs locally in Chrome. It sends no data to the developer or any server, uses no analytics or tracking, and keeps only temporary window details needed to return your tab.",
    sections: [
      {
        heading: "What the extension looks at",
        body: [
          "Mac Video Fullscreen (formerly Dual Screen Video) runs locally in Chrome. It automatically provides its corner control on YouTube and Netflix pages. On other websites it activates only when you click the extension action or use its shortcut.",
          "It looks for the visible video element and player container so it can enlarge the player when you activate the extension. It does not read your account credentials or capture video content.",
        ],
      },
      {
        heading: "What is stored",
        body: [
          "To return the tab to its original window, the extension temporarily stores the Chrome tab ID as part of a session-storage key, along with the original window ID and tab position in Chrome's session storage.",
          "This information stays in your browser and is cleared when the extension is disabled, reloaded or updated, or when the browser restarts. The extension does not transmit data to the developer or to any external server, and does not use analytics, advertising or tracking.",
        ],
      },
      {
        heading: "Permissions and site access",
        body: [
          "Persistent automatic site access is limited to www.youtube.com and www.netflix.com. The activeTab and scripting permissions allow temporary access to another current page after your explicit activation, to inject the bundled player controls and styles. Chrome can retain this grant through same-origin navigation; it ends when you leave the origin or close the tab.",
          "The extension does not request persistent access to all websites. It examines visible video and player structure and, when needed, fullscreen-capable iframe attributes; it does not inspect cross-origin embedded documents. It uses the Chrome windows and tabs APIs to move the current video tab into a maximized popup window and back. You can remove the extension from Chrome at any time.",
        ],
      },
      {
        heading: "Limited use",
        body: [
          "The extension's use of information received from Chrome APIs follows the Chrome Web Store User Data Policy, including its Limited Use requirements. It uses page structure and the temporary window details only to provide the windowed video feature.",
        ],
      },
      {
        heading: "Contact",
        body: ["Questions: parthmudgal15105@gmail.com."],
      },
    ],
    ownerToConfirm: [
      "The published policy (gist, updated 25 October 2026) still uses the old name 'Dual Screen Video' and says it covers version 1.3.0, while 1.3.3 is live. The changelog states 1.3.1–1.3.3 add no permissions, hosts or persistent data, so the content was ported unchanged apart from the name. Confirm, and consider re-dating the policy.",
    ],
  },

  seoTitle: "Mac Video Fullscreen — Windowed video for multi-monitor Macs",
  seoDescription:
    "Free Chrome extension for Mac: watch YouTube, Netflix and other videos in a maximized window on one monitor while your other displays stay usable for work.",
  keywords: [
    "mac fullscreen video other monitor black",
    "windowed fullscreen chrome",
    "displays have separate spaces",
    "youtube fullscreen second monitor mac",
    "netflix windowed fullscreen",
    "keep second monitor active fullscreen",
    "chrome extension mac multiple monitors",
  ],
};

export default product;
