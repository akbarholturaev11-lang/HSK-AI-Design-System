# HSK AI professional design — source binary and runtime quarantine inventory

**Source revision:** `restore/hsk-ai-professional-unified-audit-20261115` HEAD `0c7ef618c4fdac3decf320462aeb30ff7ac535ee`, checked directly against GitHub recursive Git tree.
**Purpose:** preserve the **professional information** shown by historical figures while ensuring no foreign or unverified binary becomes an HSK AI runtime dependency. This is a factual source file inventory, **not** a legal conclusion that every listed file is restricted. Specific license grants are **not verified** by this inventory.

## Counts and transfer policy

- Source tree: **316 PNG assets**. They may be referenced by 44 MDX pages, may be reused across pages, or may be unused; per-page **299 imported visual bindings** (298 figure placements plus one `@phosphor-icons/core` package SVG glyph) are reconciled in [TRANSFER_CATALOG.md](TRANSFER_CATALOG.md). A per-file listing does not by itself confirm use, ownership or permission.
- Source tree: **30 font binaries** under `static/fonts/`. **Do not move or share actual font files**; usage/licensing and necessity must be checked separately, and system fonts are preferred where appropriate.
- Some PNGs are among **73 exact previously restored historical images** tracked at the granular deleted-material audit. Do not infer the remaining PNGs were created by HSK AI or licensed; origin is **unverified**.
- One original HSK AI-owned icon has a separate provenance path: `static/hsk-ai-logo.svg` was copied byte-identically from `HSK-AI-Bot/branding/hsk-ai-logo.svg` (Git blob `171a49f9093367cc88d3a81b83133a85e8bb4be9`); its reuse in an HSK AI design entrypoint can reference the original product asset rather than duplicate it.
- Storybook components, demonstration JSX, `@khanacademy/wonder-blocks` packages, `.storybook/**`, `package.json`, `pnpm-lock.yaml`, `static/fonts/**` and repo-specific `.github/workflows/**` are **technical authoring dependencies**, not the future HSK AI production design authority. Do not install or copy them into the product root as part of docs migration.

## Current portable draft and how to safely retain professional diagram detail

The source-derived [44-page portable draft](../portable/README.md) records **298 figure references** in context as text and source asset paths, without copying any PNG/font binaries. The other imported visual binding is the example Phosphor check-circle icon in the Banners guideline, whose semantic success role is also documented. These notes are **traceability, not an assertion that image geometry/visual variants have been fully reconstructed**. An individual diagram or font still needs verified rights/provenance or a rights-cleared HSK AI original before final transfer.



For **each** image a guideline needs, retain its technical meaning — composition, geometry, component hierarchy, control placement, original sizing/ratio if supported, state distinctions, arrows/flow, labels and accessibility rationale — in rewritten professional design documentation. When license/use is verified or there is an HSK AI-owned original diagram, use the rights-cleared illustration; otherwise a full textual breakdown must replace the visual without losing design content. Never rebrand or silently copy a school/vendor screenshot.

**Important:** source prose, exported illustration annotations, demo code and other third-party expression may also have provenance/licensing limits; do not assume that copying unchanged text/JSX into another repository is authorized. Transfer the **professional decisions and facts** using HSK AI-specific original wording unless the applicable source license is verified. Do not delete the professional reasoning just to avoid a source graphic.

## Exact PNG inventory (316 verified Git blobs)

