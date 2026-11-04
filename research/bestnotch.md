# BestNotch — research (2026-11-05)

## 1. Target audience
MacBook users (with or without a notch) who juggle music, files, copied snippets and meetings while working; people using focus/Pomodoro routines. **[hypothesis]**

## 2. Main problem
Small detours (switching to the music app, re-finding a file, re-copying a link) break focus. **[proposed-copy]**

## 3. Core promise
"One calm place for your music, files, clipboard, timers and next actions." **[verified-product]** (BestNotch/website/index.html)

## 4. Differentiators
- Clipboard history opt-in, local, skips concealed content; defaults 200 items / 7 days, adjustable. **[verified-product]** (website/privacy.html; Packages/BestNotchKit/.../ClipboardStore.swift L51)
- Focus session holds low-priority updates and delivers one summary. **[verified-product]** (docs/app-store/METADATA.md)
- Context profiles switch widgets by frontmost app. **[verified-product]** (METADATA.md)
- Shelf stores bookmarks only; originals untouched. **[verified-product]** (docs/security/PRIVACY_DATA_FLOW.md)
- Only network call: Spotify artwork from Spotify CDN. **[verified-product]** (PRIVACY_DATA_FLOW.md)
- ⌥⌘N hotkey; low-battery alerts at 20%/10%. **[verified-product]** (App/Sources/App/AppSettings.swift L60; AppModel.swift L380)

## 5. Competitors
- **NotchNook** — https://lo.cafe/notchnook — Pro $19 lifetime or $3/mo, 48-hour trial; music, calendar join buttons, file tray. **[verified-external]**
- **Alcove** — https://tryalcove.com — $12.99, macOS 15+; Dynamic Island-style live activities and HUDs. **[verified-external]**
- **NotchPop** — https://chatgate.ai/post/notchpop — $3.99–$14.99 one-time tiers; media, drop shelf, clipboard. **[verified-external]** (secondary listing)
- **Bartender Pro Top Shelf** — clipboard and file staging in the notch area (https://forums.macrumors.com/threads/bartender-pro-brings-widgets-clipboard-and-file-storage-to-the-macbook-notch.2482292/). **[verified-external]**
- **NotchNest / NotchThings** — free with IAP on the App Store. **[verified-external]** (https://apps.apple.com/us/app/notchthings/id6762610441)

## 6. Competitor site patterns worth learning from
- Lead with a short animated/visual of the panel; feature cards by module.
- State trial/pricing and Mac requirements near the CTA (NotchNook).
- Answer "works without a notch?" early; it is a top question.

## 7. Keywords / search intent
Mac notch app · dynamic island for Mac · notch file shelf · clipboard history Mac · Pomodoro timer menu bar · now playing notch · MacBook notch utilities · notch app free · drag and drop shelf Mac. **[hypothesis]**

## 8. Positioning opportunity
Crowded category; stand out on privacy (opt-in clipboard, single documented network call) and focus behavior (held updates), not on feature count. **[proposed-copy]**

## 9. Most persuasive workflows to demo
Now Playing → File Shelf drag → focus timer with held updates → status/profile tiles. Screenshots are app-rendered UI with demo data; captions must say "sample data". **[verified-product]** (docs/app-store/METADATA.md)

## 10. Recommended page outline + CTA
Stacked hero (wide panel shot) → problem → 8 module features → 3-step workflow → differentiators → FAQ (requirements/no notch, price/availability, music apps, Shelf safety, privacy, full screen) → support (email + GitHub issues). No primary CTA until approval. Do not name other notch apps on the page. **[proposed-copy]**
