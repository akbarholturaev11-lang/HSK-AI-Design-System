# HSK AI — exact 44-page design-guideline transfer catalog

**Source repository:** `akbarholturaev11-lang/HSK-AI-Design-System`.
**Read-only source snapshot:** `restore/hsk-ai-professional-unified-audit-20261115` HEAD `be66cfea3c6b80bb32574a96719896298b2506b3`, verified via GitHub tree.
**Destination (future, NOT modified):** `akbarholturaev11-lang/HSK-AI-Bot`.
**Status:** Migration preparation / source inventory. This is **not** a successful transfer or proof of rights to graphics.

## Precise inventory

- **44 active MDX guideline pages:** 11 foundations, 27 components, 5 patterns, 1 introduction.
- Each of the 44 page blobs below is inventoried by **Git SHA** at the cited branch snapshot; a future migration must check this source SHA has not changed before translating/copying. **Source-page completeness is required: 44/44, no silent omissions.**
- **299 image-import occurrences** counted on the 44 pages, across **39 image-bearing MDX pages**; five have zero imported images. Occurrences are *not* 299 distinct assets; images may be reused.
- The repository Git tree contains **316 PNG blobs and 30 static font files**. Do **not** assume their copyrights/licensing are cleared, or use them in a future product integration merely because they are tracked in Git.
- The 73 restored historical third-party PNGs and 11 inactive source-code archives have separate file-by-file audit. `docs/audits/deleted-material-item-audit-2026-11-15.md` and `__docs__/reference-archive/RESTORATION_MANIFEST.md` are **evidence, not production assets**.
- Foreign product visuals, Wonder Blocks runtime code/dependencies, historical vendor logos, bundled fonts, demo screenshots, Figma external prototype links and archive text must not become default HSK AI app requirements.

## Destination file map (all 44, zero gaps)

The destination paths are the **intended documentation locations**, not files already present in HSK AI. Convert MDX/Storybook UI wrappers into portable Markdown **without deleting the professional design decisions**. Protect meaningful diagram geometry by rights-cleared originals or detailed textual description; do not just drop all figures and call the guide complete.

