# Professional reference recovery — 2026-11-15

## Baseline and intention

- Pre-cleanup reference commit: `f5ce49cbc219`.
- Current main before restoration: `db65c22a9a7e6bb269b6a72070f08a148b7787b2`.
- Working branch: `restore/professional-guidelines-20261115`.
- Review: [PR #1](https://github.com/akbarholturaev11-lang/HSK-AI-Design-System/pull/1).
- **No production HSK-AI-Bot files were modified.** The user's mobile HSK AI design decisions remain authoritative.

The cleanup after the original review removed **120 files** (107 PNG images, five TSX examples, three MDX pages and five other source/governance files) and removed approximately 5,270 lines while adding 868 lines. Although many removed files were foreign-brand material, general professional documentation and illustrations were also lost.

## Carefully selected restoration

**70 original reference PNGs restored to their original locations**, with the actual blobs from the pre-cleanup commit (not recreated or approximated):
- Colors and semantic colors: 5.
- Borders and dividers: 12.
- Iconography: 5.
- Illustration types (spot, scene, accent): 3.
- Chart container: 4.
- Data tables: 3.
- Summary cards: 3.
- Trend charts: 2.
- Distribution charts: 2.
- Progress charts: 2 (excluding the Gems example).
- Data reports and accurate empty/error states: 9.
- Onboarding and setup **draft**: 11.
- Feedback: 4.
- Popovers: 5.

**15 existing MDX/draft pages improved in place** rather than reset to the foreign design-system wording. Their actual HSK AI constraints remain in effect. Original reference illustrations have explicit source-only alt text and explanations; they are **not** HSK AI production screenshots, character art, valid score thresholds, or endorsed foreign colors.

**Five replacement interactive demonstrations** in `__docs__/components/HskReferenceDemos.tsx`:
1. Switch a trend sample's time range and chart/table view while keeping the scope.
2. Adjust a synthetic current-versus-target progress value.
3. Inspect an explicitly synthetic non-overlapping distribution and its total.
4. Sort a three-row fictional table with aligned sort state.
5. Compare no records / filtered out / stale / failed-report states.

These examples are expressly labeled **synthetic**. They make no backend requests and create no feature claims. They replace general teaching utility, **not** the source school's original business meaning.

## Intentionally not restored

- Khanmigo and Khanductor pages/character art; unrelated mascots, school roles and Gems policies.
- Source-specific score thresholds, rewards, unrelated teacher/student data, and old Design Infra verdict/governance rules.
- Five school-specific TSX example implementations whose business semantics, data labels and Wonder Blocks internals would otherwise re-enter active HSK AI guidance. Their **general interaction principles** are instead demonstrated in the five independent examples above.
- Other unused legacy figures such as standalone school-role icons, generic upstream headers and source-specific score images. The source commit remains available if a particular general principle later proves missing.

## Verified checks

- [x] Compared restored branch with **main**: image restoration and documentation additions only; **no file deletions** in this PR.
- [x] Inspected the pre-cleanup removed-file inventory and explicitly excluded foreign-brand policies.
- [x] Verified every newly restored image import resolves to a Git tree asset and each newly added image has descriptive alt text.
- [x] Static check across the **42 published MDX files**: 317 relative imports examined, with no missing relative target. Checked 259 `<img>` tags for alt text, with no missing alt in that scan. The onboarding file remains a `.draft` and is not a published MDX page.
- [x] Scanned the published pages for internal links to removed Khanmigo/Khanductor/verdict pages and obsolete external Khan infrastructure; none detected in the examined href attributes.
- [x] Confirmed that the canonical Panda, supporting characters, correct/wrong reactions, red Voice Orb, real PWA/Android role tokens and the maximum-two-line top-right-chevron optional-description rule are not replaced by the source images.

## Not yet verified — do not mark complete

- [ ] **Storybook build**: `pnpm install --frozen-lockfile && pnpm typecheck && pnpm build`.
- [ ] Visual checks of all restored figures, diagrams and TSX demos across phone-size viewports, light/dark Storybook themes and accessibility states.
- [ ] Full Storybook page-ID/anchor navigation, console errors and no-layout-regression review.

**Blocker at the time of this audit:** GitHub Actions returned **zero workflow runs** after opening PR #1, and the current session's working container cannot resolve GitHub hosts or install/download project packages. As a result **no successful build or device-visual validation can honestly be claimed**. Do not merge this PR as "fully validated" until a build path is available. The existing `.github/workflows/build-check.yml` already requests both typecheck and build on PR events; inspect repository Actions settings/permissions rather than silently bypassing tests.

## Acceptance criteria before merge

1. `pnpm typecheck` and `pnpm build` return exit code 0 with no missing images or MDX parse errors.
2. Open the Storybook foundations and all chart/report/survey pages; check screenshots and image descriptions at 320px, 375px and a larger screen, in light and dark preview.
3. Exercise every synthetic demo (range, chart/table, sorting, progress slider, distribution, empty/stale/error) with keyboard and screen-reader labels.
4. Confirm no HSK AI-only product claims arise from upstream school reference screenshots.
5. Ensure no edits to HSK-AI-Bot production code, no duplicate/incorrect metrics, and no source mascot or Gems requirements in Codex's active rules.

This record is intentionally conservative: **successful static references do not prove a successful site build or real mobile visual parity**.
