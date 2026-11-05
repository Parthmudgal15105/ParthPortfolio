// Personal / portfolio content for the homepage. Facts carried over from the
// previous portfolio (src/constants + components on archive/vite-live-snapshot).

export const site = {
  url: "https://parthmudgal.com",
  name: "Parth Mudgal",
  role: "Independent software developer",
  location: "Delhi, India",
  email: "parthmudgal15105@gmail.com",
  description:
    "Parth Mudgal builds focused, privacy-respecting apps for Mac, iPhone and Chrome — Closer, Catch, LoopStudio, Palmdeck and more — plus backend and AI systems.",
  links: {
    github: "https://github.com/Parthmudgal15105",
    linkedin: "https://www.linkedin.com/in/parth-mudgal-aa0961240/",
    codeforces: "https://codeforces.com/profile/Parthmudgal15105",
    codechef: "https://www.codechef.com/users/parthmudgal151",
  },
  resume: "/resume.pdf",
} as const;

export const stack: { label: string; items: string }[] = [
  { label: "Apple platforms", items: "Swift, SwiftUI, AppKit, WebKit, AVFoundation, Network.framework" },
  { label: "Languages", items: "Swift, C++, TypeScript, JavaScript, Python" },
  { label: "Web & backend", items: "React, Next.js, Node.js, Express, FastAPI, Socket.io" },
  { label: "Data & infra", items: "PostgreSQL, MongoDB, Redis, BullMQ, Qdrant, Docker, Linux" },
  { label: "AI", items: "On-device speech (whisper.cpp, MLX), agents, RAG, tool calling" },
  { label: "Extensions", items: "Chrome MV3, VS Code extension API" },
];

export const timeline: { when: string; title: string; org: string; body: string }[] = [
  {
    when: "2026 — now",
    title: "Independent developer",
    org: "Mac, iPhone & Chrome apps",
    body: "Designing, building and shipping my own apps end to end — from native code and privacy manifests to App Store submissions and product sites.",
  },
  {
    when: "Jun — Jul 2026",
    title: "IT Intern — Software Testing / Product Research",
    org: "Wings2Aspirations Start Up India Pvt. Ltd. · Remote",
    body: "Functional, usability and AI-output testing for MakeMyCareer.AI and Classis.ai; user, competitor and feature research for Haajri.in.",
  },
  {
    when: "2023 — now",
    title: "B.Tech, Computer Science Engineering",
    org: "Maharaja Agrasen Institute of Technology, Delhi",
    body: "CGPA 8.12. Helped grow MAIT’s competitive programming community to 500+ students and coordinated industry seminars for 100+ participants.",
  },
];

export const achievements: { label: string; value: string; href: string }[] = [
  { label: "Codeforces Specialist · max rating", value: "1417", href: site.links.codeforces },
  { label: "CodeChef 3★ · max rating", value: "1671", href: site.links.codechef },
  { label: "Best CodeChef rank (Starters 180)", value: "#284", href: site.links.codechef },
  { label: "MAIT CP community grown to", value: "500+", href: site.links.github },
];

/** Engineering projects that aren't consumer products (no landing page). */
export const projects: {
  name: string;
  kind: string;
  body: string;
  stack: string;
  links: { label: string; href: string }[];
}[] = [
  {
    name: "CodeDuel",
    kind: "Full-stack online judge",
    body: "Submit code, run hidden test cases and get a verdict. Redis and BullMQ drive asynchronous evaluation inside resource-limited Docker sandboxes on a Linux home server.",
    stack: "React · Node.js · Redis · BullMQ · Docker",
    links: [
      { label: "codeduel.online", href: "https://codeduel.online" },
      { label: "Source", href: "https://github.com/Parthmudgal15105/CodeDuel" },
    ],
  },
  {
    name: "HomeServerAI",
    kind: "Bounded AI operations agent",
    body: "Investigates server incidents with local LLMs and retrieved runbooks. Diagnostic tools, execution budgets, approval gates and audit trails keep every action controlled.",
    stack: "FastAPI · Ollama · Qdrant · PostgreSQL",
    links: [{ label: "Source", href: "https://github.com/Parthmudgal15105/HomeAiAgent" }],
  },
  {
    name: "Codex Flow",
    kind: "Experimental Mac workspace for the Codex CLI",
    body: "Projects, conversations, file changes and previews in one native window, with Ask and Build modes and saved context between sessions.",
    stack: "Swift · Node.js",
    links: [{ label: "Source", href: "https://github.com/Parthmudgal15105/codex-flow" }],
  },
  {
    name: "TONE3000 plugin",
    kind: "Open-source contribution",
    body: "Contributed a “Hear Yourself” header control to TONE3000’s open-source JUCE guitar-tone plugin.",
    stack: "C++ · JUCE",
    links: [{ label: "Pull request", href: "https://github.com/tone-3000/tone3000-plugin/pull/248" }],
  },
];
