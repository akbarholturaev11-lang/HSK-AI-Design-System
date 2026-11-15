# Future HSK AI root/skill authority patch — copy-ready handoff (NOT APPLIED)

**Purpose:** when separately authorized to transfer the design system into `akbarholturaev11-lang/HSK-AI-Bot`, make it the **first design authority** for **all UI/UX decisions** without replacing the target's real security, business, API, platform, localization, performance, testing or git policies.

**Current state:** both destination files were directly read from `HSK-AI-Bot/main` at `839bdebb6d4b41ec2015ec734bc75faefa8eee17`. They are **not edited by this document**. Recheck latest main and reconcile changes before any future patch.

## A. Add a section to HSK AI root AGENTS.md (do not replace the file)

```md
## HSK AI professional design system — primary UI/UX authority

For all new, changed or audited **iPhone PWA and native Android** UI/UX, first read:
1. `docs/design-system/README.md` (mandatory authoritative entrypoint);
2. `docs/design-system/PROFESSIONAL_FIRST_CONTRACT.md`;
3. `docs/design-system/APPROVED_DECISIONS.md`;
4. the applicable detailed page under `docs/design-system/guidelines/`;
5. `.agents/skills/hsk-ai-ui/SKILL.md` for the existing platform-specific operational UX invariants.

**Conflict order:** safety, privacy, accessibility, verified learning correctness, server/account/payment truth, actual platform capability and official HSK AI brand/characters/Voice Orb are hard constraints; otherwise the **professional full-detail design system is the default visual and interaction target**. Existing PWA/Android appearance, one-off style values and component implementations are a baseline to improve, not a veto. Apply the smallest real product exception, document the evidence and retain the remaining professional detail.

Never invent missing product functions, fake metrics, extra pages, payment decisions, user entitlement or customer feedback just to match a screenshot. Keep actual native navigation destinations, auth, course scoring/progress, localization and data contracts. **A design document does not authorize changing feature business logic.** All app UI implementation and associated testing occur in a separately scoped work item under the existing root `AGENTS.md` rules.

Design-system authoring does not import another vendor's runtime libraries, mascot, school features, screenshots or fonts into HSK AI. For any conflict, the current, owner-approved feature decision and protected application behavior take precedence only as to the actual function and identity, not arbitrary existing visual quality.
```

This insertion is intentionally short. It does not alter any existing Git, analytics, monitoring, localization, payments, Pro, security, access, Android, Admin PWA or CI rule in target `AGENTS.md`.

## B. Edit the **existing** .agents/skills/hsk-ai-ui/SKILL.md

**Do not add a second competing `SKILL.md`. Do not overwrite the existing 18 sections.** Integrate the new master standard into the top of the existing skill, then make two precise reconciliations.

**Add directly after its scope paragraph:**

```md
### Professional design system precedes existing visual style

Before planning, writing or reviewing any learner PWA/Android UI, read
`docs/design-system/README.md`,
`docs/design-system/PROFESSIONAL_FIRST_CONTRACT.md`,
`docs/design-system/APPROVED_DECISIONS.md`, and the relevant detailed component/foundation/pattern page.
Professional visual/interaction decisions are the **target standard**,
including their small geometric, state, spacing, type, action and responsive details.
The app's current implementation establishes what works and what must remain
functionally true, but existing visual styling does not override the professional target.
Use real HSK AI branding, verified function and native platform constraints as
precise, documented exceptions; preserve all other professional details.
Do not invent non-shipped features or edit non-UI business logic.
```

**In existing section 6:** replace only the sentence that currently demands blanket reuse of established visual tokens/components. Proposed precise sentence:

> Reuse existing HSK AI components and semantic tokens **when they fulfill** the professional design standard; if they do not, identify the visual/interaction delta for controlled later redesign, while preserving brand identity, verified functional states, HSK AI course data and actual native/PWA platform behavior. Never introduce per-screen arbitrary variants that defeat the coherent professional system.

**In existing sections 4 and 8:** replace references to the old "**One-Line Expandable Text**" pattern with "**Two-Line Optional Supporting Description**". Do not preserve both instructions.

**Replace the existing full section 143–155 headed "One-Line Expandable Text — UI/UX standard" with the following approved content (after re-reading the latest source, since line numbers may move):**

