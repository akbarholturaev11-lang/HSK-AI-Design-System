# HSK AI internal visual sample audit — batch 03 (chart container / checkbox / clear filter)

**Date:** 2026-11-15. Every one of the following 15 PNG source paths was opened and visually inspected, after re-reading the protected owner decisions and `AGENTS.md`. No HSK application code or original image was modified.

**Selection:** generic schematic/component/interaction image → `INCLUDE_SAMPLE`; actual other-application screen or foreign product → `EXCLUDE_FOREIGN_SCREEN`; mixed/unclear → `REVIEW_REQUIRED`. All source text, school labels, sample scores, palettes and measurement values are **illustrative**, not product contract.

| # | PNG under `__docs__/design-components/assets/` | Git blob SHA prefix | Decision | Actual visual rationale |
| ---: | --- | --- | --- | --- |
| 1 | `chart-container/controls.png` | `bfa77705a126b15b` | `INCLUDE_SAMPLE` | Generic chart controls placement: date range, chart/table toggle and download; controls remain illustrative until HSK functions verified. |
| 2 | `chart-container/header.png` | `46b39a10371c853a` | `INCLUDE_SAMPLE` | Illustrative chart with summary heading, trend points and graph; fictional score increases must not imply HSK score telemetry. |
| 3 | `chart-container/heading-hierarchy.png` | `b79f1e5885df73c` | `INCLUDE_SAMPLE` | Generic chart section heading outside container vs chart title inside; detailed information hierarchy. |
| 4 | `chart-container/view-toggle.png` | `24a4a881cc7bb9d` | `INCLUDE_SAMPLE` | Focused chart/table icon toggle in a generic chart control header; design pattern only. |
| 5 | `checkbox-group/checkbox-group.png` | `d79160a70d7fce33` | `INCLUDE_SAMPLE` | Isolated multi-select checkboxes over decorative hero; source palette and option labels are illustrative. |
| 6 | `checkbox-group/copy.png` | `17d35ef83f57759` | `INCLUDE_SAMPLE` | Concise individual checkbox option labels compared with redundant instructions; essay labels sample only. |
| 7 | `checkbox-group/header.png` | `80e4ce79e65feccc` | `INCLUDE_SAMPLE` | Checkbox selection illustration inside abstract colored hero; no vendor screen. |
| 8 | `checkbox-group/interaction-1.png` | `a085849e3c8ded92` | `INCLUDE_SAMPLE` | Isolated checkbox group showing selected and unselected states with heading and option alignment. |
| 9 | `checkbox-group/interaction-2.png` | `01c7dcbfdc008947` | `INCLUDE_SAMPLE` | Isolated selected-label truncation vs multi-select selected-count control; school labels not HSK fields. |
| 10 | `checkbox-group/placement-1.png` | `5ca856b288d502c5` | `INCLUDE_SAMPLE` | Generic sidebar composition with checkbox groups, section labels and adjacent abstract content; school exam labels source-only. |
| 11 | `checkbox-group/placement-2.png` | `89db2dba4ba78555` | `EXCLUDE_FOREIGN_SCREEN` | Foreign school-report filter UI: grade dropdown, School: Addison, side report search; preserve menu selection layout rules in text. |
| 12 | `clear-filter/clear-filter.png` | `dd0ae64847ad5cb8` | `INCLUDE_SAMPLE` | Isolated active-filter chip and clear-all affordance against abstract background; school name not HSK data. |
| 13 | `clear-filter/placement.png` | `258ca93f60b0c88e` | `EXCLUDE_FOREIGN_SCREEN` | Actual foreign school report dashboard with filter chip list, sidebar and results. |
| 14 | `clear-filter/states-default.png` | `258ca93f60b0c88e` | `EXCLUDE_FOREIGN_SCREEN` | Byte-identical duplicate of placement.png: foreign school report dashboard, not generic schematic. |
| 15 | `clear-filter/states-hidden.png` | `90f526f8878e3c54` | `EXCLUDE_FOREIGN_SCREEN` | Actual foreign school report dashboard with unselected School/Grade filter controls. |

## Batch findings

- **15 newly inspected**: **11 include**, **4 exclude**, **0 review**.
- The two `clear-filter/placement.png` and `clear-filter/states-default.png` files are **binary duplicates** (same Git blob SHA `258ca93f60b0c88eeb3d276f741afa03ec57b4d7`); count as two **tracked PNG paths**, not separate unique images.
- **Combined audited file paths: 78/316**, comprising **58 INCLUDE_SAMPLE**, **16 EXCLUDE_FOREIGN_SCREEN**, **4 REVIEW_REQUIRED**; **238 uninspected paths**.
- Chart diagrams are useful even if HSK does not implement chart export or view-switch controls: they are **reference-only**, not shipped features. Do not replace HSK's approved 4-unit scale, official palette, learning data or brand identity.
- `INCLUDE_SAMPLE` means **selected for later internal design documentation**, not that binary files have already been moved to HSK-AI-Bot.
