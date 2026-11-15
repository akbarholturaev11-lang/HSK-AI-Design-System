# HSK AI learner UI/UX — product-specific standards and approved roadmap

> **Document 45 of the portable rulebook (HSK AI supplement).** The original 44 professional guideline pages are unchanged. This is an independently organized, **HSK AI-owned** product-specific decision contract, **not** a 45th historical MDX conversion. This file defines design requirements and records approved future work; it does not prove those features have shipped.
>
> **Status:** internal, design-repository-only specification. No HSK-AI-Bot source, PWA/Android runtime, product agent, or production UI skill has been modified by creating this file. UI implementation, product skill reconciliation, CI, and device validation require separately scoped work.
>
> **Reviewed source:** `akbarholturaev11-lang/HSK-AI-Bot` **main** at `77c332f61340880e476999e747c4baabb0fff0b8` (2026-11-15); `.agents/skills/hsk-ai-ui/SKILL.md` blob `c626f2b543034fcd341a6b4d257ca3dcb5dfe4d3`; `HSK_AI_UI_UX_IMPROVEMENTS.md` blob `ce11f89b29ea3afd7cddca610ebd03d76467db0e`; `AGENTS.md` blob `bbc550084e3cdab2f8be209df9ec8af688f4b3c0`. Re-read the **current** product main and decision history immediately before implementing a task.

## 1. Authority, scope, and status classification

1. **Scope:** learner **iPhone PWA** (Safari/browser and installed Home Screen where supported) and **native Android** (Play/direct as applicable). Product backend and Admin PWA only where necessary for truthful learner-facing interactions. Desktop-specific development is frozen, and this document does not commission new Telegram-only teaching features.
2. **Precedence:** protected safety, privacy, accessibility, verified Chinese-learning correctness, canonical characters/Voice Orb, account/payment ownership, and real platform behavior are non-negotiable. Otherwise, the **full professional design system is the intended visual/interaction standard**, not the app's incidental existing CSS or layout. Apply the smallest specifically documented exception without degrading the rest of the professional design.
3. **Owner-approved, screen-specific decision beats generic older guidance for that exact scope** (e.g., 2-line supporting-description disclosure; the UIUX-012 20% checkout offer). An owner-approved **future requirement is not an implemented screen**; do not display hypothetical data or activate unbuilt flows.
4. **Status labels used below:** **EVERGREEN** = design/interaction obligation for applicable work; **APPROVED FUTURE** = agreed target, implementation still requires its own task and current-main audit; **CURRENT VERIFIED AT SOURCE AUDIT** = code/behavior found at a historical source snapshot, to reverify before use; **REFERENCE ONLY** = pattern, not HSK AI feature or production asset.
5. Respect the separate source of truth in [Professional-first contract](../../../DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md), [owner-approved decisions](../../../DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md), and the 44 [professional foundation/component/pattern pages](../README.md). Never invent thresholds, universal sizes, tokens, routes, data fields, or UI features from illustrative source images.
6. For implementation, follow product `AGENTS.md`, `AI_RULES.md`, actual `hsk-ai-ui` skill, localization and performance contracts, and appropriate Analytics/Monitoring requirements. This document summarizes **UI/UX** only; it does not replace those engineering policies.

## 2. Always-on learner UI/UX principles — distilled from the current product skill (EVERGREEN)

### 2.1 Navigation chrome, layout, surfaces, and hierarchy

- **Shared anchors:** related screens should keep consistent header/title baseline, back/action positions, top insets, gutters, and first-content alignment. Accommodate iPhone safe areas and Android system insets; keep fixed navigation stable while content scrolls naturally. Deliberately immersive AI Voice layouts are an exception to ordinary page structure, not to accessibility.
- **Professional-first composition:** choose surfaces, corner treatment, density, elevation, and hierarchy from the matching professional component/layout rules. **Do not hard-code “flat everywhere” or preserve existing inferior cards/shadows purely because the current product does so.** Apply the existing skill's valid warning against *unnecessary* nested cards, ornamental tiles, repeated backplates, glow, and duplicated boundaries. A useful surface, state background, scrim, focus ring, selected treatment, or primary CTA must not be removed just to appear flat.
- **Clean utility controls:** avoid a decorative card behind each ordinary icon or a button nested in another button-like surface. Maintain recognizable actions and **PWA ≥44 CSS px / Android ≥48 dp touch targets** and clear focus/pressed/disabled states even when the visual icon is small.
- **One action per purpose:** do not duplicate Save/Back/Close, repeat a statistic in adjacent containers, or create competing primary CTAs. Keep one visually dominant action per decision, with secondary actions available but quieter. Distinguish genuinely different actions rather than deleting necessary controls.
- **Cross-platform intent parity:** preserve common task order and information meaning while honoring iPhone PWA Liquid Glass bottom navigation, browser Back/history, Android native Back, platform controls, keyboard, gestures, and safe areas. Semantic parity does not mean pixel-perfect cloning.

