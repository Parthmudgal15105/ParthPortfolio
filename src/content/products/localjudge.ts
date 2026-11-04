import type { Product } from "../types";

// Sources: VS Code Marketplace gallery API (parthmudgal.localjudge, published
// version 0.3.1, flags "validated, public", checked 2026-11-05), the published
// 0.3.1 README and package.json, and ../LocalJudge/README.md. Only features in
// the published 0.3.1 build are claimed below.
const product: Product = {
  slug: "localjudge",
  name: "LocalJudge",
  tagline: "Run competitive programming samples and your own tests locally, right inside VS Code.",
  headline: "Judge your solution before you submit",
  description:
    "LocalJudge is a VS Code extension that runs your C++, C, Java, Python or JavaScript solution against a problem's sample tests and your own cases. Verdicts, timing and the first wrong token show up next to your code.",
  category: "Developer tools",
  platforms: ["VS Code"],
  requirements:
    "VS Code 1.106 or later. Tested on macOS. Needs the compiler or runtime for your language (clang++, clang, a JDK, python3 or node).",
  status: "beta",
  statusNote: "Chrome import companion coming soon",
  order: 11,

  accent: "#86efac",
  accentInk: "#17251f",
  heroLayout: "stacked",
  icon: "/apps/localjudge/icon.svg",
  screenshots: [
    {
      src: "/apps/localjudge/01-custom-tests.jpg",
      alt: "VS Code with a C++ solution, the LocalJudge custom tests editor showing input and expected output fields, and a results log with an accepted sample and a wrong-answer custom test",
      width: 1800,
      height: 1042,
      frame: "mac",
    },
  ],

  problem: {
    heading: "Copying samples by hand is slow and error-prone",
    body: "During a contest you copy the sample input into a terminal, run your program, and squint at the output to compare it with the statement. Do that for three samples and two edge cases on every change and the minutes add up. LocalJudge keeps the tests with the problem and checks them in one command.",
  },

  features: [
    {
      title: "Five languages",
      body: "Write in C++, C, Java, Python or JavaScript. Each language gets its own solution file and shares the same tests.",
    },
    {
      title: "Clear verdicts",
      body: "Every test reports AC, WA, CE, RE, TLE, OLE or CANCELLED, with local timing and compiler diagnostics when a build fails.",
    },
    {
      title: "First wrong token",
      body: "Wrong answers point to the first differing token, including missing or extra output, with full expected and actual output below.",
    },
    {
      title: "Custom tests",
      body: "Add, edit and remove your own input and expected-output cases. They are saved with the problem and kept when samples are imported again.",
    },
    {
      title: "Starter code per language",
      body: "New solution files start from a built-in template for the chosen language, so you can begin typing the logic straight away.",
    },
    {
      title: "One shortcut to run",
      body: "Press Cmd+Alt+J on macOS or Ctrl+Alt+J elsewhere to save and judge the current solution. Cancel a long run at any time.",
    },
    {
      title: "Your own toolchain",
      body: "Set compiler and runtime paths, arguments and the time limit in VS Code settings. Commands run directly, without a shell.",
    },
  ],

  workflow: {
    heading: "How a problem flows through LocalJudge",
    steps: [
      {
        title: "Import the samples",
        body: "Open a problem on Codeforces, AtCoder, CodeChef or CSES and click the LocalJudge companion in Chrome. The samples land in your VS Code workspace.",
      },
      {
        title: "Pick a language",
        body: "Choose a solution language. LocalJudge opens a starter file for it beside the tests.",
      },
      {
        title: "Run the tests",
        body: "Press Cmd+Alt+J. Each sample and custom test gets a verdict and timing.",
      },
      {
        title: "Add edge cases",
        body: "Open Edit Custom Tests, add the cases you are worried about, and run again before you submit.",
      },
    ],
  },

  differentiators: [
    {
      title: "Honest about what it checks",
      body: "Comparison is exact, whitespace-separated tokens. It says plainly that floating-point tolerance, multiple valid answers and interactive problems need the official judge.",
    },
    {
      title: "Paired, local-only import",
      body: "The browser companion talks to VS Code over 127.0.0.1 with a pairing token, and imports never run code. Nothing goes through a hosted service.",
    },
    {
      title: "Careful with your files",
      body: "Reimporting a problem replaces only the samples. Your solutions and custom tests are preserved, and corrupt data is never silently reset.",
    },
  ],

  faq: [
    {
      q: "Can I use LocalJudge without the Chrome companion?",
      a: "Not yet. In the current version, every problem starts with an import from the LocalJudge Chrome companion, which is not yet available in the Chrome Web Store. The companion is coming soon; until then the extension cannot create a problem on its own.",
    },
    {
      q: "Is my code sandboxed?",
      a: "No. Your solution runs on your computer with your user permissions. Each test starts in a fresh temporary folder, but the program can still read and write files elsewhere. Only run code you trust.",
    },
    {
      q: "What do I need?",
      a: "VS Code 1.106 or later, a trusted single-folder local workspace, and the compiler or runtime for your language: clang++ for C++, clang for C, a JDK for Java, python3 for Python or node for JavaScript. macOS is the tested platform. Remote and multi-root workspaces are not supported.",
    },
    {
      q: "Which problems does it handle?",
      a: "Ordinary, non-interactive problems whose answers can be checked as exact tokens. Extra spaces and line breaks are ignored, but 3.0 does not match 3. Passing samples does not guarantee acceptance on hidden tests.",
    },
    {
      q: "How much does it cost?",
      a: "LocalJudge is free on the VS Code Marketplace.",
    },
    {
      q: "Can I set my own starter template?",
      a: "Custom default templates per language are coming in the next update. The current version uses a built-in starter for each language.",
    },
  ],

  primaryCta: {
    label: "Install for VS Code",
    href: "https://marketplace.visualstudio.com/items?itemName=parthmudgal.localjudge",
    kind: "vscode",
  },

  support: {
    email: "parthmudgal15105@gmail.com",
    topics: [
      {
        q: "Pairing with Chrome",
        a: "Run LocalJudge: Pair Chrome in VS Code and paste the companion's extension ID. The pairing token is copied to your clipboard; paste it into the companion's settings and save. Both sides default to port 27121. Pairing again rotates the token.",
      },
      {
        q: "The port is already in use",
        a: "Another VS Code window may own the receiver. Stop it there, or set a different localjudge.port on both sides.",
      },
      {
        q: "Compile or run commands fail",
        a: "Install the tool for your language and set its path in LocalJudge settings. Java needs a JDK that provides both javac and java.",
      },
      {
        q: "\"Problem is locked\" after a crash",
        a: "Close all LocalJudge windows, back up the problem's .localjudge folder, then remove only its empty .write-lock folder and reopen. Never remove a lock while another save may be running.",
      },
      {
        q: "LocalJudge asks me to trust the workspace",
        a: "LocalJudge only works in a trusted, single-folder local workspace. Trust the folder through VS Code's workspace trust prompt.",
      },
    ],
  },

  privacy: {
    updated: "2026-11-05",
    summary:
      "LocalJudge has no hosted service, account, analytics or telemetry. Problems, tests and solutions stay in your workspace, and the browser connection is limited to your own computer.",
    sections: [
      {
        heading: "What LocalJudge stores",
        body: [
          "Imported samples, custom tests, your selected language and solution files are saved in your VS Code workspace, in a .localjudge folder and your solution files.",
          "The pairing token is stored in VS Code SecretStorage and in the companion's local browser extension storage.",
          "Uninstalling the extension does not delete your solutions or tests.",
        ],
      },
      {
        heading: "Network connections",
        body: [
          "The VS Code extension listens only on 127.0.0.1 (your own computer). It accepts requests only from the paired companion extension with a valid token, and it never accepts source code or instructions to run anything.",
          "LocalJudge does not send your code, tests or usage data to any server.",
        ],
      },
      {
        heading: "Running your code",
        body: [
          "Compilation and execution happen only when you run tests. Programs run locally with your user permissions and are not sandboxed.",
        ],
      },
      {
        heading: "Your control",
        body: [
          "Revoke Chrome Pairing stops imports and deletes the editor's token. Stop Receiver stops listening for imports.",
          "The pairing token is copied to your clipboard during setup. Keep it private and clear your clipboard after pasting it if you like.",
        ],
      },
      {
        heading: "Contact",
        body: ["Questions about privacy: parthmudgal15105@gmail.com."],
      },
    ],
    ownerToConfirm: [
      "Published Marketplace version is 0.3.1 (not 0.1.0 as recorded in SUBMISSION.md); confirm this page should describe 0.3.1.",
      "Status set to \"beta\" by the orchestrator because the published extension cannot import a problem without the unpublished Chrome companion. Switch to \"available\" once the companion is live.",
      "No public LocalJudge privacy policy existed before this page; review this policy before the Chrome companion is submitted (it adds Chrome-side permissions: activeTab, scripting, storage, 127.0.0.1 host access).",
      "Choose a license; the published extension declares none.",
    ],
  },

  seoTitle: "LocalJudge — Local test runner for competitive programming",
  seoDescription:
    "Run Codeforces, AtCoder, CodeChef and CSES samples plus custom tests locally in VS Code. C++, C, Java, Python and JavaScript, with clear verdicts. Free.",
  keywords: [
    "competitive programming VS Code",
    "Codeforces test runner",
    "run sample test cases locally",
    "competitive programming helper",
    "AtCoder VS Code extension",
    "CSES local judge",
    "C++ test cases VS Code",
  ],
};

export default product;
