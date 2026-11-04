# LocalJudge — research (2026-11-05)

## 1. Target audience
Competitive programmers on Codeforces, AtCoder, CodeChef and CSES who write solutions in VS Code. **[hypothesis]**

## 2. Main problem
Copying sample input/output by hand and eyeballing results is slow and error-prone during contests. **[hypothesis]**

## 3. Core promise
Import samples with one click, run them plus custom tests locally, see verdicts beside the code. **[verified-product]** (published 0.3.1 README via Marketplace gallery API)

## 4. Differentiators
- Published version is **0.3.1** (gallery API: flags "validated, public"; only version listed), not 0.1.0. **[verified-external]** (marketplace.visualstudio.com gallery API, 2026-11-05)
- 5 languages; verdicts AC/WA/CE/RE/TLE/OLE/CANCELLED; first differing token; 2 s test / 15 s compile defaults; 1 MiB output cap. **[verified-product]** (0.3.1 README, package.json)
- Loopback receiver on 127.0.0.1 with pairing token; imports never execute code; no telemetry. **[verified-product]** (0.3.1 README)
- Execution not sandboxed; macOS only tested. **[verified-product]** (0.3.1 README)
- Every problem requires an import ("Import a problem first." in dist/core/store.cjs); the Chrome companion is unpublished. **[verified-product]** (published VSIX dist; LocalJudge/README.md)
- Custom default starter templates and problem-titled filenames exist only in local 0.3.7, not published. **[verified-product]** (LocalJudge/README.md vs published dist)

## 5. Competitors
- Competitive Programming Helper (cph) — https://github.com/agrawal-d/cph — free; pairs with Competitive Companion, many languages, manual tests. **[verified-external]**
- Competitive Companion — https://github.com/jmerle/competitive-companion — free browser extension that parses problems for many tools. **[hypothesis]** (well known; not fetched)
- CPH Plus fork — https://github.com/KevinHuangIsLearning/competitive-programming-helper-plus — adds VJudge, Kattis/Codeforces auto-submit. **[verified-external]**
- CP Editor — https://cpeditor.org — standalone Qt IDE for CP (research snapshot in artifacts/research-2026-10-27). **[verified-product]**
- Codeforces blog on cph — https://codeforces.com/blog/entry/71386 — users note exact-output comparison limits. **[verified-external]**

## 6. Competitor site patterns worth learning from
- cph README leads with a GIF of click → tests → run. A short demo of import-to-verdict would do the same. **[verified-external]**
- Be explicit about checker limits (exact tokens), which users complain about elsewhere. **[proposed-copy]**

## 7. Keywords / search intent
competitive programming VS Code; Codeforces test runner; run test cases locally; competitive programming helper; AtCoder VS Code; CSES local judge; CodeChef sample tests; C++ test cases VS Code; cph alternative. **[hypothesis]**

## 8. Positioning opportunity
"Honest local judge": clear verdicts, careful file handling, authenticated loopback import, and plain statements of what it cannot check. **[proposed-copy]**

## 9. Most persuasive workflows to demo
Import a Codeforces problem → choose C++ → Cmd+Alt+J shows WA with first differing token → fix → AC; add a custom edge case. **[proposed-copy]**

## 10. Recommended page outline + CTA
Hero (stacked, editor screenshot) with status note "Chrome import companion coming soon" → problem → 7 features → workflow → differentiators → FAQ (companion dependency first, sandboxing, requirements, problem fit, price, templates) → CTA "Install for VS Code". **[proposed-copy]**
