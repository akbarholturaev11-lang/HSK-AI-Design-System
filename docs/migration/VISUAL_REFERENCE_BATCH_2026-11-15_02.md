# HSK AI internal visual sample audit — batch 02 (banners / buttons)

**Date:** 2026-11-15. All 30 unique images listed below were read as GitHub PNG bytes and visually inspected after re-reading `AGENTS.md` and the unchanged owner-decisions document. Previously classified `banners/placement-1.png`, `buttons/states-1.png`, and `buttons/variants-1.png` were **not double-counted**.

**Decision policy:** preserve neutral component examples and visual micro-rules; exclude actual other-app screens and vendor-specific capabilities; mark mixed images `REVIEW_REQUIRED` for element-by-element separation. Example colors, numbers, classroom copy and product terms are **not** HSK AI design tokens or live user functionality. No public publication and no app code edits.

| # | Source image path under `__docs__/design-components/assets/` | Git blob SHA prefix | Decision | Actual visible content and reason |
| ---: | --- | --- | --- | --- |
| 1 | `banners/banners.png` | `dce69d4d6091994e` | `INCLUDE_SAMPLE` | Isolated success banner on abstract background; school enrolment numbers purely source example; useful icon, copy, dismiss geometry. |
| 2 | `banners/copy-1.png` | `cc3f154bc6c475a8` | `INCLUDE_SAMPLE` | Warning banner do/don't comparing concise actionable message with overly verbose copy and vague CTA; cloud storage example is NOT an HSK feature. |
| 3 | `banners/copy-2.png` | `bf820d172ad5edbf` | `INCLUDE_SAMPLE` | Server-connection failure notice with explicit retry link vs vague Ok action; failure/recovery semantics. |
| 4 | `banners/copy-3.png` | `3b3b40b74108770f` | `INCLUDE_SAMPLE` | Concise true-outcome success notification vs generic unsupported saved-to-schedule claim. Classroom names are source sample only. |
| 5 | `banners/interaction-1.png` | `63db1d0d25470666` | `EXCLUDE_FOREIGN_SCREEN` | Khanmigo branded advisory and school-class assignment links; retain generic banner link/dismissal pattern in text. |
| 6 | `banners/interaction-3-action.png` | `88fc7a95aebeafc2` | `REVIEW_REQUIRED` | Mixed generic subscription warning and Khanmigo branded panel; do not transfer full composite, may isolate neutral CTA layout. |
| 7 | `banners/interaction-3.png` | `2d445d4534ae953b` | `EXCLUDE_FOREIGN_SCREEN` | Khanmigo and external Writing Coach feature banners; foreign app capabilities not part of HSK product. |
| 8 | `banners/placement-2.png` | `fa405f893bbf8854` | `INCLUDE_SAMPLE` | Neutral page wireframe with vertical success/warning/error banners and content below; informational stacking placement example. |
| 9 | `banners/placement-3.png` | `a8946a36eed681af` | `INCLUDE_SAMPLE` | Neutral page wireframe illustrating error-before-warning priority ordering, separate from content. |
| 10 | `banners/variants-1.png` | `e230a47f6b40658b` | `INCLUDE_SAMPLE` | Isolated critical/error banner with link and corrective guidance; moderation policy text illustrative, not new HSK policy. |
| 11 | `banners/variants-2.png` | `ff488b073e9bd8d5` | `INCLUDE_SAMPLE` | Isolated warning/expiry banner with action aligned right; date placeholder is not a real subscription state. |
| 12 | `banners/variants-3.png` | `ab35014792a0e11a` | `INCLUDE_SAMPLE` | Isolated success banner with deep links and dismiss control; class/assignment strings are source-only sample content. |
| 13 | `banners/variants-4.png` | `b00deaf46e473396` | `EXCLUDE_FOREIGN_SCREEN` | Other app's teacher review disclosure and external Writing Coach promotion; preserve generic info-banner hierarchy only. |
| 14 | `buttons/buttons.png` | `5cecea5ba49eb5b1` | `INCLUDE_SAMPLE` | Abstract decorative hero containing one primary button with leading +; assignment label not HSK feature. |
| 15 | `buttons/copy-1.png` | `968df7d5854708df` | `INCLUDE_SAMPLE` | Standalone CTA verb specificity: Create account vs vague Go. |
| 16 | `buttons/copy-2.png` | `618926f46a0113a2` | `INCLUDE_SAMPLE` | Standalone secondary CTA label/copy hierarchy; school leaderboard text is illustrative only. |
| 17 | `buttons/copy-3.png` | `af6317f468cc5a50` | `INCLUDE_SAMPLE` | Standalone concise vs excessively wordy primary button copy; demo request not HSK feature. |
| 18 | `buttons/copy-4.png` | `e28b6738fafa8a37` | `INCLUDE_SAMPLE` | Standalone sentence case vs title case on button; class quiz labels illustrative. |
| 19 | `buttons/copy-5.png` | `4c7531905a6d263e` | `INCLUDE_SAMPLE` | Standalone no gratuitous exclamation marks comparison in primary CTA. |
| 20 | `buttons/copy-6.png` | `00970245c302c922` | `INCLUDE_SAMPLE` | Consistent sequential navigation labels Back/Next vs Previous/Continue. |
| 21 | `buttons/header.png` | `6b7a2a8eb962fc4e` | `INCLUDE_SAMPLE` | Hero visual demonstrating leading + and primary CTA within a card; school assignment label not HSK product. |
| 22 | `buttons/neutral-icon-buttons.png` | `6343332a32cc9b4c` | `INCLUDE_SAMPLE` | Isolated close/back/info neutral icon controls, no foreign screen. |
| 23 | `buttons/placement-1.png` | `43ddf9774f1cdb48` | `EXCLUDE_FOREIGN_SCREEN` | Khan Academy joining questionnaire and school-parent onboarding screen; footer CTA logic retained in prose. |
| 24 | `buttons/states-2.png` | `06fbddaf9c81b078` | `INCLUDE_SAMPLE` | Isolated icon action glyphs and primary/secondary/tertiary button weight hierarchy. |
| 25 | `buttons/states-3.png` | `188531c139addc6b` | `INCLUDE_SAMPLE` | Isolated destructive text button with trash icon; labels about assessment are illustrative. |
| 26 | `buttons/states-4.png` | `1882f2c6ba1cdd4c` | `EXCLUDE_FOREIGN_SCREEN` | Partial foreign assessment editing application footer and question-selection screen; preserve disabled/edit/accept state logic as text. |
| 27 | `buttons/states-5.png` | `de73c05c75dfa7fb` | `INCLUDE_SAMPLE` | Isolated buttons comparing proper leading icons and action-label/icon mismatch; class/export examples do not imply shipped controls. |
| 28 | `buttons/states-6.png` | `57eabcf70a35c750` | `EXCLUDE_FOREIGN_SCREEN` | Gem currency 542 and New unlock buttons tied to foreign reward economy; ignore economy, preserve neutral icon-text button reasoning. |
| 29 | `buttons/variants-2.png` | `310d8293a0217537` | `INCLUDE_SAMPLE` | Neutral wireframe showing secondary outlined actions in content list, consistent right alignment. |
| 30 | `buttons/variants-3.png` | `43dbb1eb6cf68234` | `INCLUDE_SAMPLE` | Neutral wireframe showing tertiary Read more in list area. |

## Source visual selection results

- **30 newly inspected:** 23 `INCLUDE_SAMPLE`, 6 `EXCLUDE_FOREIGN_SCREEN`, 1 `REVIEW_REQUIRED`.
- **Cumulative, with prior 33:** **63/316 distinct PNGs inspected** — **47 include**, **12 exclude**, **4 review**, **253 not yet inspected**.
- Banners full category: **14/14 images visually checked**, including `placement-1.png` classified in the original 8-image ledger. Buttons full category: **19/19 images visually checked**, including `states-1.png` and `variants-1.png` from that original ledger.
- An `INCLUDE_SAMPLE` decision means **candidate for the internal professional design document**, not a declaration that every depicted foreign label, color, school action or vendor policy is official HSK AI. No binaries were moved by this Markdown audit.

**Next groups:** chart-container, checkbox-group, clear-filter, data-tables, date-filter, date-picker and distribution-charts. Use content inspection rather than path-only classification.
