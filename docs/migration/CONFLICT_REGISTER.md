# HSK AI main-repository migration — verified conflict register

**State:** This is a current **read-only comparison** of two existing repositories. No product file is edited by this register.
**Design source:** `akbarholturaev11-lang/HSK-AI-Design-System`, branch `restore/hsk-ai-professional-unified-audit-20261115`. The owner-approved decisions file Git blob is `f679725a5e69ca9e2de85438e57a413aedc8142f` (unchanged).
**Destination as inspected:** `akbarholturaev11-lang/HSK-AI-Bot`, `main` SHA `839bdebb6d4b41ec2015ec734bc75faefa8eee17`.
**Verification method:** directly fetched both repositories' named files and trees, not generated UI assumptions. Before a future merge, re-fetch current main and resolve new conflicts by observed evidence.

## C-05 image-selection decision superseding blanket exclusion

The owner clarified: **no public publication, but YES to transferring useful professional reference visuals when they are not actual screens of another application**. An abstract component/spacing/variant/state illustration is an asset to **retain**, not a copyright/publication task to erase or redraw by default. By contrast, actual foreign-app screens, school/Gems workflows and proprietary product brand presentation are **excluded**. Review the actual image bytes and explain its role rather than treating the source's entire 316-PNG inventory as prohibited. The [visual selection manifest](VISUAL_REFERENCE_SELECTION.md) records the first eight direct inspections (six useful schematic samples, two foreign screens); remaining assets need review.

This **supersedes the older blanket “do not move unverified PNG” implication** in C-05; continue to avoid false assertions about source permission, but **do not make an imagined public release, hundreds of screenshot recreations or Storybook CI mandatory** for internal design-rule preparation. Canonical HSK colors, approved spacing and brand identity are not overwritten by upstream example colors.

## Critical conflicts to resolve before the design system becomes authoritative

### C-01 — Two-line vs one-line disclosure: CONFIRMED, must replace old instruction

- **Design owner decision:** `DESIGN_SYSTEM_APPROVED_DECISIONS_AND_RESTORATION_TASKS.md`, "Узун матн — қатъий қоида", and `__docs__/design-foundations/typography.mdx` use **at most TWO fully visible rendered lines** for **optional supporting explanations**, plus a small **top-right ⌄/⌃ icon-only control**. No visible extra label; expanded text is entirely visible in place, and the up-chevron remains available. Do not truncate required text, questions, answers, Hanzi/pinyin/meaning, entered text, prices, limitations, safety notices or required recovery information.
- **Current target contradiction:** `.agents/skills/hsk-ai-ui/SKILL.md`, under `## One-Line Expandable Text — UI/UX standard` (source lines 143–155), states **"at most one rendered text line"**, ellipsis and "tap text or chevron" at the right edge. The title and links in sections **4** and **8** also reference this old one-line pattern.
- **Mandatory future resolution:** on transfer, replace the one-line section and all references, not just append a contradictory paragraph. New authoritative section must use the exact approved two-line/upper-right behavior, collapsed-layout overflow detection, accessible icon-only button and preserve-open toggle. Align Admin PWA styling **only after** a separate implementation review; current Admin PWA `foldHints` behavior is not authorization to override the newer owner decision. **Do not change Admin PWA UI now.**
- **Evidence level:** conflicting text confirmed by GitHub source reads; app's current runtime visuals or affected screen counts are **not** established by this documentation audit.

### C-02 — Current HSK AI visual style vs professional design target: CONFIRMED policy tension

