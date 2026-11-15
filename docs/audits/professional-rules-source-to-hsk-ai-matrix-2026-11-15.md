# Professional guidelines baseline-to-HSK-AI reconciliation (2026-11-15)

**Audit basis:** historical pre-cleanup commit `f5ce49cbc219`; inspected restoration branch `restore/hsk-ai-professional-unified-audit-20261115` at `0c88eeccbcb4430e816092d130fd208d90949160`. **Product code:** `akbarholturaev11-lang/HSK-AI-Bot` read-only. This is an inspectable **documentation source-completeness reconciliation**, not an automated device test or redistribution license.

## Exact coverage

- Historical MDX pages: **45**.
- Byte-identical original MDX texts preserved: **15** (compared by full original and current Git blob SHA).
- Historical MDX pages rewritten and individually compared for headings, substantive source paragraphs, active technical rules and HSK AI applicability: **27**. Of these, **14** received direct, granular rule restoration in this pass; **2** originally byte-identical pages received corrections to old upstream-specific active instructions (tooltip spacing and filter category).
- Original source-only MDX pages intentionally omitted: **3**. Their relevant generic design reasoning is captured in current HSK AI component composition, learning characters and responsive presentation rules, without importing branded personalities, school tasks, vendor decisions or foreign proctoring.
- **2** new HSK AI-only reference/pattern MDX pages have no one-to-one historical equivalent, making **44 active MDX pages** on this branch.
- The 120-file removed-material audit is separate: **73 exact historical PNGs, 11 inert text archives, 36 intentional omissions**. Historical PNGs are **not licensed for public distribution by virtue of existing on GitHub**.

## How content was compared

1. Enumerated historic and branch MDX paths and computed exact Git blob identity; all originally unchanged files receive exact rather than inferred treatment.
2. For **all 25 originally modified surviving MDX pages**, inspected the historical and HSK versions side by side: heading inventory, differing substantial prose, professional choice/anti-pattern rules and relevant example semantics. The 17 initially unmodified pages were identical by Git SHA.
3. Added detailed HSK AI-ready contract text **inside the corresponding existing guideline page**, preserving each page's working examples and new HSK-specific content. Recovered selection criteria, control scope, chart anatomy, baselines, missing-versus-zero, denominators, permissions, keyboard/mobile states, semantic tokens, icon sizing, feedback forms, popover dismissal, artwork and responsive details.
4. Swept all **44 active MDX page texts** for source brand/persona, school, teacher, Gems, Wonder Blocks and source-only role wording. Inspected matches in context; remaining references are disclaimers, renderer examples, historical image alt/captions or explicit prohibitions, **not a product requirement**. Corrected two genuine active-rule leaks: a 6px upstream tooltip distance (now 4-unit spacing guidance) and school/department categories in active filter guidance (now supported HSK AI categories).
5. Rechecked authorized product identity and non-negotiables: 4-unit spacing, mobile PWA/Android only, existing semantic palettes and dark theme, Phosphor defaults with canonical exceptions, all five canonical characters with correct **and incorrect** reactions, distinct red Voice Orb, Hanzi → tone-marked pinyin → translation, two-line optional disclosure with top-right ⌄/⌃, and server-confirmed status.
6. Source original pages for Khanmigo, Khanductor and Verdicts were read: two vendor-persona rule sets do not transfer; the Verdicts document's general composition, component API, task surface and accessible semantic-role concepts are reflected in `component-composition-and-customization.mdx`, not imported as authoritative rulings.

## Per-historical-page reconciliation

