# HSK AI — portable professional design rules: first-pass audit and remaining gates

**Checked 2026-11-15.** Source design branch head before this audit `f3040e814708b9b6aa3e1c324340a9bf5ffa30df`; target product `HSK-AI-Bot/main` was `839bdebb6d4b41ec2015ec734bc75faefa8eee17`. This report does not change either repository's main branch or the application.

## Verdict (do not conflate the two statuses)

| Deliverable | Status | Evidence and boundary |
| --- | --- | --- |
| Readable **standalone Markdown draft for all 44 active professional MDX pages** | ✅ **CREATED: 44/44** | `docs/portable/guidelines/` under this design branch; 11 foundations, 27 components, 5 patterns, 1 introduction; **461,083 Git tree source bytes** across these 44 portable Markdown blobs |
| Documentation entrypoint / links to 44 pages | ✅ **CREATED** | `docs/portable/README.md`; intended HSK target paths still in transfer catalog |
| Source-page section headings | ✅ **PRESERVED IN FIRST-PASS CONVERSION** | Conversion explicitly compared source and generated counts of Markdown `#`–`####` heading lines for **each of 44 pages**; no mismatch occurred |
| Portable markdown internal file links | ✅ **BASIC PATH INSPECTION** | Read all 44 generated docs in four 11-page groups and compared relative `.md` links against the current Git tree: no unresolved **file path** links found. This does not validate every section anchor or external historical prototype |
| Storybook/React JSX remnants in portable docs | ✅ **BASIC STATIC INSPECTION** | Inspected all 44 for raw HTML/JSX-style tags and source JSX `onClick`/`style=`/`src={` fragments; no matches in the bounded inspection. A full Markdown renderer or interaction test was **not** run, nor required for current design-priority decisions |
| Historical media preservation | 🔶 **TRACEABLE, NOT REDRAWN** | **298** source figure placements represented with in-context source path plus figure alt/caption notes. Source tree has **316 PNG** and **30 font binaries**, neither copied into the portable docs |
| Source visual imports | ✅ **EXACT COUNT RECONCILED** | **299** visual import declarations: **298 placed figures + one imported `@phosphor-icons/core` check-circle SVG** in the Banners demo; there are **39 image-bearing** and 5 image-free guideline pages |
| Interactive source demo semantics | 🔶 **TEXTUALLY DOCUMENTED, NOT REBUILT** | **29 vendor JSX demo blocks**: 12 Buttons and 17 Banners. Variant/action/dismiss/disabled/size states inventoried at `docs/migration/LIVE_DEMO_SEMANTICS_AUDIT.md`, not reproduced as working samples |
| Professional design first / HSK AI minimal adaptations | ✅ **SOURCE AUTHORITY RULES WRITTEN** | Root `AGENTS.md`, `DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md`, 44 source guideline pages and authoring rules; existing HSK brand/auth/data/function safety overrides only where a precise factual conflict exists |
| Original source prose / third-party diagrams redistribution | ⛔ **RIGHTS NOT CLEARED** | Original public `Khan/design-system-guidelines` GitHub repo currently reports `license:null`, with no root LICENSE/COPYING; `Khan/wonder-blocks` MIT is a separate project. **Portable drafts retain some historical text verbatim and are INTERNAL ONLY.** See rights verification report |
| HSK product primary-agent installation | ⛔ **NOT APPLIED** | Confirmed existing target UI skill still contains **one-line** disclosure and overly strong current-style reuse; documented replace-in-place instructions but did not edit product |
| HSK production UI/UX implementation and testing | ⛔ **NOT STARTED** | Owner asked for documentation readiness only. HSK app `main` unchanged; no PWA/Android code, CI, purchase, account, lesson, voice, analytics or monitoring change |

## Per-component fidelity and licensing gate

### G1 — Detail-preserving original HSK AI wording (pending)

The 44 markdown pages are **first-pass internal working copies**, not final legally reusable rewritten docs. They inherit professional source wording. If no explicit license is secured, rewrite **each document** with independently authored HSK AI language, avoiding verbatim text and unsupported external-product claims. For every page compare the original **decision list** and keep each transferable why/when/anatomy/geometry/hierarchy/state/transition/focus/localization/responsive/error/data truth/contrast micro-detail.

Do not reduce the professional design to generic slogans or claim a source screenshot is a product feature. Distinguish **existing functionality / owner-approved goal / professional reference-only**.

### G2 — Detailed figure geometry and diagram parity (pending)

All 298 placements have original source asset pointers and source alt/caption in their nearest section. Many original `alt` values are generic (e.g., "Variants 1", "States 4"); an alt-only note is **NOT an adequate visual substitute**. Open the actual source **as a reference**, extract its specific anatomy, spacing, hierarchy, arrows, variant relationships and state intent, then create an independently owned HSK AI schematic or write a fully specified visual account. No borrowed vendor screenshot/illustration/mascot or unverified font should be pushed into the product.

Use [exact all-assets Git SHA inventory](../migration/ASSET_AND_RUNTIME_INVENTORY.md), [source-to-product matrix](professional-rules-source-to-hsk-ai-matrix-2026-11-15.md), [recovered-material register](deleted-material-item-audit-2026-11-15.md) and the [29-demo semantic audit](../migration/LIVE_DEMO_SEMANTICS_AUDIT.md).

### G3 — Reconcile HSK product rules during a later docs-only integration (prepared, not applied)

- Add a **pointer** to the product's existing root `AGENTS.md`. Never replace its safety, Git, localization, auth, payments, analytics or monitoring contracts.
- Edit the existing `.agents/skills/hsk-ai-ui/SKILL.md` **in place** to direct UI/UX work to the complete professional guidelines. Replace its legacy one-line expandable text with approved **two complete lines + top-right ⌄/⌃** rule, rather than leaving conflicting instructions.
- Professional design wins visual disagreements with incidental current UI. Real function/data/security/brand/native capabilities stay as strict exceptions; do not invent a new feature simply because a reference demo shows it.
- Do not transfer Storybook, vendor packages, third-party logo/assets, fonts, CI workflows or source code to HSK runtime by default.

## Technical checks vs real design readiness

A successful Markdown syntax/reference check **does not** prove visual fidelity, text licensing, icon design quality or true responsive behavior. Neither does a source image present in Git grant reuse permission. Conversely, lack of PWA/Android build/device tests is **not** the reason the document set remains draft; this task does **not** modify the application.

## Exact review entrypoints

- [44 guideline docs](../portable/README.md)
- [Professional-first rule contract](../../DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md)
- [Owner-approved protected decisions](../../DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md)
- [44 exact source-to-target file transfers](../migration/TRANSFER_CATALOG.md)
- [Verified target contradictions and minimal patches](../migration/CONFLICT_REGISTER.md)
- [Target AGENTS + existing UI skill insertion guide](../migration/TARGET_AUTHORITY_INSERT.md)
- [Upstream license / rights evidence](../migration/UPSTREAM_RIGHTS_VERIFICATION_2026-11-15.md)
- [Primary handoff](../../MIGRATION_TO_HSK_AI.md)

**Correct completion phrasing:** "First-pass portable professional rules: 44/44 created and statically inventoried. Full, rights-cleared visual/prose parity and product-repository authority integration: NOT YET COMPLETE." The design-system `main`, the product `main` and PR draft state are to be reverified at each future transfer attempt.
