import type { Product } from "../types";

// Sources: ../published-projects/local-voice (public repo README.md,
// docs/index.html, Interface.swift, LocalVoice.swift, SpeechTranscription.swift).
// Only features present in the public repository are described.
const product: Product = {
  slug: "local-voice",
  name: "Local Voice",
  tagline: "Native Mac dictation for English, Hindi and Hinglish that runs on your own Mac.",
  headline: "Your words, transcribed on your Mac",
  description:
    "Local Voice is an open-source Mac dictation app for English, Hindi and Hinglish. Tap Fn, speak, and get English text or Latin-script Hinglish, with speech recognition running locally after setup.",
  category: "Productivity",
  platforms: ["macOS"],
  requirements:
    "Apple silicon Mac, macOS 14 or later. Building needs Xcode Command Line Tools, Homebrew, Git, uv and several GB of model downloads.",
  status: "open-source",
  statusNote: "Experimental · build from source",
  order: 12,

  accent: "#126c67",
  heroLayout: "split",
  icon: "/apps/local-voice/icon.png",
  screenshots: [
    {
      src: "/apps/local-voice/01-scratchpad.jpg",
      alt: "Local Voice window showing the Scratchpad with a Dictate into scratchpad button, Copy all, and a sidebar with Dictation, Insights, Dictionary, Snippets and Settings",
      width: 1800,
      height: 1021,
      frame: "mac",
    },
  ],

  problem: {
    heading: "Mixed-language speech is hard to type",
    body: "Many people think and talk in a mix of Hindi and English: \"kal meeting ke baad call karte hain.\" Most dictation tools expect one language at a time, or send your voice to a server to make sense of it. Local Voice is built for that mix and keeps recognition on your Mac.",
  },

  features: [
    {
      title: "English, Hindi and Hinglish",
      body: "Speak in English, Hindi or a mix. Choose English translation or Hinglish as spoken in Latin script.",
    },
    {
      title: "Tap or hold Fn",
      body: "Tap Fn to start and again to finish, or hold Fn while you speak and release to process. Escape cancels.",
    },
    {
      title: "Local speech models",
      body: "Recognition uses Whisper Large-v3 through whisper.cpp with Silero voice detection. Hinglish spelling uses AI4Bharat IndicXlit.",
    },
    {
      title: "Scratchpad",
      body: "Dictate into a scratchpad saved only on your Mac, review and edit the text, then copy it all at once.",
    },
    {
      title: "Dictionary and snippets",
      body: "Teach it the spelling of names and terms you use, and set short phrases that expand into longer text.",
    },
    {
      title: "Recovery when something fails",
      body: "If processing fails, a recovery recording lets you retry or copy the recovered text instead of losing what you said.",
    },
    {
      title: "Optional history",
      body: "Transcript history is off by default. Turn it on to search recent dictations; turning it off removes saved history from disk.",
    },
  ],

  workflow: {
    heading: "Set up once, then dictate anywhere",
    steps: [
      {
        title: "Build from source",
        body: "Clone the repository and run ./setup.sh. It installs whisper.cpp, downloads the models and opens the app.",
      },
      {
        title: "Grant permissions",
        body: "In Settings, allow Microphone and Accessibility so Local Voice can hear you and listen for the Fn key.",
      },
      {
        title: "Choose an output",
        body: "Pick English translation or Hinglish as spoken.",
      },
      {
        title: "Tap Fn and talk",
        body: "Speak naturally, tap Fn again, and review the text before you use it.",
      },
    ],
  },

  differentiators: [
    {
      title: "Made for Hinglish",
      body: "Many dictation tools handle Hindi as a separate language. Local Voice adds a transliteration step so mixed speech comes out as readable Latin-script Hinglish.",
    },
    {
      title: "Local inference, no account",
      body: "After setup, recognition runs on your Mac with no account, API key or monthly limit.",
    },
    {
      title: "Open source you can inspect",
      body: "The full Swift source and setup scripts are public, so you can read exactly what runs before you install it.",
    },
  ],

  faq: [
    {
      q: "Is there a download?",
      a: "Not yet. Local Voice is an experimental source build. You build it on your own Mac with ./setup.sh. There is no notarized, Apple-trusted binary, and prebuilt app bundles copied from another Mac are not supported.",
    },
    {
      q: "What do I need?",
      a: "An Apple silicon Mac with macOS 14 or later, Xcode Command Line Tools, Homebrew, Git and uv. Setup needs internet and several GB of free disk space for models. Intel Macs are not supported. The optional Qwen engine via MLX needs macOS 26.2 or later.",
    },
    {
      q: "Does my voice leave my Mac?",
      a: "Setup downloads the models from the internet. After that, local processing keeps speech recognition on your Mac. The private-server mode is disabled in the public source.",
    },
    {
      q: "How accurate is it?",
      a: "Accuracy and speed vary with your hardware, microphone and speech. Recognition and transliteration can make mistakes, especially with names, so review text before you use it. The dictionary helps with words you use often.",
    },
    {
      q: "How much does it cost?",
      a: "It is free to build and use. The repository does not include a license file yet.",
    },
    {
      q: "What is it built on?",
      a: "whisper.cpp and Whisper for speech, optional MLX/Qwen, and AI4Bharat IndicXlit for Hinglish transliteration. Some reliability patterns were adapted from the open-source Handy and OpenWhispr projects under the MIT license; their notices are included in the repository.",
    },
  ],

  primaryCta: {
    label: "View source on GitHub",
    href: "https://github.com/Parthmudgal15105/local-voice",
    kind: "github",
  },
  externalSite: "https://parthmudgal15105.github.io/local-voice/",
  sourceUrl: "https://github.com/Parthmudgal15105/local-voice",

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "The Fn shortcut does nothing",
        a: "Grant Accessibility (Device Control) permission in Settings, then reconnect the shortcut. Disable other Fn bindings and set the macOS Globe key action to Do Nothing.",
      },
      {
        q: "Permission is on but the app says it is unavailable",
        a: "In System Settings, switch Local Voice off and on again in the relevant privacy list, then return to the app.",
      },
      {
        q: "Setup failed or a model is missing",
        a: "Check your internet connection and free disk space, then run ./setup.sh again. For the optional Qwen engine, run ./setup-asr.sh and do not select a model until its setup has finished.",
      },
      {
        q: "Rebuilding after an update",
        a: "Pull the latest source, run ./build.sh, and reopen the app.",
      },
    ],
  },

  privacy: {
    updated: "2026-11-05",
    summary:
      "Local Voice has no account and no cloud sync. After setup downloads the models, local processing keeps speech recognition on your Mac. Settings and optional history stay in a folder on your Mac.",
    sections: [
      {
        heading: "Permissions",
        body: [
          "Microphone: to record your speech while you dictate.",
          "Accessibility (Device Control): to listen for the Fn shortcut and type the result into the app you are using.",
        ],
      },
      {
        heading: "Network use",
        body: [
          "Setup downloads whisper.cpp, speech models, the Silero voice detector and IndicXlit from the internet.",
          "With local Mac processing selected, inference runs entirely on your Mac after setup. The private-server mode is disabled in the public source, and personal endpoint configuration is never loaded.",
          "Local Voice has no account, analytics or cloud sync.",
        ],
      },
      {
        heading: "What is stored on your Mac",
        body: [
          "Preferences, dictionary, snippets, scratchpad text, optional transcript history and recovery recordings may be stored in ~/Library/Application Support/Local Voice.",
          "Transcript history is off by default. Turning it off removes saved history from disk.",
          "Do not share that folder, and check history and learning settings before dictating sensitive speech.",
        ],
      },
      {
        heading: "Contact",
        body: ["Questions about privacy: parthmudgal15105@gmail.com."],
      },
    ],
    ownerToConfirm: [
      "Add a license to the public repository (it has none).",
      "This privacy text is ported from the public README; no separate privacy policy existed. Confirm it.",
      "The icon is taken from the private local-dictation build (Assets/png/size-1024.png); the public build's LocalVoice.icns uses the same ear glyph on black instead of teal. Confirm the teal version is fine for this page.",
    ],
  },

  seoTitle: "Local Voice — Hinglish dictation that runs on your Mac",
  seoDescription:
    "Open-source Mac dictation for English, Hindi and Hinglish. Tap Fn, speak, and get text from local Whisper models. Apple silicon, macOS 14+, build from source.",
  keywords: [
    "Hinglish dictation Mac",
    "Hindi speech to text Mac",
    "offline dictation macOS",
    "local whisper dictation",
    "whisper.cpp Mac app",
    "open source dictation app",
    "voice typing Hindi English",
  ],
};

export default product;