| Original MDX path | Disposition | Historic blob | Current blob | Decision |
| --- | --- | --- | --- | --- |
| `__docs__/design-components/active-filters.mdx` | EXACT original text | `5ab1ece903` | `5ab1ece903` | Exact preserved professional guidance |
| `__docs__/design-components/badges.mdx` | ADAPTED / reviewed | `96872276b5` | `048a1b078f` | Existing HSK AI adaptation reviewed against source |
| `__docs__/design-components/banners.mdx` | ADAPTED / reviewed | `bf474249b9` | `00da83d758` | Existing HSK AI adaptation reviewed against source |
| `__docs__/design-components/buttons.mdx` | EXACT original text | `6440461862` | `6440461862` | Exact preserved professional guidance |
| `__docs__/design-components/chart-container.mdx` | ADAPTED / reviewed | `f48290465f` | `e32ad3e0da` | Direct detailed professional rule restoration |
| `__docs__/design-components/checkbox-group.mdx` | ADAPTED / reviewed | `1ce7fc122c` | `76a44cfc5b` | Existing HSK AI adaptation reviewed against source |
| `__docs__/design-components/clear-filter.mdx` | EXACT original text | `542669f4af` | `542669f4af` | Exact preserved professional guidance |
| `__docs__/design-components/data-tables.mdx` | ADAPTED / reviewed | `fd07293195` | `aad03dea79` | Direct detailed professional rule restoration |
| `__docs__/design-components/date-filter.mdx` | EXACT original text | `070428cd7b` | `070428cd7b` | Exact preserved professional guidance |
| `__docs__/design-components/date-picker.mdx` | ADAPTED / reviewed | `eebe7b371b` | `d23f47f6f1` | Existing HSK AI adaptation reviewed against source |
| `__docs__/design-components/distribution-charts.mdx` | ADAPTED / reviewed | `af75f99454` | `cdfff090e0` | Direct detailed professional rule restoration |
| `__docs__/design-components/dropdown-select.mdx` | ADAPTED / reviewed | `6da31545fa` | `9960cfd52a` | Existing HSK AI adaptation reviewed against source |
| `__docs__/design-components/hsk-ai-characters.mdx` | ADAPTED / reviewed | `79614fe991` | `aff314974d` | Existing HSK AI adaptation reviewed against source |
| `__docs__/design-components/inline-filter-button.mdx` | EXACT original text | `e12248e82d` | `e12248e82d` | Exact preserved professional guidance |
| `__docs__/design-components/khanductor.mdx` | EXCLUDED: source-specific | `c0b3c85ede` | `—` | External assessment-proctor persona excluded; no HSK AI feature implied |
| `__docs__/design-components/khanmigo.mdx` | EXCLUDED: source-specific | `1276c93115` | `—` | External mascot and school/assistant product rules excluded; canonical cast documented separately |
| `__docs__/design-components/modals-selection.mdx` | EXACT original text | `8768b9c70d` | `8768b9c70d` | Exact preserved professional guidance |
| `__docs__/design-components/modals.mdx` | EXACT original text | `197bee5566` | `197bee5566` | Exact preserved professional guidance |
| `__docs__/design-components/popovers.mdx` | ADAPTED / reviewed | `fd9c4deb33` | `b5e622119e` | Direct detailed professional rule restoration |
| `__docs__/design-components/progress-charts.mdx` | ADAPTED / reviewed | `74b2e36480` | `a8a2591b90` | Direct detailed professional rule restoration |
| `__docs__/design-components/progress-stepper.mdx` | EXACT original text | `b6787fe6b6` | `b6787fe6b6` | Exact preserved professional guidance |
| `__docs__/design-components/radio-button.mdx` | ADAPTED / reviewed | `0aa9c21166` | `6da9f2f170` | Existing HSK AI adaptation reviewed against source |
| `__docs__/design-components/search-field.mdx` | EXACT original text | `95c5ba716a` | `95c5ba716a` | Exact preserved professional guidance |
| `__docs__/design-components/summary-cards.mdx` | ADAPTED / reviewed | `89f35c099f` | `59720700a5` | Direct detailed professional rule restoration |
| `__docs__/design-components/text-field.mdx` | EXACT original text | `07206502d4` | `07206502d4` | Exact preserved professional guidance |
| `__docs__/design-components/toasts.mdx` | EXACT original text | `6a1fb0479f` | `6a1fb0479f` | Exact preserved professional guidance |
| `__docs__/design-components/toggle.mdx` | ADAPTED / reviewed | `f7a0fd4d86` | `d61a6b139a` | Existing HSK AI adaptation reviewed against source |
| `__docs__/design-components/tooltips.mdx` | ADAPTED / reviewed | `08ae134d6c` | `e40d2f42cf` | Active upstream contradiction corrected |
| `__docs__/design-components/trend-charts.mdx` | ADAPTED / reviewed | `14065268d7` | `2522b1d65b` | Direct detailed professional rule restoration |
| `__docs__/design-foundations/borders-and-dividers.mdx` | ADAPTED / reviewed | `26d765d7d4` | `271d4ad8a7` | Direct detailed professional rule restoration |
| `__docs__/design-foundations/colors-semantic.mdx` | ADAPTED / reviewed | `e18ff31028` | `147d3f2d1c` | Direct detailed professional rule restoration |
| `__docs__/design-foundations/colors.mdx` | ADAPTED / reviewed | `f3b8427faa` | `5e57aeb435` | Existing HSK AI adaptation reviewed against source |
| `__docs__/design-foundations/data-visualization.mdx` | ADAPTED / reviewed | `4c227a983f` | `bc8a607aeb` | Direct detailed professional rule restoration |
| `__docs__/design-foundations/iconography.mdx` | ADAPTED / reviewed | `17629b566d` | `75df0dc20b` | Direct detailed professional rule restoration |
| `__docs__/design-foundations/illustration.mdx` | ADAPTED / reviewed | `48a71f8eff` | `e9947b3c1f` | Direct detailed professional rule restoration |
| `__docs__/design-foundations/layout.mdx` | EXACT original text | `f56764bdbd` | `f56764bdbd` | Exact preserved professional guidance |
| `__docs__/design-foundations/motion.mdx` | EXACT original text | `55d96973ac` | `55d96973ac` | Exact preserved professional guidance |
| `__docs__/design-foundations/spacing.mdx` | EXACT original text | `172f6e1771` | `172f6e1771` | Exact preserved professional guidance |
| `__docs__/design-foundations/surfaces-and-elevations.mdx` | ADAPTED / reviewed | `f5ff2c191c` | `161f09251e` | Existing HSK AI adaptation reviewed against source |
| `__docs__/design-foundations/typography.mdx` | EXACT original text | `176f014230` | `176f014230` | Exact preserved professional guidance |
| `__docs__/design-patterns/collecting-feedback.mdx` | ADAPTED / reviewed | `971e3432a6` | `d3edce68b7` | Direct detailed professional rule restoration |
| `__docs__/design-patterns/data-reports.mdx` | ADAPTED / reviewed | `8594d66402` | `270a4b3fe4` | Direct detailed professional rule restoration |
| `__docs__/design-patterns/filter-and-sort.mdx` | ADAPTED / reviewed | `70b5596cc4` | `9073c67e57` | Active upstream contradiction corrected |
| `__docs__/introduction.mdx` | ADAPTED / reviewed | `c1f757fe79` | `578784e1e5` | Existing HSK AI adaptation reviewed against source |
| `__docs__/verdicts.mdx` | EXCLUDED: source-specific | `a2c82f56bd` | `—` | Source-specific review rulings; generic component customization/task-surface accessibility preserved in composition page |

