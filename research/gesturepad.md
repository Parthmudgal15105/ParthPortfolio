# GesturePad — research (2026-11-05)

## 1. Target audience
Mac users who sit back from the keyboard: people reviewing pages in a browser, coders in VS Code, musicians in Logic Pro, and anyone who wants mute/skip/undo from the device in their hand **[verified-product]** (profiles shown in `release/screenshots/mac-2.jpg`). Users who find button-deck remotes too visual or fiddly **[hypothesis]**.

## 2. Main problem
Simple Mac actions require reaching for the keyboard and finding the right keys, which interrupts listening, reviewing or presenting **[proposed-copy]**. The site's own framing: "Less looking. More doing." **[verified-product]** (`website/index.html`).

## 3. Core promise
"Turn your iPhone or iPad into a gesture canvas for your Mac. Draw a symbol, tap or swipe." **[verified-product]** (`website/index.html`).

## 4. Differentiators
- Drawn-symbol recognition (built-in shapes + custom recorded symbols) alongside 1–5 finger taps, double taps, long presses, swipes, pinch, rotate **[verified-product]** (`GestureCore/GestureKey.swift`, `BuiltInSymbols.swift`, iPhone welcome screen).
- Per-app profiles with Everywhere fallback and manual lock **[verified-product]** (`website/support/index.html`).
- Ordered workflows with delays; Practice mode that sends nothing **[verified-product]** (same).
- QR/12-character one-time pairing codes (5-minute expiry), PSK-TLS over Bonjour **[verified-product]** (`GestureNet/PSKTLS.swift`, `release/REVIEW-REPLY-2.4.5-MAC.md`).
- No account, no developer relay, no analytics SDK **[verified-product]** (`website/privacy/index.html`).

## 5. Competitors
| Product | URL | Price shown | Strength |
|---|---|---|---|
| DeckPilot | https://apps.apple.com/us/app/-/id6759764711 | Free; Pro $7.99/mo, $39/yr, $79 lifetime | Button decks + 2/3-finger swipe gestures, Watch **[verified-external]** |
| choclift | https://chatgate.ai/post/choclift | Free + "Added Sugar" subscription | iPhone launcher for Mac apps/Shortcuts, some gesture actions **[verified-external]** |
| BetterTouchTool + BTT Mobile | https://folivora.ai/buy | $15 / $25 lifetime | Mac gesture/trigger powerhouse, iPhone companion **[verified-external]** |
| KeyBindControl | https://apps.apple.com/app/id6758721478 | not checked | iPhone/iPad macro pad for Mac/Windows shortcuts **[verified-external]** (search listing) |
| Elgato Stream Deck Mobile | https://apps.apple.com/us/app/elgato-stream-deck-mobile/id1440014184 | Free; Pro from $2.99/mo | Ecosystem leader for button decks **[verified-external]** |

No listing found that recognises drawn shapes on iPhone to trigger Mac actions **[verified-external]** (WebSearch, 2026-11-05) — a genuine gap, though absence of evidence is not proof **[hypothesis]**.

## 6. Competitor site patterns worth learning from
- Show the gesture itself (a trail on the canvas) next to the result on the Mac; GesturePad's own site already uses a flowing "M" illustration **[verified-product]**.
- A small "gesture → action" table (two-finger swipe right → Next Track) explains faster than prose **[proposed-copy]** (from `iphone-3-gestures.png`).
- Be explicit about iPad multitasking conflicts; honesty reduces support load **[hypothesis]**.

## 7. Keywords / search intent
control mac with iphone · iphone gesture control mac · custom gestures mac shortcuts · iphone remote for mac · ipad as mac controller · draw gestures shortcuts · mac shortcut remote app · per app shortcuts mac · iphone trackpad gestures mac · logic pro remote gestures **[hypothesis]**.

## 8. Positioning opportunity
"Gestures, not grids": the only Mac remote focused on eyes-free symbols and multi-finger gestures with per-app meanings, fully local **[proposed-copy]**.

## 9. Most persuasive workflows to demo
1. Draw M → mute/unmute anywhere **[verified-product]** (`mac-1.jpg`).
2. Two-finger swipe left/right → previous/next track **[verified-product]** (`iphone-3-gestures.png`).
3. Same Z gesture → ⌘Z in VS Code vs a different action in Logic Pro **[proposed-copy]** (profiles exist; exact mapping is illustrative).

## 10. Recommended page outline + CTA
Hero (split: Mac profiles + iPhone canvas) → problem → 8 features → 4-step setup (Mac → pair → practice → control) → differentiators → FAQ (requirements, pricing "will appear on the App Store listing", camera, data, iPad gestures, backups) → support; link to the standalone site. CTA: none until approved **[proposed-copy]**.
