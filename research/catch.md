# Catch — research (2026-11-05)

## 1. Target audience
Mac users who think while working (developers, writers, students, meeting-heavy roles) and want to jot a thought without leaving the current app; iPhone users who want a one-tap note from the Home/Lock Screen. **[hypothesis]**

## 2. Main problem
Ideas arrive mid-task; opening a full notes app and navigating to a page costs focus, so thoughts get lost. **[proposed-copy]**

## 3. Core promise
"Catch the thought. Keep your flow." ⌘\ opens, Escape saves and hides. **[verified-product]** (quick-notes/release/catch-1.0/submission/site/index.html, metadata.json)

## 4. Differentiators
- Global ⌘\ menu-bar capture, saves while typing, Escape/⌘Return hides. **[verified-product]** (README.md, support.html)
- Text + .m4a voice notes + pasted screenshots in one note. **[verified-product]** (README.md)
- Mac export to Markdown/TXT/HTML/PDF/Catch Archive ZIP with SHA-256 checksums; iPhone exports ZIP of Markdown + attachments. **[verified-product]** (README.md; quick-notes-ios/CatchIOS/CatchIOSApp.swift ~L607)
- No network client, no account, "Data Not Collected". **[verified-product]** (site/privacy.html; release/catch-ios-1.0/PRIVACY.md)
- iPhone New Note widget (systemSmall, accessoryCircular, accessoryRectangular). **[verified-product]** (CatchWidgets/CatchWidgets.swift)
- No Mac↔iPhone sync (each device has its own library). **[verified-product]** (IOS_RELEASE_STATE.md D5)

## 5. Competitors
- **Tot** — https://apps.apple.com/de/app/tot/id1491071483 — free download, Mac unlock IAP €22.99; minimal text capture with sync across Apple devices. **[verified-external]**
- **Drafts** — https://getdrafts.com — free download (subscription not shown on page); opens to a blank page, capture via widgets/Siri/share extension, Inbox. **[verified-external]**
- **Antinote** — https://antinote.io — $5 one-time; temporary scratchpad with ⌥A global hotkey, math, timer, export to Notes/Obsidian/Bear. **[verified-external]**
- **Noticky / Jot / Meteorite** — menu-bar global-hotkey capture apps, mostly text-only (aggregator listings, e.g. https://onmymenubar-app.pages.dev/blog/quick-note-taking-menubar-apps-that-actually-capture-your-thoughts). **[verified-external]** (secondary sources)
- **Apple Notes Quick Note** — built-in; tied to iCloud and Notes library. **[hypothesis]**

## 6. Competitor site patterns worth learning from
- Lead with the shortcut itself (Antinote shows ⌥A prominently). Show the key, not a paragraph.
- Drafts' "write first, decide later" framing is clear and calm.
- Price/terms stated plainly near the CTA (Antinote: one-time, lifetime updates).

## 7. Keywords / search intent
menu bar notes app Mac · quick capture notes Mac · global hotkey notes · offline notes app · notes app no account · voice notes Mac · Markdown export notes · scratchpad Mac · iPhone note widget · Lock Screen note widget · local-only notes app. **[hypothesis]**

## 8. Positioning opportunity
Most quick-capture apps are either text-only scratchpads or sync-first notebooks. Catch can own "capture text, voice and screenshots locally, export in open formats" with zero accounts. **[proposed-copy]**

## 9. Most persuasive workflows to demo
1. ⌘\ from another app → type → Escape (hero screenshot 01). 2. Folder organization (02). 3. Export dialog with formats (03). 4. iPhone widget → new note (phone shots). **[verified-product]** (screenshots in submission/screenshots, screenshots-b3)

## 10. Recommended page outline + CTA
Hero (headline, in-review pill, Mac hero shot) → problem → features (8) → workflow (4 steps) → iPhone shots → differentiators → FAQ (requirements, price/availability, sync, privacy, export, keyboard layout) → support link. CTA: none until approved (page shows "In App Review"); secondary link to existing support site. **[proposed-copy]**