```md
## Two-Line Optional Supporting Description — UI/UX standard (owner-approved)

Apply **only to genuinely optional secondary descriptions, helper text and supplementary hints**. Never collapse a lesson question, answer, required instructions, essential Hanzi/pinyin/meaning, actual user input, subscription price/terms/limits, important safety notices, blocking errors or required error recovery.

1. **Collapsed maximum:** no more than **TWO FULLY VISIBLE rendered lines**. Never expose part of a third line. A single short line remains a single line. Prefer proper line clamping based on measured text layout instead of a guessed pixel height.
2. **Conditional upper-right glyph only:** if and only if full text exceeds the collapsed two-line layout, show a small **⌄** in the **top-right corner of that same explanation**. No visible "More", "Подробнее", "Свернуть", extra labeled CTA, icon backplate, standalone card or popup.
3. **Exact toggle:** activate the icon to expand all text **in place**; change the icon to **⌃**, in the same top-right position. Keep the ⌃ button available while expanded; a second activation collapses to two full lines.
4. **Correct overflow measurement:** decide whether a toggle is needed based on the full text against its **collapsed two-line layout** and reserved icon area, not against expanded content height. Recalculate on resize, localization, text scaling and content replacement. If text now fits within two lines, show no inert button.
5. **Accessible without oversized icon:** the visual icon stays small; its real hit area is at least **44 CSS px on iPhone PWA / 48 dp on Android**, with a localized screen-reader action name, expanded/collapsed semantic state, keyboard/touch navigation and focus continuity.
6. **Purposeful animation:** subtle, non-blocking in-place expansion; respect reduced-motion preferences. Do not reset neighboring input, lesson progress or scroll position.
7. **Implementation boundary:** these are authoritative DESIGN RULES, not proof that PWA, Android or the older Admin PWA currently implements them. Audit the real screen in a separate approved implementation task before changing behavior.
```

**Do not delete target skill's other professional rules**: stable headers, compact navigation icons, honest skeletons and incremental reveal, saved scroll/tab/draft state, non-invasive loading, safe Back, checkout truth and non-manipulative purchase design. They remain useful in the new unified system. The existing one-line Admin PWA pattern is a **known difference requiring a later explicit implementation decision**, not proof that the HSK AI owner-approved two-line standard is invalid.

## C. Add canonical docs/design-system/README.md after content is actually transferred

Proposed self-contained master entrypoint (copy only **after** all listed files exist):

```md
# HSK AI professional design system — canonical UI/UX authority

**Status:** HSK AI's primary professional design specification for learner iPhone PWA and native Android.
**Do not mistake a design target for a shipped feature.**

Read in this order:
1. [Owner-approved decisions](APPROVED_DECISIONS.md): protected brand, learning and interaction exceptions.
2. [Professional-first design contract](PROFESSIONAL_FIRST_CONTRACT.md): default design hierarchy and minimal adaptation policy.
3. [Foundations](guidelines/design-foundations/): colors, semantic tokens, typography, spacing, layout, iconography, illustrations, surfaces, motion, data visualization.
4. [Components](guidelines/design-components/): per-control anatomy, variant/state, placement, focus, responsive and accessibility decisions.
5. [Patterns](guidelines/design-patterns/): composition, data reports, feedback, filter/sort and reference-only visual reasoning.
6. [Transfer source catalog](SOURCE_CATALOG.md): source SHA and source-page completeness evidence.
7. [Migration conflict register](MIGRATION_CONFLICTS.md): verified owner/product exclusions and future compatibility review.

**Design priority:** professional full-detail design is the default target; only exact verified functional, brand/identity, platform, user safety/accessibility and server/data constraints permit minimal exceptions. Never reduce design quality simply to match current UI or an external source company's business rules.

**Only documentation is authoritative here.** Do not import Storybook, Wonder Blocks, third-party fonts or unlicensed images into the application. This folder is a reference for future screen-by-screen redesign, not new APIs/features or release approval.
```

## D. Future transfer and merge discipline

1. Refresh current main and source branch SHAs; re-read target `AGENTS.md` and existing UI skill.
2. Convert all **44** guideline MDX files into portable, complete, readable native Markdown pages. Verify exact path inventory and high-fidelity source coverage.
3. Add the protected source documents to the intended `docs/design-system/` location without overwriting unrelated target docs.
4. Update target `AGENTS.md` by **minimal insertion only**, reconcile the existing UI skill with **one** two-line rule and professional-first style priority, check references and protect all other owner decisions.
5. Verify exact documentation diff and route/relative links; test **documents** for broken references. App CI/browser/mobile tests are separately required **only if/when app behavior is actually changed**, not for this prior source-only decision migration.
6. Keep the application UI/UX rewrite as its **own future user-approved task**. Do not silently begin UI implementation just because the design docs now live in the product repository.

## E. Current completion boundary

This file is a **copy-ready proposed patch**, **not applied to HSK AI main**. Applying it before the 44 documents are present would create broken authority links. The source branch continues to host the preparation and conflict inventory. Never report product AGENTS or UI skill updated until the GitHub target commit confirms it.