### 2.2 Copy, Chinese learning, and canonical identity

- **Short, user-facing, localized copy:** use concise titles, meaningful action labels, and help only when needed; never expose backend jargon, debug codes or developer notes. Do **not** shorten mandatory instructions, price/renewal/limits, error recovery, or learning content into illegibility. Permanent UI copy follows product canonical **Uzbek, Russian and Tajik** localization sources; preserve Simplified Chinese/Hanzi and correctly tone-marked pinyin.
- **Learning integrity:** make Hanzi, pinyin, and selected-language meaning legible **when the learning step requires them**. Do not leak quiz, verification, or flashcard answers before the allowed reveal; ensure correct and incorrect answer feedback is understandable without relying only on color. Course remains the core task; AI, voice, XP, streak, and paywalls must not displace it.
- **Canonical artwork only:** Panda and the named Dragon/Longlong, Crane/Hehe, Monkey/Wuwu, and Rabbit/Yueyue retain real HSK AI identities, proportions and recognizable rendering across the app. Preserve the **existing right AND wrong answer reactions**. Do not swap in generated lookalikes or a vendor mascot. Characters appear where relevant, not on every loading slot.
- **Voice-specific identity:** preserve the established **red pearlescent Voice Orb** and meaningful Listening/Thinking/Speaking presentation, with keyboard/composer/background coexistence. Professional motion and interaction refinements must not change voice entitlement or invent results.
- **4-unit spacing system** is an owner-approved HSK AI constraint; apply a coherent professional rhythm using actual platform units and verified tokens, not imported vendor token values or arbitrary screen-specific numbers.
- **Color semantics:** existing light/dark brand tokens are implementation facts. Brand accent is not automatically the error/destructive color; show state by text/icon and contrast as well as color.

### 2.3 Inline disclosure — the owner-approved **two complete lines**, not the old skill's one-line rule

- Only genuinely **optional secondary descriptions, helper text, and supplementary hints** may be clamped. **Collapsed maximum: TWO completely visible rendered lines**; never reveal a clipped third-line fragment.
- When — and only when — the full text overflows the collapsed two-line layout, show a **small top-right ⌄** control with no visible “More/Подробнее” label or decorative button plate. Click/tap opens the full text **in place**, changing that same control to **⌃**; a second activation collapses it. Expanded state retains the control.
- Calculate overflow using the **collapsed geometry**, including the reserved control area; reevaluate after localization, resize, content change, or dynamic font scaling. Short text has **no inert chevron**.
- Preserve localized accessible name, button semantics, expanded state, keyboard/screen-reader operation, focus continuity, **≥44 CSS px / ≥48 dp touch target**, and reduced-motion preference; no scroll/input state reset.
- **Never clamp essential lesson/question/answer/Hanzi/pinyin/meaning, the active user's input, subscription prices/terms/limits, warnings, or blocking error recovery** under this helper-text rule. A deliberately collapsible **browse-only ready-phrases card** in UIUX-004 is a separate explicit interaction with its own approved reveal semantics; do not apply that card pattern to essential test content.
- The product skill's current “One-Line Expandable Text” section is a **known outdated conflict**, not a second valid option. Its future replacement **in place** is defined in `docs/migration/TARGET_AUTHORITY_INSERT.md`; this source-only task does **not** edit that product file.

### 2.4 Loading, state truth, and micro-interaction

