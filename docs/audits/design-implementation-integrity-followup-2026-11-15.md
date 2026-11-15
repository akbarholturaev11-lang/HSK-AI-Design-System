# HSK AI Design System — code, demo, brand and release audit follow-up (2026-11-15)

**Scope:** branch `restore/hsk-ai-professional-unified-audit-20261115` only. The HSK AI production repository was accessed **read-only**, at `akbarholturaev11-lang/HSK-AI-Bot` main SHA `839bdebb6d4b41ec2015ec734bc75faefa8eee17`. No PWA, Android, payments, lessons, backend or analytics implementation was changed here. The approved HSK AI decisions registry remains the byte-identical original Git blob `f679725a5e69ca9e2de85438e57a413aedc8142f`.

## Verified changes and their evidence

### Working fictional-data demonstrations

1. `__docs__/design-components/assets/hsk-reference/HskReferenceDemos.tsx`: the **trend** SVG now computes point coordinates, line segments and accessible data description from the same `trend` array as the table. Missing Week 2 (`answers: null`) remains a plotted gap and is never interpolated as zero.
2. The **distribution** page previously offered a "Groups with observations" control with only strictly positive bins, so it could not change the results. The synthetic reference dataset now includes explicit zero-count Sample D and computes the numerator, all-bin total and filtered count from the dataset. Zero is a measured value, unlike a null observation.
3. Source-only demo drawing defaults to current text color rather than a falsely implied inherited HSK AI application CSS token or hard-coded light-only chart track.
4. The **vocabulary** table includes actual Hanzi, correctly tone-marked pinyin and factual Russian meanings (你好 — nǐ hǎo — Здравствуйте; 学习 — xuéxí — Учиться; 今天 — jīntiān — Сегодня). Its status flags remain explicitly fictional. The sorted pinyin column announces `aria-sort`; the horizontal overflow region is keyboard-focusable and labeled. This illustrates the HSK language hierarchy, **not** live account data.
5. `__docs__/components/HskReferenceDemos.tsx` continues to back individual chart/table pages; the separate gallery module continues to back the gallery. They are **not identical unused duplicates**: different import sites and different demonstrations exist. Do not merge before real rendered behavior is tested.

### Documentation links and static integrity

- `__docs__/design-components/banners.mdx`: removed seven link-target placeholders using `#link`, routing navigation examples to actual local design documentation and marking all banner click handlers/sample success text as **non-production illustrative examples**. The samples must not be interpreted as confirmed transactions.
- **All 44 active MDX pages were fetched from GitHub on this follow-up**, in six disjoint batches, and their single `<Meta title>` and relative imports were checked against the repository's actual Git tree; no missing local relative import or absent page Meta title was observed. The scanned set did not contain references to the five legacy static brand assets removed below.
- New dependency-free `scripts/check-docs.mjs` validates MDX Meta title uniqueness, local ESM imports, `<img>` alternatives, local Storybook page routes and dead `#link` patterns. `package.json` now exposes `pnpm check:docs`; `.github/workflows/build-check.yml` runs it before the existing `pnpm typecheck` and `pnpm build`.
- The read-only GitHub scanner checks **static source links/import existence**, not browser route or heading anchor resolution, complete JSX/MDX compilation, live keyboard operation or rendered contrast.

### Authentic product branding (no generated substitute)

- The exact canonical product `branding/hsk-ai-logo.svg` was copied from HSK-AI-Bot into `static/hsk-ai-logo.svg` and `static/favicon.svg`. Both copies match original **Git blob SHA `171a49f9093367cc88d3a81b83133a85e8bb4be9`**.
- Storybook manager chrome now has `brandTitle: "HSK AI Design System"` and official logo, with verified documented brand values: light text accent `#C02F32` (official cinnabar gradient end) and dark preview accent `#20BCEB` (existing dark `--hsk-cinnabar` value). Calculated contrast: light `#C02F32` against existing Storybook `#EDEDEE` is approximately **4.86:1**; against white approximately **5.68:1**. Dark preview still requires a rendered theme check.
- Added **375px and 412px** phone viewports to the existing 320px preset. This adds a test capability; it does not establish visual pass evidence.
- Deleted **five obsolete original-brand static assets** after checking all 44 active MDX pages, 10 supporting TS/TSX/JS files and 9 Storybook/config/style files for references: `static/logo-design-guidelines.svg`, `static/logo-design-guidelines--dark.svg`, `static/logo-with-text.svg`, `static/logo-with-text--dark.svg`, `static/favicon.ico`. These brand-only files conveyed no transferable guideline content and are no longer needed by the configured Storybook chrome.

### Publish guard and CI

- `.github/workflows/chromatic.yml` now has `if: github.event_name != 'pull_request' || github.event.pull_request.draft == false` on its publish job; the trigger list includes `ready_for_review`. Thus the **draft** restoration PR should not send uncleared historical illustrations to Chromatic **if GitHub Actions becomes enabled and the workflow executes**. Do not confuse this policy with a successful test or license clearance.
- `build-check.yml` still runs on draft PRs and is configured to check docs, typecheck and build, but it has **not actually executed**.

## Validation matrix — do not claim success without evidence

| Check | Observed result | Status |
| --- | --- | --- |
| Authentic HSK AI logo provenance | Exact Git blob identity against real HSK AI main | VERIFIED |
| 44 active MDX Meta title presence | Inspected each current document through GitHub | STATIC PASS |
| 44 active MDX relative imports | Inspected imports against actual current Git tree | STATIC PASS |
| Dead `#link` in the affected banner page | Removed and re-fetched | STATIC PASS |
| TSX demo source behavior | Source code changed and re-fetched; no interactive browser session | SOURCE-REVIEW ONLY |
| `pnpm check:docs` command | Added to code and CI; real command exit status not obtained | NOT RUN |
| `pnpm install --frozen-lockfile` | Repository not cloned locally; package manager unavailable here | NOT RUN |
| `pnpm typecheck` | Project compiler/dependencies not installed; local Node is 22 rather than required 24 | NOT RUN |
| `pnpm build` | Same blocker; no built Storybook artifact | NOT RUN |
| GitHub Actions | API returned **0 workflow runs**, including after updates | BLOCKED / CAUSE NOT VERIFIED |
| Browser visual, responsive, keyboard, a11y | No rendered Storybook/device session or screen-reader evidence | NOT RUN |
| Historical source illustration redistribution | No confirmed matching redistribution license or written permission | HARD BLOCKER |

**Legal rule:** being viewable in a public GitHub repository does **not** establish permission to copy/redistribute source images. The 73 exact restored third-party PNGs are still present for historical reference; their permissions must be verified individually or the teaching diagrams replaced with rights-cleared original work before publication. See the 73-asset SHA manifest and the 120-file audit; no image rights were inferred from public visibility.

## Release decision

1. Keep PR #4 **draft / unmerged**; do not mark 10/10.
2. Resolve the 73-asset image provenance or replace the relevant graphics while preserving the professional rule.
3. Confirm GitHub Actions availability through repository settings or actual run evidence; the current integration exposes read-only run listings and returned zero jobs. **Do not guess why**.
4. Run frozen install, static check, typecheck, Storybook build, visual/mobile keyboard checks and record actual results.
5. Recheck the protected decisions registry and current production app source before a reviewed merge.

The documentation, example behavior and branding are materially safer and more complete, but **production-ready design-system status is not established**.
