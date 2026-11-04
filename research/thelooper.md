# TheLooper — research (2026-11-05)

## 1. Target audience
Songwriters, hobby musicians and producers who want to capture a riff, hum or chord loop quickly without opening a DAW. **[hypothesis]**

## 2. Main problem
Ideas arrive when no studio is set up; full DAWs are slow to open and configure. **[hypothesis]**

## 3. Core promise
Open a tab, record a fixed-length loop, stack layers, export aligned WAV stems. **[verified-product]** (thelooper/README.md; public/index.html)

## 4. Differentiators
- Fixed 1/2/4/8-bar capture with count-in and click; loop fitting trims/pads, never time-stretches. **[verified-product]** (README.md, index.html note)
- Named sketches stored in IndexedDB; no account, no backend. **[verified-product]** (public/app.js `indexedDB.open('thelooper')`; no fetch/XHR in public/)
- Aligned 16-bit PCM WAV stem export (export ignores mute/volume). **[verified-product]** (README.md; app.js RIFF writer)
- Non-destructive trim with restore; audio import downmixed to mono. **[verified-product]** (README.md)
- Limits: no MIDI, no latency compensation, no time stretch. **[verified-product]** (README.md)
- Note: style.css loads DM Sans from Google Fonts (third-party request). **[verified-product]** (public/style.css)

## 5. Competitors
- Live Loop Pedal — https://jasperbernaers.com/live-loop-pedal/ — free; up to 8 tracks, overdub/undo, WAV export, keyboard footswitch. **[verified-external]**
- mloop — https://github.com/gdamdam/mloop — open source; 3 loop tracks with overdub/undo/reverse plus sampler. **[verified-external]** (via search summary)
- Loop Live — https://www.saashub.com/loop-live — browser loop station; reported 2 free tracks, $4.99/month upgrade (not checked on vendor site). **[verified-external]** (secondary)
- Soundcycle — https://github.com/scriptify/soundcycle — open-source online loopstation. **[verified-external]**
- Loop Supreme — https://github.com/ericyd/loop-supreme — Web Audio live looper for performance. **[verified-external]**
- Loopy HD (iOS) — https://synthyfrog.com/app/loopy-hd/ — established mobile looper. **[verified-external]**

## 6. Competitor site patterns worth learning from
- Live Loop Pedal explains timing accuracy plainly (MediaRecorder vs raw capture) — a trust builder for musicians. **[verified-external]**
- Pages lead with "free, in your browser, no sign-up" above the fold. **[hypothesis]**
- Show the export format explicitly (WAV, aligned). **[proposed-copy]**

## 7. Keywords / search intent
online looper; browser loop station; free loop recorder; looper in browser no download; record song ideas; multitrack recorder online; export WAV stems; web audio looper; loop pedal online; song sketch app. **[hypothesis]**

## 8. Positioning opportunity
Most browser loopers are performance pedals. TheLooper can own "sketchpad": save named ideas, then hand clean stems to a DAW. **[proposed-copy]**

## 9. Most persuasive workflows to demo
1. 90 BPM, 2 bars, count-in → record chords → loop starts. 2. Add bass + melody, solo/mute. 3. Export stems and drop into a DAW timeline aligned. **[proposed-copy]**

## 10. Recommended page outline + CTA
Hero (stacked, studio screenshot) → problem (idea fades) → 8 features → 4-step workflow → 3 differentiators → FAQ (cost, headphones, storage, latency, DAW, MIDI) → CTA "Open TheLooper". **[proposed-copy]**
