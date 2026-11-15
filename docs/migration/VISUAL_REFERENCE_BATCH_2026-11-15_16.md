# HSK AI professional visual content audit — batch 16 (filter & sort / onboarding)

**Date:** 2026-11-15. Protected owner decisions reread, and **all 24 PNG source paths below visually opened and inspected**. These are complete vendor school/district/teacher application screens or foreign mascot/brand hero artwork. **None should be transferred as an image into the HSK AI design system.** Preserve the professional UX rules in text: search/filter/sort composition, clear/reapply and dependent filters, optional vs required onboarding, step progress and reversible actions. Do **not** transfer school-specific features, identifiers, mascots, colors or actual student data.

| # | Source path under `__docs__/design-patterns/assets/` | Source Git blob SHA prefix | Verdict | Visually grounded rationale |
| ---: | --- | --- | --- | --- |
| 1 | `filter-and-sort/dependent-filters-1.png` | `a066fba4a34586e7` | `EXCLUDE_FOREIGN_SCREEN` | Whole school-report dashboard; School filter and search with 40 results; transferable dependent filter rule remains prose |
| 2 | `filter-and-sort/dependent-filters-2.png` | `73bb7773d8fbd45e` | `EXCLUDE_FOREIGN_SCREEN` | School: Addison Middle report with teacher filter, selected school chip, foreign dashboard |
| 3 | `filter-and-sort/filter-and-sort.png` | `7a4eceaa59a9e42d` | `EXCLUDE_FOREIGN_SCREEN` | Foreign purple mascot with magnifying glass in hero artwork, not HSK panda |
| 4 | `filter-and-sort/logic-framework-how-they-play-together-1.png` | `8c091467754a0e34` | `EXCLUDE_FOREIGN_SCREEN` | Foreign school report shell with default date, School/Grade filter and results |
| 5 | `filter-and-sort/logic-framework-how-they-play-together-10.png` | `9b046fbee55f5c2a` | `EXCLUDE_FOREIGN_SCREEN` | Foreign dashboard reset/default school report toolbar, same use as figure 1 but separate source blob |
| 6 | `filter-and-sort/logic-framework-how-they-play-together-2.png` | `9235bf09dc2a67a0` | `EXCLUDE_FOREIGN_SCREEN` | Foreign report includes class autosuggest list with Algebra titles and page chrome |
| 7 | `filter-and-sort/logic-framework-how-they-play-together-3.png` | `ee604b3a61d226f5` | `EXCLUDE_FOREIGN_SCREEN` | Foreign district dashboard with date-range dropdown and old sample calendar dates |
| 8 | `filter-and-sort/logic-framework-how-they-play-together-4.png` | `27a79fa9e3fb2659` | `EXCLUDE_FOREIGN_SCREEN` | Foreign school dashboard with Algebra course drop-down and grade search |
| 9 | `filter-and-sort/logic-framework-how-they-play-together-5.png` | `18ab2b7630eee428` | `EXCLUDE_FOREIGN_SCREEN` | School report entire UI with school name list and multi-select Apply |
| 10 | `filter-and-sort/logic-framework-how-they-play-together-6.png` | `c7ecc390cca032fd` | `EXCLUDE_FOREIGN_SCREEN` | Actual school report filtered by Addison Middle with grade multi-select |
| 11 | `filter-and-sort/logic-framework-how-they-play-together-7.png` | `79c91b9433f9aa5a` | `EXCLUDE_FOREIGN_SCREEN` | Foreign school report plus multi-section More filters modal, math/teacher course taxonomy |
| 12 | `filter-and-sort/logic-framework-how-they-play-together-8.png` | `8f2310cdda1ee3d4` | `EXCLUDE_FOREIGN_SCREEN` | Foreign school results with school/grade chips and selected subject badge |
| 13 | `filter-and-sort/logic-framework-how-they-play-together-9.png` | `8f2310cdda1ee3d4` | `EXCLUDE_FOREIGN_SCREEN` | Exact Git blob duplicate of figure 8: same school-filter dashboard screenshot |
| 14 | `onboarding-and-setup/activation-1.png` | `fe86cd2d3c03ddd7` | `EXCLUDE_FOREIGN_SCREEN` | Khan Academy branded welcome screen with vendor mascot, sample person name and district account email |
| 15 | `onboarding-and-setup/activation-2.png` | `440380753187138d` | `EXCLUDE_FOREIGN_SCREEN` | Khan Academy welcome screen for school/charter account; vendor mascot and brand |
| 16 | `onboarding-and-setup/collecting-info-1.png` | `a4b901ce02a792a0` | `EXCLUDE_FOREIGN_SCREEN` | Complete vendor onboarding with split illustration, profile name, birth month, class visibility and stepper |
| 17 | `onboarding-and-setup/collecting-info-2.png` | `8a8b094c9d1d0858` | `EXCLUDE_FOREIGN_SCREEN` | Complete vendor account setup with teacher-controlled name, language and stepper |
| 18 | `onboarding-and-setup/logic-framework-how-they-play-together-10.png` | `8ed71d2ae62aa1c0` | `EXCLUDE_FOREIGN_SCREEN` | Vendor school Enter a class final-step workflow with Period/Algebra/Biology classes and dashboard CTA |
| 19 | `onboarding-and-setup/logic-framework-how-they-play-together-5.png` | `2e9f363a661b16a9` | `EXCLUDE_FOREIGN_SCREEN` | Vendor teacher/tutor role-choice onboarding with vendor sidebar illustrations and school-account features |
| 20 | `onboarding-and-setup/logic-framework-how-they-play-together-6.png` | `ad231c8964738655` | `EXCLUDE_FOREIGN_SCREEN` | Foreign grade 9 Math/Algebra course assignment dialog, vendor stepper and background artwork |
| 21 | `onboarding-and-setup/logic-framework-how-they-play-together-7.png` | `5e35e23850b28055` | `EXCLUDE_FOREIGN_SCREEN` | Vendor school course-assign flow with pacing guide/manual assignment school features |
| 22 | `onboarding-and-setup/logic-framework-how-they-play-together-8.png` | `4c660660e85b6e4c` | `EXCLUDE_FOREIGN_SCREEN` | Vendor course assignment step, opt-out checkbox and school schedule |
| 23 | `onboarding-and-setup/logic-framework-how-they-play-together-9.png` | `a57d597f0203ad00` | `EXCLUDE_FOREIGN_SCREEN` | Vendor school course selection flow highlighting class count and next CTA |
| 24 | `onboarding-and-setup/onboarding-and-setup.png` | `8c10f7d1f6b2418f` | `EXCLUDE_FOREIGN_SCREEN` | Full vendor illustration featuring purple mascot on a rocket/planet, not official HSK AI branding |