- **Layout-first, screen-specific skeleton:** reserve the same final header, rows, images, card structure, padding, spacing, relative placements and fixed-nav anchors before remote content arrives. Known labels/navigation appear immediately. Skeletons replace only unknown content; never use a generic two-line gray card to stand in for a complex grid, XP panel, rating podium, or lesson.
- **Independent reveal:** each section settles as its **own verified response** arrives; keep other ready regions visible. Replace a placeholder in its allocated slot with a small opacity fade (~150–250 ms as a source guideline, not a universal app timing mandate), or instantly with reduced motion. Avoid remounting siblings, vertical jumps, and entire-page loaders.
- **Complete status system:** distinguish unverified/loading, real zero, no records, filtered empty, stale/unavailable, error/retry, pending action, and backend-confirmed success. Media reserves geometry and has an intentional fallback; a failed canonical-character image should not become a fake Panda.
- **Immediate and contextual reaction:** tap/press acknowledges input instantly; pending/saving belongs on the affected control or section. Prevent duplicate submits without blocking unrelated controls. Show ordinary field-level validation and retry nearby; reserve modal interruption for a real decision.
- **Visual states:** display default, hover where applicable, focus, pressed, selected, busy, disabled, errors and success honestly. Touch-only affordances must not depend on hover. Use screen readers, focus restoration, contrast, large type, and non-color cues.
- **Purposeful motion only:** transitions communicate state and respect `prefers-reduced-motion`; no perpetual decorative animation that distracts from Hanzi or prevents reading.
- Performance implementation and actual browser acceptance remain governed by product `docs/PERFORMANCE_PWA_PROGRESSIVE_LOADING.md` and `AGENTS.md`; static documentation is **not** a passing device/CLS test.

### 2.5 Preservation of state, keyboard, Back, and interruptions

- **State continuity:** returning from a detail view preserves meaningful scroll position, filter, search query, tab, expanded row, selection, and unsent draft. Avoid restoring private/stale state after logout, user switch, incompatible HSK version, or completed session.
- **Keyboard-aware UI:** keep focused field, its prompt, relevant errors, composer and Submit/Send reachable when IME opens. Adjust the right scrollable region and preserve header/navigation context; restore sensible layout when keyboard closes, including Android native and iPhone PWA.
- **Predictable Back:** return one meaningful navigation step, dismiss transient layers before underlying screen changes, restore focus, and confirm **only truly destructive unsaved-work loss**. Android system Back and PWA history remain functional; never build a second competing navigation stack.
- **No unsafe interruption:** defer unsolicited promotions, announcements, rating asks, and other nonurgent overlays until a safe idle/navigation point, not while answering, recording, signing in, composing, or completing payment. Intentional user-triggered confirmation is different from unsolicited interruption.
- **Payment honesty:** clear server-verified prices, duration, renewals, limits, entitlements, pending/manual-review and error states; no fake scarcity, aggressive timer, invented outcomes or dark patterns. Checkout draft selections may be resumed only when valid; never persist credentials or imply a pending payment is an abandoned cart.

## 3. Eight approved UI/UX improvements — **APPROVED FUTURE**, not shipped by this document

The product's `HSK_AI_UI_UX_IMPROVEMENTS.md` dated 2026-11-15 contains **exactly these eight retained tasks** in this priority order. Deleted plan entries are not resurrected here. Use these as **specific target decisions on the affected screens** only; do not start feature engineering from the design-system repository.

### UIUX-007 / COURSE-ADAPTIVE-001 — unobtrusive personal review *inside the next normal lesson*

- **Presentation target:** show a small, relevant set of personalized, **verified-answer** review cards between existing cards in the **ordinary** next lesson. No mandatory separate “weakness” page, “My mistakes” flow, parallel AI Voice process, or blocking remedial mini-session. Keep new lesson content first; no endless forced repeats.
- The user sees a coherent lesson; adaptive checks are **logically and server-verified separately**, not counted toward the original lesson grade, XP, rewards, progress/unlock, streak/hearts, or completion gates. Wrong/timeout/unavailable adaptive responses **never** block the base lesson.
- Preserve canonical HSK 2.0/3.0 lesson cards, `material_ref`, original ordering, safe resume and local/offline recovery; adaptive interleaving is not a rewrite of the source lesson JSON. Select only legitimately learned material/skill targets; a tone mistake must not be displayed as total word ignorance.
- Progress/feedback labels must disclose only **actual** outcomes; self-rating is not a verified mistake or evidence of mastery. PWA/Android clients must present consistent supported card types with safe timeout fallback.
- **Dependency, not implementation claim:** independently verify actual Analytics, Monitoring, Optimization/Smart Render and Course services on current main at delivery time. Coordinate in a **single course plan**, not a second learning engine.