- **Current target:** `.agents/skills/hsk-ai-ui/SKILL.md`, section 6: "Reuse established HSK AI colors, typography, spacing, radii, icon style and existing component patterns instead of inventing new variants on every screen."
- **Professional-first decision:** `DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md`, `AGENTS.md`, and current relevant `__docs__/` pages: **transferable professional visual design takes precedence over incidental existing app appearance**. Preserve verified brand identity, functional behavior, learner correctness, accessible and server states, but consider weaker current radii, border arrangements, hierarchy and layouts as **future redesign targets**, not mandatory final visuals.
- **Mandatory future resolution:** rewrite the target's style-reuse instruction as **"reuse current components/tokens where they meet the professional target; otherwise record and implement a controlled improvement in a separate app task"**. Do NOT delete the target skill's useful constraints against needless backplates, nested cards, duplicate actions, losing drafts, fake loading or navigation jumps. They are compatible with professional design when correctly applied.
- **Evidence level:** document-to-document text conflict, **not** proof of any individual visual defect in a particular rendered screen.

### C-03 — Multiple rule owners and agent entrypoint: CONFIRMED structural risk

- **Current target:** HSK main root `AGENTS.md` and `AI_RULES.md` govern product, auth, payments, performance, localization, CI and branch policy; `.agents/skills/hsk-ai-ui/SKILL.md` governs existing learner UI. `HSK_AI_UI_UX_IMPROVEMENTS.md` is also a substantial active **plan**, not a fully shipped implementation.
- **Risk:** copying this separate repository's `AGENTS.md` over the product's existing `AGENTS.md` would destroy unrelated product safety/engineering instructions. Copying a new `SKILL.md` without correcting the old UI skill would create competing rules.
- **Mandatory future resolution:** **append/merge one succinct authoritative design pointer** in HSK root `AGENTS.md`, preserve all existing product directives, and reconcile the existing UI skill in situ. Route agents from root to `docs/design-system/README.md`, then `PROFESSIONAL_FIRST_CONTRACT.md`, `APPROVED_DECISIONS.md`, and the relevant guideline page. Treat the product's user-approved feature plans as constraints on scope/function, not a license to override design quality. Do not replace the root file wholesale.

### C-04 — Storybook/MDX with foreign rendering packages: CONFIRMED packaging risk

- **Design source:** 44 active MDX pages; **299 visual import declarations (298 figure placements and one Phosphor SVG icon)**, many JSX/Storybook components (`<Meta>`, `<Demo>`, `<Do>`, `<Dont>`) and imported vendor runtime packages such as `@khanacademy/wonder-blocks-*`.
- **Target:** HSK product uses its own PWA CSS and native Android Compose design components; it is not the historical Storybook renderer.
- **Mandatory future resolution:** deliver 44 complete, portable guideline pages under `docs/design-system/guidelines/`, with **no active JSX imports, Storybook route assumptions or vendor-runner requirements**. Convert structured illustrative content to safe, readable markdown/examples and preserve every professional rationale and detail. Maintain source-file SHA traceability. Do not move package manager config or the original UI renderer into the product root, or force Wonder Blocks into PWA/Android.
- **Evidence level:** Git-tree and source-page reads; **44 internal portable review drafts have now been created** at `docs/portable/guidelines/`, but rights/figure parity and final target acceptance are **not** complete.

### C-05 — External images and font redistribution: CONFIRMED unresolved provenance

- **Design source Git tree:** **316 PNG** + **30 font files**; exact historical 73 restored third-party PNGs were tracked separately. The design repository has **no established global license clearance** for these inherited files.
- **Risk:** source artwork might carry a vendor logo, school screenshot or licensed illustration. Tracked assets and public visibility do not establish rights to republish them in HSK AI.
- **Mandatory future resolution:** **do not move unverified PNG/font binaries as HSK-branded product assets**; retain exact source title/figure/geometry description in the guideline, replace with HSK-owned original visuals or verifiably rights-cleared material. Preserve fine-grained information despite removing an image. A technical sample image is never a product component.
- **Evidence level:** exact file and historical audit counts; actual legal license grants have not been confirmed.

### C-06 — Owner decisions, native navigation and canonical character fidelity: PRESERVE, NOT a design downgrade

