# Transcription — research

## 1. Target audience
Students, self-learners and professionals who learn from YouTube tutorials, lectures and talks in desktop Chrome and want to keep and reuse the words. **[hypothesis]**

## 2. Main problem
Finding a specific idea in a long video means scrubbing back through it; summaries alone lose the original wording. **[proposed-copy]**

## 3. Core promise
"Watch it once. Keep every word." Save captions into a searchable local library, then optionally hand them to ChatGPT or Claude using your own account **[verified-product]** (store/screenshots/1.2.0; README.md; live listing).

## 4. Differentiators
- Uses the user's own ChatGPT or Claude web account; no API key or Transcription subscription **[verified-product]** (store/LISTING_DESCRIPTION_1.2.0.txt).
- Persistent searchable library with timestamp links, .txt download and JSON export **[verified-product]** (README).
- No developer server, account or analytics; library in chrome.storage.local **[verified-product]** (store/PRIVACY_POLICY.md).
- Automatic sending is opt-in per provider, single tab, expires after two minutes **[verified-product]** (README).
- Live v1.3.0 adds 10 interface languages **[verified-external]** (Chrome Web Store listing, observed 2026-11-05).

## 5. Competitors
| Product | URL | Price shown | Strength |
|---|---|---|---|
| YouTube Summary with ChatGPT & Claude (Glasp) | https://glasp.ai/youtube-summary | free | Very large install base; multiple AI providers |
| NoteGPT | https://chromewebstore.google.com (listed under "You might also like") | not checked | Summaries, notes, subtitle translation |
| YouTube To Transcript: AI Summarizer & Chat | Chrome Web Store (same list) | not checked | Built-in chat with transcript |
| AI Video Transcriber for YouTube | Chrome Web Store (same list) | not checked | One-click subtitle copy/download |
| Extract YouTube Transcripts + Summarize in a New AI Tab | https://chromewebstore.google.com/detail/cockngopinognpnodamgehhnnjpjepbi | not checked | Hands transcript to AI tab |
**[verified-external]** observed 2026-11-05; competitor names from Transcription's own store page recommendations.

## 6. Competitor site patterns worth learning from
- Show the AI output category list (summary, notes, slides) as concrete chips. **[hypothesis]**
- Free-tier caps are a common complaint area; stating "no cap from us, your provider's limits apply" is clearer. **[verified-external]** (search results observed 2026-11-05)
- The existing transcription-vault.vercel.app site has an interactive sample library; link to it rather than rebuilding. **[verified-product]** (website/index.html)

## 7. Keywords / search intent
youtube transcript · youtube transcript downloader · save youtube transcript · youtube summary chrome extension · summarize youtube video with chatgpt · youtube summary claude · youtube video to notes · youtube lecture notes ai · copy youtube transcript with timestamps · youtube transcript txt download **[hypothesis]** (aligned with live store copy "YouTube transcript downloader and AI video summarizer").

## 8. Positioning opportunity
"Keep the transcript, bring your own AI": a library-first tool that does not run its own model, which keeps it free and private by design. **[proposed-copy]**

## 9. Most persuasive workflows to demo
1. Click Transcript on a lecture → skip AI → find it next week by searching a word.
2. Save → choose Deep Learning & Study Notes → Claude → paste and send.
3. Reader → timestamp link back to the exact moment.

## 10. Recommended page outline + CTA
Hero (stacked, library screenshot, "Add to Chrome") → problem → features → 3-step workflow with search/reader shots → differentiators → FAQ (price, requirements, languages, data, backup, Mac app status) → support (GitHub issues + email) → privacy → link to existing site. Primary CTA: **Add to Chrome**. Mention the Transcript Vault Mac companion only as "in development".
