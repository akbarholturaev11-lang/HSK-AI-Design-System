# HSK AI — internal visual reference selection (image-by-image, no publication)

## Latest exception disposition (supersedes the 9-open status below)

The owner-approved [nine-case review resolution](VISUAL_REFERENCE_EXCEPTIONS_2026-11-15.md) **converts eight previously undecided files into explicit, evidence-backed selection outcomes** and identifies one oversized PNG that **cannot** yet be visually inspected. The effective working totals are now:

- **212 INCLUDE_SAMPLE:** useful generic visual sample candidates
- **95 EXCLUDE_FOREIGN_SCREEN:** unrelated other-product screenshots/branding
- **4 EXCLUDE_NO_VALUE:** placeholder or uninformative one-glyph visuals
- **4 KEEP_PARTIAL_REWORK:** useful component details within mixed source-specific images; **do not copy full files**, retain professional detail for an appropriate neutral excerpt
- **1 REVIEW_REQUIRED_BINARY_READ:** `modals/media.png` is 5,460,818 bytes; the GitHub file-content reader returns empty image data, so a binary-capable read is needed

**316/316 source paths accounted for; 315/316 actually visually viewed; 1 not visually assessable with the current connector.** The older numeric classification below (212/95/9) is the historical batch-16 snapshot, not the current effective disposition. The image selection does not move any binary files to the product.

## Audit status — complete source-path inventory (2026-11-15)

**Updated final result:** **316/316 PNG file paths tracked and individually classified**, with file paths and matching Git blob SHA verified against the current branch Git tree. **212 `INCLUDE_SAMPLE`**, **95 `EXCLUDE_FOREIGN_SCREEN`**, and **9 `REVIEW_REQUIRED`**. **0 file paths left unclassified**. **315/316 actually visually rendered**: `__docs__/design-components/assets/modals/media.png` was fetched but could not be decoded in the image viewer; its visual content is unknown and it remains REVIEW_REQUIRED. The original 8-image section below documents **the initial pilot**, not the final audit total.

**Independent manifest integrity pass:** the original 8 rows + 16 subsequent batch documents contain exactly **316 source rows**, each resolves unambiguously to **one unique existing PNG path**, with a matching Git blob SHA prefix; **no missing paths, duplicate classified paths or SHA mismatches**. Files with the same bytes but different repository paths remain separate tracked paths.

**Detailed visual classifications:** [batch 01](./VISUAL_REFERENCE_BATCH_2026-11-15_01.md) · [batch 02](./VISUAL_REFERENCE_BATCH_2026-11-15_02.md) · [batch 03](./VISUAL_REFERENCE_BATCH_2026-11-15_03.md) · [batch 04](./VISUAL_REFERENCE_BATCH_2026-11-15_04.md) · [batch 05](./VISUAL_REFERENCE_BATCH_2026-11-15_05.md) · [batch 06](./VISUAL_REFERENCE_BATCH_2026-11-15_06.md) · [batch 07](./VISUAL_REFERENCE_BATCH_2026-11-15_07.md) · [batch 08](./VISUAL_REFERENCE_BATCH_2026-11-15_08.md) · [batch 09](./VISUAL_REFERENCE_BATCH_2026-11-15_09.md) · [batch 10](./VISUAL_REFERENCE_BATCH_2026-11-15_10.md) · [batch 11](./VISUAL_REFERENCE_BATCH_2026-11-15_11.md) · [batch 12](./VISUAL_REFERENCE_BATCH_2026-11-15_12.md) · [batch 13](./VISUAL_REFERENCE_BATCH_2026-11-15_13.md) · [batch 14](./VISUAL_REFERENCE_BATCH_2026-11-15_14.md) · [batch 15](./VISUAL_REFERENCE_BATCH_2026-11-15_15.md) · [batch 16](./VISUAL_REFERENCE_BATCH_2026-11-15_16.md).

