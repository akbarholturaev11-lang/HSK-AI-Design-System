# HSK AI professional visual asset review — batch 08 (modals)

**Date:** 2026-11-15. Protected design requirements read before work. **15 of 16 images were actually rendered and visually inspected**; `media.png` was fetched but could not be decoded in the viewer and is `REVIEW_REQUIRED` (not misrepresented as inspected). Source path SHA identifies exact fetched bytes.

| # | Source path under `__docs__/design-components/assets/modals/` | Git blob prefix | Decision | Direct visual evidence / limitation |
| ---: | --- | --- | --- | --- |
| 1 | `buttons-directional.png` | `a59bc5ea62f867dd` | `INCLUDE_SAMPLE` | Isolated directional/high-stakes/ordinary decision pairings. Context labels sample only |
| 2 | `buttons-pairings.png` | `c3eeaae373b65b76` | `INCLUDE_SAMPLE` | Isolated modal action hierarchy for standard, nudge, destructive decisions; class deletion example not HSK rule |
| 3 | `confirmation-flow.png` | `ac87ad53e10df4c9` | `EXCLUDE_FOREIGN_SCREEN` | Complete foreign learning exercise page with diamond currency and source mascot behind restart confirmation |
| 4 | `contextual-education-flow.png` | `0783c24e3d905516` | `EXCLUDE_FOREIGN_SCREEN` | Source school dashboard and mastery scoring modal, vendor-specific levels |
| 5 | `copy-actions.png` | `813144c3d2469895` | `INCLUDE_SAMPLE` | Isolated action specificity vs Yes/No ambiguity, with affirmative-negative examples |
| 6 | `copy-body.png` | `388787fdaf0f3589` | `INCLUDE_SAMPLE` | Isolated warning about loss of unsaved work vs generic confirmation text |
| 7 | `copy-headline.png` | `87e8335b3b33d3f7` | `INCLUDE_SAMPLE` | Isolated descriptive modal heading versus generic Warning/Notice copy |
| 8 | `functional-task-flow.png` | `d44badd1c563f300` | `EXCLUDE_FOREIGN_SCREEN` | School teacher Students roster with Add your students and Google Classroom flow, vendor consent policy |
| 9 | `interaction-dismissal.png` | `6338955777834875` | `INCLUDE_SAMPLE` | Standalone generic discard/keep-editing confirmation on overlay scrim with cancel/confirm hierarchy |
| 10 | `interaction-multistep.png` | `1a41b1b19afa5db0` | `EXCLUDE_FOREIGN_SCREEN` | Khan Academy student invitation and class roster with explicit source parent-consent policy |
| 11 | `marketing-flow.png` | `52af0eb3dff32d57` | `EXCLUDE_FOREIGN_SCREEN` | Promotional Khanmigo character/accessory Gem currency modal and foreign app screen |
| 12 | `media.png` | `eb86d10202136844` | `REVIEW_REQUIRED` | GitHub returned base64 but visualization tool could not decode it as a supported image; no visual-content classification possible without alternate inspection |
| 13 | `modals.png` | `a1ba7d7b5be779ab` | `INCLUDE_SAMPLE` | Isolated restart-confirmation modal in colorful decorative hero; keep anatomy/action hierarchy, drop foreign mastery-level text |
| 14 | `placement-actions.png` | `076ad73c100fc288` | `INCLUDE_SAMPLE` | Anonymized page and centered modal, highlighted bottom-right action placement |
| 15 | `placement-centered.png` | `93e7b64a1b4a636d` | `INCLUDE_SAMPLE` | Anonymized page illustrating centered overlay aligned at viewport intersection and scrim |
| 16 | `selection-flow.png` | `e3528e9081dfeca6` | `EXCLUDE_FOREIGN_SCREEN` | School report filtering page, explicit Addison Middle/class subject fields, complete foreign app |

**16 paths processed:** 9 generic professional visuals to keep, 6 foreign screens excluded, **1 decode issue awaiting alternate image inspection**. Do not promote source Gems, mastery thresholds, school-teacher/Google Classroom/consent rules, upstream brand, dialog styling values or fictional features to HSK AI.

**Cumulative processed paths:** **168/316** — 121 keep, 41 exclude, 6 review; **148 paths not processed**. **Cumulative actually rendered:** 167 (one media decode failure). No asset binary copied; no app code changed.