| # | Source file | Git blob (prefix) | Image imports | Intended destination | Packaging work |
| ---: | --- | --- | ---: | --- | --- |
| `01` | `__docs__/design-components/active-filters.mdx` | `b7b705a12f82` | 4 | `docs/design-system/guidelines/design-components/active-filters.md` | Text conversion + figure provenance |
| `02` | `__docs__/design-components/badges.mdx` | `048a1b078fb6` | 19 | `docs/design-system/guidelines/design-components/badges.md` | Text conversion + figure provenance |
| `03` | `__docs__/design-components/banners.mdx` | `7eb978d12691` | 5 | `docs/design-system/guidelines/design-components/banners.md` | Text conversion + figure provenance |
| `04` | `__docs__/design-components/buttons.mdx` | `b20a71a3783c` | 16 | `docs/design-system/guidelines/design-components/buttons.md` | Text conversion + figure provenance |
| `05` | `__docs__/design-components/chart-container.mdx` | `48f5d439b29c` | 4 | `docs/design-system/guidelines/design-components/chart-container.md` | Text conversion + figure provenance |
| `06` | `__docs__/design-components/checkbox-group.mdx` | `76a44cfc5b51` | 6 | `docs/design-system/guidelines/design-components/checkbox-group.md` | Text conversion + figure provenance |
| `07` | `__docs__/design-components/clear-filter.mdx` | `542669f4afa1` | 4 | `docs/design-system/guidelines/design-components/clear-filter.md` | Text conversion + figure provenance |
| `08` | `__docs__/design-components/data-tables.mdx` | `aad03dea7963` | 3 | `docs/design-system/guidelines/design-components/data-tables.md` | Text conversion + figure provenance |
| `09` | `__docs__/design-components/date-filter.mdx` | `070428cd7b03` | 7 | `docs/design-system/guidelines/design-components/date-filter.md` | Text conversion + figure provenance |
| `10` | `__docs__/design-components/date-picker.mdx` | `d23f47f6f18a` | 4 | `docs/design-system/guidelines/design-components/date-picker.md` | Text conversion + figure provenance |
| `11` | `__docs__/design-components/distribution-charts.mdx` | `cdfff090e0b6` | 2 | `docs/design-system/guidelines/design-components/distribution-charts.md` | Text conversion + figure provenance |
| `12` | `__docs__/design-components/dropdown-select.mdx` | `0c733c012050` | 18 | `docs/design-system/guidelines/design-components/dropdown-select.md` | Text conversion + figure provenance |
| `13` | `__docs__/design-components/hsk-ai-characters.mdx` | `aff314974d07` | 0 | `docs/design-system/guidelines/design-components/hsk-ai-characters.md` | Text/JSX conversion |
| `14` | `__docs__/design-components/inline-filter-button.mdx` | `e12248e82dc3` | 6 | `docs/design-system/guidelines/design-components/inline-filter-button.md` | Text conversion + figure provenance |
| `15` | `__docs__/design-components/modals-selection.mdx` | `d7d346ac458c` | 13 | `docs/design-system/guidelines/design-components/modals-selection.md` | Text conversion + figure provenance |
| `16` | `__docs__/design-components/modals.mdx` | `9c3327581a0a` | 16 | `docs/design-system/guidelines/design-components/modals.md` | Text conversion + figure provenance |
| `17` | `__docs__/design-components/popovers.mdx` | `0ff97d5cb07e` | 5 | `docs/design-system/guidelines/design-components/popovers.md` | Text conversion + figure provenance |
| `18` | `__docs__/design-components/progress-charts.mdx` | `b68a79840726` | 2 | `docs/design-system/guidelines/design-components/progress-charts.md` | Text conversion + figure provenance |
| `19` | `__docs__/design-components/progress-stepper.mdx` | `fcc32708dcf3` | 4 | `docs/design-system/guidelines/design-components/progress-stepper.md` | Text conversion + figure provenance |
| `20` | `__docs__/design-components/radio-button.mdx` | `6da9f2f170ef` | 9 | `docs/design-system/guidelines/design-components/radio-button.md` | Text conversion + figure provenance |
| `21` | `__docs__/design-components/search-field.mdx` | `95c5ba716ace` | 5 | `docs/design-system/guidelines/design-components/search-field.md` | Text conversion + figure provenance |
| `22` | `__docs__/design-components/summary-cards.mdx` | `59720700a5d8` | 3 | `docs/design-system/guidelines/design-components/summary-cards.md` | Text conversion + figure provenance |
| `23` | `__docs__/design-components/text-field.mdx` | `3a435442dda2` | 8 | `docs/design-system/guidelines/design-components/text-field.md` | Text conversion + figure provenance |
| `24` | `__docs__/design-components/toasts.mdx` | `bc59722b9729` | 15 | `docs/design-system/guidelines/design-components/toasts.md` | Text conversion + figure provenance |
| `25` | `__docs__/design-components/toggle.mdx` | `d61a6b139a59` | 11 | `docs/design-system/guidelines/design-components/toggle.md` | Text conversion + figure provenance |
| `26` | `__docs__/design-components/tooltips.mdx` | `e40d2f42cfa1` | 6 | `docs/design-system/guidelines/design-components/tooltips.md` | Text conversion + figure provenance |
| `27` | `__docs__/design-components/trend-charts.mdx` | `2522b1d65b83` | 2 | `docs/design-system/guidelines/design-components/trend-charts.md` | Text conversion + figure provenance |
| `28` | `__docs__/design-foundations/borders-and-dividers.mdx` | `ef78fa529411` | 12 | `docs/design-system/guidelines/design-foundations/borders-and-dividers.md` | Text conversion + figure provenance |
| `29` | `__docs__/design-foundations/colors-semantic.mdx` | `147d3f2d1cee` | 1 | `docs/design-system/guidelines/design-foundations/colors-semantic.md` | Text conversion + figure provenance |
| `30` | `__docs__/design-foundations/colors.mdx` | `3ac38839501f` | 4 | `docs/design-system/guidelines/design-foundations/colors.md` | Text conversion + figure provenance |
| `31` | `__docs__/design-foundations/data-visualization.mdx` | `7ea71c7140c9` | 0 | `docs/design-system/guidelines/design-foundations/data-visualization.md` | Text/JSX conversion |
| `32` | `__docs__/design-foundations/iconography.mdx` | `deafe2f3ef3b` | 5 | `docs/design-system/guidelines/design-foundations/iconography.md` | Text conversion + figure provenance |
| `33` | `__docs__/design-foundations/illustration.mdx` | `e9947b3c1fa2` | 3 | `docs/design-system/guidelines/design-foundations/illustration.md` | Text conversion + figure provenance |
| `34` | `__docs__/design-foundations/layout.mdx` | `d936a912a96c` | 5 | `docs/design-system/guidelines/design-foundations/layout.md` | Text conversion + figure provenance |
| `35` | `__docs__/design-foundations/motion.mdx` | `55d96973acd9` | 6 | `docs/design-system/guidelines/design-foundations/motion.md` | Text conversion + figure provenance |
| `36` | `__docs__/design-foundations/spacing.mdx` | `d062c6cbca27` | 7 | `docs/design-system/guidelines/design-foundations/spacing.md` | Text conversion + figure provenance |
| `37` | `__docs__/design-foundations/surfaces-and-elevations.mdx` | `cb41c4272fc4` | 15 | `docs/design-system/guidelines/design-foundations/surfaces-and-elevations.md` | Text conversion + figure provenance |
| `38` | `__docs__/design-foundations/typography.mdx` | `176f01423050` | 0 | `docs/design-system/guidelines/design-foundations/typography.md` | Text/JSX conversion |
| `39` | `__docs__/design-patterns/collecting-feedback.mdx` | `5e8c950b767d` | 4 | `docs/design-system/guidelines/design-patterns/collecting-feedback.md` | Text conversion + figure provenance |
| `40` | `__docs__/design-patterns/component-composition-and-customization.mdx` | `4c8c8dbf0d78` | 0 | `docs/design-system/guidelines/design-patterns/component-composition-and-customization.md` | Text/JSX conversion |
| `41` | `__docs__/design-patterns/data-reports.mdx` | `270a4b3fe442` | 9 | `docs/design-system/guidelines/design-patterns/data-reports.md` | Text conversion + figure provenance |
| `42` | `__docs__/design-patterns/filter-and-sort.mdx` | `2164bb9f71fe` | 13 | `docs/design-system/guidelines/design-patterns/filter-and-sort.md` | Text conversion + figure provenance |
| `43` | `__docs__/design-patterns/professional-reference-gallery.mdx` | `7e283e17719e` | 18 | `docs/design-system/guidelines/design-patterns/professional-reference-gallery.md` | Text conversion + figure provenance |
| `44` | `__docs__/introduction.mdx` | `89d1fba1d564` | 0 | `docs/design-system/guidelines/introduction.md` | Text/JSX conversion |

