import type { Product } from "../types";

// Sources: ../thelooper/README.md, public/index.html, public/app.js,
// public/style.css, vercel.json. Live app checked 2026-11-05 (HTTP 200).
const product: Product = {
  slug: "thelooper",
  name: "TheLooper",
  tagline: "A free loop sketchpad in your browser. Record a layer, stack another, export stems.",
  headline: "Catch an idea. Build it in layers.",
  description:
    "TheLooper is a free browser sketchpad for musical ideas. Record a short loop from your microphone, stack more takes on top, and export aligned WAV stems when you are ready to finish the song elsewhere.",
  category: "Music & audio",
  platforms: ["Web"],
  requirements: "A current desktop browser with microphone access. Wired headphones recommended.",
  status: "available",
  statusNote: "Free · no sign-up",
  order: 10,

  accent: "#a65a3c",
  heroLayout: "stacked",
  icon: "/apps/thelooper/icon.svg",
  screenshots: [
    {
      src: "/apps/thelooper/01-studio.jpg",
      alt: "TheLooper studio with a sketch list on the left, a large record button, play and loop controls, and an empty waveform timeline",
      width: 1440,
      height: 1000,
      frame: "web",
    },
  ],

  problem: {
    heading: "Ideas show up before the studio is ready",
    body: "You hum a bass line in the kitchen or find two chords that work together. By the time a full recording app is open and a project is set up, the idea has faded. TheLooper opens in a browser tab and starts recording a loop in a few seconds.",
  },

  features: [
    {
      title: "Record from your mic",
      body: "Choose an input and record a mono layer. Raw capture with echo cancellation, noise suppression and auto gain turned off.",
    },
    {
      title: "Count-in and click",
      body: "Set the tempo or tap it in, then record after a four-beat count-in. Turn the click on when you want a steady guide.",
    },
    {
      title: "Fixed-length loops",
      body: "Capture exactly 1, 2, 4 or 8 bars at your tempo, or switch to free recording. Loop fitting trims or pads audio and never time-stretches your playing.",
    },
    {
      title: "Layers with mute and solo",
      body: "Stack takes on top of each other. Each layer loops on its own and has its own mute, solo and volume.",
    },
    {
      title: "Trim without losing audio",
      body: "Trim a layer to the part you want and restore the original at any time. A waveform shows every take.",
    },
    {
      title: "Import audio",
      body: "Bring in existing audio files as layers. They are downmixed to mono so they sit with the rest of the sketch.",
    },
    {
      title: "Named sketches",
      body: "Keep several ideas side by side, each with its own name, in a library stored in your browser.",
    },
    {
      title: "Aligned WAV stems",
      body: "Export every layer as a 16-bit PCM WAV file, lined up from the same start point, ready to drop into any audio editor.",
    },
  ],

  workflow: {
    heading: "From hum to stems in four steps",
    steps: [
      {
        title: "Set the groove",
        body: "Pick a tempo and length, such as 90 BPM and 2 bars. Plug in headphones.",
      },
      {
        title: "Record the first layer",
        body: "Press record, listen to the count-in, and play. The take loops as soon as it ends.",
      },
      {
        title: "Stack and balance",
        body: "Add more layers over the loop. Mute, solo, trim and adjust volume until it sounds right.",
      },
      {
        title: "Export stems",
        body: "Download each layer as an aligned WAV file and keep working in your usual audio editor.",
      },
    ],
  },

  differentiators: [
    {
      title: "Built for sketching, not performing",
      body: "Many browser loopers are designed as live loop pedals. TheLooper focuses on saving named ideas and handing clean stems to your editor.",
    },
    {
      title: "Uncompressed, aligned exports",
      body: "Layers are kept as raw audio and exported as aligned 16-bit WAV stems, so they line up when you import them into another app.",
    },
    {
      title: "No account and no server",
      body: "There is nothing to sign up for. Recordings are stored in your browser and never uploaded.",
    },
  ],

  faq: [
    {
      q: "How much does TheLooper cost?",
      a: "It is free. Open it in your browser and start recording. There is no account or sign-up.",
    },
    {
      q: "What do I need?",
      a: "A current desktop browser that allows microphone access. Wired headphones are recommended, because Bluetooth headphones add delay when you record over a loop.",
    },
    {
      q: "Where are my recordings saved?",
      a: "Only in this browser's storage on this device. They are not synced to the cloud. Clearing site data for TheLooper removes them, so export stems regularly.",
    },
    {
      q: "Does it fix timing or latency?",
      a: "No. TheLooper does not time-stretch audio or compensate for hardware latency. Loop fitting trims or pads a take to the chosen length. Listen back and use wired headphones for tighter overdubs.",
    },
    {
      q: "How do I get my sketch into a DAW?",
      a: "Use the export button to download every layer as an aligned 16-bit WAV stem. Export ignores playback mute and volume, so you get every layer at full level. Your browser may ask permission to download several files.",
    },
    {
      q: "Does it support MIDI?",
      a: "No. TheLooper records and plays audio only.",
    },
  ],

  primaryCta: {
    label: "Open TheLooper",
    href: "https://thelooper.vercel.app",
    kind: "web",
  },

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "The microphone does not start",
        a: "Allow microphone access when the browser asks, or enable it in the site settings for thelooper.vercel.app. Input names appear in the Input menu only after permission is granted.",
      },
      {
        q: "My overdubs sound late",
        a: "Use wired headphones. TheLooper does not compensate for hardware latency, and wireless headphones add noticeable delay.",
      },
      {
        q: "My sketches disappeared",
        a: "Sketches live in this browser's storage. Clearing site data, using a private window, or switching browsers or devices means they are not available. Export stems to keep a backup.",
      },
      {
        q: "Only one stem downloaded",
        a: "Your browser may block multiple downloads. Allow multiple downloads for the site and export again.",
      },
      {
        q: "How do I choose the output device?",
        a: "TheLooper plays through your system's audio output. Change it in your computer's sound settings.",
      },
    ],
  },

  privacy: {
    updated: "2026-11-05",
    summary:
      "TheLooper runs entirely in your browser. It uses your microphone only when you record, stores sketches in your browser's local storage, and has no accounts, analytics or backend.",
    sections: [
      {
        heading: "What TheLooper uses",
        body: [
          "Microphone: only after you press Record and your browser grants permission. Audio is processed in your browser with the Web Audio API.",
          "Audio files you import: read in your browser and added to your sketch.",
        ],
      },
      {
        heading: "Where your data is stored",
        body: [
          "Sketches, layers and their names are stored in your browser's IndexedDB on this device. They are not uploaded or synced.",
          "Clearing site data for TheLooper deletes them. Exported WAV stems are saved wherever your browser saves downloads.",
        ],
      },
      {
        heading: "What is sent over the network",
        body: [
          "TheLooper has no backend, account system, analytics or advertising. The app code makes no network requests with your audio or sketch data.",
          "Loading the page downloads the app files from its hosting provider, and the page loads the DM Sans font from Google Fonts. As with any website, those providers receive standard request information such as your IP address and browser type.",
        ],
      },
      {
        heading: "Your control",
        body: [
          "You can revoke microphone access in your browser's site settings at any time.",
          "Delete individual layers in the app, or clear site data to remove everything.",
        ],
      },
      {
        heading: "Contact",
        body: ["Questions about privacy: parthmudgal15105@gmail.com."],
      },
    ],
    ownerToConfirm: [
      "Confirm the hosting provider (Vercel) settings: no Vercel Analytics or Speed Insights enabled for thelooper.vercel.app.",
      "Decide whether to self-host the DM Sans font to remove the Google Fonts request, or keep the disclosure as written.",
    ],
  },

  seoTitle: "TheLooper — Free browser loop sketchpad for musicians",
  seoDescription:
    "Record loops from your mic in the browser, stack layers with mute, solo and trim, save named sketches locally, and export aligned WAV stems. Free, no sign-up.",
  keywords: [
    "online looper",
    "browser loop station",
    "free loop recorder",
    "record song ideas",
    "multitrack sketchpad",
    "export WAV stems",
    "web audio looper",
  ],
};

export default product;
