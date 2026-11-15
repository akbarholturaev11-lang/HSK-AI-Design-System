# HSK AI internal visual sample audit — batch 05 (colors / iconography / feedback / data reports)

**Date:** 2026-11-15. Read the exact requirements and visually opened all 23 paths in the four groups, but `colors/primitives-grid.png` had been visually audited previously (original 8-image manifest) and **was not double-counted**. Therefore **22 newly classified source paths** are below, each with actual Git blob SHA evidence.

**Policy:** retain generic design and semantic-illustration examples as internal reference; **exclude other products' screens, school reports, foreign icon-picker application screenshots, vendor mascots**. Keep chart/error/retry/empty/report hierarchy detail from excluded screenshots in professional guideline prose. Example colors, source icon weight guidance and invented dashboard metrics must never become default HSK brand tokens or analytics facts.

| # | PNG path relative to `__docs__` category `assets/` | Git blob SHA prefix | Decision | Visually observed reason |
| ---: | --- | --- | --- | --- |
| 1 | `colors/accessible-pairings.png` | `56a16cea4c3efa17` | `INCLUDE_SAMPLE` | Generic button/background contrast-ratio and tonal swatch pairing diagram; 3:1 example is context-specific, verify text/contrast requirement independently. |
| 2 | `colors/colors.png` | `df78d2ee00369aad` | `INCLUDE_SAMPLE` | Abstract swatch stripes as palette/tonal variety illustration only; source hue values not HSK palette. |
| 3 | `colors/semantic-tokens-hero.png` | `b3b925f81f2cbc4d` | `INCLUDE_SAMPLE` | Pure decorative semantic-color-gradient hero, reference only; not a compulsory HSK gradient. |
| 4 | `colors/semantic-tokens.png` | `2266c0c3d6a53957` | `INCLUDE_SAMPLE` | Generic semantic token map grouping background/foreground/border for success/warning/critical/neutral; example colors not normative HSK tokens. |
| 5 | `iconography/icon-library.png` | `ae5d4f81e22eb0fd` | `INCLUDE_SAMPLE` | Unbranded sample icon set; retain optical weight/consistency as a concept, canonical generic icon source for HSK remains Phosphor. |
| 6 | `iconography/iconography.png` | `b3dc7449db369cd3` | `INCLUDE_SAMPLE` | Abstract hero showing generic book, monitor, completion icon weight and tile placement; source colors illustrative. |
| 7 | `iconography/usage-guidelines-1.png` | `5ddde451f3e1a466` | `EXCLUDE_FOREIGN_SCREEN` | Actual external Phosphor icon plugin/chooser application screenshot; keep instruction to select consistent Phosphor icons, not tool UI image. |
| 8 | `iconography/usage-guidelines-2.png` | `80490285d5989fca` | `INCLUDE_SAMPLE` | Isolated comparison: universally recognized symbols can stand alone, ambiguous glyphs require textual label. |
| 9 | `iconography/usage-guidelines-3.png` | `891d3f05e01165ae` | `INCLUDE_SAMPLE` | Isolated icon-weight do/don't Regular/Bold/Fill vs Thin/Light/Duotone; source recommendation must be verified against HSK icon roles. |
| 10 | `collecting-feedback/feedback-open-widget.png` | `9b16a4037eba724e` | `INCLUDE_SAMPLE` | Generic wireframe showing feedback overlay anatomy, dropdown, comments, privacy warning, Cancel and Send; no external app brand. |
| 11 | `collecting-feedback/feedback-trigger-general.png` | `f7b51a63072b71fe` | `INCLUDE_SAMPLE` | Anonymized feedback trigger positioned in sidebar next to abstract report cards; placement is professional reference. |
| 12 | `collecting-feedback/feedback-trigger-opinion.png` | `d2c52712f4fe86a2` | `INCLUDE_SAMPLE` | Anonymized thumbs-up/down feedback trigger positioned under generic video placeholder; not a claimed HSK feature. |
| 13 | `collecting-feedback/hero-collecting-feedback.png` | `305b46050e7c214a` | `INCLUDE_SAMPLE` | Generic decorative thumbs up/down hero, source palette illustrative. |
| 14 | `data-reports/empty-container.png` | `df836f5cfc69d51c` | `EXCLUDE_FOREIGN_SCREEN` | Actual school report shell and curriculum mastery widgets; retain empty chart-container semantics only. |
| 15 | `data-reports/empty-page.png` | `93bf343ea069e6cd` | `EXCLUDE_FOREIGN_SCREEN` | Foreign district roster/teacher school dashboard with Sync roster action; exclude full screen, preserve empty page vs container distinction. |
| 16 | `data-reports/error-container.png` | `d2bb97721b890ed3` | `EXCLUDE_FOREIGN_SCREEN` | Foreign school report screen containing source mascot UFO illustration; preserve chart-load error/retry control rules. |
| 17 | `data-reports/error-page-load.png` | `4af5a39ba06e87e2` | `EXCLUDE_FOREIGN_SCREEN` | Foreign school report page-load failure and vendor mascot; preserve full-page retry pattern only. |
| 18 | `data-reports/error-page-update.png` | `5cb5cf6d2c0d7d7` | `EXCLUDE_FOREIGN_SCREEN` | Actual school teacher table and stale-results warning; preserve stale snapshot/refresh feedback distinction. |
| 19 | `data-reports/filtered-container.png` | `963c57e45f01a33f` | `EXCLUDE_FOREIGN_SCREEN` | Actual school report with unavailable chart under date filter; preserve scoped filtered-empty state logic. |
| 20 | `data-reports/filtered-page.png` | `63e158ed85885849` | `EXCLUDE_FOREIGN_SCREEN` | School/grade source filtering and no-results card inside foreign dashboard; preserve recoverable filtered-empty behavior. |
| 21 | `data-reports/header.png` | `6e0631d3d8de25d3` | `EXCLUDE_FOREIGN_SCREEN` | Decorative chart hero contains foreign smiling polygon mascot, not canonical HSK AI character. |
| 22 | `data-reports/own-section.png` | `d3b3254868ec9530` | `EXCLUDE_FOREIGN_SCREEN` | Real school district activation report with teacher roster table, not HSK design sample; preserve separate report-section composition in text. |

## Cumulative

- **22 new** → **12 include, 10 exclude**. 
- **116/316 path entries inspected**; **81 INCLUDE_SAMPLE**, **31 EXCLUDE_FOREIGN_SCREEN**, **4 REVIEW_REQUIRED** and **200 uninspected**.
- The **5 colors**, **5 iconography**, **4 collecting-feedback**, **9 data-reports** images are all now visually classified. The original `colors/primitives-grid.png` already appears in the first reference manifest and is not repeated in the 22 new rows.
- No binary file was copied to HSK AI; classification is preparation only.