**Nine awaiting disposition (not approved for byte transfer):** `badges/placement-1.png` (placeholder), `badges/score-to-status-mapping-3.png` (single em dash), `badges/states-4.png` (foreign Gem mixed into status examples), `banners/interaction-3-action.png` (foreign Khanmigo panel), `dropdown-select/example-coming-soon.png` (placeholder), `modals/media.png` (image viewer decode failure), `modals-selection/filter-badge.png` (foreign school report crop), `radio-button/filter-bar-dont.png` (mixed report), `illustration/types-of-illustration-4.png` (placeholder). For the last image the full prefix is `__docs__/design-foundations/assets/`; otherwise paths except it are `__docs__/design-components/assets/` relative.

**Separation of concerns:** This is **image-content classification, not license review, rights clearance, public upload, or completed binary transfer**. Keep original approved HSK AI product palette, Panda and other official branding; source school imagery and metrics are not real HSK learning data. The GitHub draft PR is intentionally unmerged. No HSK-AI-Bot production files were changed.

---

**Owner decision:** This migration is an **internal professional design system**, not publication. **Keep and migrate useful generic professional visual examples / component demonstrations. Do not migrate screenshots showing a different application, its branded school/product workflows or vendor-specific rewards.** Do not classify every PNG as a foreign screenshot: inspect the actual image. No PWA/Android feature code changes.

**Priority:** owner-approved HSK AI functional and brand decisions stay intact; transferable professional visual composition, state variants, alignment, spacing, behavior and accessible hierarchy remain the target. Imported images illustrate the professional method; their depicted colors, metrics, labels or source-specific tokens do **not** silently become HSK AI runtime requirements.

## Classification rules (mandatory before any image transfer)

| Code | Exact selection rule | Transfer action |
| --- | --- | --- |
| `INCLUDE_SAMPLE` | Image visibly shows a **generic component state, UI anatomy, spacing, icon placement, layout, color-scale concept, comparison or schematic** without making another product's application interface the subject | **Carry the useful visual example into the internal design-system package**, next to the relevant rule, as a *professional reference*. Keep a caption identifying the transferable detail; link to the source blob/path and mark any source-specific colors/measurements as illustrative rather than HSK AI tokens. Verify applicable reuse terms if copying actual image bytes. |
| `EXCLUDE_FOREIGN_SCREEN` | Real/full or materially branded **other-application screen**, school/district/teacher account dashboard, foreign mascot, Gems/rewards product flow or vendor-specific business UI | **Do not copy the screenshot** into HSK AI. Keep only the transferable anatomy, hierarchy, control placement, states and responsive/interaction *rule* in the Markdown text. |
| `INCLUDE_HSK_ORIGINAL` | Exact actual HSK AI logo/character/Orb/design asset with verified source in the HSK AI product repo | Reference the verified canonical product file and re-use only as appropriate; do not invent or regenerate it. |
| `REVIEW_REQUIRED` | Content not yet visually inspected, ambiguous crop or mixed figure (a generic mock plus some foreign-feature content) | **Inspect the bytes first. No blanket include/exclude on filename, alt text, directory or PNG count.** If the generic example can be isolated faithfully from foreign product UI, document that distinction; do not silently label the entire image a transferable neutral mock. |

**Source count is not a rejection count:** the Git tree contains 316 PNG files, while the portable source MDX corpus has 298 figure reference placements plus one imported Phosphor SVG icon. These are different inventories. The original 44 professional text guidelines remain intact irrespective of which sample files are selected.

## Directly viewed examples — classification grounded in the actual image

The following **eight images were opened from the current GitHub branch as real PNG image data**; their SHA values are source Git blobs. These labels are **actual visually inspected results**, not guesses based on filenames.

