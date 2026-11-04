# Gym Journal — research (2026-11-05)

## 1. Target audience
People who lift weights a few times a week and want a quick, private log on iPhone and Mac, without social feeds, coaching upsells or accounts **[verified-product]** ("a private workout calendar for people who lift", `appstore/metadata.json`).

## 2. Main problem
Sets scribbled in a notes app can't answer "when did I last train legs?" or "is my bench going up?" **[proposed-copy]**. Mainstream trackers solve this but require sign-up and push subscriptions **[verified-external]** (pricing below).

## 3. Core promise
"Log every set in seconds and see your training at a glance. No account, no cloud — your workouts stay on your device." **[verified-product]** (`metadata.json` promotional text).

## 4. Differentiators
- Calendar-first home screen with streaks and favorite body part **[verified-product]** (`appstore/screenshots/*/01-calendar`).
- Units lifters actually use: kg, per dumbbell, per side, plates, bodyweight **[verified-product]** (`metadata.json`, `dist/app.js`).
- Insights for all time / month / 90 days, best-set progress **[verified-product]** (`dist/index.html`).
- No account, no network, Data Not Collected **[verified-product]** (`RELEASE_STATE.md`, live privacy page).
- Free iPhone + Mac apps plus a live web version **[verified-product]** (`RELEASE_STATE.md`; https://gym-journal-kappa.vercel.app returned HTTP 200 on 2026-11-05 **[verified-external]**).

## 5. Competitors
| Product | URL | Price shown | Strength |
|---|---|---|---|
| Hevy | https://apps.apple.com/us/app/hevy-workout-tracker-gym-log/id1458862350 | Pro ~$2.99–3.99/mo, $23.99/yr, $74.99 lifetime (secondary sources) | Large community, routines, social **[verified-external]** (https://www.sensai.fit/blog/hevy-vs-strong-2026) |
| Strong | https://www.strong.app | PRO ~$4.99/mo, $29.99/yr (secondary sources) | Clean, long-standing set logger **[verified-external]** (same source) |
| Straight Set | https://apps.apple.com/app/id6754093999 | Free + IAP | Offline, no account, macOS 14+ **[verified-external]** (search listing) |
| PlateLoader | https://apps.apple.com/ma/app/plateloader/id6758965912 | $0.99 | Anti-subscription positioning **[verified-external]** (search listing) |
| Gym Log: Track Workouts | https://apps.apple.com/ca/app/id6790019688 | not checked | Account-free, JSON/CSV export **[verified-external]** (search listing) |

## 6. Competitor site patterns worth learning from
- Lead with one strong screenshot of the core loop (log a set) and the progress chart **[hypothesis]**.
- Privacy-first indie trackers put "no account" in the first line; it's the main switching reason **[verified-external]** (multiple listings in WebSearch, 2026-11-05).
- Offer a no-install trial: Gym Journal's web version is a rare advantage here **[proposed-copy]**.

## 7. Keywords / search intent
workout log app · gym journal app · workout calendar · strength training tracker · workout tracker no account · private workout tracker · lifting log · gym log for mac · weightlifting tracker free · sets and reps tracker · workout streak tracker **[hypothesis]** (seeded from ASC keywords in `metadata.json`).

## 8. Positioning opportunity
"The calendar for your lifting": free, private, on iPhone, Mac and web, with a backup file instead of an account **[proposed-copy]**.

## 9. Most persuasive workflows to demo
1. Log today → pick Chest + Triceps → defaults appear → enter sets → Done **[verified-product]** (review notes in `metadata.json`).
2. Insights: bench press best set rising over seven workouts **[verified-product]** (`mac/03-insights.png`, fictional demo data from `tests/fixtures/make-demo.cjs`).
3. Back up on iPhone, restore on Mac **[verified-product]** (`metadata.json`).

## 10. Recommended page outline + CTA
Hero (stacked: Mac calendar) → problem (notes-app example) → 8 features → 4-step logging flow → differentiators → FAQ (requirements, free + in review, data location, moving data, deleting) → support. CTA: secondary "Try the web version" (live); App Store buttons added after approval **[proposed-copy]**.

Note: screenshots used on the site come only from `appstore/screenshots/` and show the fictional demo journal (bench 45→60 kg, "Felt strong and finished every set.", height 172 cm), matching `tests/fixtures/make-demo.cjs` — no personal history **[verified-product]**.
