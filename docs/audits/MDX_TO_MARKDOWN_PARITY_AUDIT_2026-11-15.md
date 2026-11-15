# HSK AI — completed 44-page MDX → Markdown editorial parity review

**Scope:** design-system repository only; inspected branch `restore/hsk-ai-professional-unified-audit-20261115` HEAD `bd4e59e44647355474ad3c854d3c237e556edcf1`. This records a **source-text and documentation-structure review**, not a rendered visual or legal clearance test. The HSK AI application repository is **not** edited.

## Mandatory design decision context read before each review batch

- `AGENTS.md`: professional-first UI/UX standard outranks incidental existing appearance; product facts and authorized brand/security/learning contracts constrain only the specific conflict.
- `DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md`: protected unchanged owner decisions, source Git blob `f679725a5e69ca9e2de85438e57a413aedc8142f`.
- `DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md`: exact implementation-vs-design distinction and high-fidelity control anatomy/interaction details.
- `MIGRATION_TO_HSK_AI.md`: documentation-only scope; no HSK-AI-Bot production changes or premature transfer.

## Findings confirmed by direct GitHub file comparisons

1. **44/44 source `.mdx` and portable `.md` files exist**, with a one-to-one basename/path mapping; file SHA matrix below identifies the exact inspected content.
2. **44/44 portable documents include their matching current source MDX blob SHA**. The two source files changed during this review were also updated in their portable headers and the transfer catalog: `active-filters` and `surfaces-and-elevations`.
3. **No missing Markdown heading** was observed in the cross-file heading inventories for all 44 pairs. Do/Don't headings may be written as Recommended/Avoid without changing their meaning.
4. Source long-form prose was compared against portable text **line-by-line using a bounded exact/normalized-text scan**; remaining differences were reviewed by type, such as converted hyperlinks, HTML/JSX property lines, image alt/caption metadata, and source-only styling code. **This is not an unqualified proof of every original visual design detail.**
5. All 44 portable files' regular relative Markdown file links were checked against the actual current Git tree. **No broken local file target was detected.** In-document anchor fragments or external sites were not browser-tested.
6. **No executable Storybook/MDX `<Meta>`, `<Demo>`, `<Figure>`, `<img>` or `<NeutralBadge>` tag** was detected in the active portable page text by the targeted static scan. This does not mean every custom JSX-based visual was reconstructed.
7. Original **29 interactive `Demo` blocks** (12 Buttons + 17 Banners) have a separate [source-to-port semantic inventory](../migration/LIVE_DEMO_SEMANTICS_AUDIT.md) with variant/state/Do/Don't and action meanings. Markdown intentionally cannot reproduce their live controls. Their final visual geometry, size, spacing, interactive transitions and full accessibility need separately authored/verified HSK AI-owned examples.
8. Approximately **298 historical figure references** are retained as descriptive, source-path-traceable notes in the Markdown corpus. Visual geometry inside the original PNGs is **not proven equivalent to the text descriptions**; no permission to redistribute the original artwork has been established.
9. The professional **visual hierarchy remains authoritative**, even when the implemented PWA/Android component style differs; no new runtime/UI feature is claimed by a design-page example.
10. This review corrected two concrete rule/content mismatches in **both source and portable**: (a) an active-filter example used an irrelevant school name (“Addison Middle…”); its label truncation/selection-count behavior survives with a neutral example, and (b) a surfaces rule mistakenly treated current component styling as immutable; it now distinguishes platform/backend/brand contracts from professional visual redesign targets. Both affected source blob SHAs were re-pinned.

## Complete one-to-one page evidence (44/44)