### UIUX-008 / COURSE-FLASHCARDS-001 — compact interactive flashcards in lessons

- As a **real lesson exercise format**, not a parallel app or replacement for dialogues, grammar, audio and verified quiz tasks: front has one clear Chinese prompt; the answer is intentionally hidden until allowed flip/reveal or verification. Back shows accurate tone-marked pinyin, chosen-language meaning, and short legitimate contextual example.
- Keep independent **🔊** audio, clear **❌ Repeat / ✅ Know** self-rating **after reveal**, accessible interactions, and accurate **session progress**. A brief end-of-session summary distinguishes reviewed/known/repeat and returns to the original lesson. Do not force a 25-card session into every lesson.
- Self-rating is **not** server-verified accuracy, does not grant XP, streak, or formal exam score, and does not by itself populate confirmed mistake records. Tested answers use the existing authoritative verification. Use verified weak skill targets where appropriate to support UIUX-007, not a parallel SRS/learning truth.
- Handle reduced motion, real audio failure/retry, long Hanzi/pinyin/UZ/RU/TJ, keyboard/screen readers, safe resume, and the two mobile delivery paths. Reference footage teaches **interaction structure only**, not ChatGPT or another brand's UI to be cloned.

### UIUX-012 — 20% checkout exit offer with two distinct X interactions

- **Approved special case overrides the product skill's generic older §18 smart-exit modal.** In an **eligible**, valid checkout attempt, the **first checkout X** opens one **compact centered offer overlay** titled for the **20% discount**, with **exactly one primary “Use 20% discount” action and one top-right X**. There is **no extra Exit button** inside this offer and no stacked retention dialog.
- The **overlay X** closes **only that offer** and preserves the same checkout step/plan/method. The **next checkout X after dismissing the offer** exits checkout directly, without showing it again within that attempt. For ineligible checkout or a discount already applied in this attempt, X follows the safe direct exit. Ordinary Back remains stepwise, with preview/sheet dismissal first.
- **Server-authoritative eligibility (approved source formula):** `never_had_paid_subscription OR never_redeemed_any_discount`, subject separately to real checkout/Pro/pending-payment restrictions, available promo and purchase channel. `OR` must **not** silently be changed to `AND`; the source plan requests a commercial impact check before implementation. Viewing/closing/clicking an offer is **not** a successful discounted payment.
- Accepting an offer only updates the displayed discount **after verified server success and actual quote**. Preserve precise amount, currency, plan duration, renewal implications and retained valid checkout selections; on timeout/error show local retry and do not create a duplicate invoice. Never layer on Android Lava's already existing exit-offer mechanism; respect Android Play purchase restrictions and the existing PWA purchase route.
- Modal positioning, focus trapping/return, accessibility and keyboard safe areas follow professional modal guidance. No artificial deadlines, forced countdown, stacked prompts or withheld close path. **The general skill's truthful checkout/pending state, resumability and security rules still apply.**

### UIUX-002 — two **full-screen** progress destinations for 🔥 Streak and 💎 XP

- Tap on 🔥 opens a **full-screen Streak page**, not a bottom sheet: real current streak hero, actual selected **7/14/30/50-day** personal target if set, a true-data **monthly activity calendar**, a compact goal/next milestone region, change-goal action, and a return-to-learning route. Distinguish no target, current streak, longest streak and “30 days” achievement.
- Tap on 💎 opens a **full-screen XP page**, not a bottom sheet: verified total XP (experience, **not gems/currency**), actual daily progress, weekly total, real XP award rules, and transaction/history only if an authorized backend source exists. No XP spending/shop fiction or fake future history.
- Use consistent DetailHeader/back, calm minimal surfaces, scroll, visual affordances and PWA/Android-safe layouts. Do **not** clone a Duolingo app screen. Profile has only compact summary and a route into Streak rather than duplicated hero/achievement cards. Always distinguish no data/loading/error from real zero.

### UIUX-003 — course-version-aware dictionary + ☆/★ saved words

