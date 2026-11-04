# Local Voice — research (2026-11-05)

## 1. Target audience
Mac users in India and the diaspora who speak a mix of Hindi and English, and privacy-minded people who want dictation without cloud services. **[hypothesis]**

## 2. Main problem
Dictation tools expect one language and often send audio to servers; Hinglish speech comes out wrong or in Devanagari. **[hypothesis]**

## 3. Core promise
Tap Fn, speak English/Hindi/Hinglish, get English translation or Latin-script Hinglish from local models. **[verified-product]** (local-voice/README.md; docs/index.html)

## 4. Differentiators
- Whisper Large-v3 via whisper.cpp + Silero VAD + AI4Bharat IndicXlit transliteration. **[verified-product]** (README.md; SpeechTranscription.swift)
- Local inference after setup; private-server mode disabled in public source. **[verified-product]** (README.md)
- Scratchpad, Dictionary, Snippets, recovery retry, history off by default. **[verified-product]** (Interface.swift; LocalVoice.swift)
- Source build only; not notarized; Apple silicon, macOS 14+; optional MLX/Qwen needs macOS 26.2+. **[verified-product]** (README.md)
- No LICENSE file in the public repo. **[verified-product]**

## 5. Competitors
- Scribe — https://github.com/kumard3/scribe — open-source on-device Mac menu-bar dictation with a Hinglish model. **[verified-external]** (search summary)
- WhisperKey — https://whisperkey-84l.pages.dev/ — MIT, local, free; unsigned. **[verified-external]**
- OpenWhisper — https://rajvardhman05.github.io/openwhisper-app/ — MIT, WhisperKit-based, lists Hindi. **[verified-external]**
- Voice Type: Local Dictation — https://apps.apple.com/app/id6736525125 — paid, closed source, offline Whisper. **[verified-external]**
- Apple Dictation (built in) — on-device for some languages; no Hinglish transliteration mode. **[hypothesis]**

## 6. Competitor site patterns worth learning from
- "100% local · no account · free" badges near the top. **[verified-external]** (WhisperKey)
- Be upfront about unsigned/source builds and how to approve them. **[verified-external]**

## 7. Keywords / search intent
Hinglish dictation Mac; Hindi speech to text Mac; offline dictation macOS; local Whisper dictation; whisper.cpp Mac app; open source dictation app; voice typing Hindi English; private dictation Mac. **[hypothesis]**

## 8. Positioning opportunity
The open-source Mac dictation app designed for Hinglish output, with honest "experimental, build from source" framing. **[proposed-copy]**

## 9. Most persuasive workflows to demo
Hold Fn → say a mixed Hindi-English sentence → Hinglish text appears in the focused app; Scratchpad review → Copy all. **[proposed-copy]**

## 10. Recommended page outline + CTA
Hero (split, Scratchpad screenshot) → problem (mixed-language speech) → 7 features → setup workflow → differentiators → FAQ (download, requirements, privacy, accuracy, price/license, credits) → CTA "View source on GitHub" + link to GitHub Pages overview. **[proposed-copy]**