| # | Source (under `__docs__/`) | Current MDX Git blob | Matching portable Markdown Git blob | Editorial/static coverage |
| ---: | --- | --- | --- | --- |
| 01 | `design-components/active-filters.mdx` | `ca9a5a855efe` | `e27af8f144f4` | File, source provenance, headings and local links reviewed |
| 02 | `design-components/badges.mdx` | `048a1b078fb6` | `79a99f3a1fb2` | File, source provenance, headings and local links reviewed |
| 03 | `design-components/banners.mdx` | `7eb978d12691` | `020b1aef70cc` | File, source provenance, headings and local links reviewed |
| 04 | `design-components/buttons.mdx` | `b20a71a3783c` | `5f7de3d01646` | File, source provenance, headings and local links reviewed |
| 05 | `design-components/chart-container.mdx` | `48f5d439b29c` | `b8b97854f23f` | File, source provenance, headings and local links reviewed |
| 06 | `design-components/checkbox-group.mdx` | `76a44cfc5b51` | `cafc4838331b` | File, source provenance, headings and local links reviewed |
| 07 | `design-components/clear-filter.mdx` | `542669f4afa1` | `7c7ef3eade8f` | File, source provenance, headings and local links reviewed |
| 08 | `design-components/data-tables.mdx` | `aad03dea7963` | `164a94901d92` | File, source provenance, headings and local links reviewed |
| 09 | `design-components/date-filter.mdx` | `070428cd7b03` | `6d9d89024ae8` | File, source provenance, headings and local links reviewed |
| 10 | `design-components/date-picker.mdx` | `d23f47f6f18a` | `ad31ac075775` | File, source provenance, headings and local links reviewed |
| 11 | `design-components/distribution-charts.mdx` | `cdfff090e0b6` | `2dfa7591cbbf` | File, source provenance, headings and local links reviewed |
| 12 | `design-components/dropdown-select.mdx` | `0c733c012050` | `148845d4d0f4` | File, source provenance, headings and local links reviewed |
| 13 | `design-components/hsk-ai-characters.mdx` | `aff314974d07` | `0e7fb3a92302` | File, source provenance, headings and local links reviewed |
| 14 | `design-components/inline-filter-button.mdx` | `e12248e82dc3` | `811753da89e0` | File, source provenance, headings and local links reviewed |
| 15 | `design-components/modals-selection.mdx` | `d7d346ac458c` | `8a15c22a0fd1` | File, source provenance, headings and local links reviewed |
| 16 | `design-components/modals.mdx` | `9c3327581a0a` | `ec7abcc69b97` | File, source provenance, headings and local links reviewed |
| 17 | `design-components/popovers.mdx` | `0ff97d5cb07e` | `c0c348de35eb` | File, source provenance, headings and local links reviewed |
| 18 | `design-components/progress-charts.mdx` | `b68a79840726` | `5a5bcb01df62` | File, source provenance, headings and local links reviewed |
| 19 | `design-components/progress-stepper.mdx` | `fcc32708dcf3` | `6ea1ad56d6bb` | File, source provenance, headings and local links reviewed |
| 20 | `design-components/radio-button.mdx` | `6da9f2f170ef` | `209cbf1d2c9b` | File, source provenance, headings and local links reviewed |
| 21 | `design-components/search-field.mdx` | `95c5ba716ace` | `55ffc640cfb7` | File, source provenance, headings and local links reviewed |
| 22 | `design-components/summary-cards.mdx` | `59720700a5d8` | `6d866dd3c0c9` | File, source provenance, headings and local links reviewed |
| 23 | `design-components/text-field.mdx` | `3a435442dda2` | `02c911f01fe7` | File, source provenance, headings and local links reviewed |
| 24 | `design-components/toasts.mdx` | `bc59722b9729` | `6667a715f221` | File, source provenance, headings and local links reviewed |
| 25 | `design-components/toggle.mdx` | `d61a6b139a59` | `a4ec091ac5e8` | File, source provenance, headings and local links reviewed |
| 26 | `design-components/tooltips.mdx` | `e40d2f42cfa1` | `fa3ae0f24fac` | File, source provenance, headings and local links reviewed |
| 27 | `design-components/trend-charts.mdx` | `2522b1d65b83` | `067b264b54cd` | File, source provenance, headings and local links reviewed |
| 28 | `design-foundations/borders-and-dividers.mdx` | `ef78fa529411` | `95d03ded38f6` | File, source provenance, headings and local links reviewed |
| 29 | `design-foundations/colors-semantic.mdx` | `147d3f2d1cee` | `9f3d3c14ea58` | File, source provenance, headings and local links reviewed |
| 30 | `design-foundations/colors.mdx` | `3ac38839501f` | `a956a99127c6` | File, source provenance, headings and local links reviewed |
| 31 | `design-foundations/data-visualization.mdx` | `7ea71c7140c9` | `b2d68c9fd3b6` | File, source provenance, headings and local links reviewed |
| 32 | `design-foundations/iconography.mdx` | `deafe2f3ef3b` | `cb8d1cee6e63` | File, source provenance, headings and local links reviewed |
| 33 | `design-foundations/illustration.mdx` | `e9947b3c1fa2` | `b0cedc9dea06` | File, source provenance, headings and local links reviewed |
| 34 | `design-foundations/layout.mdx` | `d936a912a96c` | `0dabd18c5630` | File, source provenance, headings and local links reviewed |
| 35 | `design-foundations/motion.mdx` | `55d96973acd9` | `b96162711db5` | File, source provenance, headings and local links reviewed |
| 36 | `design-foundations/spacing.mdx` | `d062c6cbca27` | `b8c102b9d548` | File, source provenance, headings and local links reviewed |
| 37 | `design-foundations/surfaces-and-elevations.mdx` | `1231393bcf0d` | `69accd345389` | File, source provenance, headings and local links reviewed |
| 38 | `design-foundations/typography.mdx` | `176f01423050` | `acdfbaf48d7b` | File, source provenance, headings and local links reviewed |
| 39 | `design-patterns/collecting-feedback.mdx` | `5e8c950b767d` | `56b53b4ba8d2` | File, source provenance, headings and local links reviewed |
| 40 | `design-patterns/component-composition-and-customization.mdx` | `4c8c8dbf0d78` | `e93d3a592367` | File, source provenance, headings and local links reviewed |
| 41 | `design-patterns/data-reports.mdx` | `270a4b3fe442` | `de32c7d5ea2b` | File, source provenance, headings and local links reviewed |
| 42 | `design-patterns/filter-and-sort.mdx` | `2164bb9f71fe` | `183f2194e9b7` | File, source provenance, headings and local links reviewed |
| 43 | `design-patterns/professional-reference-gallery.mdx` | `7e283e17719e` | `e59167e1ffde` | File, source provenance, headings and local links reviewed |
| 44 | `introduction.mdx` | `89d1fba1d564` | `298ba1bcd723` | File, source provenance, headings and local links reviewed |

