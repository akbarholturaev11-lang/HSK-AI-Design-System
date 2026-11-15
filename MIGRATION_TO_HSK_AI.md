# HSK AI Design System — transfer-readiness and future primary-authority handoff

**This is the start-here file for the NEXT migration phase.** Work on the design-system source continues in `akbarholturaev11-lang/HSK-AI-Design-System` alone. It is **not** an instruction to run the HSK AI application, change PWA/Android screens or copy files into HSK AI main today.

## The non-negotiable owner goal

**Make the COMPLETE professionally adapted design-guideline corpus the MOST IMPORTANT UI/UX design system in HSK AI.** Every future UI/UX decision should begin with the professional standard and its smallest, evidenced HSK AI-specific exceptions. The current PWA/Android appearance must not lower professional visual quality. Preserve every relevant fine detail: composition, hierarchy, space, geometry, state, responsive motion, accessibility, content truth, interactive behavior and source-grounded examples.

There are **two different kinds of priority**; they must not be confused:

1. **Product safety/identity/function:** real Chinese learning and server truth, permissions, price/Pro/Trial/security, existing real navigation destinations, supported PWA/Android behavior, official Panda and other cast, red Voice Orb, accessibility and specific owner-approved constraints remain binding.
2. **Design quality and interaction specification:** the professionally reconciled system **wins** over accidental current HSK UI styling. Never use "we currently use X" as a reason to discard a stronger professional visual/UX rule. A feature absent from the real app is a *reference only*, not a shipped promise.

## Current verified readiness — precise, no invented completion

| Scope | Verified today | Still needed before transfer |
| --- | --- | --- |
| Design authority and priority | `AGENTS.md`, `DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md`, authoring skill and introduction carry professional-first precedence | Add an **authoritative pointer** to HSK product root AGENTS during a separate transfer |
| Protected owner decisions | `DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md` remains unmodified (Git blob `f679725a5e69ca9e2de85438e57a413aedc8142f`) | Preserve exact decision meaning in product repo, without overwriting other owner rules |
| Source professional corpus | **44 active MDX source pages + 44 standalone Markdown review copies**, indexed at [docs/portable/README.md](docs/portable/README.md). Headings and internal file links checked. | Finish source micro-detail/figure parity review, rights-aware original wording and final acceptance before app transfer |
| Historical visual/source material | **316 PNG**, **30 fonts** and **299 imported visual bindings (298 figure placements + 1 Phosphor SVG icon)**; source archive includes 73 restored historic images | Rights/provenance and exact visual-detail review remain open before any figure, font or verbatim source prose transfer |
| Existing target conflicts | At least **two substantive source-confirmed policy contradictions**: **one-line vs two-line disclosure**, **current-style priority vs professional-first**; see register | Reconcile target existing `.agents/skills/hsk-ai-ui/SKILL.md` at transfer; don't create competing skill |
| Exact transfer inventory | `docs/migration/TRANSFER_CATALOG.md` lists all 44 paths, Git source blobs and intended target paths | Convert, copy and verify paths as a separate expressly authorized operation |
| Target product status | `HSK-AI-Bot/main` inspected **read-only** at SHA `839bdebb6d4b41ec2015ec734bc75faefa8eee17` | Re-check the **latest** HSK main before transfer; never rely on a stale snapshot |
| Code / business logic | HSK app code **NOT EDITED** | None during this documentation-only phase. Later UI implementation has separate scope and testing |

**Do not call the HSK AI product migration complete or fully rights-cleared yet.** All **44 draft portable documents now exist inside the design repository**, but visual/example equivalence, source prose rights, original graphics and target-repository authority wiring still remain open. These are **document transfer** gates, not demands to test PWA/Android now.

## Last targeted documentation consistency scan (source only)

All **44 active MDX pages** were re-read on the source branch in four 11-file groups for direct instructions to **collapse optional text to one rendered line**, to **let existing HSK AI styling override professional design**, or to **keep current visual layout unconditionally**. No matching active instruction was detected by those targeted phrase patterns; one ordinary report-filter sentence about preserving the *current selection* is **user state**, not a styling override. This is a **bounded text-pattern review**, not proof of all semantic contradictions being impossible. The **real confirmed one-line contradiction is in the separate HSK-AI-Bot UI skill**, and it stays open in the conflict register until actual later transfer.

The six pages still byte-identical to the historical MDX baseline — clear filter, date filter, inline filter button, search field, motion and typography — were re-read; they already contain explicit HSK AI-specific sections/rules, so unchanged blob SHA alone does **not** mean "unadapted source policy." Their historical image imports still require the same portable conversion/rights review as other source pages.

## Migration documents — read in this exact order

