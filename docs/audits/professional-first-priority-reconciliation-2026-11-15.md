# Professional-first HSK AI design — priority and micro-detail reconciliation

**Date:** 2026-11-15. **Scope:** design-system source and guidelines only, on branch `restore/hsk-ai-professional-unified-audit-20261115`. This is a **qualitative documentation audit**; it neither tests nor modifies HSK AI application code. The 45-page historical source SHA matrix remains a prior-snapshot record.

## Decision now adopted

The professional source's **transferable visual and behavioral system is the target design** for HSK AI. HSK AI's deployed UI **is not a binding aesthetic specification**. Verified business logic, authorized data, native/PWA features, real brand art, Chinese-language correctness, accessibility, user privacy and platform constraints remain binding. A conflict must be solved with the narrowest exception so all other professional details survive.

The normative authority is `AGENTS.md`, `DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md`, `.claude/skills/dsg-creation/SKILL.md`, and the current relevant MDX page. Owner-approved decisions in `DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md` were not modified.

## Concrete observed corrections made to the current guideline pages

| File | Previously misleading guidance observed | Professional target now explicit | Functional/brand exception kept |
| --- | --- | --- | --- |
| `design-components/buttons.mdx` | "Keep the approved HSK AI mobile interface"; reuse existing button components could freeze weaker visuals | Professional primary/secondary/tertiary composition, button anatomy, weight, state and spacing is target | Actual HSK AI button actions, 4-unit spacing, PWA/Android hit targets, own icons |
| `design-components/dropdown-select.mdx` | "Use existing HSK AI component style" and existing sheet visuals | Professional selection layout, option hierarchy, focus, commit and cancellation semantics wins | Only real selectable options and valid mobile modality |
| `design-components/modals.mdx` | Existing centered-dialog and bottom-sheet appearance treated as binding | Professional overlay anatomy, content priority, geometry, elevation, adaptive placement, focus and scrim | Never discard lessons, bypass payments or fake confirmation |
| `design-components/progress-stepper.mdx` | Existing onboarding layout, stepper positioning and navigation visuals protected | Professional visual sequence, stable placement, rhythm, compact labels and meaningful state | Only actually ordered onboarding steps; authentic Panda; platform flow |
| `design-foundations/layout.mdx` | Existing bottom navigation and mobile layout could be read as immutable design | Professional six-task-layout hierarchy, rhythm, density and navigation affordance prioritized | Real navigation destinations, lesson content and safe-area behavior |
| `design-foundations/iconography.mdx` | "Existing icons are not replaced" could prohibit future visual improvement | Coherent professional generic Phosphor icon grammar, optical sizing and consistency remains future target | Official character/brand/Voice Orb art not replaced; no bulk production change now |
| `design-foundations/surfaces-and-elevations.mdx` | Existing base and low surface treatments prioritized | Professional task surface/card distinction, elevation, backgrounds, scrim and depth hierarchy | Use genuine platform/modal behavior and verified tokens/proposed roles |
| `design-components/text-field.mdx` | "Use existing HSK AI mobile UI" could dictate field style | Full professional label/assistive/error geometry, focus, typography, state model | Current validated fields, Chinese/locale input and backend validation |
| `design-components/popovers.mdx` | Existing mobile sheet/dialog appearance used as substitute standard | Professional anchored placement, flip rules, dismiss behavior, focus and space-aware responsive alternatives | Use a real available feature and actual functional state; no phantom popover shipping |
| `design-patterns/component-composition-and-customization.mdx` | Existing components preferred unconditionally | Reuse only if the component meets the professional specification; otherwise record later redesign | No product-code refactor in docs phase; preserve existing actions/state contracts |
| `design-foundations/colors.mdx` | Existing palette/tokens described as authority without a clear design-vs-code distinction | Professional semantic mapping, hierarchy, contrast and state roles govern future applications | Official brand roles, two themes, true current token inventory |
| `design-foundations/spacing.mdx` | Existing layout gaps risk becoming final visual specification | Professional composition/rhythm implemented using approved 4-unit scale, not historical one-off gaps | Platform-specific px/dp, text scaling, current formal token names where supported |
| `design-foundations/data-visualization.mdx` | Only current HSK AI charts and token roles could be interpreted as entire design library | All professional chart interaction, legend, grouping, title, labeling and state specifications retained as future references | No fabricated data, metrics, exports, toggles or new product feature claims |
| `design-components/chart-container.mdx` | "Only include" controls when already implemented could erase component design rules | Always preserve the professional chart-container anatomy and optional control specification in docs | Only render controls to users when the actual app implements and authorizes them |
| `design-patterns/professional-reference-gallery.mdx` | "Only understand a reusable professional principle" might justify dropping visual micro-detail | Spatial hierarchy, alignment, density, affordance and component state details retained as study evidence | No external product branding, unlicensed source art or invented school features |
| `introduction.mdx` | Existing product UI appeared to limit which guidelines may apply | Professional standard is the comparison target; current UI is later redesign baseline | Actual functionality and ownership are verified in app code |
| `AGENTS.md`, authoring skill, `README.md` | Original hierarchy lacked a strong professional-first conflict-resolution rule | Fully explicit authority hierarchy, nontrivial example/exception register and future delivery boundary | Protected owner decisions and product facts remain untouched |