- Dictionary automatically scopes to the user's **actual active course version** (HSK 2.0/3.0); present the version as a small non-editable indicator instead of a redundant version-filter row. One level-filter row defaults to **All** within that version, plus a compact ⭐ **Saved** filter. Search combines with active version/level/saved filters.
- Each word has its own independent ☆/★ save control with immediate pressed/pending feedback; toggling does not accidentally open the word detail. Saved words are **account-owned and PWA/Android synchronized** through verified protected data; do not reuse a browser-only phrases `localStorage` key as a cross-platform source of truth.
- Version switches do not delete saved items belonging to other course versions; use stable word identity and correct HSK membership. Provide no-match / none-saved / offline-error / retry states and clear accessible labels. Do not remove actual Hanzi/pinyin/translation search modes that already work or claim unverified modes exist.

### UIUX-004 — ready-phrases compact browse cards with independent audio and save

- **Collapsed default:** each ready-phrase **browse card** shows **only Chinese phrase/Hanzi, ☆/★ save, 🔊 play and a subtle chevron**. Pinyin, translation, category and copy action appear **only when that card is expanded**. This is an approved **list browsing interaction**, not permission to hide essential content inside a lesson/question.
- Tapping the card's empty area expands/collapses; **at most one card expanded** at a time. ☆/★ and 🔊 each work **without expanding or collapsing** the row. Expanded content provides correctly tone-marked pinyin, localized meaning, category, and a compact copy icon with confirmation.
- Audio plays only on explicit 🔊 tap, Chinese text only; show loading/playing/error and reuse supported TTS/cache. Retain existing saved-phrase behavior, search, category filters and PWA/Android focus/accessibility. Do not conflate saved phrases with the **separate** new dictionary-saved-word state.

### UIUX-005 — one nonduplicative profile hierarchy

- Top-to-bottom: single **RootHeader** (profile, notifications/settings) → concise avatar/name and actual chosen learner goal with verified **Free/Trial/Temporary/Pro** status → **one** accuracy region (all-time/today from verified answers) → **one** compact **weekly streak calendar** linking to UIUX-002 monthly view → **one** genuine “100 lessons” progress/achievement → **one** subscription/Pro region → compact Friends entry and existing settings/links.
- Do **not** duplicate the XP hero, show two subscription CTAs, or repeat a separate “30 days in a row” card in profile. A selected goal is not a fake CTA; unknown accuracy shows unavailable/insufficient-data, not `0`.
- Preserve the deliberate **iPhone PWA Liquid Glass bottom-nav translucency and scrolling behavior** and ensure the last profile item remains reachable above its safe area. Keep real entitlement, existing settings/functions, loading/empty/error/retry, and PWA/Android semantics.

### UIUX-009 — remove redundant icon/backplate nesting across the learner app

- Remove decorative extra circles, boxes, repeated outlines, card-behind-card and heavy shadows from **secondary/utility** actions on lessons, course, practice, profile, quick tools, header and modals when they add no meaning.
- Keep primary button surfaces, necessary contrast, selected-state containers, explicit focus/press feedback, accessible touch targets and meaningful professional surface elevation. This is **not** a mandate to flatten the complete system or remove professional component anatomy.
- Review consistency across screens, Android and PWA; retain the native route, safe areas, interaction and focus after each visual simplification.

## 4. Explicit conflict register for future Codex/product skill reconciliation

| Existing product guidance / potential collision | Resolved authoritative target for UI/UX work | Required future action (not done now) |
| --- | --- | --- |
| `hsk-ai-ui` “One-Line Expandable Text”, plus §§4/8 references | **At most two fully visible lines + top-right ⌄/⌃**, only optional helper descriptions; essential content never hidden | Replace the obsolete skill section **in place**, including its internal references; do not keep both rules |
| `hsk-ai-ui` §6 “reuse established HSK AI colors/radii/components” and §3 “flat by default” | Professional detail/hierarchy/visual quality is the **target**, while product brand/function/platform truth are constraints; unnecessary ornament remains discouraged | Reword the skill's visual-authority text when transferring documentation, avoiding blanket freeze of current styling |
| `hsk-ai-ui` §18 generic “Continue payment / Exit checkout” smart-exit after X | **UIUX-012** special eligible **20% centered offer**, one CTA + X; overlay X stays; next checkout X exits | Reconcile the general skill **only for this specific approved checkout flow** without removing pending state, honest Back and safety invariants |
| Universal “never interrupt an active checkout” | No **unsolicited** popups while paying; UIUX-012 is an intentional response to the user's eligible checkout **X action** | Preserve noninterruptive policy, allow only the approved user-triggered special case |
| General “do not collapse required Hanzi/pinyin/meaning” vs UIUX-004 list-card compactness | A **ready-phrases browse-list card** may reveal pinyin/meaning on user expansion; **required lesson/test/answer** text must remain visible at the intended learning stage | Apply this distinction per surface; keep assistive-tech disclosure semantics |
| The generic 44-page historical guideline count | **44 historically converted professional pages + 1 new HSK-owned supplement**; historical 44/44 parity and 212 selected PNG counts remain unchanged | Link this new document in portable entrypoint; never claim 45 source MDX conversions or 45 image-cleared historic pages |
| Approved future UX plan vs verified real app features | Design targets are **not shipped UI**, new telemetry, entitlement or server state | Re-audit current main and secure an implementation task before changing PWA/Android |