| Path under design source repo | Git blob SHA | Classification | Observed image and reason |
| --- | --- | --- | --- |
| `__docs__/design-components/assets/buttons/variants-1.png` | `6e8045edf0dc032711b3e202ea6208eb557eef5b` | `INCLUDE_SAMPLE` | Neutral gray wireframe with primary button emphasis on cards; reusable **CTA placement and visual hierarchy** diagram, no real application name |
| `__docs__/design-components/assets/badges/variants-1.png` | `475fa87603a970e0edfc2531bcd80d75a3049f93` | `INCLUDE_SAMPLE` | Isolated red critical badge, icon + label and compact variations; keep variant anatomy. "Overdue" and "0%" remain **sample content**, not verified HSK AI metrics |
| `__docs__/design-components/assets/banners/placement-1.png` | `081bd66f743c941b97a35beaaf69ed32fb49fa3a` | `INCLUDE_SAMPLE` | Generic wireframe with status banner positioned between heading and body; useful for **in-flow banner placement, dismiss affordance and hierarchy** |
| `__docs__/design-foundations/assets/spacing/types-of-spacing-1.png` | `5dd5ba157b04df603a81453fd6ed132e136a6eb0` | `INCLUDE_SAMPLE` | Pure **component padding anatomy** diagram with guide lines, not another application's screen |
| `__docs__/design-foundations/assets/spacing/scale.png` | `199b41022cec91fb789cad038af62d68ef114011` | `INCLUDE_SAMPLE` (*concept only*) | Bars comparing a spacing scale; sample numbers are the **upstream scale**, **not approved HSK AI 4-unit spacing tokens**. Use for professional rhythm concept only; retain HSK AI's approved 4-unit normative scale |
| `__docs__/design-foundations/assets/colors/primitives-grid.png` | `2f75a0291c644224b3695c0f29ca419f43a1f435` | `INCLUDE_SAMPLE` (*concept only*) | Generic primitive color-shade grid, **not** a screenshot; depicts **tonal ramps**. The shown RGB palette is **not** a binding HSK AI palette or semantic token set |
| `__docs__/design-components/assets/active-filters/states.png` | `79f3289681b0ab82c1fa4a6b8ebb1c8cec2bccc5` | `EXCLUDE_FOREIGN_SCREEN` | Real school-report UI with search, "School: Addison Middle", school-filter chips and a side navigation; not an HSK AI app. Retain active-filter **chip states, grouping, count and clear-all logic** as neutral design rules |
| `__docs__/design-components/assets/buttons/states-1.png` | `98c15094c375f4997f4291f15b016a2f87a0320b` | `EXCLUDE_FOREIGN_SCREEN` (*product-specific view*) | "Gem challenge", "Class gems", reward action and foreign product-specific content. Although it contains a button, its **purpose and product screen are foreign**; retain only generic CTA hierarchy/feedback reasoning |

These are **8/316 visually classified PNGs, not 316/316**. Do not claim more images were visually inspected. Five representative non-screen professional examples are selected and one additional concept-only color grid is selected; two foreign-product visuals are excluded. Exact number classified for `INCLUDE_SAMPLE`: **six**.

## Future package file placement — after selection

Keep selected pictures in an isolated **internal** asset directory such as `docs/design-system/examples/`, under the same guideline category. Provide a direct Markdown link/image with description of what the picture demonstrates; preserve source SHA provenance. **Do not copy the entire 316-image historical source directory**, external logos, screenshot galleries, school scenes or font binaries.

For every referenced figure not yet classified, first read its relevant MDX image alt/caption and **open the image itself**, then classify. Generic component demonstration **is not expendable** simply because it came from a historic source package. A foreign app screenshot **does not become acceptable** merely because it shows a useful general button inside it.

**No assets were moved by creating this selection document.** The present GitHub connector can read source PNG bytes in base64 but its ordinary text-file write operation cannot create binary PNG files. A later binary-aware copy workflow must use exactly the approved source paths and preserve binary hashes. No need to publish or build a Storybook site for this internal selection.
