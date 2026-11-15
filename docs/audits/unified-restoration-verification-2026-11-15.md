# HSK AI Design System — unified restoration verification (2026-11-15)

**Disposition: PARTIALLY VERIFIED — RELEASE BLOCKED.** This document distinguishes verified repository facts from checks that have **not** executed. The restoration branch is a review workspace, not an approved public design release or evidence that the PWA/Android UI has been changed.

## Authority and boundaries

- Design repository: `akbarholturaev11-lang/HSK-AI-Design-System`.
- Historical professional baseline: `f5ce49cbc219`.
- Protected main baseline inspected: `007c5c474909d81208483772f3c24cf7e656d55e`.
- Restoration review branch: `restore/hsk-ai-professional-unified-audit-20261115`.
- Review gate: [draft PR #4](https://github.com/akbarholturaev11-lang/HSK-AI-Design-System/pull/4).
- Product code read-only comparison: `akbarholturaev11-lang/HSK-AI-Bot` `main` (implementation files initially read at `f4a1f8aa36859419a5dc94ae66cc7b23d6b49dd3`, then rechecked against `839bdebb6d4b41ec2015ec734bc75faefa8eee17`). The sole intervening commit **added** `HSK_AI_UI_UX_IMPROVEMENTS.md` and did **not** modify the inspected implementation files. That newly added document is a **future UI/UX discussion and implementation plan**, not proof that its planned features have shipped or an override of this design system's approved decisions.
- Main's `DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md` was brought into the unified branch **byte-for-byte with identical Git blob SHA** `f679725a5e69ca9e2de85438e57a413aedc8142f`. It was not rewritten or relaxed.
- The production HSK-AI-Bot repository was **not modified**.

## Exact deleted-material disposition (verified against Git trees)

Historical tracked-file inventory comparing `f5ce49cbc219` to pre-restoration main:

| Status | Count | Verification |
| --- | ---: | --- |
| Original reference PNG restored | **73** | Every original deleted path is present on the unified branch with an **identical source Git blob SHA**. These are *historical references, not cleared HSK AI product art*. |
| Preserved as inert text archive | **11** | Original removed source/governance files are represented by specified `.txt` archive paths, which exist and are not executable Storybook/TSX pages. |
| Deliberately excluded | **36** | The original deleted paths remain absent from the working tree; rationale is recorded per path. |
| **Total** | **120** | Exactly 120 unique, numbered dispositions, corresponding one-for-one with the 120 files deleted from the historical baseline. No missing, unexpected, or duplicated item and no SHA-mismatched recovered image were found. |

**Canonical one-file-at-a-time register:** [`docs/audits/deleted-material-item-audit-2026-11-15.md`](./deleted-material-item-audit-2026-11-15.md). This is the per-material disposition record; do not infer that 120 original assets should all be made active.

The previous `__docs__/reference-archive/RESTORATION_MANIFEST.md` listed 72 images, but the unified tree contained **73 exact restored PNG blobs**. Its omitted item is `__docs__/design-components/assets/popovers/system-guidance.png`, SHA `6340859147e73d913fd3fbe7243f33e4fe23d6a0`. The manifest and archive README were corrected to 73. This is an **inventory correction**, not a 73rd newly generated image or proof of reproduction rights.

### Preserved general design ideas; excluded foreign policies

- Preserve semantic contrast, coherent visual hierarchy, readable focus indicators, borders and dividers, responsive layouts, usable icons and accessible hit regions.
- Preserve chart anatomy, trustworthy metric definitions and denominators, exact table values, consistent sort/filter scope, empty/filtered/loading/stale/error/permission distinctions, and safe feedback/onboarding behavior.
- Preserve useful interactive-state logic in **separate documentation-only HSK AI examples with explicitly fictional data**, not production metrics or invented mastery thresholds.
- Keep Khan Academy/Khanmigo/Khanductor characters, Gems systems, school/district/class/teacher workflows, former governance authority and source-specific score thresholds **outside active HSK AI requirements**.
- The eleven source snippets are inert archives and the excluded paths are recoverable from Git history; neither authorizes active execution, use in production or republication.
- A recovered historical diagram may only illustrate a general principle while rights, attribution and false-product-branding risks are unresolved. The final public system must replace uncleared source artwork with rights-cleared original diagrams or obtain permission.

## Product-specific decisions retained

The unchanged approved register and current HSK AI-specific docs retain:

1. Brand and semantic status colors separately, with actual existing PWA light/dark values (`--hsk-cinnabar` light `#E04A40`, dark `#20BCEB`); error or destructive meaning must not be inferred merely from branding.
2. Phosphor for new generic iconography where appropriate, plus existing approved custom icons and correct platform-specific tap targets.
3. Canonical HSK AI Panda, Dragon/Longlong, Crane/Hehe, Monkey/Wuwu, Rabbit/Yueyue appearance, learning functions and **both correct and incorrect** feedback reactions.
4. Red pearlescent Voice Orb, verified listening/thinking/speaking state design, keyboard/chat/overlay semantics.
5. Four-unit spacing; six screen-purpose layouts; actual native iPhone PWA/Android navigation and safe areas.
6. Hanzi → tone-marked pinyin → learner-language meaning hierarchy and task-specific answer reveal; professional typography in Cyrillic, Latin and Chinese.
7. Only **optional secondary explanations** can collapse to a **maximum of two fully visible rendered lines**, with **top-right icon-only ⌄/⌃**, expanded **in place**, and the up control retained. Essential prompts, answers, payments, warnings and blocking errors never collapse.
8. Real server confirmation for account, subscription, feedback and learning outcomes. Product code behavior is verified separately from target design documents.

No decision has been changed on the grounds of an inherited foreign design example.

## Incremental improvements on the unified branch

- `DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md` — restored from the approved main document without editing its content.
- `__docs__/reference-archive/RESTORATION_MANIFEST.md` and `README.md` — reconciled 72 vs **73** exact original PNG sources.
- `__docs__/design-patterns/component-composition-and-customization.mdx` — removed misleading “one-line expandable-text” wording without changing the approved two-line rule.
- `__docs__/design-components/data-tables.mdx` — restored in-place detailed behavior for missing vs zero, progress values, accessible cell status/flags, alignment, per-row and conditional bulk actions, sorting/selection, pagination and mobile constraints. Historical classroom semantics were not reinstated.
- `__docs__/design-patterns/data-reports.mdx` — restored in-place detailed placement/copy and recovery rules distinguishing empty container, empty page, filtered-to-none, full load failure, isolated failure, stale refresh and permission revocation. No invented data, teacher controls or source illustrations were promoted to HSK AI policy.
- `__docs__/components/HskReferenceDemos.tsx` and `__docs__/design-components/assets/hsk-reference/HskReferenceDemos.tsx` — increased minimum demo button area from 40px/unspecified to 44px. They are currently separate and **must not be deduplicated without rendered interaction tests**.

These are documentation-only edits; they are **not a claim** of deployed UI or backend change.

## Checks actually performed

| Area | Evidence | Verdict |
| --- | --- | --- |
| Deleted-file reconciliation | Historical tree vs main vs unified branch; all numbered audit entries evaluated | **PASS:** 120/120 classified, 73 exact blobs, 11 mapped archives, 36 excluded |
| Reference-image inventory | Manifest rows and source Git blob SHA comparison, including `system-guidance.png` | **PASS:** 73 historic source references identified |
| Approved decision integrity | Main vs restoration branch Git blob for approved registry | **PASS:** identical SHA `f679725a5e69ca9e2de85438e57a413aedc8142f` |
| Documentation relative imports | Static tree inspection of **45 MDX/draft documents** and **348 relative imports** | **PASS (static only):** no unresolved import path observed |
| Inline documentation images | Static check for missing `alt` attributes on `<img>` tags in the same docs | **PASS (static only):** none missing |
| Declared Storybook doc page links | Reviewed declared `<Meta title>` IDs and `?path=/docs/...--docs` destinations across **44 published MDX pages** | **PASS (static only):** referenced page IDs correspond to known published titles; individual anchor existence and browser route resolution not executed |
| App baseline | Read actual PWA token, course, onboarding, character, voice and Android design/lesson/voice source files | **READ-ONLY INSPECTION:** product code not edited; exhaustive device parity not tested |
| Documentation demos | Two modules inspected for explicitly fictional data and no backend network requests | **PARTIAL:** source review only, no browser/keyboard/runtime validation |
| Storybook installation | `pnpm install --frozen-lockfile` | **NOT RUN / NO SUCCESS EVIDENCE** |
| TypeScript | `pnpm typecheck` | **NOT RUN / NO SUCCESS EVIDENCE** |
| Storybook build | `pnpm build` | **NOT RUN / NO SUCCESS EVIDENCE** |
| GitHub CI and Chromatic | GitHub Actions runs and commit check runs queried | **BLOCKED:** 0 workflow runs and 0 check runs returned at audit time; no green build claim |
| Mobile rendered accessibility/visual check | Phone viewport, light/dark, focus, dialogs, contrast, interactive sample behavior | **NOT RUN** |
| Upstream PNG/code rights | Public source repository available, explicit transferable image license/permission not established | **BLOCKED:** redistribution not cleared |

The static import and `alt` inspection does **not** validate MDX compilation, all Storybook IDs/anchors, unused imports, visual legibility or WCAG conformance. The old `@khanacademy/wonder-blocks-*` dependency stack is still used by the **documentation renderer**; it must not be removed or treated as the HSK AI production design framework without a tested dependency migration.

## Mandatory gates — do not merge before all pass

- [ ] Resolve distribution/attribution license for **each publicly distributed historical artwork** or remove/replace it with rights-cleared HSK AI-owned diagrams while preserving the instructional design rule. Do not publish an uncleared historical image.
- [ ] Run `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm build`; record exit codes, dependency/build errors, and environment.
- [ ] Restore and pass GitHub Actions checks on the reviewed PR head. Diagnose repository/Actions settings if workflows still produce zero runs; do **not** label an absent check as green.
- [ ] Open Storybook and inspect every relevant page and demo in both light/dark treatment, 320px and 375px phone widths and wider viewports. Inspect mobile overflow, safe areas, keyboard focus, localization, accessible names and linked anchors.
- [ ] Confirm every non-documentation asset/flow is correctly distinguished from a live HSK AI feature. Do not use any historical mock metric as production data.
- [ ] Verify source-vs-current guideline completeness and the two interactive-demo implementations after compilation. Preserve existing approved behaviors without a “redesign” override.
- [ ] Recheck exact approved registry SHA and confirm no changes in the real `HSK-AI-Bot` repository.
- [ ] Only then prepare a safe reviewed merge and retest the main result. **No merge is authorized while these unresolved gates remain.**

**Final status as of this audit: a safer and more complete *draft* restoration, NOT a finished/validated design system.** Existing professional HSK AI guidelines and the underlying per-file inventory are retained, but the release remains explicitly blocked by unproven IP rights, absent CI/build, and absent visual/runtime tests.
