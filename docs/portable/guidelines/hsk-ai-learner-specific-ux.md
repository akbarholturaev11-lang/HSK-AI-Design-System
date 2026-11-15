# HSK AI — learner-specific UX flows and operational interaction addendum

> **Status: owner-approved DESIGN REQUIREMENTS / future implementation reference.** Not a report that these features are released, nor authorization to change HSK-AI-Bot. This is **one supplementary HSK AI page alongside the 44 inherited professional portable guideline pages**; it is not a 45th upstream MDX conversion and is excluded from the original 44/44 source-parity count.
>
> **Scope:** learner iPhone PWA (Safari and installed mode) and native Android (Play/direct where relevant). This page captures only concrete HSK AI UX behavior and feature-specific compositions that are not already specified in the portable 44-page professional corpus.

**Read and apply before this page:** [portable index](../README.md), the repository-root professional-first contract and approved owner decisions, then the specific existing foundation/component/pattern guideline relevant to the screen.

**Exact input snapshot (2026-11-15):**
- HSK-AI-Bot/main, [.agents/skills/hsk-ai-ui/SKILL.md](https://github.com/akbarholturaev11-lang/HSK-AI-Bot/blob/main/.agents/skills/hsk-ai-ui/SKILL.md), Git blob **c626f2b543034fcd341a6b4d257ca3dcb5dfe4d3**.
- HSK-AI-Bot/main, [HSK_AI_UI_UX_IMPROVEMENTS.md](https://github.com/akbarholturaev11-lang/HSK-AI-Bot/blob/main/HSK_AI_UI_UX_IMPROVEMENTS.md), Git blob **ce11f89b29ea3afd7cddca610ebd03d76467db0e**. This plan contains **eight** retained owner-approved tasks, not the older removed items.
- HSK-AI-Bot/main root AGENTS.md remains the product's engineering, security, performance, billing, analytics and monitoring authority. Those implementation rules are **not copied** into a design guideline.

## 1. Deduplication / existing-rule crosswalk — do not repeat the 44 pages

These rules **already exist** as professional guidance and must be read from their canonical portable pages instead of creating competing duplicate versions:

| Existing topic from product UI skill / optimization plan | Existing portable authority | Addendum treatment |
| --- | --- | --- |
| Layout types, header rhythm, adaptive density and visual hierarchy | [Layout](design-foundations/layout.md), [Component composition](design-patterns/component-composition-and-customization.md) | Only describe the distinct product-specific destination screens below |
| Flat utility icons, avoiding decorative backplates, nested cards and UIUX-009 | [Surfaces and elevations](design-foundations/surfaces-and-elevations.md), [Iconography](design-foundations/iconography.md), [Component composition](design-patterns/component-composition-and-customization.md) | **No second global icon/backplate specification**; UIUX-009 is already covered |
| CTA hierarchy, clear states, feedback, concise copy and accessible targets | [Buttons](design-components/buttons.md), [Typography](design-foundations/typography.md), [Toasts](design-components/toasts.md), [Borders](design-foundations/borders-and-dividers.md) | Specify only additional flow-specific behavior |
| Character identity, correct/wrong reactions and separate red Voice Orb | [HSK AI characters](design-components/hsk-ai-characters.md), [Illustration](design-foundations/illustration.md), [Motion](design-foundations/motion.md) | Reuse those unchanged; do not add a different mascot/animation standard |
| Light/dark semantic color, four-unit spacing, reduced motion | [Semantic colors](design-foundations/colors-semantic.md), [Spacing](design-foundations/spacing.md), [Motion](design-foundations/motion.md) | No duplicate palette, spacing scale or motion token |
| **Maximum two full lines** of genuinely optional supporting copy and only the top-right ⌄/⌃ | [Typography](design-foundations/typography.md) | **Do not import the source skill's obsolete ONE-line rule** |
| Modal anatomy, focus, error/empty/result honesty and non-deceptive UI | [Modals](design-components/modals.md), [Banners](design-components/banners.md), [Data reports](design-patterns/data-reports.md) | Only define novel checkout and interruption sequencing |
| Search/filter algebra, count integrity and clear-filter semantics | [Filter and sort](design-patterns/filter-and-sort.md), [Search field](design-components/search-field.md) | Add only HSK dictionary-specific version, saved-word and initial-selection rules |
| Charts, progress representation, summary-card hierarchy | [Progress charts](design-components/progress-charts.md), [Summary cards](design-components/summary-cards.md), [Data visualization](design-foundations/data-visualization.md) | Add only the two real XP/Streak page compositions and profile assignments |

**Source conflict resolution, not duplicate standards:** the product skill's current blanket reuse of old styling is subordinate to the **professional-first target**. Its legacy one-line helper rule conflicts with the already-approved two-line standard. Its generic checkout smart-exit example has two choices in one confirmation; **the more specific owner-approved UIUX-012 20% offer/X flow below governs the eligible offer case**, without sacrificing a truthful exit or payment safeguards. Actual product skill edits are a separate later integration step.

## 2. Additive cross-screen UX contracts from the existing product skill

These are **flow-level operational invariants** beyond the general visual components above. Never turn them into app behavior without inspecting the latest code.

### UX-CORE-01 — Layout-matched loading with independent section settlement

- On each real learner screen, design the loading representation from the **final populated geometry** at that viewport: section size, gutters, rows, line slots, media aspect ratios, component corners and alignment. A generic full-page gray card or spinner is not a substitute for a distinct composed screen.
- Render all **known information** in its final location immediately: header, tab labels, stable navigation, known field labels and static icons. Skeleton placeholders represent **unknown remote data only**.
- Independent data-backed regions reveal independently as verified data arrives. The other regions keep their own loading/empty/error/retry slots; one slow request must not block completed neighboring sections.
- Resolve within the **reserved region**, without shifting the header, neighboring content or bottom navigation. A subtle local opacity transition may be appropriate; respect reduced motion. Reserve true media geometry, and use neutral non-character fallbacks when canonical imagery fails.
- Allow legitimately unpredictable text to expand within a suitable content area rather than clipping essential Hanzi, answer, payment or warning copy to manufacture a zero-layout-shift score. Review skeleton → partial result → full result → failure at narrow and large mobile widths.

### UX-CORE-02 — Temporary navigation, state and draft preservation

- Returning from a vocabulary detail, lesson-adjacent detail or configuration panel should preserve **the same list location and scroll position**, relevant tab, text query, selected HSK filters, expanded group and display mode when those still represent the same task. Returning from a word detail must not automatically restart the dictionary at the top.
- Keep unsent text, locally selected options and progress through harmless in-app navigation or recomposition. Explicitly destructive navigation prompts before discarding meaningful unsaved work; **do not** add a confirmation for harmless Back.
- A real account change, logout, invalidated session or completed task may legitimately clear protected local state. **Never** restore one user's state or sensitive content in another user's view.
- Back closes a transient preview/sheet first, then follows the actual platform history; return focus to the initiating control when possible. Android system Back and PWA browser/history behavior are real platform distinctions, not duplicate custom navigation.

### UX-CORE-03 — Keyboard reachability and local interaction feedback

- While the keyboard/IME is visible, keep the currently edited input, its prompt, validation and relevant Submit/Send action reachable. Adjust the **appropriate content region** without indiscriminately moving the fixed header, bottom navigation, AI Voice surface or checkout controls.
- Retain text composition and surrounding scroll context through focus movement, multiline input, keyboard dismissal, resize and rotation. Distinguish intended IME movement from an accidental whole-screen jump; verify in Safari/installed PWA and native Android.
- Taps acknowledge input immediately at the **affected control**. A pending remote save/submit visibly occupies that control's state and guards repeat submissions, while unrelated regions remain usable. Only verified completion generates success presentation.

### UX-CORE-04 — Defer nonurgent interruptions

- A promotion, feature spotlight, rating prompt or announcement must not appear **during** an active lesson answer, recording, AI Voice turn, account login, permission decision, typed response or checkout transaction.
- Schedule nonessential prompts for a genuinely safe idle/navigation point. Never stack initial-login, resume, permission, marketing and checkout overlays. A user-triggered essential confirmation or blocking error may appear when necessary and follows the normal modal rules.
- Dismissing optional information cannot erase the learner's active task or disable the surrounding screen. This specifically constrains the approved checkout offer below: it is triggered **by the learner pressing X**, not by interrupting payment.

## 3. Additive owner-approved HSK AI feature UX (current eight-task plan)

**Status for every item in this section: approved design target, NOT necessarily implemented.** Preserve existing accounts, content, lessons, limits, backend-owned grading/payment and native differences. For service design, auth, event naming, persistence, entitlement and rollout, follow the live product AGENTS.md and current feature plan, not this UI-only addendum.

### UIUX-007 — Personal adaptive checks *inside* the normal lesson

1. The learner sees **one coherent ordinary lesson**. A bounded number of prior-weakness verification cards appear naturally **between** the pre-authored lesson cards. No new mandatory Weak Spots page, forced trip to “My Mistakes,” separate corrective lesson, or obligatory recovery mini-session.
2. Each inserted check is targeted at a **previously verified specific skill** (meaning, Hanzi, pinyin/tone, listening, word order, grammar), not a declaration that the entire word is unknown. Do not introduce unstudied material or replace the lesson's own questions.
3. Adaptive cards are visually part of the lesson sequence but **not part of the canonical lesson score**, XP, streak, hearts, rank, progress, completion or unlock conditions. Neither a wrong nor a missing adaptive answer may block the ordinary lesson. Do not depict extra XP or lower lesson accuracy for the adaptive result.
4. Preserve the original lesson order and recoverable position. A missing adaptive plan, unsupported card, stale response or network failure must allow ordinary practice to continue without a misleading “failed lesson” state. Personal adaptation never has to wait for a separate “My Mistakes” visit.
5. Card pacing and total count require UX validation; the source's illustrative 10+2 ratio is **not** a required quota. Do not invent a fixed amount on the design system's authority.
6. This is not an instruction to change grading/backend storage. See [the active source plan](https://github.com/akbarholturaev11-lang/HSK-AI-Bot/blob/main/HSK_AI_UI_UX_IMPROVEMENTS.md) and unified Course Plan when separately implementing.

### UIUX-008 — In-lesson flashcard interaction, not a parallel course

1. A flip/reveal flashcard may appear **as one existing-lesson exercise format** and within appropriate adaptive repeats; it must not displace grammar, audio, homework, dialogues or tests.
2. Before reveal, show a single clear Chinese learning prompt, **without leaking the answer**. On deliberate flip/“Show answer,” present the correct pinyin, learner-language meaning and contextual example, according to exercise type. Chinese audio is a separate explicit user action, not auto-play on scrolling.
3. Following reveal, clear “Know” / “Review again” controls are **self-assessment**. They are not a verified correct/incorrect attempt, cannot alone certify mastery, and do not grant XP or change the main lesson score. A separately graded exercise can record actual verified performance.
4. Show honest progress through the current finite card set and a brief end summary: viewed / self-marked know / review again, plus a route back to the **same original lesson**. Do not force an infinite drill.
5. Maintain the full Chinese prompt's legibility, tone-marked pinyin after reveal, screen-reader operation and a reduced-motion flip alternative. Do not replicate the visual identity of the third-party reference video; use the professional HSK AI design language.

### UIUX-012 — Approved 20% checkout close-offer flow (specific override of generic smart exit)

**Trigger:** an eligible learner chooses the checkout's **X** while in a checkout flow. An actual stepwise Back remains separate and returns **one** logical step; an already-open QR/preview layer closes before changing checkout steps.

1. First eligible checkout-X press: present **one compact center-viewport offer modal** with a clear “20% discount” heading, at most one short supporting line when needed, **exactly one primary “Apply 20% discount” CTA** and a small **top-right X to dismiss this offer**. Do **not** add a separate “Exit checkout” button inside this particular offer, a countdown, second offer panel or lengthy pitch.
2. Offer-X closes **the offer only**. Checkout, previously selected valid plan/method/step and displayed price remain unchanged. The **next checkout-X** on the same attempt exits directly, with no repeat offer or further confirmation. Not eligible, already offered this attempt, already applied the offer or transaction pending: no false/stacked prompt, and the exit remains genuinely available.
3. Offer acceptance requests the **existing server-authoritative offer/quote**. Show the discounted price, currency, period and relevant renewal terms **only after verified server approval**; remain on the same still-valid checkout step. Pending/error/offline cases use inline truthful retry, never fake an activated discount or duplicate an invoice.
4. On reopening checkout, restore only validated safe selections and recheck actual price, eligibility and transaction status. A pending or manually reviewed payment is **not** an abandoned unpaid cart and cannot be bypassed with another exit-offer invoice.
5. Eligibility is determined by actual server state. The owner's current condition is **never had a paid subscription OR never redeemed a discount in a confirmed payment**; it is **not** an automatic client-side AND/new-customer filter. The source plan explicitly calls for an economic review of this OR policy before implementation; do not silently change the rule or claim that the current backend already implements it.
6. Reuse the current Android Lava offer mechanism rather than stacking another offer over it; never put purchase UI into a Play channel where the product's channel rules prohibit it. Handle iPhone PWA, Android Direct/manual/Lava and existing Play-to-PWA routes according to verified supported surfaces.
7. Safeguard focus return, safe areas, keyboard, dismissibility and accessibility. No hidden exit, misleading urgency or customer-pressure loop. For the eligible-offer case, this specific owner-approved **CTA + X** composition takes precedence over product skill §18's generic **Continue payment + Exit checkout** confirmation example.

### UIUX-002 — Two separate full-screen XP and Streak details

- **🔥 Streak indicator** opens an actual **full-screen Streak page, not a bottom sheet**: prominent verified current streak; distinct *personally selected* target, short progress reading, real monthly calendar with clearly differentiated verified active days / missed days / today / future; a compact goal panel; reuse the existing target selector (7/14/30/50 days) where supported. Never label an achievement as the personal goal or infer an unset target from a fallback illustration.
- **💎 XP indicator** opens an actual **full-screen XP page, not a bottom sheet**: verified total XP labeled as *experience, not currency*; compact daily and weekly progress; factual activities that award XP; a bounded verified event history **only if supported by an authorized source**. Never create gem balances, spending, fake rewards or duplicate XP counters just to fill cards.
- Both pages use a readable scrolling canvas with a few purposeful content groups, consistent full-screen Back and return to the originating location. Do not wrap the entire page in one oversized card or introduce competing panels. Missing records are unavailable, not verified zeros. These are planned destination screens, **not a statement that the present header opens them today**.

### UIUX-003 — Dictionary's automatically scoped filters and saved words

- Default dictionary to the learner's **currently selected HSK 2.0 or HSK 3.0 course version**, without a redundant always-visible version row; default level to **All levels within that version**. Allow a clearly labeled level selector and retain supported search within that scope. Do not silently constrain it to the current lesson level.
- Put one compact ⭐ **Saved** filter in the level-control area. It filters only saved words in the active version and optional chosen level. Provide a genuine no-results state; turning it off restores the appropriate full list, and query clearing does not erase bookmarks.
- Give each word an independent **☆/★ save toggle** with a clear saved state, separate accessible hit area and no accidental opening of the detail view. Saving is not deletion. A detail-page save indicator, if present, reflects the same status.
- Word identity and saved membership must survive account-appropriate PWA/Android navigation and HSK-version switching; selecting a different version **does not delete** saved items. The local-only ready-phrases bookmark mechanism is **not** evidence of cross-device dictionary saved-word support. The future implementation must verify account ownership and the authoritative persistence path.

### UIUX-004 — Ready-phrases compact accordion rows

- **Collapsed by default**, show **only the full Chinese phrase, ☆/★, explicit-audio icon and small disclosure chevron**. Pinyin, translation, category and copy action are hidden until this **distinct phrase-card disclosure** is activated. This is **not** the generic two-line *optional helper-text* clamp; it is a product-specific browse/detail interaction. Full educational information must become available on expansion without truncation.
- Row/card free-area activation reveals pinyin and meaning, then category and a compact copy icon with concise confirmed copied feedback. No large duplicate “Copy” button. Open **at most one phrase row** at a time; opening another collapses the prior row.
- Saving and audio use **independent controls** that neither open nor collapse the row. Audio plays **the Chinese text of that phrase only on explicit tap** and distinguishes loading / playing / stopped / error; avoid autoplay and duplicate TTS machinery. Keep the current phrase bookmark set distinct from dictionary saved words.

### UIUX-005 — One coherent, nonduplicate profile

The approved top-to-bottom **learner profile** composition is: (1) standard RootHeader with notifications/settings; (2) compact avatar/name/verified personal goal and real Free/Trial/Temporary/Pro status; (3) **one** accuracy section for actual *all-time vs today* verified responses, with unavailable distinguished from zero; (4) **one** compact week-streak calendar linking to the full-screen UIUX-002 page, **not** a second “30-day streak” achievement card; (5) **one** real “100 lessons” achievement; (6) **one** appropriate plan/subscription panel; (7) a compact Friends entry and preserved settings/functions.

- Do not duplicate a large XP hero already assigned to the XP page, show both a Pro promo strip and another giant Pro banner, or invent account status while loading.
- Preserve the intentional iPhone PWA **Liquid Glass bottom navigation** (translucency and scroll interaction); audit last-content safe-area reachability rather than deleting that affordance. Match Android's legitimate native navigation behavior; parity is semantic, not pixel-identical.
- A missing goal, unverified accuracy or unpaid entitlement does not become a decorative positive metric.

### UIUX-009 — No separate added rule

The entire visual purpose of UIUX-009 (avoid redundant utility icon backplates, nested circles and low-value card decoration **without sacrificing the accessible control area**) is **already covered by** the professional [surfaces](design-foundations/surfaces-and-elevations.md), [iconography](design-foundations/iconography.md) and [composition](design-patterns/component-composition-and-customization.md) pages. **Do not clone it in this addendum.**

## 4. Design review / handoff acceptance boundary

For every future screen implementation or audit:

1. Read the **relevant original 44-page authority first**, this addendum only for a covered HSK AI-specific flow, the latest product root AGENTS.md, latest product UI skill and the current owner-approved feature plan. If they disagree, record exact source, which statement is newer/specific, functional constraints and narrowly justified resolution; never silently downgrade the professional visual standard.
2. Distinguish **observed current behavior**, **owner-approved proposed UX**, **implemented product behavior**, and **verified backend result**. Plans, generic examples and selected PNG illustrations are not proof of existing API/feature availability.
3. Review iPhone Safari / installed PWA and supported Android paths, small/large phone sizes, Chinese tone marks, RU/TJ/UZ text expansion, slow/offline/partial-data states, accessibility, touch/Back, keyboard, focus and reduced motion. Avoid app-release or CI-pass claims without running the actual checks.
4. This file must be carried into any future canonical design-system transfer **after** the approved source is reconciled. Keep the 44 original page paths/count unchanged and update their documentation navigation separately. The real product AGENTS.md and existing hsk-ai-ui skill are to be **integrated in place in a separate authorized task**, not replaced by this document.

**Documentation-only result:** original professional guideline pages are untouched; no application screens, billing, lessons, auth, analytics, monitoring, CI or release configuration are changed by adding this file.