1. [**Professional-first contract**](DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md) — governs the professional design decisions and minimal HSK adaptation.
2. [**Approved owner decisions**](DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md) — exact protected exceptions; never relax.
3. [**44 standalone Markdown review documents**](docs/portable/README.md) — navigable completed draft corpus with source SHA metadata.
4. [**Exact 44-page transfer catalog**](docs/migration/TRANSFER_CATALOG.md) — every page with its Git SHA, image exposure and planned `docs/design-system/guidelines` path.
5. [**Exact asset quarantine**](docs/migration/ASSET_AND_RUNTIME_INVENTORY.md) — 316 PNG and 30 font paths with source SHA provenance and exclusions.
6. [**Existing HSK conflict register**](docs/migration/CONFLICT_REGISTER.md) — verified line-by-line policy collisions and resolution strategy.
7. [**Ready-to-insert product AGENTS / UI skill instructions**](docs/migration/TARGET_AUTHORITY_INSERT.md) — future safe, minimal authority wiring; not yet applied.
8. [**Source vs HSK historical page audit**](docs/audits/professional-rules-source-to-hsk-ai-matrix-2026-11-15.md) — original 45-page dispositions and rationale.
9. [**Professional-priority wording audit**](docs/audits/professional-first-priority-reconciliation-2026-11-15.md) — previously weaker "keep current visuals" language corrected in guideline pages.

## Correct future integration architecture (not implemented now)

```text
HSK-AI-Bot/                        # existing application and product contracts
├── AGENTS.md                      # existing product instructions + one new pointer
├── AI_RULES.md                    # preserve existing engineering/business rules
├── .agents/skills/hsk-ai-ui/
│   └── SKILL.md                   # reconcile with professional system in place
├── docs/design-system/
│   ├── README.md                  # PRIMARY UI/UX design entrypoint
│   ├── APPROVED_DECISIONS.md      # protected HSK AI owner decisions
│   ├── PROFESSIONAL_FIRST_CONTRACT.md
│   ├── SOURCE_CATALOG.md
│   ├── MIGRATION_CONFLICTS.md
│   └── guidelines/
│       ├── introduction.md
│       ├── design-foundations/     # 11 fully adapted pages
│       ├── design-components/      # 27 fully adapted pages
│       └── design-patterns/        # 5 fully adapted pages
└── app/, android/, backend/...     # UNTOUCHED by docs migration
```

**All 44 first-pass portable Markdown documents now exist**, having removed Storybook JSX and vendor component imports; they are not simple `.mdx` renames. The original *prose* still requires independent intellectual-property/wording review, and the referenced figures still need detailed visual inspection and rights-cleared diagrams before the result can be certified as a finished source-equivalent professional design system. If an illustration teaches exact anatomy, record the geometry/state/reason in text and attach a **rights-cleared** HSK AI-owned diagram later. Do not reuse uncertain source drawings simply because they are useful.

**Never replace the target's root AGENTS file wholesale**. Do not copy Storybook configs, `@khanacademy/wonder-blocks` dependencies, `pnpm-lock.yaml`, vendor font binaries, external school workflows, unrelated `.github` workflows or inactive upstream code into the product runtime. If an optional live docs site is desired later, evaluate and isolate it as an independent tool.

## Readiness/acceptance conditions for the next phase

A design-system transfer may be declared ready to become the top UI/UX authority only when:

- All **44/44** guideline contents are present in clean standalone documentation with **no loss** of source-grounded professional when/why/anatomy/geometry/variants/states/interaction/responsive/accessibility content; map source blobs to destination files and document any justified exception.
- The source owner decisions and real HSK AI product identity are preserved; no vendor school/Gems/assistant roles or copyright-uncleared visuals are promoted into product policy.
- The old `One-Line Expandable Text` requirement is fully replaced with the **approved max-two-full-line + top-right icon-only chevron** rule; there is only **one** authoritative behavior, not dueling instructions.
- HSK's prior "reuse existing style" language is reconciled so professional design wins aesthetic disagreements; verified feature/backend/identity constraints remain.
- The product root AGENTS and current UI skill route all UI/UX work through `docs/design-system/README.md`; links work and no external build library is silently required.
- The final file diff is **documentation and instructions only**; no app, payment, auth, analytics, onboarding, lesson, voice or Android feature code is changed during transfer.
- Do not report an app test result for a docs-only migration. Test actual application screens in the **later, separately scoped screen-by-screen UI/UX implementation phase**.

## Not yet part of this task

**NOT DOING NOW:** touching `HSK-AI-Bot` Git tree; changing its `AGENTS.md` or `SKILL.md`; modifying rendered course/PWA/Android screens; deploying Storybook; installing fonts; copying borrowed imagery; asserting any CSS, business, analytics, payment or app UI migration is already complete.

**Future phase only after canonical documents are integrated:** audit each real screen against the final professional design system and then revise UI/UX in reviewable batches while preserving every implemented function.