## New HSK AI documentation without a direct historical pair

- `__docs__/design-patterns/component-composition-and-customization.mdx` — added HSK AI-specific guidance / fictional-data examples; not source-only school policy
- `__docs__/design-patterns/professional-reference-gallery.mdx` — added HSK AI-specific guidance / fictional-data examples; not source-only school policy

## Unchanged approved decisions and outstanding verification

- `DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md` is authoritative. This work does **not** revise the decisions registry, `AGENTS.md`, the real product repository, purchase logic, lessons, analytics, onboarding or native navigation.
- **Documentary coverage complete for this specified historic MDX baseline**, but this does **not prove** Storybook compilation, demo functionality, responsive appearance, accessibility or release readiness.
- [ ] Run frozen pnpm install, TypeScript typecheck, Storybook build and real GitHub Actions CI; capture exit statuses and errors.
- [ ] Browser-verify responsive screens, link anchors, light/dark contrast and keyboard/screen-reader interaction.
- [ ] Clear provenance/reuse rights for historical images, or replace them with rights-cleared original diagrams; do not ship public artwork without permission.
- [ ] Review PR and reconcile any newer changes to production HSK AI code in a separate read-only check before implementation or release.

**Release disposition: HOLD / DRAFT** until these independent gates are evidenced. Do not confuse complete historical-guideline reconciliation with a complete production-ready design system.