## Specific detail-preservation responsibilities for the next review stage

The following are **not blockers for reading or using professional rules internally**; they are **unresolved gates before claiming a fully equivalent standalone visual design package for publication or copying uncleared third-party assets into HSK AI**:

| Area | Existing evidence | Honest limitation / next decision |
| --- | --- | --- |
| Source professional prose | Complete 44-page text corpus and headings, original source SHA | Initial portable drafts retain upstream source phrasing; assess source license or independently reauthor for redistribution |
| Original figures (around 298) | Per-page alt/caption/path references; quarantined PNG SHA inventory | A caption does not preserve exact dimensions, alignment, spacing or colors in an original diagram; inspect and replace with original HSK AI-owned figures where essential |
| Live demonstrations (29) | [29-demo ledger](../migration/LIVE_DEMO_SEMANTICS_AUDIT.md); control variants and semantic do/don't | The actual interactive look/behavior of source demos is not recreated in static Markdown; preserve their full conceptual rules, not vendor JSX |
| Product hard constraints | Verified owner decisions and professional-first contract | Product root `AGENTS.md` / UI skill still contain one-line vs two-line conflict until separately authorized transfer |
| Site/application code | Existing MDX, Markdown source and documentation only | No user authorization in this phase to refactor real PWA/Android screens or add vendor runtime |

**Editorial disposition:** `44/44 TEXTUAL/STRUCTURAL PARITY REVIEWED; PORTABLE REVIEW CORPUS AVAILABLE`. **Do not claim** original source illustration visual parity, cleared distribution rights or product app migration. These are different outcomes.

## Decision for migration

The Markdown copies under `docs/portable/guidelines/` are a usable **internal professional design reference now**, with source SHA traceability and the exact approved HSK AI decision hierarchy. The later product transfer still needs a separate authorization and a rights-aware document/figure review. Do not copy the root repo's Storybook, external assets, vendor dependencies or whole original AGENTS over HSK-AI-Bot.