| # | Source PNG | Git blob SHA prefix | Future transfer disposition |
| ---: | --- | --- | --- |
| 1 | `__docs__/design-components/assets/active-filters/active-filters.png` | `b986b2d68d6aaf` | SOURCE-ONLY / provenance required |
| 2 | `__docs__/design-components/assets/active-filters/copy.png` | `bf9fa2fb3e5db1` | SOURCE-ONLY / provenance required |
| 3 | `__docs__/design-components/assets/active-filters/placement.png` | `dff4c5ad8ad9c9` | SOURCE-ONLY / provenance required |
| 4 | `__docs__/design-components/assets/active-filters/states.png` | `79f3289681b0ab` | SOURCE-ONLY / provenance required |
| 5 | `__docs__/design-components/assets/badges/badges.png` | `11f2c95fec38a9` | SOURCE-ONLY / provenance required |
| 6 | `__docs__/design-components/assets/badges/copy-1.png` | `5e3be3bbf8ab38` | SOURCE-ONLY / provenance required |
| 7 | `__docs__/design-components/assets/badges/copy-2.png` | `82aba4a41e3b5d` | SOURCE-ONLY / provenance required |
| 8 | `__docs__/design-components/assets/badges/copy-3.png` | `a26678996b0396` | SOURCE-ONLY / provenance required |
| 9 | `__docs__/design-components/assets/badges/copy-4.png` | `5031657e0c2f0d` | SOURCE-ONLY / provenance required |
| 10 | `__docs__/design-components/assets/badges/header.png` | `f548875b032007` | SOURCE-ONLY / provenance required |
| 11 | `__docs__/design-components/assets/badges/iconography-1.png` | `7d27b9022fb28a` | SOURCE-ONLY / provenance required |
| 12 | `__docs__/design-components/assets/badges/placement-1.png` | `f72d037fa9075b` | SOURCE-ONLY / provenance required |
| 13 | `__docs__/design-components/assets/badges/placement-2.png` | `49c611757adfa3` | SOURCE-ONLY / provenance required |
| 14 | `__docs__/design-components/assets/badges/placement-3.png` | `1500b8ee342b81` | SOURCE-ONLY / provenance required |
| 15 | `__docs__/design-components/assets/badges/score-to-status-mapping-2.png` | `022556b25972ac` | SOURCE-ONLY / provenance required |
| 16 | `__docs__/design-components/assets/badges/score-to-status-mapping-3.png` | `c573621380ae13` | SOURCE-ONLY / provenance required |
| 17 | `__docs__/design-components/assets/badges/states-1.png` | `e2a4b05a492bb0` | SOURCE-ONLY / provenance required |
| 18 | `__docs__/design-components/assets/badges/states-2.png` | `335d22ac886399` | SOURCE-ONLY / provenance required |
| 19 | `__docs__/design-components/assets/badges/states-3.png` | `c7d2163fd86225` | SOURCE-ONLY / provenance required |
| 20 | `__docs__/design-components/assets/badges/states-4.png` | `9cf727625eecaa` | SOURCE-ONLY / provenance required |
| 21 | `__docs__/design-components/assets/badges/states-5.png` | `745b0c119a832d` | SOURCE-ONLY / provenance required |
| 22 | `__docs__/design-components/assets/badges/variants-1.png` | `475fa87603a970` | SOURCE-ONLY / provenance required |
| 23 | `__docs__/design-components/assets/badges/variants-2.png` | `81d683c9732aab` | SOURCE-ONLY / provenance required |
| 24 | `__docs__/design-components/assets/badges/variants-3.png` | `f2bebe7be6c811` | SOURCE-ONLY / provenance required |
| 25 | `__docs__/design-components/assets/badges/variants-4.png` | `79aaadf6d27e26` | SOURCE-ONLY / provenance required |
| 26 | `__docs__/design-components/assets/badges/variants-5.png` | `8815941abb7e56` | SOURCE-ONLY / provenance required |
| 27 | `__docs__/design-components/assets/badges/variants-6.png` | `d61cb1b03399f6` | SOURCE-ONLY / provenance required |
| 28 | `__docs__/design-components/assets/banners/banners.png` | `dce69d4d609199` | SOURCE-ONLY / provenance required |
| 29 | `__docs__/design-components/assets/banners/copy-1.png` | `cc3f154bc6c475` | SOURCE-ONLY / provenance required |
| 30 | `__docs__/design-components/assets/banners/copy-2.png` | `bf820d172ad5ed` | SOURCE-ONLY / provenance required |
| 31 | `__docs__/design-components/assets/banners/copy-3.png` | `3b3b40b7410877` | SOURCE-ONLY / provenance required |
| 32 | `__docs__/design-components/assets/banners/interaction-1.png` | `63db1d0d254706` | SOURCE-ONLY / provenance required |
| 33 | `__docs__/design-components/assets/banners/interaction-3-action.png` | `88fc7a95aebeaf` | SOURCE-ONLY / provenance required |
| 34 | `__docs__/design-components/assets/banners/interaction-3.png` | `2d445d4534ae95` | SOURCE-ONLY / provenance required |
| 35 | `__docs__/design-components/assets/banners/placement-1.png` | `081bd66f743c94` | SOURCE-ONLY / provenance required |
| 36 | `__docs__/design-components/assets/banners/placement-2.png` | `fa405f893bbf88` | SOURCE-ONLY / provenance required |
| 37 | `__docs__/design-components/assets/banners/placement-3.png` | `a8946a36eed681` | SOURCE-ONLY / provenance required |
| 38 | `__docs__/design-components/assets/banners/variants-1.png` | `e230a47f6b4065` | SOURCE-ONLY / provenance required |
| 39 | `__docs__/design-components/assets/banners/variants-2.png` | `ff488b073e9bd8` | SOURCE-ONLY / provenance required |
| 40 | `__docs__/design-components/assets/banners/variants-3.png` | `ab35014792a0e1` | SOURCE-ONLY / provenance required |
| 41 | `__docs__/design-components/assets/banners/variants-4.png` | `b00deaf46e4733` | SOURCE-ONLY / provenance required |
| 42 | `__docs__/design-components/assets/buttons/buttons.png` | `5cecea5ba49eb5` | SOURCE-ONLY / provenance required |
| 43 | `__docs__/design-components/assets/buttons/copy-1.png` | `968df7d5854708` | SOURCE-ONLY / provenance required |
| 44 | `__docs__/design-components/assets/buttons/copy-2.png` | `618926f46a0113` | SOURCE-ONLY / provenance required |
| 45 | `__docs__/design-components/assets/buttons/copy-3.png` | `af6317f468cc5a` | SOURCE-ONLY / provenance required |
| 46 | `__docs__/design-components/assets/buttons/copy-4.png` | `e28b6738fafa8a` | SOURCE-ONLY / provenance required |
| 47 | `__docs__/design-components/assets/buttons/copy-5.png` | `4c7531905a6d26` | SOURCE-ONLY / provenance required |
| 48 | `__docs__/design-components/assets/buttons/copy-6.png` | `00970245c302c9` | SOURCE-ONLY / provenance required |
| 49 | `__docs__/design-components/assets/buttons/header.png` | `6b7a2a8eb962fc` | SOURCE-ONLY / provenance required |
| 50 | `__docs__/design-components/assets/buttons/neutral-icon-buttons.png` | `6343332a32cc9b` | SOURCE-ONLY / provenance required |
| 51 | `__docs__/design-components/assets/buttons/placement-1.png` | `43ddf9774f1cdb` | SOURCE-ONLY / provenance required |
| 52 | `__docs__/design-components/assets/buttons/states-1.png` | `98c15094c375f4` | SOURCE-ONLY / provenance required |
| 53 | `__docs__/design-components/assets/buttons/states-2.png` | `06fbddaf9c81b0` | SOURCE-ONLY / provenance required |
| 54 | `__docs__/design-components/assets/buttons/states-3.png` | `188531c139addc` | SOURCE-ONLY / provenance required |
| 55 | `__docs__/design-components/assets/buttons/states-4.png` | `1882f2c6ba1cdd` | SOURCE-ONLY / provenance required |
| 56 | `__docs__/design-components/assets/buttons/states-5.png` | `de73c05c75dfa7` | SOURCE-ONLY / provenance required |
| 57 | `__docs__/design-components/assets/buttons/states-6.png` | `57eabcf70a35c7` | SOURCE-ONLY / provenance required |
| 58 | `__docs__/design-components/assets/buttons/variants-1.png` | `6e8045edf0dc03` | SOURCE-ONLY / provenance required |
| 59 | `__docs__/design-components/assets/buttons/variants-2.png` | `310d8293a02175` | SOURCE-ONLY / provenance required |
| 60 | `__docs__/design-components/assets/buttons/variants-3.png` | `43dbb1eb6cf682` | SOURCE-ONLY / provenance required |
| 61 | `__docs__/design-components/assets/chart-container/controls.png` | `bfa77705a126b1` | SOURCE-ONLY / provenance required |
| 62 | `__docs__/design-components/assets/chart-container/header.png` | `46b39a10371c85` | SOURCE-ONLY / provenance required |
| 63 | `__docs__/design-components/assets/chart-container/heading-hierarchy.png` | `b79f1e5885df73` | SOURCE-ONLY / provenance required |
| 64 | `__docs__/design-components/assets/chart-container/view-toggle.png` | `24a4a881cc7bb9` | SOURCE-ONLY / provenance required |
| 65 | `__docs__/design-components/assets/checkbox-group/checkbox-group.png` | `d79160a70d7fce` | SOURCE-ONLY / provenance required |
| 66 | `__docs__/design-components/assets/checkbox-group/copy.png` | `17d35ef83f5775` | SOURCE-ONLY / provenance required |
| 67 | `__docs__/design-components/assets/checkbox-group/header.png` | `80e4ce79e65fec` | SOURCE-ONLY / provenance required |
| 68 | `__docs__/design-components/assets/checkbox-group/interaction-1.png` | `a085849e3c8ded` | SOURCE-ONLY / provenance required |
| 69 | `__docs__/design-components/assets/checkbox-group/interaction-2.png` | `01c7dcbfdc0089` | SOURCE-ONLY / provenance required |
| 70 | `__docs__/design-components/assets/checkbox-group/placement-1.png` | `5ca856b288d502` | SOURCE-ONLY / provenance required |
| 71 | `__docs__/design-components/assets/checkbox-group/placement-2.png` | `89db2dba4ba785` | SOURCE-ONLY / provenance required |
| 72 | `__docs__/design-components/assets/clear-filter/clear-filter.png` | `dd0ae64847ad5c` | SOURCE-ONLY / provenance required |
| 73 | `__docs__/design-components/assets/clear-filter/placement.png` | `258ca93f60b0c8` | SOURCE-ONLY / provenance required |
| 74 | `__docs__/design-components/assets/clear-filter/states-default.png` | `258ca93f60b0c8` | SOURCE-ONLY / provenance required |
| 75 | `__docs__/design-components/assets/clear-filter/states-hidden.png` | `90f526f8878e3c` | SOURCE-ONLY / provenance required |
| 76 | `__docs__/design-components/assets/data-tables/basic-table.png` | `9826e9506e8a78` | SOURCE-ONLY / provenance required |
| 77 | `__docs__/design-components/assets/data-tables/header.png` | `381d85e50d5b9f` | SOURCE-ONLY / provenance required |
| 78 | `__docs__/design-components/assets/data-tables/summary-tabs.png` | `ffa97dff8ae3a1` | SOURCE-ONLY / provenance required |
| 79 | `__docs__/design-components/assets/date-filter/copy.png` | `4408003a6dd23a` | SOURCE-ONLY / provenance required |
| 80 | `__docs__/design-components/assets/date-filter/date-filter.png` | `1a71feccf89cdb` | SOURCE-ONLY / provenance required |
| 81 | `__docs__/design-components/assets/date-filter/interaction.png` | `c01da37913e650` | SOURCE-ONLY / provenance required |
| 82 | `__docs__/design-components/assets/date-filter/placement-1.png` | `df49064fc677d8` | SOURCE-ONLY / provenance required |
| 83 | `__docs__/design-components/assets/date-filter/placement-2.png` | `4127f58183319d` | SOURCE-ONLY / provenance required |
| 84 | `__docs__/design-components/assets/date-filter/variants-1.png` | `622d0fa717b35b` | SOURCE-ONLY / provenance required |
| 85 | `__docs__/design-components/assets/date-filter/variants-2.png` | `858ca1fdac0cc0` | SOURCE-ONLY / provenance required |
| 86 | `__docs__/design-components/assets/date-picker/custom-range-modal.png` | `5f4c943aadc46f` | SOURCE-ONLY / provenance required |
| 87 | `__docs__/design-components/assets/date-picker/date-picker.png` | `8aa266563dfadb` | SOURCE-ONLY / provenance required |
| 88 | `__docs__/design-components/assets/date-picker/interaction.png` | `434d3642b037db` | SOURCE-ONLY / provenance required |
| 89 | `__docs__/design-components/assets/date-picker/standalone.png` | `1b3cfb16561cc2` | SOURCE-ONLY / provenance required |
| 90 | `__docs__/design-components/assets/distribution-charts/container.png` | `b70271708e957c` | SOURCE-ONLY / provenance required |
| 91 | `__docs__/design-components/assets/distribution-charts/header.png` | `8d9ed89b089d9d` | SOURCE-ONLY / provenance required |
| 92 | `__docs__/design-components/assets/dropdown-select/copy-ordering.png` | `7d5a25e3b4810a` | SOURCE-ONLY / provenance required |
| 93 | `__docs__/design-components/assets/dropdown-select/copy-truncation.png` | `7c9fa216775538` | SOURCE-ONLY / provenance required |
| 94 | `__docs__/design-components/assets/dropdown-select/dropdown-select.png` | `e8b14fde21cbc9` | SOURCE-ONLY / provenance required |
| 95 | `__docs__/design-components/assets/dropdown-select/example-coming-soon.png` | `82e34d060f7b55` | SOURCE-ONLY / provenance required |
| 96 | `__docs__/design-components/assets/dropdown-select/in-menu-search.png` | `7f56fa029a2577` | SOURCE-ONLY / provenance required |
| 97 | `__docs__/design-components/assets/dropdown-select/label-above.png` | `23c265ede998a5` | SOURCE-ONLY / provenance required |
| 98 | `__docs__/design-components/assets/dropdown-select/label-inline-filter-bar.png` | `646ff4987795dc` | SOURCE-ONLY / provenance required |
| 99 | `__docs__/design-components/assets/dropdown-select/label-inline-modal.png` | `f9e4a9797466d9` | SOURCE-ONLY / provenance required |
| 100 | `__docs__/design-components/assets/dropdown-select/label-inline.png` | `724173d629c8f3` | SOURCE-ONLY / provenance required |
| 101 | `__docs__/design-components/assets/dropdown-select/multi-select-2.png` | `2992cbd511025f` | SOURCE-ONLY / provenance required |
| 102 | `__docs__/design-components/assets/dropdown-select/multi-select-apply.png` | `dc4b4d8d9d2ac7` | SOURCE-ONLY / provenance required |
| 103 | `__docs__/design-components/assets/dropdown-select/multi-select.png` | `f461f407e82f3d` | SOURCE-ONLY / provenance required |
| 104 | `__docs__/design-components/assets/dropdown-select/single-select.png` | `f76bc77c9844ff` | SOURCE-ONLY / provenance required |
| 105 | `__docs__/design-components/assets/dropdown-select/state-context.png` | `c9ecdcac69dbfa` | SOURCE-ONLY / provenance required |
| 106 | `__docs__/design-components/assets/dropdown-select/state-disabled.png` | `6471457f2441f2` | SOURCE-ONLY / provenance required |
| 107 | `__docs__/design-components/assets/dropdown-select/state-error.png` | `92b15666771320` | SOURCE-ONLY / provenance required |
| 108 | `__docs__/design-components/assets/dropdown-select/state-helper-text.png` | `40ad7d1049041f` | SOURCE-ONLY / provenance required |
| 109 | `__docs__/design-components/assets/dropdown-select/state-read-only.png` | `14a3203b64bbb3` | SOURCE-ONLY / provenance required |
| 110 | `__docs__/design-components/assets/inline-filter-button/inline-filter-button.png` | `97c6bde9230aa2` | SOURCE-ONLY / provenance required |
| 111 | `__docs__/design-components/assets/inline-filter-button/interaction-1.png` | `b48c04571a81e6` | SOURCE-ONLY / provenance required |
| 112 | `__docs__/design-components/assets/inline-filter-button/interaction-2.png` | `d4e25ef4faef5b` | SOURCE-ONLY / provenance required |
| 113 | `__docs__/design-components/assets/inline-filter-button/interaction-3.png` | `bd3aaace57fe54` | SOURCE-ONLY / provenance required |
| 114 | `__docs__/design-components/assets/inline-filter-button/variants-1.png` | `346126e6514b71` | SOURCE-ONLY / provenance required |
| 115 | `__docs__/design-components/assets/inline-filter-button/variants-2.png` | `b17bdf51c3ab7b` | SOURCE-ONLY / provenance required |
| 116 | `__docs__/design-components/assets/modals-selection/adaptive-controls-1.png` | `607186ecde807d` | SOURCE-ONLY / provenance required |
| 117 | `__docs__/design-components/assets/modals-selection/adaptive-controls-2.png` | `ede268495f789f` | SOURCE-ONLY / provenance required |
| 118 | `__docs__/design-components/assets/modals-selection/category-labels.png` | `2f4d31f736663f` | SOURCE-ONLY / provenance required |
| 119 | `__docs__/design-components/assets/modals-selection/common-placement.png` | `74f553b0cdb4b4` | SOURCE-ONLY / provenance required |
| 120 | `__docs__/design-components/assets/modals-selection/default-modal.png` | `c9a9e7ccb9f784` | SOURCE-ONLY / provenance required |
| 121 | `__docs__/design-components/assets/modals-selection/filter-badge.png` | `8c2883406c8c41` | SOURCE-ONLY / provenance required |
| 122 | `__docs__/design-components/assets/modals-selection/footer-actions.png` | `3b67ce148a5910` | SOURCE-ONLY / provenance required |
| 123 | `__docs__/design-components/assets/modals-selection/internal-layout.png` | `16fb5006e9599b` | SOURCE-ONLY / provenance required |
| 124 | `__docs__/design-components/assets/modals-selection/modals-selection.png` | `149824bdf5fa63` | SOURCE-ONLY / provenance required |
| 125 | `__docs__/design-components/assets/modals-selection/parent-child-1.png` | `f0019b767d6c60` | SOURCE-ONLY / provenance required |
| 126 | `__docs__/design-components/assets/modals-selection/parent-child-2.png` | `821cc47eb100a7` | SOURCE-ONLY / provenance required |
| 127 | `__docs__/design-components/assets/modals-selection/reset-filters.png` | `61b0999cdb0f80` | SOURCE-ONLY / provenance required |
| 128 | `__docs__/design-components/assets/modals-selection/toggle-behavior.png` | `662cf35827542f` | SOURCE-ONLY / provenance required |
| 129 | `__docs__/design-components/assets/modals/buttons-directional.png` | `a59bc5ea62f867` | SOURCE-ONLY / provenance required |
| 130 | `__docs__/design-components/assets/modals/buttons-pairings.png` | `c3eeaae373b65b` | SOURCE-ONLY / provenance required |
| 131 | `__docs__/design-components/assets/modals/confirmation-flow.png` | `ac87ad53e10df4` | SOURCE-ONLY / provenance required |
| 132 | `__docs__/design-components/assets/modals/contextual-education-flow.png` | `0783c24e3d9055` | SOURCE-ONLY / provenance required |
| 133 | `__docs__/design-components/assets/modals/copy-actions.png` | `813144c3d24698` | SOURCE-ONLY / provenance required |
| 134 | `__docs__/design-components/assets/modals/copy-body.png` | `388787fdaf0f35` | SOURCE-ONLY / provenance required |
| 135 | `__docs__/design-components/assets/modals/copy-headline.png` | `87e8335b3b33d3` | SOURCE-ONLY / provenance required |
| 136 | `__docs__/design-components/assets/modals/functional-task-flow.png` | `d44badd1c563f3` | SOURCE-ONLY / provenance required |
| 137 | `__docs__/design-components/assets/modals/interaction-dismissal.png` | `63389557778348` | SOURCE-ONLY / provenance required |
| 138 | `__docs__/design-components/assets/modals/interaction-multistep.png` | `1a41b1b19afa5d` | SOURCE-ONLY / provenance required |
| 139 | `__docs__/design-components/assets/modals/marketing-flow.png` | `52af0eb3dff32d` | SOURCE-ONLY / provenance required |
| 140 | `__docs__/design-components/assets/modals/media.png` | `eb86d102021368` | SOURCE-ONLY / provenance required |
| 141 | `__docs__/design-components/assets/modals/modals.png` | `a1ba7d7b5be779` | SOURCE-ONLY / provenance required |
| 142 | `__docs__/design-components/assets/modals/placement-actions.png` | `076ad73c100fc2` | SOURCE-ONLY / provenance required |
| 143 | `__docs__/design-components/assets/modals/placement-centered.png` | `93e7b64a1b4a63` | SOURCE-ONLY / provenance required |
| 144 | `__docs__/design-components/assets/modals/selection-flow.png` | `e3528e9081dfec` | SOURCE-ONLY / provenance required |
| 145 | `__docs__/design-components/assets/popovers/adaptive-anchoring.png` | `f3a9fd69e93921` | SOURCE-ONLY / provenance required |
| 146 | `__docs__/design-components/assets/popovers/feature-highlight.png` | `e352b8536d49ab` | SOURCE-ONLY / provenance required |
| 147 | `__docs__/design-components/assets/popovers/informational.png` | `7372820af7bc37` | SOURCE-ONLY / provenance required |
| 148 | `__docs__/design-components/assets/popovers/popovers.png` | `afb77135adbaa3` | SOURCE-ONLY / provenance required |
| 149 | `__docs__/design-components/assets/popovers/system-guidance.png` | `6340859147e73d` | SOURCE-ONLY / provenance required |
| 150 | `__docs__/design-components/assets/progress-charts/container.png` | `38d446f284091f` | SOURCE-ONLY / provenance required |
| 151 | `__docs__/design-components/assets/progress-charts/header.png` | `133c27c0edc2ed` | SOURCE-ONLY / provenance required |
| 152 | `__docs__/design-components/assets/progress-stepper/copy.png` | `320fb8cfa6dd0f` | SOURCE-ONLY / provenance required |
| 153 | `__docs__/design-components/assets/progress-stepper/progress-stepper.png` | `c6595be449f00d` | SOURCE-ONLY / provenance required |
| 154 | `__docs__/design-components/assets/progress-stepper/variants-1.png` | `7f478a31e99a77` | SOURCE-ONLY / provenance required |
| 155 | `__docs__/design-components/assets/progress-stepper/variants-2.png` | `0442c9a9d4561f` | SOURCE-ONLY / provenance required |
| 156 | `__docs__/design-components/assets/radio-button/avoid-nesting.png` | `99b7e2352feeb2` | SOURCE-ONLY / provenance required |
| 157 | `__docs__/design-components/assets/radio-button/default-selection.png` | `37da184420799d` | SOURCE-ONLY / provenance required |
| 158 | `__docs__/design-components/assets/radio-button/disabled.png` | `c1effb9243f4cd` | SOURCE-ONLY / provenance required |
| 159 | `__docs__/design-components/assets/radio-button/dropdown-alt.png` | `a71ef388c27563` | SOURCE-ONLY / provenance required |
| 160 | `__docs__/design-components/assets/radio-button/exposed.png` | `af0dc2a39de7ce` | SOURCE-ONLY / provenance required |
| 161 | `__docs__/design-components/assets/radio-button/filter-bar-do.png` | `00668898c72e7d` | SOURCE-ONLY / provenance required |
| 162 | `__docs__/design-components/assets/radio-button/filter-bar-dont.png` | `cf76a94c981554` | SOURCE-ONLY / provenance required |
| 163 | `__docs__/design-components/assets/radio-button/immediate-selection.png` | `6b7b07f5ee5678` | SOURCE-ONLY / provenance required |
| 164 | `__docs__/design-components/assets/radio-button/no-selection.png` | `2162ff6dd06f80` | SOURCE-ONLY / provenance required |
| 165 | `__docs__/design-components/assets/radio-button/radio-button.png` | `62e6524bbc39d2` | SOURCE-ONLY / provenance required |
| 166 | `__docs__/design-components/assets/search-field/auto-suggestion.png` | `22ec012e71c7eb` | SOURCE-ONLY / provenance required |
| 167 | `__docs__/design-components/assets/search-field/clear-button.png` | `7e437d3d4a7c3a` | SOURCE-ONLY / provenance required |
| 168 | `__docs__/design-components/assets/search-field/contextual-placement.png` | `0ea6ad7e526ba7` | SOURCE-ONLY / provenance required |
| 169 | `__docs__/design-components/assets/search-field/default-active.png` | `f7ecf0bdc2a7b0` | SOURCE-ONLY / provenance required |
| 170 | `__docs__/design-components/assets/search-field/scope-clarity.png` | `f6fb0b3631832f` | SOURCE-ONLY / provenance required |
| 171 | `__docs__/design-components/assets/search-field/search-field.png` | `a3021506ac18aa` | SOURCE-ONLY / provenance required |
| 172 | `__docs__/design-components/assets/summary-cards/header.png` | `56475075223149` | SOURCE-ONLY / provenance required |
| 173 | `__docs__/design-components/assets/summary-cards/stat-cards-clickable.png` | `ae486b9780a0d4` | SOURCE-ONLY / provenance required |
| 174 | `__docs__/design-components/assets/summary-cards/stat-cards.png` | `2b90ca6c96c041` | SOURCE-ONLY / provenance required |
| 175 | `__docs__/design-components/assets/text-field/states-1.png` | `8822eadf52d055` | SOURCE-ONLY / provenance required |
| 176 | `__docs__/design-components/assets/text-field/states-2.png` | `5bf5878d366e03` | SOURCE-ONLY / provenance required |
| 177 | `__docs__/design-components/assets/text-field/states-3.png` | `b01cd8d1668477` | SOURCE-ONLY / provenance required |
| 178 | `__docs__/design-components/assets/text-field/states-4.png` | `25e881708df11a` | SOURCE-ONLY / provenance required |
| 179 | `__docs__/design-components/assets/text-field/states-5.png` | `411067a6b7926a` | SOURCE-ONLY / provenance required |
| 180 | `__docs__/design-components/assets/text-field/states-6.png` | `9a7c3e32864d23` | SOURCE-ONLY / provenance required |
| 181 | `__docs__/design-components/assets/text-field/states-7.png` | `116bfd716f059b` | SOURCE-ONLY / provenance required |
| 182 | `__docs__/design-components/assets/text-field/text-field.png` | `61f9f09e8663bf` | SOURCE-ONLY / provenance required |
| 183 | `__docs__/design-components/assets/toasts/copy-1.png` | `0db047666492d1` | SOURCE-ONLY / provenance required |
| 184 | `__docs__/design-components/assets/toasts/copy-2.png` | `cc63264ef97ead` | SOURCE-ONLY / provenance required |
| 185 | `__docs__/design-components/assets/toasts/copy-3.png` | `2dddb4551b539d` | SOURCE-ONLY / provenance required |
| 186 | `__docs__/design-components/assets/toasts/copy-4.png` | `dc164eb2fd6213` | SOURCE-ONLY / provenance required |
| 187 | `__docs__/design-components/assets/toasts/interaction-1.png` | `ae161569e046e0` | SOURCE-ONLY / provenance required |
| 188 | `__docs__/design-components/assets/toasts/interaction-2.png` | `8eee88fdf35b32` | SOURCE-ONLY / provenance required |
| 189 | `__docs__/design-components/assets/toasts/interaction-3.png` | `7c7552ab453e70` | SOURCE-ONLY / provenance required |
| 190 | `__docs__/design-components/assets/toasts/interaction-4.png` | `767f9a318ed238` | SOURCE-ONLY / provenance required |
| 191 | `__docs__/design-components/assets/toasts/placement-1.png` | `c2db03bffebc23` | SOURCE-ONLY / provenance required |
| 192 | `__docs__/design-components/assets/toasts/placement-2.png` | `3389610da7254f` | SOURCE-ONLY / provenance required |
| 193 | `__docs__/design-components/assets/toasts/states.png` | `520fd35c6d134e` | SOURCE-ONLY / provenance required |
| 194 | `__docs__/design-components/assets/toasts/toasts.png` | `cdc01a62095e6f` | SOURCE-ONLY / provenance required |
| 195 | `__docs__/design-components/assets/toasts/variants-1.png` | `6c10b92fcf9bbf` | SOURCE-ONLY / provenance required |
| 196 | `__docs__/design-components/assets/toasts/variants-2.png` | `7dc3b34c1c499c` | SOURCE-ONLY / provenance required |
| 197 | `__docs__/design-components/assets/toasts/variants-3.png` | `44b9d64b6535c6` | SOURCE-ONLY / provenance required |
| 198 | `__docs__/design-components/assets/toggle/clear-filters.png` | `f02c1cf1704d69` | SOURCE-ONLY / provenance required |
| 199 | `__docs__/design-components/assets/toggle/copy.png` | `a3b7cd033a438b` | SOURCE-ONLY / provenance required |
| 200 | `__docs__/design-components/assets/toggle/filter-modal-badge.png` | `64000639b1122c` | SOURCE-ONLY / provenance required |
| 201 | `__docs__/design-components/assets/toggle/interaction-1.png` | `aaefcf50ee4b50` | SOURCE-ONLY / provenance required |
| 202 | `__docs__/design-components/assets/toggle/interaction-2-do.png` | `dec7918bf0f847` | SOURCE-ONLY / provenance required |
| 203 | `__docs__/design-components/assets/toggle/interaction-2-dont.png` | `a60e7af2a13ffa` | SOURCE-ONLY / provenance required |
| 204 | `__docs__/design-components/assets/toggle/placement.png` | `7fbcd4e0ddd1f2` | SOURCE-ONLY / provenance required |
| 205 | `__docs__/design-components/assets/toggle/preferences-copy.png` | `e72822c18f6201` | SOURCE-ONLY / provenance required |
| 206 | `__docs__/design-components/assets/toggle/preferences-interaction.png` | `ef47958955a31b` | SOURCE-ONLY / provenance required |
| 207 | `__docs__/design-components/assets/toggle/preferences-placement.png` | `234c831a7527a1` | SOURCE-ONLY / provenance required |
| 208 | `__docs__/design-components/assets/toggle/toggle.png` | `1a58fbe0d81c56` | SOURCE-ONLY / provenance required |
| 209 | `__docs__/design-components/assets/tooltips/copy.png` | `bef8a697974069` | SOURCE-ONLY / provenance required |
| 210 | `__docs__/design-components/assets/tooltips/interaction.png` | `7baefe888430a2` | SOURCE-ONLY / provenance required |
| 211 | `__docs__/design-components/assets/tooltips/placement-1.png` | `4bac17056f46a2` | SOURCE-ONLY / provenance required |
| 212 | `__docs__/design-components/assets/tooltips/placement-2.png` | `6b0a2daf1af044` | SOURCE-ONLY / provenance required |
| 213 | `__docs__/design-components/assets/tooltips/placement-3.png` | `69dded35b808fa` | SOURCE-ONLY / provenance required |
| 214 | `__docs__/design-components/assets/tooltips/tooltips.png` | `644434d4296f15` | SOURCE-ONLY / provenance required |
| 215 | `__docs__/design-components/assets/trend-charts/container.png` | `90d13a18fc3cc8` | SOURCE-ONLY / provenance required |
| 216 | `__docs__/design-components/assets/trend-charts/header.png` | `74ad90b6e1b305` | SOURCE-ONLY / provenance required |
| 217 | `__docs__/design-foundations/assets/borders-and-dividers/border-colors.png` | `be1650382fcdfd` | SOURCE-ONLY / provenance required |
| 218 | `__docs__/design-foundations/assets/borders-and-dividers/bordered-cells.png` | `f8f9c3d770a7af` | SOURCE-ONLY / provenance required |
| 219 | `__docs__/design-foundations/assets/borders-and-dividers/default-border.png` | `4b8dc5814863f3` | SOURCE-ONLY / provenance required |
| 220 | `__docs__/design-foundations/assets/borders-and-dividers/focus-border.png` | `0c1640d3d5d52e` | SOURCE-ONLY / provenance required |
| 221 | `__docs__/design-foundations/assets/borders-and-dividers/header-footer-dividers.png` | `f10597a2494352` | SOURCE-ONLY / provenance required |
| 222 | `__docs__/design-foundations/assets/borders-and-dividers/header.png` | `3909df7c76278d` | SOURCE-ONLY / provenance required |
| 223 | `__docs__/design-foundations/assets/borders-and-dividers/line-dividers.png` | `c60c5fe2151664` | SOURCE-ONLY / provenance required |
| 224 | `__docs__/design-foundations/assets/borders-and-dividers/section-dividers.png` | `4b0293962b09fc` | SOURCE-ONLY / provenance required |
| 225 | `__docs__/design-foundations/assets/borders-and-dividers/state-card.png` | `c42d7d58c6e2b9` | SOURCE-ONLY / provenance required |
| 226 | `__docs__/design-foundations/assets/borders-and-dividers/state-inputs.png` | `727448cdca540b` | SOURCE-ONLY / provenance required |
| 227 | `__docs__/design-foundations/assets/borders-and-dividers/subtle-border.png` | `39012be3b39f81` | SOURCE-ONLY / provenance required |
| 228 | `__docs__/design-foundations/assets/borders-and-dividers/table-dividers.png` | `911d36c02f0310` | SOURCE-ONLY / provenance required |
| 229 | `__docs__/design-foundations/assets/colors/accessible-pairings.png` | `56a16cea4c3efa` | SOURCE-ONLY / provenance required |
| 230 | `__docs__/design-foundations/assets/colors/colors.png` | `df78d2ee00369a` | SOURCE-ONLY / provenance required |
| 231 | `__docs__/design-foundations/assets/colors/primitives-grid.png` | `2f75a0291c6442` | SOURCE-ONLY / provenance required |
| 232 | `__docs__/design-foundations/assets/colors/semantic-tokens-hero.png` | `b3b925f81f2cbc` | SOURCE-ONLY / provenance required |
| 233 | `__docs__/design-foundations/assets/colors/semantic-tokens.png` | `2266c0c3d6a539` | SOURCE-ONLY / provenance required |
| 234 | `__docs__/design-foundations/assets/data-visualization/header.png` | `13e4e421884432` | SOURCE-ONLY / provenance required |
| 235 | `__docs__/design-foundations/assets/iconography/icon-library.png` | `ae5d4f81e22eb0` | SOURCE-ONLY / provenance required |
| 236 | `__docs__/design-foundations/assets/iconography/iconography.png` | `b3dc7449db369c` | SOURCE-ONLY / provenance required |
| 237 | `__docs__/design-foundations/assets/iconography/usage-guidelines-1.png` | `5ddde451f3e1a4` | SOURCE-ONLY / provenance required |
| 238 | `__docs__/design-foundations/assets/iconography/usage-guidelines-2.png` | `80490285d5989f` | SOURCE-ONLY / provenance required |
| 239 | `__docs__/design-foundations/assets/iconography/usage-guidelines-3.png` | `891d3f05e01165` | SOURCE-ONLY / provenance required |
| 240 | `__docs__/design-foundations/assets/illustration/types-of-illustration-2.png` | `9d51ad4028c785` | SOURCE-ONLY / provenance required |
| 241 | `__docs__/design-foundations/assets/illustration/types-of-illustration-3.png` | `4524482bc5040b` | SOURCE-ONLY / provenance required |
| 242 | `__docs__/design-foundations/assets/illustration/types-of-illustration-4.png` | `3106664189ab26` | SOURCE-ONLY / provenance required |
| 243 | `__docs__/design-foundations/assets/illustration/types-of-illustration-5.png` | `1363aa2010823e` | SOURCE-ONLY / provenance required |
| 244 | `__docs__/design-foundations/assets/layout/header.png` | `d28b20c3e24038` | SOURCE-ONLY / provenance required |
| 245 | `__docs__/design-foundations/assets/layout/job.png` | `76bd4840e415d8` | SOURCE-ONLY / provenance required |
| 246 | `__docs__/design-foundations/assets/layout/learning.png` | `117c98f62546e7` | SOURCE-ONLY / provenance required |
| 247 | `__docs__/design-foundations/assets/layout/onboarding.png` | `37b779c46c50da` | SOURCE-ONLY / provenance required |
| 248 | `__docs__/design-foundations/assets/layout/settings.png` | `33402bfa32e560` | SOURCE-ONLY / provenance required |
| 249 | `__docs__/design-foundations/assets/motion/exceptions-1.png` | `ca3bad901a24eb` | SOURCE-ONLY / provenance required |
| 250 | `__docs__/design-foundations/assets/motion/exceptions-2.png` | `2b67084cd9462d` | SOURCE-ONLY / provenance required |
| 251 | `__docs__/design-foundations/assets/motion/motion.png` | `ccd36c0b2e2d59` | SOURCE-ONLY / provenance required |
| 252 | `__docs__/design-foundations/assets/motion/usage-guidelines-1.png` | `38862df9f3b1fe` | SOURCE-ONLY / provenance required |
| 253 | `__docs__/design-foundations/assets/motion/usage-guidelines-2.png` | `0361cbde5519a2` | SOURCE-ONLY / provenance required |
| 254 | `__docs__/design-foundations/assets/motion/usage-guidelines-3.png` | `94f2017faab721` | SOURCE-ONLY / provenance required |
| 255 | `__docs__/design-foundations/assets/motion/usage-guidelines-4.png` | `c2a6d9ababe89e` | SOURCE-ONLY / provenance required |
| 256 | `__docs__/design-foundations/assets/spacing/scale.png` | `199b41022cec91` | SOURCE-ONLY / provenance required |
| 257 | `__docs__/design-foundations/assets/spacing/spacing-examples-1.png` | `417ea08481c5fa` | SOURCE-ONLY / provenance required |
| 258 | `__docs__/design-foundations/assets/spacing/spacing-examples-2.png` | `19fa35d312d994` | SOURCE-ONLY / provenance required |
| 259 | `__docs__/design-foundations/assets/spacing/spacing-examples-3.png` | `ec8bbb6de53aa2` | SOURCE-ONLY / provenance required |
| 260 | `__docs__/design-foundations/assets/spacing/spacing.png` | `c2d862abb09fde` | SOURCE-ONLY / provenance required |
| 261 | `__docs__/design-foundations/assets/spacing/types-of-spacing-1.png` | `5dd5ba157b04df` | SOURCE-ONLY / provenance required |
| 262 | `__docs__/design-foundations/assets/spacing/types-of-spacing-2.png` | `ac414f766f3151` | SOURCE-ONLY / provenance required |
| 263 | `__docs__/design-foundations/assets/spacing/types-of-spacing-3.png` | `093968a41488ce` | SOURCE-ONLY / provenance required |
| 264 | `__docs__/design-foundations/assets/surfaces-and-elevations/combinations.png` | `bf3ea8721306ea` | SOURCE-ONLY / provenance required |
| 265 | `__docs__/design-foundations/assets/surfaces-and-elevations/elevation-base.png` | `30a30daab14946` | SOURCE-ONLY / provenance required |
| 266 | `__docs__/design-foundations/assets/surfaces-and-elevations/elevation-high.png` | `175888054877af` | SOURCE-ONLY / provenance required |
| 267 | `__docs__/design-foundations/assets/surfaces-and-elevations/elevation-low.png` | `7ff1292d3aa756` | SOURCE-ONLY / provenance required |
| 268 | `__docs__/design-foundations/assets/surfaces-and-elevations/elevation-mid.png` | `bbb57cb47b6c7b` | SOURCE-ONLY / provenance required |
| 269 | `__docs__/design-foundations/assets/surfaces-and-elevations/elevation-overview.png` | `c15ed7290e5662` | SOURCE-ONLY / provenance required |
| 270 | `__docs__/design-foundations/assets/surfaces-and-elevations/surface-1.png` | `319f7b300ac329` | SOURCE-ONLY / provenance required |
| 271 | `__docs__/design-foundations/assets/surfaces-and-elevations/surface-2.png` | `c1820c2cd73dff` | SOURCE-ONLY / provenance required |
| 272 | `__docs__/design-foundations/assets/surfaces-and-elevations/surface-3.png` | `11173ef266026b` | SOURCE-ONLY / provenance required |
| 273 | `__docs__/design-foundations/assets/surfaces-and-elevations/surface-scrim.png` | `68bb024a04d56d` | SOURCE-ONLY / provenance required |
| 274 | `__docs__/design-foundations/assets/surfaces-and-elevations/surfaces-and-elevations.png` | `f8ade7d17c555b` | SOURCE-ONLY / provenance required |
| 275 | `__docs__/design-foundations/assets/surfaces-and-elevations/surfaces-overview.png` | `c3cf49e2f166c9` | SOURCE-ONLY / provenance required |
| 276 | `__docs__/design-foundations/assets/surfaces-and-elevations/usage-low-at-rest-v3.png` | `48fa93500c262a` | SOURCE-ONLY / provenance required |
| 277 | `__docs__/design-foundations/assets/surfaces-and-elevations/usage-page-level.png` | `4e6eddb8a04bdc` | SOURCE-ONLY / provenance required |
| 278 | `__docs__/design-foundations/assets/surfaces-and-elevations/usage-scrim-high.png` | `b8c66b8a0da752` | SOURCE-ONLY / provenance required |
| 279 | `__docs__/design-foundations/assets/surfaces-and-elevations/usage-surface-base.png` | `e5a1d82e4e2e08` | SOURCE-ONLY / provenance required |
| 280 | `__docs__/design-patterns/assets/collecting-feedback/feedback-open-widget.png` | `9b16a4037eba72` | SOURCE-ONLY / provenance required |
| 281 | `__docs__/design-patterns/assets/collecting-feedback/feedback-trigger-general.png` | `f7b51a63072b71` | SOURCE-ONLY / provenance required |
| 282 | `__docs__/design-patterns/assets/collecting-feedback/feedback-trigger-opinion.png` | `d2c52712f4fe86` | SOURCE-ONLY / provenance required |
| 283 | `__docs__/design-patterns/assets/collecting-feedback/hero-collecting-feedback.png` | `305b46050e7c21` | SOURCE-ONLY / provenance required |
| 284 | `__docs__/design-patterns/assets/data-reports/empty-container.png` | `df836f5cfc69d5` | SOURCE-ONLY / provenance required |
| 285 | `__docs__/design-patterns/assets/data-reports/empty-page.png` | `93bf343ea069e6` | SOURCE-ONLY / provenance required |
| 286 | `__docs__/design-patterns/assets/data-reports/error-container.png` | `d2bb97721b890e` | SOURCE-ONLY / provenance required |
| 287 | `__docs__/design-patterns/assets/data-reports/error-page-load.png` | `4af5a39ba06e87` | SOURCE-ONLY / provenance required |
| 288 | `__docs__/design-patterns/assets/data-reports/error-page-update.png` | `5cb5cf6d2c0d7d` | SOURCE-ONLY / provenance required |
| 289 | `__docs__/design-patterns/assets/data-reports/filtered-container.png` | `963c57e45f01a3` | SOURCE-ONLY / provenance required |
| 290 | `__docs__/design-patterns/assets/data-reports/filtered-page.png` | `63e158ed858858` | SOURCE-ONLY / provenance required |
| 291 | `__docs__/design-patterns/assets/data-reports/header.png` | `6e0631d3d8de25` | SOURCE-ONLY / provenance required |
| 292 | `__docs__/design-patterns/assets/data-reports/own-section.png` | `d3b3254868ec95` | SOURCE-ONLY / provenance required |
| 293 | `__docs__/design-patterns/assets/filter-and-sort/dependent-filters-1.png` | `a066fba4a34586` | SOURCE-ONLY / provenance required |
| 294 | `__docs__/design-patterns/assets/filter-and-sort/dependent-filters-2.png` | `73bb7773d8fbd4` | SOURCE-ONLY / provenance required |
| 295 | `__docs__/design-patterns/assets/filter-and-sort/filter-and-sort.png` | `7a4eceaa59a9e4` | SOURCE-ONLY / provenance required |
| 296 | `__docs__/design-patterns/assets/filter-and-sort/logic-framework-how-they-play-together-1.png` | `8c091467754a0e` | SOURCE-ONLY / provenance required |
| 297 | `__docs__/design-patterns/assets/filter-and-sort/logic-framework-how-they-play-together-10.png` | `9b046fbee55f5c` | SOURCE-ONLY / provenance required |
| 298 | `__docs__/design-patterns/assets/filter-and-sort/logic-framework-how-they-play-together-2.png` | `9235bf09dc2a67` | SOURCE-ONLY / provenance required |
| 299 | `__docs__/design-patterns/assets/filter-and-sort/logic-framework-how-they-play-together-3.png` | `ee604b3a61d226` | SOURCE-ONLY / provenance required |
| 300 | `__docs__/design-patterns/assets/filter-and-sort/logic-framework-how-they-play-together-4.png` | `27a79fa9e3fb26` | SOURCE-ONLY / provenance required |
| 301 | `__docs__/design-patterns/assets/filter-and-sort/logic-framework-how-they-play-together-5.png` | `18ab2b7630eee4` | SOURCE-ONLY / provenance required |
| 302 | `__docs__/design-patterns/assets/filter-and-sort/logic-framework-how-they-play-together-6.png` | `c7ecc390cca032` | SOURCE-ONLY / provenance required |
| 303 | `__docs__/design-patterns/assets/filter-and-sort/logic-framework-how-they-play-together-7.png` | `79c91b9433f9aa` | SOURCE-ONLY / provenance required |
| 304 | `__docs__/design-patterns/assets/filter-and-sort/logic-framework-how-they-play-together-8.png` | `8f2310cdda1ee3` | SOURCE-ONLY / provenance required |
| 305 | `__docs__/design-patterns/assets/filter-and-sort/logic-framework-how-they-play-together-9.png` | `8f2310cdda1ee3` | SOURCE-ONLY / provenance required |
| 306 | `__docs__/design-patterns/assets/onboarding-and-setup/activation-1.png` | `fe86cd2d3c03dd` | SOURCE-ONLY / provenance required |
| 307 | `__docs__/design-patterns/assets/onboarding-and-setup/activation-2.png` | `44038075318713` | SOURCE-ONLY / provenance required |
| 308 | `__docs__/design-patterns/assets/onboarding-and-setup/collecting-info-1.png` | `a4b901ce02a792` | SOURCE-ONLY / provenance required |
| 309 | `__docs__/design-patterns/assets/onboarding-and-setup/collecting-info-2.png` | `8a8b094c9d1d08` | SOURCE-ONLY / provenance required |
| 310 | `__docs__/design-patterns/assets/onboarding-and-setup/logic-framework-how-they-play-together-10.png` | `8ed71d2ae62aa1` | SOURCE-ONLY / provenance required |
| 311 | `__docs__/design-patterns/assets/onboarding-and-setup/logic-framework-how-they-play-together-5.png` | `2e9f363a661b16` | SOURCE-ONLY / provenance required |
| 312 | `__docs__/design-patterns/assets/onboarding-and-setup/logic-framework-how-they-play-together-6.png` | `ad231c89647386` | SOURCE-ONLY / provenance required |
| 313 | `__docs__/design-patterns/assets/onboarding-and-setup/logic-framework-how-they-play-together-7.png` | `5e35e23850b280` | SOURCE-ONLY / provenance required |
| 314 | `__docs__/design-patterns/assets/onboarding-and-setup/logic-framework-how-they-play-together-8.png` | `4c660660e85b6e` | SOURCE-ONLY / provenance required |
| 315 | `__docs__/design-patterns/assets/onboarding-and-setup/logic-framework-how-they-play-together-9.png` | `a57d597f0203ad` | SOURCE-ONLY / provenance required |
| 316 | `__docs__/design-patterns/assets/onboarding-and-setup/onboarding-and-setup.png` | `8c10f7d1f6b241` | SOURCE-ONLY / provenance required |