## Full source PNG inventory disposition

- **This batch: 24 paths** (13 filter and sort, 11 onboarding and setup): 0 generic standalone images, 24 foreign screenshots/mascot references excluded.
- **Cumulative: 316/316 PNG paths evaluated**, **212 INCLUDE_SAMPLE**, **95 EXCLUDE_FOREIGN_SCREEN**, **9 REVIEW_REQUIRED**, **0 unclassified file paths**. The 9 review cases are NOT approved assets and may include placeholder, composite or viewer-decode issue.
- **315/316 paths successfully rendered**. The sole exception is `__docs__/design-components/assets/modals/media.png` (fetched but unable to render), and is clearly recorded as `REVIEW_REQUIRED` in batch 08. Calling all 316 visually inspected would be incorrect.
- `filter-and-sort/logic-framework-how-they-play-together-8.png` and `-9.png` have the same Git blob SHA `8f2310cdda1ee3d48571fb630886a84a42edc832`; count as **two different paths, one identical image binary**.
- **No image binaries have been imported to HSK-AI-Bot and no rights to publish third-party images have been established**. Approval of a generic sample is a *design selection* only, not publication license clearance.
- Source screenshot classification does **not remove** generic UX/professional text from the 44 MDX guideline pages. The HSK AI owner's existing approved designs and app code were not modified.