This list is **observed wording repaired**, not a claim that every visual specification is already implemented in production. The unedited pages continue to be governed by the same global contract and by their intact detailed professional rules.

## Required micro-detail preservation before future editing or migration

Each one of the 44 active guideline pages must retain its applicable **why/when**, choices and prohibited uses, content hierarchy, semantic roles, source-grounded geometry, component/state anatomy, disabled/loading/empty/error/success variants, initial/pending/applied semantics, dismissal/back/focus, localization, responsive/safe-area behavior, reduced-motion/accessibility and illustrations' spatial logic. No blanket "use existing HSK AI style" language may cancel any of these.

A precise HSK AI divergence must have: (1) the professional default with evidence, (2) verified product fact/constraint, (3) minimal substitution, (4) details still retained, (5) label of **implemented now / design target / reference-only**, and (6) named PWA/Android screen that would later need work. If evidence is absent, mark **needs verification**, do not invent an "approved" exception.

The following exceptions are valid, **but narrow**:

- Official Chinese-knot logo, five canonical lesson characters and distinct Voice Orb artwork replace foreign branding. Their existence does **not** prevent professional composition, icon balance or micro-interactions.
- Existing course/content logic and real backend/PWA/Android capabilities must be preserved. Their current visual treatments can be improved.
- **4-unit spacing scale**, top-right icon-only **⌄/⌃** and maximum two fully visible lines **for optional supporting descriptions**, PWA >=44 CSS px / Android >=48 dp interactive targets are HSK AI-specific approved constraints, not reasons to lose professional touch/visual geometry.
- Actual learning content preserves Hanzi, marked pinyin, selected-language meaning and true answer-reveal behavior; never blindly transplant another product's grading, teacher/school, Gems or privacy semantics.
- Missing features keep their design guidelines as **reference-only**, never as live controls or fictitious metrics.

## No code-test task in this phase

The earlier experimental `scripts/check-docs.mjs` and its `package.json` / `.github/workflows/build-check.yml` integrations were **withdrawn** after clarifying scope. Those last two files were restored **byte-identically to the current `main` versions**. The old previous audit's description of those experimental steps is therefore historical and **superseded**, not a statement of the branch's present build configuration.

No CI, TypeScript compile, Storybook/browser test or app redesign is required to determine **which design rules should win**. A visual/public Storybook deployment and the later real PWA/Android implementation can carry their own separately scoped tests and image licensing decisions. Historical source illustrations remain reference-only pending verified redistribution permissions.

## Next phase — separate product task

Once the design contract and 44 professional guideline pages are accepted, inspect live `HSK-AI-Bot/main` **screen by screen** (iPhone PWA first and Android with parity review). For each screen document the exact original function, actual business/learning contracts and the **full** difference against the professional standard: hierarchy, type, rhythm, borders/surfaces, buttons, icons, controls, feedback, transitions, empty/error states, locale and device behavior. Then perform a reviewed visual/interaction migration, keeping APIs, backend state and product correctness intact. **No production code has been modified now.**
