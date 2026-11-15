# HSK AI — portable professional design system (internal review)

**Source status:** 44/44 standalone Markdown guideline files have been created and independently inventoried in `HSK-AI-Design-System` at this repository branch (snapshot `776d92e2c9b4b639db3b8c5c6542bf3006fc69d0`). This is a **candidate transfer corpus, not the final HSK app's currently installed design system**. HSK-AI-Bot has not been changed.

**Latest verification:** [44 guideline pages, 212 original-SHA image blobs and all local reference links — integrity audit](../audits/PORTABLE_EXAMPLE_INTEGRITY_2026-11-15.md). The historic source-notes in the portable pages have been reconciled with the physically copied, selected sample images; excluded screenshots are not present in the portable examples directory.

## Portable image-library integration complete (35 guidelines / 212 source-exact PNGs)

The **212 visually selected source sample PNG files are now physically included within this design repository** at [`docs/portable/examples/`](examples/README.md), copied using their **original Git blob SHAs, without recompression or pixel alteration**. The [machine-readable manifest](examples/manifest.json) links every selected source image, destination image, content SHA and audit batch. **All 35 corresponding portable Markdown guidelines contain an image preview and direct links to all their approved examples**; the other nine guidelines intentionally remain text-only, because their historical assets were excluded or did not have an approved generic sample.

**Verification:** every transferred PNG SHA matches its original `__docs__` blob; 212 distinct portable image files; exactly 212 unique image links across the 35 guidelines; no missing approved image or image/guide link in the checked set. **This was done inside HSK-AI-Design-System only.** No source PNG was deleted, no HSK-AI-Bot product file edited, no foreign-app screenshot included. The four mixed examples and one inaccessible large PNG remain outside the selected 212.

## Owner direction: carry useful visual SAMPLES, exclude foreign APP SCREENS

**This is an internal reference, not a publication.** The portable Markdown set already preserves the 44 professional guideline texts, but **the selected helpful non-screen illustrations must accompany the future transfer**, not be discarded merely because their original MDX import is historical. Classify every source image by **actual visual content**: neutral component/layout/spacing/variant/state illustration -> keep; screenshot or branded product UI from a foreign application -> exclude; genuine HSK artwork -> use canonical source; ambiguous -> visually review.

See [the fully reconciled image-selection decisions](../migration/VISUAL_REFERENCE_SELECTION.md): **all 316 paths have been evaluated**, with **212 SHA-identical selected samples copied** into the internal examples library. One oversized original image remains unviewed; no unknown or foreign-app images were copied. Sample palettes and spacing values are **illustrative, not HSK AI design tokens**. No public-site build or replacement of hundreds of foreign screenshots is required for the internal design system.

## Design authority — professional rules take precedence

Before reading a component guideline, consult [Professional-first design decisions](../../DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md) and [approved HSK AI owner decisions](../../DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md). The **professional UX/UI system** is the intended visual target. Existing HSK AI screens are implementation evidence only; adapt the professional method at the **smallest precisely verified** functional, user safety, platform, true-learning-data or canonical-brand collision, without sacrificing the remaining professional detail.

**Explicit hard rules:** correct and incorrect Panda/approved-character reactions, official brand identity, red pearlescent Voice Orb, authentic backend-owned results, 4-unit spacing; optional supporting descriptions at **most 2 fully visible collapsed lines**, only a **top-right ⌄/⌃** accessible icon control. Never hide required Hanzi/pinyin/answer/payment/error information. Android and iPhone PWA retain real platform-specific behavior.

## Verified editorial parity review — 44 of 44 pages

The complete [MDX-to-Markdown parity audit](../audits/MDX_TO_MARKDOWN_PARITY_AUDIT_2026-11-15.md) records each currently inspected source/portable Git blob, heading retention, source provenance, converted demonstration coverage and the local Markdown file-link check. **All 44 documents were reviewed for textual and structural continuity.** The remaining source-image geometry, source-licensed wording and 29 live demos are explicitly **not** declared fully reproduced in the portable edition.

Two documented source/portable content corrections were made in both variants: a school-specific filter text example was neutralized without losing the professional truncation/selection rule, and the surfaces rule now gives professional design precedence over incidental current app geometry. The source blob references in both portable headers and the transfer catalog were updated.

## What the portable edition does and does not include

