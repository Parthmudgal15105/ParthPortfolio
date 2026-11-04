# LoopStudio — research (2026-11-05)

## 1. Target audience
Songwriters and guitarists who capture ideas on a phone or Mac and finish them in Logic or another DAW; hobbyists who want layered sketches without learning a full DAW. **[hypothesis]**

## 2. Main problem
Song ideas end up as scattered voice memos that are not in time with each other; moving them into a DAW means manual trimming and alignment. **[proposed-copy]**

## 3. Core promise
"Record, layer and export ideas" (store subtitle). **[verified-product]** (bounce/AppStore/STORE-METADATA-1.0.md)

## 4. Differentiators
- Guitar/Voice/MIDI sources; layered overdubs with rename, volume, mute, solo, undo. **[verified-product]** (STORE-METADATA-1.0.md; bounce/Bounce.swift toggleSolo; bounce-ios STORE-METADATA-iOS-1.0.md)
- iOS per-route latency calibration; Bluetooth refused for aligned overdubs. **[verified-product]** (bounce-ios/iOS/CalibrationRunner.swift)
- Export: numbered WAV stems + .mid per MIDI layer + Read me.txt + Sound Credits.md. **[verified-product]** (site/support.html)
- 8 bundled sampled instruments on Mac, 7 on iOS, offline. **[verified-product]** (bounce/Sounds/README.md; iOS metadata)
- Tap tempo, count-in, metronome, 1/2/4-bar lengths, trim to loop (Mac). **[verified-product]** (Bounce.swift tapTempo; STORE-METADATA-1.0.md)
- No account, no network, Data Not Collected. **[verified-product]** (site/privacy.html)
- Note: Mac has no automatic latency compensation; Mac exports are 32-bit float WAV (recording files 24-bit). Neither "24-bit" nor Mac latency handling is claimed. **[verified-product]** (support.html; iOS/TakeRecorder.swift)

## 5. Competitors
- **Loopy Pro** — https://loopypro.com — $29.99 one-time after 7-day trial; deep live looper/clip launcher for iPhone/iPad. **[verified-external]**
- **GarageBand** — https://www.apple.com/mac/garageband/ — App Store, needs Apple Account; full studio "built into your Mac". **[verified-external]**
- **BandLab** — https://www.bandlab.com — "100% free" studio, iOS/Android/web, sign-up and cloud storage. **[verified-external]**
- **Voice Memos** (built-in) — fastest capture, no layering. **[hypothesis]**
- Forum users describe multi-step workarounds to get stems out of GarageBand on iOS (https://forum.loopypro.com/discussion/38123/). **[verified-external]**

## 6. Competitor site patterns worth learning from
- Loopy Pro states trial and one-time pricing plainly.
- GarageBand/BandLab sell breadth; LoopStudio should sell narrowness and the hand-off to a DAW.
- Show the export folder contents (stems + MIDI + readme) as proof.

## 7. Keywords / search intent
songwriting sketch app · overdub recorder iPhone · record guitar on Mac · layer recording app · export WAV stems · MIDI recorder Mac · song idea recorder · multitrack recorder iPad · Logic stems import · offline music sketchpad. **[hypothesis]**

## 8. Positioning opportunity
Between Voice Memos (no layers) and full DAWs/loopers (complex, account or project lock-in): a local sketchbook whose output is plain stems for Logic. **[proposed-copy]**

## 9. Most persuasive workflows to demo
1. Two-layer sketch with mute/solo (Mac shot 01). 2. MIDI on Grand Piano with on-screen keys (02). 3. iPhone calibrated overdub (03). 4. Export → Logic. **[verified-product]**

## 10. Recommended page outline + CTA
Hero (split, Mac shot) → problem → features → workflow "From first take to Logic" → iPhone/iPad shots → differentiators → FAQ incl. latency, pricing ("shown on the App Store listing when approved"), sound attribution → support. No primary CTA until approval. **[proposed-copy]**

Sound attribution required: Salamander Grand Piano by Alexander Holm (CC BY 3.0, FreePats SF2); Upright Piano KW (CC0); MuseScore General (MIT). **[verified-product]** (bounce/Sounds/README.md)