## 5. Mandatory route for a future design task

1. Read HSK AI **product main** `AGENTS.md` and `AI_RULES.md`, the product `.agents/skills/hsk-ai-ui/SKILL.md`, the **professional-first** contract, approved owner decisions, **this file**, and each applicable one of the **44 detailed professional guidelines**.
2. Classify the feature as **verified currently working**, **approved future requirement**, or **reference-only**. Use product code/API and a fresh main SHA to confirm the status. Treat differences between PWA, installed PWA, Android Direct and Play explicitly.
3. Identify the affected user journey, layout/geometry, typography, controls/affordances, states, empty/error/loading/retry, responsive/safe-area, language and Chinese-answer disclosure. Map source detail to real functionality. Write any exception as **professional default → exact verified product conflict → minimal adaptation → retained professional details → status**.
4. Preserve the protected learning grading/answer rules, progress, source version/track, canonical characters, correct/wrong reactions, Voice Orb, navigation, auth, Free/Trial/Pro, checkout, and permissions. Verify server outcomes before claiming success.
5. Use the appropriate scope/risk tests **when implementing**: mobile viewport, WebKit Safari/Home Screen, Android Direct/Play, VoiceOver/TalkBack, keyboard/Back, restored drafts, large UZ/RU/TJ text and tone-marked pinyin, 44/48 touch targets, dark/light contrast, partial/failed network, account switching and critical payment/lesson paths. New/changed PWA sections require faithful skeleton geometry evidence; monitor/analytics impact follows the product rules.
6. **Documentation-only review** checks Markdown, local links and exact diff; it neither needs unrelated product device tests nor permits claims that they passed. Do not ship, alter product agent/skill, or publish third-party images under this documentation-only source task.

## 6. Source-of-truth links

- [HSK AI production UI skill](https://github.com/akbarholturaev11-lang/HSK-AI-Bot/blob/main/.agents/skills/hsk-ai-ui/SKILL.md) — 18 evergreen UI/UX sections plus obsolete one-line helper rule and older generic smart-exit wording.
- [HSK AI approved UI/UX optimization plan](https://github.com/akbarholturaev11-lang/HSK-AI-Bot/blob/main/HSK_AI_UI_UX_IMPROVEMENTS.md) — the **eight** approved tasks with detailed integration/acceptance requirements, **not implemented by this file**.
- [HSK AI root AGENTS](https://github.com/akbarholturaev11-lang/HSK-AI-Bot/blob/main/AGENTS.md), [AI_RULES](https://github.com/akbarholturaev11-lang/HSK-AI-Bot/blob/main/AI_RULES.md), [progressive loading contract](https://github.com/akbarholturaev11-lang/HSK-AI-Bot/blob/main/docs/PERFORMANCE_PWA_PROGRESSIVE_LOADING.md) — current product safety, localization, scope and loading contracts.
- [Design-system root AGENTS](../../../AGENTS.md), [approved design decisions](../../../DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md), [professional-first decision contract](../../../DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md), [future target root/skill insertion instructions](../../migration/TARGET_AUTHORITY_INSERT.md).
- [Portable guideline directory](../README.md) — 44 historical professional guideline copies, now indexed together with this one HSK AI-specific supplement.

**Future changes to this document:** do not auto-overwrite approved owner decisions from a changed branch or generic old skill. First audit the new `main`, identify any newer explicit owner decisions, then revise the exact relevant clause and provenance. Maintain historical 44-page and 212-image counts separately.
