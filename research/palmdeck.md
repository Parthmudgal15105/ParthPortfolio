# Palmdeck — research (2026-11-05)

## 1. Target audience
Mac users who repeat the same app/shortcut/script steps all day: developers (Xcode build/run/test), music producers (Logic Pro transport), video creators (Final Cut Pro), and desk workers who want media, volume and timers one tap away **[verified-product]** (starter profiles, `docs/shots/mac/03-start.png`; `Packages/DeckKit/Sources/DeckKit/Templates.swift`). People who like the Stream Deck idea but don't want hardware or a subscription **[hypothesis]**.

## 2. Main problem
Small, frequent Mac actions (⌘B, open a folder, mute, pause music) cost focus because they live in menus and memorised key combos. Apple Shortcuts has no persistent button surface or frontmost-app profile switching **[verified-product]** (`docs/research.md`).

## 3. Core promise
"A deck of buttons for the things you do all day on your Mac", pressable from a floating panel or an iPhone/iPad **[verified-product]** (`docs/appstore/metadata.md`).

## 4. Differentiators
- Non-activating floating panel + global hotkey; profiles auto-switch with the frontmost app **[verified-product]** (`Apps/Mac/Sources/Deck/DeckPanel.swift`, `App/HotKey.swift`, `App/AppModel.swift`).
- 268-entry action registry (225 full), multi-step workflows with waits/conditions/error policy, press/double/hold logic **[verified-product]** (`docs/v1.1/RELEASE-READINESS.md`).
- Live tiles (battery, CPU, memory, volume, Spotify, timers) on Mac and phone **[verified-product]** (same).
- Encrypted PSK-TLS over Bonjour, no account, "Data Not Collected" **[verified-product]** (`DeckNet/ClientConnection.swift`, `RELEASE.md`).
- Universal purchase, no IAP/subscription **[verified-product]** (`metadata.md`; price not stated publicly).

## 5. Competitors
| Product | URL | Price shown | Strength |
|---|---|---|---|
| Elgato Stream Deck Mobile | https://apps.apple.com/us/app/elgato-stream-deck-mobile/id1440014184 | Free (6 keys); Pro $2.99/mo, $24.99/yr, $49.99 lifetime | Huge plugin ecosystem, 4.6★/5.9K **[verified-external]** |
| Touch Portal | https://apps.apple.com/us/app/id1410172542 | Free; Pro $13.99; add-ons $0.99–$6.99 | Flexible, streaming integrations **[verified-external]** |
| DeckPilot | https://apps.apple.com/us/app/-/id6759764711 | Pro $7.99/mo, $39/yr, $79 lifetime | App-aware decks, Watch, MIDI **[verified-external]** |
| BetterTouchTool + BTT Mobile | https://folivora.ai/buy | $15 (2 yrs updates) / $25 lifetime | Deep Mac trigger system **[verified-external]** |
| Keyboard Maestro | https://www.keyboardmaestro.com/main/ | US$36 (per `docs/research.md`, 2026-11-03) | Most powerful Mac macros **[hypothesis — not re-checked today]** |
| Apple Shortcuts | built in | Free | Native, system-wide; no button surface **[verified-product]** (`docs/research.md`) |

## 6. Competitor site patterns worth learning from
- Lead with the device-in-hand photo/screenshot plus one sentence of value; Elgato and DeckPilot show the phone grid immediately **[verified-external]**.
- Listing price tiers openly builds trust; Palmdeck can contrast "one purchase" without a number until the listing is live **[proposed-copy]**.
- Group actions by goal (meetings, music, coding) rather than by technical type **[hypothesis]**.

## 7. Keywords / search intent
stream deck alternative for mac · stream deck app iphone · use iphone as stream deck · mac macro pad · mac shortcut buttons · floating launcher mac · mac automation workflow · logic pro remote buttons · xcode build button · mac hotkey deck · no subscription stream deck · macro keyboard app mac **[hypothesis]** (from ASC keywords in `metadata.md` + competitor listings).

## 8. Positioning opportunity
Polished, Mac-native, one-time purchase deck with nothing to set up on a separate hub and nothing leaving the network. Competitors either subscribe (Elgato Pro, DeckPilot) or nickel-and-dime add-ons (Touch Portal) **[verified-external]**.

## 9. Most persuasive workflows to demo
1. Xcode Development profile: Build/Run/Test from the phone while the deck auto-switches **[verified-product]** (`docs/shots/mac/01-deck.png`).
2. Desk Controls: live battery/memory/volume, focus timer, window halves, media **[verified-product]** (`docs/shots/v1.1/mac-panel-desk.png`).
3. Editor search "mute" → drag onto grid → undo **[verified-product]** (`mac-editor-search-mute.png`).

## 10. Recommended page outline + CTA
Hero (split: floating deck + iPhone) → problem (⌘B/Terminal/music example) → 8 features → 4-step setup → 3 differentiators → FAQ (requirements, pricing "will appear on the App Store listing", demo deck, Accessibility, privacy, backups) → support. CTA: none until approved; "In App Review" state **[proposed-copy]**.
