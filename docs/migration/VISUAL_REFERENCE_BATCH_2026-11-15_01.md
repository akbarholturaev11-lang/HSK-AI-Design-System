# HSK AI internal visual sample audit — batch 01

**Date:** 2026-11-15. **Source:** `akbarholturaev11-lang/HSK-AI-Design-System`, branch `restore/hsk-ai-professional-unified-audit-20261115`. All 25 PNG files listed below were **actually opened as image bytes**, inspected visually and recorded with an exact Git blob SHA prefix, after reading owner-approved design requirements.

**Owner's rule:** preserve generic sample component/layout/spacing/state illustrations; exclude other-app screenshots/foreign products; use **REVIEW_REQUIRED** for placeholders and mixed source-specific illustrations. Do not infer sample colors, labels, percentages or rewards are HSK UI rules. No public publication and no application code change.

## Verified results (25 additional distinct PNGs)

| # | Source image path under `__docs__/design-components/assets/` | Git blob SHA prefix | Decision | Visually observed content and precise transfer behavior |
| ---: | --- | --- | --- | --- |
| 1 | `active-filters/active-filters.png` | `b986b2d68d6aaf` | `INCLUDE_SAMPLE` | Isolated removable filter chip over abstract background. Grade text/colored hero background only sample, not HSK token or real grade. |
| 2 | `active-filters/copy.png` | `bf9fa2fb3e5db1` | `INCLUDE_SAMPLE` | Isolated group of removable chips. School/grade/subject names are sample strings, NOT HSK AI filters or product screen. |
| 3 | `active-filters/placement.png` | `dff4c5ad8ad9c9` | `EXCLUDE_FOREIGN_SCREEN` | Foreign school-report screen including sidebar, school filter, report search and chips; preserve grouping/placement principles in prose. |
| 4 | `badges/badges.png` | `11f2c95fec38a9` | `EXCLUDE_FOREIGN_SCREEN` | Vendor-specific Banana hat product illustration with NEW label, not HSK character or generic component anatomy. |
| 5 | `badges/copy-1.png` | `5e3be3bbf8ab38` | `EXCLUDE_FOREIGN_SCREEN` | Explicit Khan Academy moderation system name; brand-specific policy screenshot/example; keep concise status-copy principle. |
| 6 | `badges/copy-2.png` | `82aba4a41e3b5d` | `INCLUDE_SAMPLE` | Isolated neutral status badges; verb-vs-state copy demonstration and icon-only approval indicators. |
| 7 | `badges/copy-3.png` | `a26678996b0396` | `INCLUDE_SAMPLE` | Isolated badge punctuation vs plain semantic status copy; moderation examples are fictional. |
| 8 | `badges/copy-4.png` | `5031657e0c2f0d` | `INCLUDE_SAMPLE` | Isolated casing consistency comparison with correct/incorrect marking; wording is illustrative. |
| 9 | `badges/header.png` | `f548875b032007` | `EXCLUDE_FOREIGN_SCREEN` | Vendor Banana hat collectible hero/product image, not an HSK AI asset. |
| 10 | `badges/iconography-1.png` | `7d27b9022fb28a` | `INCLUDE_SAMPLE` | Isolated status iconography and semantics; 'school trend' sample text does not create HSK school analytics. |
| 11 | `badges/placement-1.png` | `f72d037fa9075bf` | `REVIEW_REQUIRED` | Actual placeholder says 'needs updated example'; no completed component placement diagram to transfer. |
| 12 | `badges/placement-2.png` | `49c611757adfa39` | `INCLUDE_SAMPLE` | Generic course summary card showing right-side completion badge and disclosure chevron; algebra label illustrative, not course content. |
| 13 | `badges/placement-3.png` | `1500b8ee342b81` | `INCLUDE_SAMPLE` | Generic data table with separate status and percentage columns; illustrates chip-column alignment and missing values. |
| 14 | `badges/score-to-status-mapping-2.png` | `022556b25972ac` | `INCLUDE_SAMPLE` | Isolated neutral labels for in progress, completion fraction and not started; actual status mapping must use real product meaning. |
| 15 | `badges/score-to-status-mapping-3.png` | `c573621380ae13` | `REVIEW_REQUIRED` | Only a lone em dash; missing-value display principle useful in prose, standalone image adds no anatomy. |
| 16 | `badges/states-1.png` | `e2a4b05a492bb0` | `INCLUDE_SAMPLE` | Generic error-warning-success badge hierarchy with icons and text; statuses not assumed implemented. |
| 17 | `badges/states-2.png` | `335d22ac886399f` | `INCLUDE_SAMPLE` | Neutral status badges with optional decorative state icons; distinguish meaningful vs redundant glyphs. |
| 18 | `badges/states-3.png` | `c7d2163fd86225` | `INCLUDE_SAMPLE` | Warning/success and directional-change badge rows; numeric deltas are fictional. |
| 19 | `badges/states-4.png` | `9cf727625eecaa6` | `REVIEW_REQUIRED` | Mixed useful overdue/date/status anatomy and vendor Gem currency icon; isolate generic examples or replace foreign reward badge. |
| 20 | `badges/states-5.png` | `745b0c119a832d` | `INCLUDE_SAMPLE` | Comparison of enclosing value+icon only in compact badge vs putting contextual phrase outside; no fake actual trend. |
| 21 | `badges/variants-2.png` | `81d683c9732aab` | `INCLUDE_SAMPLE` | Warning variant with icon, label, percentage and secondary compact form. |
| 22 | `badges/variants-3.png` | `f2bebe7be6c811` | `INCLUDE_SAMPLE` | Success variant with icon and percent vs short text. |
| 23 | `badges/variants-4.png` | `79aaadf6d27e26e3` | `INCLUDE_SAMPLE` | Neutral/status badge examples. |
| 24 | `badges/variants-5.png` | `8815941abb7e567c` | `INCLUDE_SAMPLE` | Time/due/overdue badges; dates and mission label illustrative. |
| 25 | `badges/variants-6.png` | `d61cb1b03399f68` | `INCLUDE_SAMPLE` | Feature/new/pilot badge variants; 'Mastery enabled' is source sample, not HSK feature announcement. |

## Batch disposition

- **18 INCLUDE_SAMPLE:** useful standalone professional design references to bring into an internal docs asset selection alongside the guidelines. Their original colors/tokens/content are **examples**, not mandatory HSK branded implementation values. Their binary bytes have **not yet been copied**.
- **4 EXCLUDE_FOREIGN_SCREEN:** foreign app/report/product art or explicitly Khan-branded content; professional control/feedback principles remain in guideline prose.
- **3 REVIEW_REQUIRED:** an original placeholder, a lone em dash, and a mixed Gems badge where only generic parts are suitable.
- **No claims of inspection outside these 25.** Combined with the previously recorded **8 images** (6 include, 2 exclude), the verified totals are **33/316 inspected: 24 INCLUDE_SAMPLE, 6 EXCLUDE_FOREIGN_SCREEN, 3 REVIEW_REQUIRED; 283 not yet visually inspected**.

## Next batch

Continue with `__docs__/design-components/assets/banners/` and `buttons/`, reading owner approval/AGENTS before work. Record every inspected SHA and decision, without blanket rejection of non-screen images or invented classifications for unopened assets.