## Exact font inventory (30 verified Git blobs; NO binary file contents)

| # | Source font path | Git blob SHA prefix | Future transfer disposition |
| ---: | --- | --- | --- |
| 1 | `static/fonts/arabic/NotoNaskhArabic-Regular.woff2` | `e3722361c5fec3` | Exclude from app transfer pending license and need |
| 2 | `static/fonts/arabic/NotoSansArabic-Black.woff2` | `88ae54a6a2eaf8` | Exclude from app transfer pending license and need |
| 3 | `static/fonts/arabic/NotoSansArabic-Bold.woff2` | `35b13d3d74d802` | Exclude from app transfer pending license and need |
| 4 | `static/fonts/arabic/NotoSansArabic-Regular.woff2` | `08698dd4d7be62` | Exclude from app transfer pending license and need |
| 5 | `static/fonts/armenian/NotoSansArmenian-Black.woff2` | `d639cd310e7089` | Exclude from app transfer pending license and need |
| 6 | `static/fonts/armenian/NotoSansArmenian-Bold.woff2` | `c5c3e29548a582` | Exclude from app transfer pending license and need |
| 7 | `static/fonts/armenian/NotoSansArmenian-Regular.woff2` | `25d80968758af4` | Exclude from app transfer pending license and need |
| 8 | `static/fonts/armenian/NotoSerifArmenian-Regular.woff2` | `c0b2ee3d2221f6` | Exclude from app transfer pending license and need |
| 9 | `static/fonts/greek/NotoSans-Black.woff2` | `9ba3645dd75302` | Exclude from app transfer pending license and need |
| 10 | `static/fonts/greek/NotoSans-Bold.woff2` | `e5f17bfce7d08d` | Exclude from app transfer pending license and need |
| 11 | `static/fonts/greek/NotoSans-Regular.woff2` | `cfcb10f160c4c7` | Exclude from app transfer pending license and need |
| 12 | `static/fonts/greek/NotoSerif-Regular.woff2` | `52c6474efd7e09` | Exclude from app transfer pending license and need |
| 13 | `static/fonts/hebrew/NotoSansHebrew-Black.woff2` | `c43fda9591c295` | Exclude from app transfer pending license and need |
| 14 | `static/fonts/hebrew/NotoSansHebrew-Bold.woff2` | `b40e8c3b37b04e` | Exclude from app transfer pending license and need |
| 15 | `static/fonts/hebrew/NotoSansHebrew-Regular.woff2` | `d80fa264fcd7a3` | Exclude from app transfer pending license and need |
| 16 | `static/fonts/hebrew/NotoSerifHebrew-Regular.woff2` | `b16bcae71dc043` | Exclude from app transfer pending license and need |
| 17 | `static/fonts/jakarta-sans/PlusJakartaSans-Italic-VariableFont_wght.woff2` | `f1f5cd16f90f42` | Exclude from app transfer pending license and need |
| 18 | `static/fonts/jakarta-sans/PlusJakartaSans-VariableFont_wght.woff2` | `09000abdfac299` | Exclude from app transfer pending license and need |
| 19 | `static/fonts/lato/Lato-Black.woff2` | `37a5749e407069` | Exclude from app transfer pending license and need |
| 20 | `static/fonts/lato/Lato-Bold.woff2` | `c9f92ef3c1fccd` | Exclude from app transfer pending license and need |
| 21 | `static/fonts/lato/Lato-Italic.woff2` | `19a47c90591202` | Exclude from app transfer pending license and need |
| 22 | `static/fonts/lato/Lato-Regular.woff2` | `70171778ad5557` | Exclude from app transfer pending license and need |
| 23 | `static/fonts/lato/LatoLatin-Black.woff2` | `4127b4d0b9f097` | Exclude from app transfer pending license and need |
| 24 | `static/fonts/lato/LatoLatin-Bold.woff2` | `2615c853d5a448` | Exclude from app transfer pending license and need |
| 25 | `static/fonts/lato/LatoLatin-Italic.woff2` | `aaa5a35c3dad00` | Exclude from app transfer pending license and need |
| 26 | `static/fonts/lato/LatoLatin-Regular.woff2` | `a4d084bfb7a5f3` | Exclude from app transfer pending license and need |
| 27 | `static/fonts/lato/LatoLatinExtended-Black.woff2` | `43d862b8f8a5e2` | Exclude from app transfer pending license and need |
| 28 | `static/fonts/lato/LatoLatinExtended-Bold.woff2` | `e78612f9497359` | Exclude from app transfer pending license and need |
| 29 | `static/fonts/lato/LatoLatinExtended-Italic.woff2` | `58d8579f32172a` | Exclude from app transfer pending license and need |
| 30 | `static/fonts/lato/LatoLatinExtended-Regular.woff2` | `39f33b85ee1200` | Exclude from app transfer pending license and need |

## Acceptance and scope

This manifest is a quarantined **source inventory**, not a missing design file or new HSK AI media library. A future copy must account for any selected visual in the **44/44 professional guideline review**, use only documented rights-cleared HSK-owned or licensed assets, and keep unrelated source-brand dependencies out of the application. **No files are added to HSK-AI-Bot here.**
