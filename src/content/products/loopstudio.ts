import type { Product } from "../types";

// Sources: bounce/AppStore/STORE-METADATA-1.0.md, bounce/AppStore/site/{support,privacy}.html,
// bounce/Sounds/README.md, bounce/Bounce.swift, bounce-ios/AppStore/STORE-METADATA-iOS-1.0.md,
// bounce-ios/AppStore/ios-1.0/RELEASE-GATES.md, bounce-ios/iOS/* (LibraryModel, CalibrationRunner, UI/Theme.swift).

const product: Product = {
  slug: "loopstudio",
  name: "LoopStudio",
  tagline: "Record guitar, voice, or MIDI, layer more parts, and export stems for your DAW.",
  headline: "Keep the idea. Build it layer by layer.",
  description:
    "LoopStudio is a musical sketchbook for Mac, iPhone, and iPad. Record a first take, add layers over it, and export WAV stems and MIDI when you are ready to produce.",
  category: "Music & audio",
  platforms: ["macOS", "iOS", "iPadOS"],
  requirements: "Apple silicon Mac with macOS 27 or later · iPhone or iPad with iOS/iPadOS 26 or later",
  status: "in-review",
  statusNote: "Mac, iPhone, and iPad versions in App Review",
  featured: true,
  order: 5,

  accent: "#C42230",
  heroLayout: "split",
  icon: "/apps/loopstudio/icon.png",
  screenshots: [
    {
      src: "/apps/loopstudio/01-layers-light.jpg",
      alt: "LoopStudio on Mac showing a two-layer sketch with a waveform, layer volume, mute and solo controls, and the record button",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
    {
      src: "/apps/loopstudio/02-midi-dark.jpg",
      alt: "LoopStudio on Mac in dark mode with the Grand Piano instrument and on-screen keys for musical typing",
      width: 1800,
      height: 1125,
      frame: "plain",
    },
    {
      src: "/apps/loopstudio/03-iphone-layers.jpg",
      alt: "LoopStudio on iPhone showing a sketch with Voice and Guitar tracks, mute, solo and loop buttons",
      width: 736,
      height: 1600,
      frame: "phone",
    },
    {
      src: "/apps/loopstudio/04-iphone-library.jpg",
      alt: "LoopStudio sketch library on iPhone with a Record New Idea button",
      width: 736,
      height: 1600,
      frame: "phone",
    },
    {
      src: "/apps/loopstudio/05-ipad-sketch.jpg",
      alt: "LoopStudio on iPad with the sketch list beside a two-track sketch",
      width: 1350,
      height: 1800,
      frame: "plain",
    },
  ],

  problem: {
    heading: "Voice memos are where song ideas go to get lost",
    body: "You hum a melody into your phone, then find a guitar part that fits it a week later. Now they are two separate recordings, neither in time with the other, and getting them into Logic means trimming and lining them up by hand. LoopStudio keeps the parts of an idea together as layers and hands them to your DAW as stems.",
  },

  features: [
    {
      title: "Record guitar, voice, or MIDI",
      body: "Choose a source and press Record. On Mac, pick the audio input and channel in Options; each audio take records one mono input channel to a WAV file.",
    },
    {
      title: "Layered overdubs",
      body: "Record a new layer while earlier layers play. Rename layers, set their volume, mute or solo them, and undo a removed layer.",
    },
    {
      title: "Calibrated overdubs on iOS",
      body: "A one-time calibration for your audio route keeps new layers lined up with what you heard. LoopStudio tells you when a route needs calibrating and does not offer aligned overdubs over Bluetooth.",
    },
    {
      title: "MIDI keyboards and on-screen keys",
      body: "Play a connected MIDI keyboard or controller on Mac, or use the on-screen keys and musical typing. MIDI takes keep the performance alongside the recorded sound.",
    },
    {
      title: "Included sampled instruments",
      body: "Eight sounds on Mac, including grand and upright piano, electric piano, guitars, bass, strings, and pad. Seven are included on iPhone and iPad. All are bundled and play offline.",
    },
    {
      title: "Tempo, count-in, and loops",
      body: "On Mac, set tempo and meter or tap along to your phrase, use a one-bar count-in and metronome, record 1, 2, or 4 bars, and trim a phrase into a loop.",
    },
    {
      title: "Stems ready for your DAW",
      body: "Export a folder of numbered WAV stems, a .mid file for each MIDI layer, and a read-me that tells your DAW how to line them up.",
    },
    {
      title: "Local and account-free",
      body: "No account, cloud sync, advertising, or analytics. Recordings stay on your device until you export them.",
    },
  ],

  workflow: {
    heading: "From first take to Logic",
    steps: [
      { title: "Capture the idea", body: "Start a sketch and record a vocal, a guitar phrase, or a MIDI part on the included instruments." },
      { title: "Add layers", body: "Record more parts over it. Mute, solo, and balance them until the sketch makes sense." },
      { title: "Export stems", body: "Export numbered WAV stems and MIDI files to a folder you choose, or to Files on iPhone and iPad." },
      { title: "Keep producing", body: "Import the stems at the same timeline position in Logic or another DAW, and put the MIDI on any instrument you like." },
    ],
  },

  differentiators: [
    {
      title: "A sketchbook, not a full studio",
      body: "Mobile studios and DAWs offer clip launching, effects chains, and mixing. LoopStudio keeps to record, layer, and export, so getting a first take down is quick.",
    },
    {
      title: "Built to hand off to your DAW",
      body: "Instead of keeping work inside its own project format, every export is plain WAV stems and standard MIDI files with a read-me, ready to drop into a production session.",
    },
    {
      title: "No account or cloud required",
      body: "Popular free music apps ask you to sign in and store projects online. LoopStudio works offline with bundled instruments and keeps your recordings on your device.",
    },
  ],

  faq: [
    {
      q: "What do I need?",
      a: "On Mac, an Apple silicon Mac with macOS 27 or later. On iPhone and iPad, iOS or iPadOS 26 or later. Recording guitar or voice needs microphone permission; MIDI recording does not.",
    },
    {
      q: "When is it available, and how much is it?",
      a: "LoopStudio for Mac, iPhone, and iPad has been submitted to the App Store and is waiting for review. Pricing will be shown on the App Store listing when it is approved.",
    },
    {
      q: "Do projects sync between my Mac and iPhone?",
      a: "No. Projects stay on the device where you made them. To move a sketch, export it and import the audio on the other device. One App Store purchase includes both versions.",
    },
    {
      q: "Does LoopStudio handle recording latency?",
      a: "On iPhone and iPad, a one-time calibration per audio route keeps overdubs aligned. The Mac version does not compensate for latency automatically, so wired headphones work best for overdubs there. Bluetooth audio adds delay on every device.",
    },
    {
      q: "Does LoopStudio collect my recordings?",
      a: "No. It has no account, analytics, advertising, or tracking, and makes no network connections. Everything stays on your device until you export or delete it.",
    },
    {
      q: "Where do the instrument sounds come from?",
      a: "They are free sampled instruments bundled unchanged under their own licenses. Grand Piano (Mac) uses Salamander Grand Piano by Alexander Holm (CC BY 3.0), SF2 edition from FreePats. Warm Upright uses Upright Piano KW from FreePats (CC0). The other instruments use MuseScore General (MIT). Credits are also in the app and in each instrument export.",
    },
  ],

  externalSite: "https://bounce-music-support.vercel.app",

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "Guitar or Voice recording is silent",
        a: "LoopStudio needs microphone permission. If you denied it, open System Settings → Privacy & Security → Microphone on Mac (or Settings → Privacy & Security → Microphone on iPhone and iPad) and enable LoopStudio. On Mac, choose the input device and channel in Options and use the microphone button to check the level.",
      },
      {
        q: "My MIDI keyboard is not responding (Mac)",
        a: "Check the selected MIDI input in Options and use Refresh MIDI after reconnecting. If LoopStudio reports \"Could not open MIDI,\" reconnect the controller and choose Enable piano to retry. If it keeps happening, email the exact message and your device details.",
      },
      {
        q: "Overdubs sound out of time",
        a: "On iPhone and iPad, run the calibration when LoopStudio asks, using the built-in speaker or wired audio rather than Bluetooth. On Mac there is no automatic latency compensation; wired headphones are best for overdubs.",
      },
      {
        q: "Importing stems into my DAW",
        a: "Import every WAV stem at the same timeline position. Stems keep their original levels, including muted layers, and the read-me lists each stem's sample rate. Import the .mid file to use a different instrument.",
      },
      {
        q: "After an unexpected quit",
        a: "On Mac, LoopStudio tries to recover interrupted audio at the next launch from a repaired copy and keeps the original file. The end of the take may be missing, so listen before relying on it, and contact support before deleting recovery files.",
      },
    ],
  },

  privacy: {
    updated: "2026-11-01",
    summary:
      "LoopStudio does not collect, transmit, sell, or share any personal data. It has no account, analytics, advertising, tracking, or crash reporting, and it makes no network connections. Everything it creates stays on your device until you export or delete it.",
    sections: [
      {
        heading: "About this policy",
        body: [
          "LoopStudio (previously named Bounce during development) is an app for recording musical ideas. It works entirely on your device. This policy describes what LoopStudio does with information, based on how the app is built. Developer: Parth Mudgal.",
        ],
      },
      {
        heading: "Microphone and audio input",
        body: [
          "LoopStudio asks for microphone access. On Mac it uses the microphone or the selected audio input only while you record a Guitar or Voice layer and while you use the input level check (the microphone button). On iPhone and iPad it also uses the microphone during the optional overdub calibration, which plays a few clicks through the speaker and measures them.",
          "There is no live monitoring and no background recording. If you close the last LoopStudio window during a recording on Mac, the recording stops and is saved. You can allow or deny access at any time in System Settings → Privacy & Security → Microphone. MIDI recording does not use the microphone.",
        ],
      },
      {
        heading: "MIDI",
        body: [
          "When MIDI is selected as the source on Mac, LoopStudio listens to connected MIDI keyboards and controllers (all of them, or one you choose), the on-screen keys, and computer-keyboard keys used for musical typing. Notes are played on the device using sounds included in the app.",
          "When you record, the performance (notes, velocity, sustain, pitch bend, and controller messages) is saved with the take and as a standard MIDI (.mid) file.",
        ],
      },
      {
        heading: "What LoopStudio stores on your device",
        body: [
          "Your recordings as WAV audio files and MIDI takes as .mid files.",
          "Sketch details in library.json: titles, notes, tempo, meter, layer names, volume, mute, and recorded MIDI performance data.",
          "Recording preferences: chosen input and output devices, input channels, recording length, count-in and metronome settings, MIDI input, instrument, and reverb. The light/dark appearance choice is stored in the app's preferences.",
          "While a take is recording on Mac, a small note in the \"Takes in progress\" folder naming its audio file. It is removed when the take is saved. If LoopStudio quits unexpectedly, it uses that note at the next launch to add the recovered audio as a layer marked \"(recovered)\", made from a repaired copy; the original file is kept.",
          "Your device's own backups (for example, Time Machine) may include these files; LoopStudio does not control that.",
        ],
      },
      {
        heading: "What deleting keeps",
        body: [
          "So that mistakes can be undone or recovered: Delete recording moves the sketch's details to the \"Deleted sketches\" folder and keeps its audio files. Deleting a layer keeps its audio so it can be restored with Undo. Trim and Make loop keep the original take and save a \"before-trim\" copy of the sketch details. If the library file cannot be read, LoopStudio leaves it untouched, saves a copy of it, and saves new changes to a separate file. Import Audio copies the chosen audio files into the library; the originals are not changed.",
          "To delete everything permanently on Mac, quit LoopStudio and delete its library folder. Help → LoopStudio Privacy & Help shows the folder location and can open it in Finder.",
        ],
      },
      {
        heading: "Exports",
        body: [
          "When you export, LoopStudio writes numbered WAV files, matching .mid files for MIDI layers, a \"Read me.txt\" file, and (for instrument layers) a \"Sound Credits.md\" file to a new folder in the location you choose. Exported files are ordinary files under your control; LoopStudio does not track or upload them.",
        ],
      },
      {
        heading: "Permissions",
        body: [
          "On Mac, LoopStudio runs in the macOS App Sandbox and requests only microphone access and access to the files and folders you choose in the Import Audio and Export dialogs.",
        ],
      },
      {
        heading: "Children",
        body: ["LoopStudio does not collect personal information from anyone, including children."],
      },
      {
        heading: "This website and support email",
        body: [
          "The statements above describe the LoopStudio app. Visiting this website sends ordinary web request information, such as your IP address, browser information, requested page, and request time, to the hosting provider to serve and protect the site. The site has no analytics scripts, advertising, contact forms, or account system.",
          "If you email support, your email address, message, and any attachments you choose to send are received to respond to your request. Do not send private recordings or your complete library unless you intend to share them. Support correspondence is separate from the app, which does not automatically send any recordings or other data.",
        ],
      },
      {
        heading: "Changes and contact",
        body: [
          "If a future version changes how LoopStudio handles information, this policy will be updated before that version is released, and the effective date will change.",
          "Questions about this policy: parthmudgal15105@gmail.com.",
        ],
      },
    ],
    ownerToConfirm: [
      "The live LoopStudio policy (bounce-music-support.vercel.app/privacy) describes only the Mac app. This version adds iPhone/iPad wording (microphone use during overdub calibration) based on bounce-ios/AppStore/STORE-METADATA-iOS-1.0.md. Confirm iOS storage details (library.json, Deleted sketches, recovery notes) match the iOS build, and update the live policy.",
      "The live policy names Vercel as the website host; this version says 'the hosting provider'. Confirm the hosting statement for parthmudgal.com.",
      "Pricing: the brief mentions a planned paid price that was not applied at submission. The page avoids stating a price; confirm before approval.",
    ],
  },

  seoTitle: "LoopStudio — Record and layer song ideas on Mac and iPhone",
  seoDescription:
    "LoopStudio is a songwriting sketchpad for Mac, iPhone and iPad. Record guitar, voice or MIDI, layer overdubs, and export WAV stems and MIDI for Logic or a DAW.",
  keywords: [
    "songwriting sketch app",
    "overdub recorder iPhone",
    "record guitar on Mac",
    "export WAV stems",
    "MIDI recorder Mac",
    "layer recording app",
    "song idea recorder",
  ],
};

export default product;
