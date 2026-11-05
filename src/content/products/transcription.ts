import type { Product } from "../types";

// Sources: transcript-vault/README.md, store/LISTING_DESCRIPTION_1.2.0.txt, store/PRIVACY_POLICY.md,
// website/index.html, live Chrome Web Store listing (v1.3.0, observed 2026-11-05).
const product: Product = {
  slug: "transcription",
  name: "Transcription",
  tagline: "Save YouTube transcripts in Chrome and turn videos into summaries with your own AI.",
  headline: "Watch it once. Keep every word.",
  description:
    "Transcription saves a YouTube video's captions into a searchable library in Chrome with one click. When you want more, it hands the transcript to ChatGPT or Claude for summaries, notes or slides, using the AI account you already have.",
  category: "AI & research",
  platforms: ["Chrome"],
  requirements: "Desktop Chrome 111 or later",
  status: "available",
  statusNote: "Free on the Chrome Web Store",
  order: 3,

  accent: "#315b48",
  accentInk: "#ffffff",
  heroLayout: "stacked",
  icon: "/apps/transcription/icon.png",
  screenshots: [
    {
      src: "/apps/transcription/01-library.jpg",
      alt: "Transcription Chrome library with saved video transcripts, word counts and Read, Copy and Download actions, shown with sample data",
      width: 1280,
      height: 800,
      frame: "web",
    },
    {
      src: "/apps/transcription/02-search.jpg",
      alt: "Searching the transcript library for a word, with the match highlighted inside a saved transcript, shown with sample data",
      width: 1280,
      height: 800,
      frame: "web",
    },
    {
      src: "/apps/transcription/03-reader.jpg",
      alt: "Transcript reader with timestamp links, Copy transcript, Download .txt and Open video buttons, shown with sample data",
      width: 1280,
      height: 800,
      frame: "web",
    },
  ],

  problem: {
    heading: "The useful part of a video is hard to find again",
    body: "You watch a 40-minute tutorial, and a week later you need the one command it explained. Scrubbing back through the video takes longer than the original idea deserved. Transcription keeps the words, so you can search them, copy them, or ask an AI to turn them into notes.",
  },

  features: [
    {
      title: "One-click capture",
      body: "Click Transcript beside YouTube's Share and Save buttons to save the video's available captions, including automatic captions.",
    },
    {
      title: "Searchable local library",
      body: "Search saved titles, channels and transcript text in a library page that lives in Chrome's local storage.",
    },
    {
      title: "Timestamp links",
      body: "Read a transcript with timestamps that jump back to that moment in the YouTube video.",
    },
    {
      title: "Copy or download text",
      body: "Copy plain text or download a .txt file, with or without timestamps. Automatic copying and downloading on save can each be turned off.",
    },
    {
      title: "Summaries with your AI",
      body: "After saving, pick a task such as Quick Summary, Key Insights & Takeaways, Deep Learning & Study Notes or a custom request, then continue in ChatGPT or Claude.",
    },
    {
      title: "Optional automatic send",
      body: "Opt in per assistant and Transcription fills and sends the prompt for you. Without it, the prompt is copied and you paste and send yourself.",
    },
    {
      title: "Export your library",
      body: "Export Chrome library data and preferences as a JSON file whenever you want a separate copy.",
    },
    {
      title: "Interface in 10 languages",
      body: "The extension follows Chrome's interface language in English, Spanish, Hindi, Portuguese, French, German, Japanese, Korean, Simplified Chinese and Arabic. It does not translate transcripts.",
    },
  ],

  workflow: {
    heading: "From watching to keeping",
    steps: [
      {
        title: "Click Transcript",
        body: "Open a captioned video on desktop YouTube and click Transcript beside the video actions.",
      },
      {
        title: "Choose a task, or skip",
        body: "Pick an AI task and ChatGPT or Claude, then continue. Or skip and keep just the saved transcript.",
      },
      {
        title: "Find it later",
        body: "Open the extension popup and choose Open Chrome library to search, read, copy or download saved videos.",
      },
    ],
  },

  differentiators: [
    {
      title: "Your AI, no new subscription",
      body: "Many YouTube summarizers run their own AI and cap free summaries. Transcription hands the transcript to ChatGPT or Claude, so you use the account and limits you already have, with no API key.",
    },
    {
      title: "A library, not a one-off summary",
      body: "Summaries are useful once. Transcription keeps the original words in a searchable library you can return to, quote and download.",
    },
    {
      title: "No developer server",
      body: "Saved transcripts stay in Chrome's local storage. There is no Transcription account, analytics or developer cloud, and content goes to an AI provider only when you continue with a task.",
    },
  ],

  faq: [
    {
      q: "Is Transcription free?",
      a: "Yes. The extension is free, with no Transcription subscription or API key. AI tasks use your own ChatGPT or Claude account, including its available free access; that provider's limits and file features apply.",
    },
    {
      q: "What do I need?",
      a: "Desktop Chrome 111 or later and a YouTube video with captions available to your browser session. The extension does not transcribe audio, generate missing captions or bypass restrictions.",
    },
    {
      q: "Can I save transcripts in other languages?",
      a: "Yes, when YouTube provides those captions. To choose a specific language, open YouTube's Show transcript panel and select it before clicking Transcript. Only one current transcript is kept per video.",
    },
    {
      q: "Where is my data stored?",
      a: "In Chrome's local extension storage on your computer. Transcripts are not sent to the developer. If you continue with an AI task, the prompt, video details and transcript go to the assistant you chose, under its policy.",
    },
    {
      q: "Can I back up my library?",
      a: "Yes. In the Chrome library, open Keep a copy of your library and choose Export library data (JSON). There is no import or restore option yet, and uninstalling the extension removes its Chrome data.",
    },
    {
      q: "Is there a Mac app?",
      a: "A Mac companion called Transcript Vault, with notes, stars and a recoverable Trash, is in development. It is not a public download, and the Chrome extension works fully without it.",
    },
  ],

  primaryCta: {
    label: "Add to Chrome",
    href: "https://chromewebstore.google.com/detail/transcription/kmdchpimekjdghancpgjpmljbibppkhe",
    kind: "chrome",
  },
  externalSite: "https://transcription-vault.vercel.app",

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "The Transcript button doesn't appear",
        a: "Refresh any YouTube tabs that were open before you installed the extension. Transcription works on desktop YouTube in Chrome; YouTube layout changes can occasionally affect it.",
      },
      {
        q: "Why couldn't a video be captured?",
        a: "Videos without captions, some live streams, unavailable videos and restricted transcripts cannot be captured. When capture fails, the extension shows a retry instruction and never invents replacement text.",
      },
      {
        q: "Automatic sending to ChatGPT or Claude isn't working",
        a: "Automatic sending needs its own opt-in for each assistant in the popup, plus Chrome's site-access permission. Make sure you are signed in to the assistant. If permission is denied or revoked, Copy & open still works: paste and send yourself. Very long transcripts may need the downloaded .txt file attached manually.",
      },
      {
        q: "Copying or downloading happens every time I save",
        a: "Both are on by default. Open the extension popup and turn off automatic copying or downloading independently. You can also choose whether downloads include timestamps.",
      },
      {
        q: "Where can I report a bug?",
        a: "Open an issue at github.com/Parthmudgal15105/transcription-support/issues or email support. Please do not post private transcript content in a public issue.",
      },
    ],
  },

  privacy: {
    updated: "2026-10-26",
    summary:
      "Transcription saves captions you choose into Chrome's local storage. It has no account, analytics, advertising or developer server, and shares a transcript with ChatGPT or Claude only when you continue with an AI task.",
    sections: [
      {
        heading: "Information processed",
        body: [
          "When you press the Transcript button, the extension reads the selected video's title, channel name, URL, caption language and caption text from YouTube's current page and caption player requests. It processes that information to format and save the transcript. It does not read your clipboard.",
          "The extension stores transcript copies in Chrome's local extension storage. If you have installed the optional Transcript Vault Mac app, the extension can also send a copy through Chrome Native Messaging to that app, which stores it in a local folder on your Mac. Notes, stars and Trash state are stored locally by the Mac app.",
          "Capturing a transcript copies its text to the clipboard and downloads a text file by default. You can turn off either automatic action in the extension settings. Reader buttons also let you copy or download a saved transcript.",
          "When you choose Export library data (JSON), the extension downloads a separate copy of its Chrome transcripts and preferences, including unknown stored fields and unreadable original records. The export excludes the optional Mac app's notes, stars and Trash. It is not sent to the developer and does not change stored originals. Keep the file private; no import or restore interface is provided.",
        ],
      },
      {
        heading: "Where information goes",
        body: [
          "Transcript requests are made to YouTube as part of the video player and its caption service. Transcription has no Transcription account, analytics, advertising, remote transcript server or cloud sync. Transcript data is not sent to the developer. The optional Mac app connection runs between Chrome and an app on the same computer.",
          "Files you download may be backed up or synced by other services you use. Transcription does not provide cloud sync or control those services.",
        ],
      },
      {
        heading: "Optional AI summaries and creation",
        body: [
          "The AI task picker is available by default after saving; you can skip it for any video or turn it off in the extension popup. When you continue from the task picker, the extension copies your selected instructions, video title, source URL, channel (when available) and transcript to the clipboard and opens your chosen assistant, ChatGPT or Claude. With automatic sending off, you paste and send manually. No transcript is automatically uploaded merely by selecting an assistant.",
          "Automatic filling and sending is separately opt-in for each provider and requires optional access to https://chatgpt.com/* or https://claude.ai/*. When enabled, the extension enters and sends the selected prompt and transcript using your signed-in account on that provider's website. This shares the selected content with that provider; its privacy policy and account settings apply. Choosing another assistant does not turn on its automatic sending. Turn either automatic sending or the entire AI handoff off in the popup, or revoke site access in Chrome.",
          "Pending automatic prompts are stored temporarily in Chrome session storage, bound to a single new tab, and expire after two minutes. If a text draft already exists in the new tab, it is backed up in that tab's session storage before replacement, with a manual restore control. Close the tab when you no longer need its backup. These prompts and draft backups are excluded from library exports and are not sent to the developer. The optional provider scripts run only for extension-created handoff and recovery tabs. They do not continuously read your other conversations.",
        ],
      },
      {
        heading: "Your choices and control",
        body: [
          "Use the extension settings to turn off automatic clipboard copying or downloads. Chrome copies can be removed by clearing the extension's local data or uninstalling it. Uninstalling the extension removes its Chrome local storage according to Chrome's behavior.",
          "The Mac app has a recoverable Trash. Uninstalling the Mac app does not automatically delete transcript files already saved on your Mac; you can delete those files from ~/Library/Application Support/Transcript Vault/. Downloaded text files remain in the folder where Chrome saved them after clearing extension data or uninstalling; delete those files separately.",
        ],
      },
      {
        heading: "Limited use",
        body: [
          "Transcription's use of information received from Google services adheres to the Chrome Web Store User Data Policy, including the Limited Use requirements. Transcript data is used only to provide the transcript capture, storage, copy, download, library and optional AI handoff features you request. It is not sold, used for advertising, or shared with third parties by the developer.",
        ],
      },
      {
        heading: "Third-party code",
        body: [
          "Player caption retrieval adapts OpenCLI's YouTube transcript implementation under the Apache 2.0 license. Attribution and the bundled license are included with the extension.",
        ],
      },
      {
        heading: "Changes and contact",
        body: [
          "This policy may be updated when the product's data practices change. The current version will be linked from the Chrome Web Store listing.",
          "Contact: open an issue at https://github.com/Parthmudgal15105/transcription-support/issues or email parthmudgal15105@gmail.com. Please do not post private transcript content in a public support issue.",
        ],
      },
    ],
    ownerToConfirm: [
      "The source policy lists only the GitHub issues page as contact; this page adds parthmudgal15105@gmail.com (the developer email shown on the Chrome Web Store listing). Confirm that email is the intended privacy contact.",
      "The Chrome Web Store listing links https://parthmudgal15105.github.io/transcription-support/ as the privacy policy. Decide whether to keep that as the canonical policy or point the listing here.",
      "The 'Third-party code' section is added from README/THIRD_PARTY_NOTICES.md for transparency; it is not in the original policy. Remove if unwanted.",
    ],
  },

  seoTitle: "Transcription — YouTube transcripts & AI summaries in Chrome",
  seoDescription:
    "Free Chrome extension to save YouTube transcripts in a searchable local library and turn videos into summaries, notes and slides with your ChatGPT or Claude.",
  keywords: [
    "youtube transcript",
    "youtube transcript downloader",
    "youtube summary chrome extension",
    "summarize youtube video chatgpt",
    "youtube summary claude",
    "save youtube transcript",
    "youtube video notes",
  ],
};

export default product;