- **Includes:** all 44 guideline file texts, retained Markdown headings/tables, explicit professional visual-and-behavioral rules, HSK AI adaptation boundaries, source blob SHA metadata, and in-place source figure descriptions with original source paths for traceability.
- **Excludes:** executable JSX/Storybook interactive demos (see the [29-demo semantic audit](../migration/LIVE_DEMO_SEMANTICS_AUDIT.md)), original source PNG/font binaries, Wonder Blocks and Storybook dependency packages, vendor runtime styles, claims that any fictional sample has live HSK AI data. The 29 live `<Demo>` blocks in Buttons and Banners are represented by noninteractive descriptions and selected semantic details; **their original visual state behavior has not been rebuilt**.
- **Outstanding before final canonical migration:** visually examine/redraw source figures with rights-cleared HSK AI artwork (298 figure references); **the initial Markdown review copies retain historical source phrasing and are NOT cleared for distribution**; independently reauthor or obtain explicit rights for prose; reconcile all source-to-port differences at detail-level; update HSK AI main root `AGENTS.md` and existing UI skill **only during separately authorized documentation transfer**; then audit real app UI in a separate task.

## Exact 44-file professional guideline directory

### Design foundations — 11 files

- [Borders And Dividers](guidelines/design-foundations/borders-and-dividers.md)
- [Colors Semantic](guidelines/design-foundations/colors-semantic.md)
- [Colors](guidelines/design-foundations/colors.md)
- [Data Visualization](guidelines/design-foundations/data-visualization.md)
- [Iconography](guidelines/design-foundations/iconography.md)
- [Illustration](guidelines/design-foundations/illustration.md)
- [Layout](guidelines/design-foundations/layout.md)
- [Motion](guidelines/design-foundations/motion.md)
- [Spacing](guidelines/design-foundations/spacing.md)
- [Surfaces And Elevations](guidelines/design-foundations/surfaces-and-elevations.md)
- [Typography](guidelines/design-foundations/typography.md)

### Design components — 27 files

- [Active Filters](guidelines/design-components/active-filters.md)
- [Badges](guidelines/design-components/badges.md)
- [Banners](guidelines/design-components/banners.md)
- [Buttons](guidelines/design-components/buttons.md)
- [Chart Container](guidelines/design-components/chart-container.md)
- [Checkbox Group](guidelines/design-components/checkbox-group.md)
- [Clear Filter](guidelines/design-components/clear-filter.md)
- [Data Tables](guidelines/design-components/data-tables.md)
- [Date Filter](guidelines/design-components/date-filter.md)
- [Date Picker](guidelines/design-components/date-picker.md)
- [Distribution Charts](guidelines/design-components/distribution-charts.md)
- [Dropdown Select](guidelines/design-components/dropdown-select.md)
- [Hsk Ai Characters](guidelines/design-components/hsk-ai-characters.md)
- [Inline Filter Button](guidelines/design-components/inline-filter-button.md)
- [Modals Selection](guidelines/design-components/modals-selection.md)
- [Modals](guidelines/design-components/modals.md)
- [Popovers](guidelines/design-components/popovers.md)
- [Progress Charts](guidelines/design-components/progress-charts.md)
- [Progress Stepper](guidelines/design-components/progress-stepper.md)
- [Radio Button](guidelines/design-components/radio-button.md)
- [Search Field](guidelines/design-components/search-field.md)
- [Summary Cards](guidelines/design-components/summary-cards.md)
- [Text Field](guidelines/design-components/text-field.md)
- [Toasts](guidelines/design-components/toasts.md)
- [Toggle](guidelines/design-components/toggle.md)
- [Tooltips](guidelines/design-components/tooltips.md)
- [Trend Charts](guidelines/design-components/trend-charts.md)

### Design patterns — 5 files

- [Collecting Feedback](guidelines/design-patterns/collecting-feedback.md)
- [Component Composition And Customization](guidelines/design-patterns/component-composition-and-customization.md)
- [Data Reports](guidelines/design-patterns/data-reports.md)
- [Filter And Sort](guidelines/design-patterns/filter-and-sort.md)
- [Professional Reference Gallery](guidelines/design-patterns/professional-reference-gallery.md)

### Introduction — 1 files

- [Introduction](guidelines/introduction.md)

## Transfer controls

Use [Upstream rights verification](../migration/UPSTREAM_RIGHTS_VERIFICATION_2026-11-15.md) for the **critical source-prose and figure rights gate**. Use [Source catalog](../migration/TRANSFER_CATALOG.md) for the source and destination identity of every page, [Existing product-rule conflict register](../migration/CONFLICT_REGISTER.md) for confirmed contradictions, [Future root/skill authority insert](../migration/TARGET_AUTHORITY_INSERT.md) for safe integration, and [Asset quarantine inventory](../migration/ASSET_AND_RUNTIME_INVENTORY.md) for the 316 PNG/30 font provenance evidence. See [migration readiness](../../MIGRATION_TO_HSK_AI.md) for the exact gate conditions.

**Technical documentation-only inspection is not real device/app testing.** These documents remain within the design-system repository; the next operation must not copy them into production root, claim rights-cleared images or silently overwrite the HSK app agent instructions.
