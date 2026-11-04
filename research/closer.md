# Closer — research

## 1. Target audience
Mac users on Apple silicon who keep many regular apps running (browsers, chat, design and dev tools) and want to tidy up at the end of a task without losing what they still need. **[hypothesis]** Supported by one self-selected public request describing accumulated apps and Dock friction **[verified-product]** (closer/docs/improvement/PRODUCT_RESEARCH.md R009).

## 2. Main problem
Quitting apps one at a time is slow; quit-all shortcuts and scripts can close apps you still need, and force quitting can lose data **[verified-external]** (https://support.apple.com/en-us/102586, observed 2026-11-05).

## 3. Core promise
"See what's running. Keep what matters." One list, local Keep choices, a reviewed normal quit **[verified-product]** (closer/README.md; closer-web/src/app/page.tsx).

## 4. Differentiators
- Normal quit only; never force quits; app save prompts stay in control **[verified-product]** (README "Use").
- No Accessibility or Screen Recording permission required **[verified-product]** (closer-web support page). Quit All Apps documents an Accessibility setup **[verified-external]** (https://quitallapps.app/).
- Exact-target review including apps hidden by search; batch stops after ~8 s on an unresolved app **[verified-product]** (README).
- No account, telemetry or network calls **[verified-product]** (README "Privacy and scope").
- Free, notarized, Apple silicon only, macOS 14+ **[verified-product]** (closer-web/src/lib/release.json).

## 5. Competitors
| Product | URL | Price shown | Strength |
|---|---|---|---|
| QuitAll | https://amicoapps.com/app/quitall/ | $14.99 lifetime (per PRODUCT_RESEARCH R002) | One/some/all quitting, optional force and auto-quit |
| Quit All Apps | https://quitallapps.app/ | $1.99 lifetime (R003) | Hotkeys, exclusions |
| MacQuit | https://ustack.app/products/macquit | paid (not verified) | Menu bar list, never-quit list, CPU/memory monitor |
| OneClick QuitAll | https://apps.apple.com/app/oneclick-quitall/id6744743418 | not checked | Mac App Store, one click |
| Raycast system commands | https://manual.raycast.com/system-commands | free tier (R005) | Already installed for many power users |
| Activity Monitor | built in | free | Native, but process-level and includes Force Quit |
**[verified-external]** for URLs observed 2026-11-05 via search; prices from the project's dated research and not re-checked.

## 6. Competitor site patterns worth learning from
- Lead with one screenshot of the list itself; users judge these utilities by the list. **[hypothesis]**
- State permissions up front (Accessibility vs none) — competitors that need it explain it at length. **[verified-external]** (quitallapps.app)
- Closer's own site uses a calm, editorial voice ("A little less open.") worth carrying over. **[verified-product]**

## 7. Keywords / search intent
quit all apps mac · close all apps mac · how to quit multiple apps at once mac · mac app quitter · quit apps except some mac · free mac utility apple silicon · close running apps mac menu bar · safe quit apps mac without losing work **[hypothesis]** (from competitor titles and search results observed 2026-11-05).

## 8. Positioning opportunity
"The careful quitter": the only option in this set that combines a full review, Keep exclusions, no special permissions and a strict no-force policy, at no cost. **[proposed-copy]** Avoid speed/RAM claims; Apple notes free memory alone does not improve performance **[verified-product]** (PRODUCT_RESEARCH R015).

## 9. Most persuasive workflows to demo
1. Many apps open → toggle Keep on two → Quit all eligible → review list → confirm.
2. An app shows a save prompt → batch stops → results show "Still open" → Review remaining.
3. Search filters, but the confirmation still lists apps outside the search.

## 10. Recommended page outline + CTA
Hero (split, light workspace shot, "Download for Mac", requirements line) → problem → features → 4-step workflow with review-sheet shot → differentiators → FAQ (requirements, price, unsaved work, privacy, notarization, updates) → support/privacy links → link to closer-web for SHA-256 and changelog. Primary CTA: **Download for Mac** (GitHub release ZIP, verified 200).
