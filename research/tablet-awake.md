# Tablet Awake — research (2026-11-05)

## 1. Target audience
Android tablet users who keep a screen up for recipes, sheet music, reading, dashboards or presentations. **[verified-product]** (publishing/store-listing.md use cases)

## 2. Main problem
The screen times out while other apps are in use; changing the system timeout is a hassle to undo. **[hypothesis]**

## 3. Core promise
One button keeps the screen on across apps until you tap Stop. **[verified-product]** (README.md; store-listing.md)

## 4. Differentiators
- Works over other apps via a 4dp non-interactive overlay with FLAG_KEEP_SCREEN_ON plus a foreground service (v1.1). **[verified-product]** (samsung-timeout-fix.md)
- Notification Stop action; does not change the system timeout. **[verified-product]** (README.md)
- No INTERNET permission; allowBackup=false; no ads/analytics. **[verified-product]** (AndroidManifest.xml; privacy-policy.html)
- Android 8+ (minSdk 26); signed AAB 1.1 not submitted. **[verified-product]** (app/build.gradle; publishing/README.md)

## 5. Competitors
- Caffeinate (F-Droid) — https://f-droid.org/packages/com.hifnawy.caffeinate/ — free, open-source quick-settings keep-awake. **[verified-external]**
- Wakey — https://www.ghacks.net/?p=87310 — free with ads; per-app whitelist as paid upgrade (~$0.99 per review). **[verified-external]** (secondary)
- Keep Screen Always On Caffeine (Turpurum) — https://appgoblin.info/apps/com.turpurum.autoappbright — per-app keep-on and brightness; premium tier. **[verified-external]**
- Keep Screen On alternatives list — https://alternativeto.net/software/keep-screen-on — many timer/toggle apps. **[verified-external]**

## 6. Competitor site patterns worth learning from
- Competitors lean on per-app rules and timers; a single clear switch is easy to explain in one screenshot. **[hypothesis]**
- Privacy-forward F-Droid listings highlight "no internet permission". **[hypothesis]**

## 7. Keywords / search intent
keep screen on Android; keep tablet screen awake; stop screen timeout Android; screen awake app; prevent tablet sleep; keep screen on while using other apps; caffeine app Android. **[hypothesis]**

## 8. Positioning opportunity
The simplest, most private keep-awake switch for a dedicated tablet. **[proposed-copy]**

## 9. Most persuasive workflows to demo
Stopped → tap Keep tablet awake → "Screen sleep is paused" → switch to a recipe app → stop from notification. **[proposed-copy]**

## 10. Recommended page outline + CTA
Hero (stacked, active/stopped screenshots) → problem → 5 features → 3-step workflow → differentiators → 4 FAQ → no CTA until Google Play listing exists (status coming-soon). **[proposed-copy]**
