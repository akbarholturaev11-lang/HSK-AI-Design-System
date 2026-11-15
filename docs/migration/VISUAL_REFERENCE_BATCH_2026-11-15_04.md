# HSK AI internal visual sample audit — batch 04 (tables / dates / distribution)

**Date:** 2026-11-15. Every listed source PNG was directly opened and inspected; policy files were re-read before this audit. Source Git blob SHA prefixes identify the examined content, no rights/publication claims are made. Internal design examples remain reference-only and never imply fake school/score data or HSK feature support.

| # | PNG under `__docs__/design-components/assets/` | Git blob SHA prefix | Decision | Actual visual rationale |
| ---: | --- | --- | --- | --- |
| 1 | `data-tables/basic-table.png` | `9826e9506e8a783a` | `INCLUDE_SAMPLE` | Isolated three-column table with aligned records, header/row dividers; teacher/student names and counts are source-only sample fields. |
| 2 | `data-tables/header.png` | `381d85e50d5b9fa4` | `EXCLUDE_FOREIGN_SCREEN` | Vendor product assessment report with student placement categories, scores, individual student rows and school grading workflow. |
| 3 | `data-tables/summary-tabs.png` | `ffa97dff8ae3a1c4` | `EXCLUDE_FOREIGN_SCREEN` | School class placement report, real student table with source-specific assessment fields and categories; preserve summary-tab anatomy in prose. |
| 4 | `date-filter/copy.png` | `4408003a6dd23aef` | `INCLUDE_SAMPLE` | Isolated date-format selection comparison (readable spelled months vs ambiguous numeric dates), dates illustrative. |
| 5 | `date-filter/date-filter.png` | `1a71feccf89cdb50` | `INCLUDE_SAMPLE` | Date range dropdown inside abstract decorative hero; example date label and vendor palette noncanonical. |
| 6 | `date-filter/interaction.png` | `c01da37913e65008` | `INCLUDE_SAMPLE` | Standalone date range menu, preset ranges, selected indicator, custom range footer. |
| 7 | `date-filter/placement-1.png` | `df49064fc677d899` | `EXCLUDE_FOREIGN_SCREEN` | Foreign school report shell with sidebar, search report and school/grade filters; generic date filter placement rule text retained. |
| 8 | `date-filter/placement-2.png` | `4127f58183319ded` | `EXCLUDE_FOREIGN_SCREEN` | Foreign school report shell with sidebar/search filters and empty date filter chip; exclude entire screenshot. |
| 9 | `date-filter/variants-1.png` | `622d0fa717b35bbd` | `INCLUDE_SAMPLE` | Standalone date dropdown with selected today, preset list and custom range; state anatomy. |
| 10 | `date-filter/variants-2.png` | `858ca1fdac0cc031` | `INCLUDE_SAMPLE` | Standalone before/after unfiltered date chip to selected date with remove control. |
| 11 | `date-picker/custom-range-modal.png` | `5f4c943aadc46f91` | `INCLUDE_SAMPLE` | Generic custom date-range dialog with From/To fields, close and Apply, no foreign app screen. |
| 12 | `date-picker/date-picker.png` | `8aa266563dfadbbe` | `INCLUDE_SAMPLE` | Single due date field inside abstract design hero; due-date is example, not HSK capability. |
| 13 | `date-picker/interaction.png` | `434d3642b037dbaa` | `INCLUDE_SAMPLE` | Standalone focused date input with calendar popup, selected day, month navigation, date typing. |
| 14 | `date-picker/standalone.png` | `1b3cfb16561cc233` | `INCLUDE_SAMPLE` | Standalone calendar and date input for selected date, same layout family as interaction but separately tracked image. |
| 15 | `distribution-charts/container.png` | `b70271708e957c29` | `EXCLUDE_FOREIGN_SCREEN` | Foreign school mastery report complete app shell, user initials/sidebar, assignment/student graph data; preserve distribution chart structure in guidelines. |
| 16 | `distribution-charts/header.png` | `8d9ed89b089d9dd4` | `INCLUDE_SAMPLE` | Illustrative distribution bar chart with heading, controls and category axes, decorative source hero. School scores/skills fictional and not HSK product data. |

## Count

- **16 new images inspected:** 11 generic professional samples retained, 5 foreign product screens excluded, 0 undecided.
- **Total 94/316 distinct source PNG paths visually checked:** **69 INCLUDE_SAMPLE**, **21 EXCLUDE_FOREIGN_SCREEN**, **4 REVIEW_REQUIRED**; **222 not yet inspected**.
- All `data-tables` (3), `date-filter` (7), `date-picker` (4), `distribution-charts` (2) categories now fully visually classified. Values, status labels, source colors and business models in selected examples are **non-normative samples**.
- No actual image binaries moved to HSK AI; these are documented decisions for the later internal design documentation transfer.