## Root and non-page content to transfer

| Source | Intended target | Purpose / condition |
| --- | --- | --- |
| `DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md` | `docs/design-system/PROFESSIONAL_FIRST_CONTRACT.md` | Primary professional-first rule and exception contract |
| `DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md` | `docs/design-system/APPROVED_DECISIONS.md` | Preserve approved owner's decisions **byte-for-byte**, history may be archived separately |
| `docs/migration/TARGET_AUTHORITY_INSERT.md` | Merge section into root `AGENTS.md`; do not replace existing file | Make professional system the default visual standard in app tasks |
| `docs/migration/TARGET_AUTHORITY_INSERT.md` | Reconcile target `.agents/skills/hsk-ai-ui/SKILL.md` | Resolve one-line vs two-line rule and styling precedence **without removing existing functional/skeleton/navigation requirements** |
| `docs/migration/CONFLICT_REGISTER.md` | `docs/design-system/MIGRATION_CONFLICTS.md` | Trace every exception, owner priority and open handoff |
| `docs/migration/TRANSFER_CATALOG.md` | `docs/design-system/SOURCE_CATALOG.md` | Source SHA/inventory and no-omission proof |
| `AGENTS.md`, `README.md`, `.claude/skills/dsg-creation/SKILL.md` | **Read and adapt**; not a blanket root-file overwrite | Current design repo authoring guidelines become product-relevant pointers, not competing app AGENTS |
| `static/hsk-ai-logo.svg` | Use existing canonical app branding source; no duplicate copy | Identical to official HSK AI product logo; no new brand artwork |
| `__docs__/reference-archive/**` | **Do not transfer as active design guidance** | Historical school/vendor snippets only; preserve source audit in design repository |

## Design documentation versus build tools

1. **Main deliverable:** all 44 **complete professional rule texts** + the master decisions + their legitimate HSK adaptations. A section's labels, Do/Don't, anatomy, exact sourced sizes and variants, states, diagrams' reasoning, responsive/a11y behavior must remain.
2. **Source MDX pages cannot simply be renamed .md:** they include JSX/Storybook `<Meta>`, `<Demo>`, `<Do>`, `<Dont>`, imports, inherited packages and unresolved historical figures. Convert/verify each page before it becomes the product's canonical text.
3. **No Wonder Blocks vendor packages, pnpm lockfile, Storybook configuration, upstream scripts, CI workflows or external fonts** are part of the future **product runtime**. If a standalone docs site is wanted, review it as a completely separate, isolated optional tooling package with its own license and build assessment.
4. **Image rights are a separate hard gate for moving the image files**. A third-party diagram may be described or redrawn with appropriate rights, but an unverified image file is not an approved asset for the HSK AI main repository.
5. **Never copy this table's path list as proof of implementation.** The task here is preparation; the target repository remains read-only.

## Current readiness

- ✅ Accurate page counts, paths, images-import exposure and pinned source blob SHAs.
- ✅ Master professional-first priority and approved HSK AI functional/brand exceptions written in source repository.
- ✅ Source-to-HSK AI professional design reconciliation exists separately, including historical 45-page SHA matrix.
- 🔶 A migration-ready one-file-per-guideline **portable, clean Markdown export has not yet been created or checked**. A proposed destination path in this catalog is not that file.
- 🔶 299 image-import occurrences require explicit no-loss textual/rights-cleared handling; **figure transfer itself is not cleared**.
- 🔶 Target HSK AI `AGENTS.md` / UI skill have **not** been changed: see the verified conflicts register.
- 🔶 No actual design-system repository subtree was added to the target. It is not correct to claim the transfer is complete.

**Release criterion:** canonical 44/44 professional rule texts present and independently readable in intended target paths; owner decisions untouched; every explanatory figure retained as verified permitted media or adequate full-detail description; target one-line conflict resolved; no foreign authority inherited; root agent routing directs UI/UX work to professional rules before considering current app appearance; no PWA/Android feature code changed by the documents-only transfer.