- **Current target contracts:** `AGENTS.md`, `.agents/skills/hsk-ai-ui/SKILL.md`, current HSK UI and server truth.
- **Hard constraints:** iPhone PWA + native Android only; authentic HSK logo, Panda/Longlong/Hehe/Wuwu/Yueyue and **both** correct/incorrect answer reactions; red pearlescent Voice Orb, safe-area/keyboard, genuine learning and payment outcomes; genuine user data; localized Hanzi/pinyin/meaning; 4-unit spacing and appropriate tap areas; server authority and permissions.
- **Future decision:** these constrain **function and identity**, not the professional layout, typography, scale, elevation, icon optical alignment or feedback design. No cloned Panda or other vendor's characters. A designed state is not an implemented feature.

### C-07 — Source plans versus shipped functionality: CONFIRMED status boundary

- **Current target file:** `HSK_AI_UI_UX_IMPROVEMENTS.md` contains numerous explicitly future UIUX plans (e.g. Unified Header, progress, dictionary, onboarding, AI Voice, checkout) and separate pending dependencies.
- **Risk:** treating a plan or design-page demo as a shipped feature leads to invented controls, incorrect analytics or payment claims.
- **Future rule:** classify **verified currently shipped / owner-approved proposal / reusable professional reference** separately. Before any later UI/UX implementation, re-audit the target's latest code and plans; this migration makes only documentation authoritative, not plans magically completed.

### C-08 — Design branch vs design main: CONFIRMED source-of-truth mismatch

- **Current design source:** professional restoration on `restore/hsk-ai-professional-unified-audit-20261115`, in **draft PR #4**. Design repository `main` still points to `007c5c474909d81208483772f3c24cf7e656d55e` at this audit.
- **Risk:** migrating from the design repo's `main` now would omit the newer professional-first decisions and reviewed recovered details.
- **Future resolution:** pin the **exact reviewed branch commit** in the transfer catalog, revalidate it at transfer time, and use only the finally approved source version. Do not equate draft PR or text completeness with source-image rights clearance.

### C-09 — Historical external Figma link is reference, NOT app instruction

- **Source:** `__docs__/design-patterns/filter-and-sort.mdx` has an external Figma prototype explicitly labeled "**Original source demonstration (not HSK AI interface)**".
- **Future resolution:** keep the professional filter interaction specifications in text; the linked vendor prototype must not become an HSK AI design authority or mandatory deploy dependency. Prefer internally documented screenshots/diagrams when rights-cleared.

## Decision precedence for future migration

1. Product safety, permissions, truthful data/server results, Chinese learning correctness, accessibility and official HSK brand/characters/Voice Orb remain mandatory.
2. **Professional full-detail design standard wins visual/UX disagreements** with current UI implementations, except for a specifically documented hard constraint.
3. HSK product's technical styling today is an inventory; minor design exceptions must specify evidence, exact limiting factor, and retained professional details.
4. A non-shipped feature can be documented as a professional pattern but cannot be surfaced as an operational HSK AI feature.
5. External screenshots, package names, unlicensed graphics and historical school workflows have no normative authority.

## Acceptance / unresolved items

| Gate | Current status | Requirement |
| --- | --- | --- |
| 44-page professional-rule corpus and approved owner decisions inventoried | 44 source pages + 44 initial standalone Markdown drafts VERIFIED | Manual micro-detail/figure parity and original wording clearance still required |
| Explicit priority contract inside design source | WRITTEN | Must be merged into HSK root agent routing at later approved transfer |
| C-01 one-line conflict | OPEN in destination | Replace old instruction, not merely add another |
| C-02 existing-style priority conflict | OPEN in destination | Existing target skill must defer aesthetic details to the professional system |
| 298 figure references + one Phosphor SVG demo import; 316 PNG and 30 font files | PROVENANCE / VISUAL PARITY OPEN | Do not blindly include art; retain visual logic in rights-cleared original text/schematics |
| Product code changed | NO | Current scope is preparation only |
| Branch readiness and HSK main adoption | NOT TRANSFERRED | Explicit separate future migration operation |
