---
name: dsg-creation
description: "Create and edit HSK AI's mobile PWA/Android design guidelines without inheriting foreign product requirements."
user-invokable: true
allowed-tools: Read, Write, Edit, Bash, Glob, Grep, Agent, AskUserQuestion
---

# HSK AI Design Guidelines — authoring skill

**Mandatory first step:** read repository-root `AGENTS.md`. That is the canonical HSK AI product and agent contract. This skill provides **technical MDX/Storybook authoring conventions only**; it does not make the documentation site's inherited packages into HSK AI app requirements.

## Research before editing

1. Read the relevant existing `__docs__/` page and the HSK AI-specific foundation or component it links to.
2. When a rule mentions implemented app behavior, inspect the **read-only** HSK AI product repository `akbarholturaev11-lang/HSK-AI-Bot`, current `main`. Product behavior and source files may change.
3. Distinguish **implemented behavior** from **target guideline**. Do not imply a new feature exists.
4. Remove leftover foreign-brand rules instead of placing an HSK AI note above a contradictory old demand. Strip Khan Academy school/district, Khanmigo, Khanductor, Gems, former scoring thresholds, and fake ownership from the active guideline. Preserve the underlying generic professional interaction only when still applicable.
5. Protect Hanzi/pinyin/translation correctness, Panda/side-character identity, AI Voice Orb and platform-specific PWA/Android interactions. Do not edit application code from this repository.

## Document organization

- Foundations: `__docs__/design-foundations/`
- Components: `__docs__/design-components/`
- Patterns: `__docs__/design-patterns/`
- Components are grouped into additional Storybook subcategories through `<Meta title="Design Guidelines / Components / …" />`.
- Put actual pages in `.mdx`; work-in-progress drafts can use `.draft` so Storybook's `.mdx` glob does not publish them.
- Use sentence-case page titles, meaningful top-level headings and short sections. A self-contained decision table often beats a long paragraph.
- For a component explain **when to use**, **when not**, **states/variants**, **mobile placement**, **accessible input and focus**, **localization** and **error/retry behavior** as relevant.
- For a foundation explain role, purpose, real HSK AI tokens/constraints and documented implementation boundary. Do not copy unverified role taxonomies from foreign design systems.

## Existing MDX authoring helpers

These helpers support the docs site's rendering; their names and runtime packages do not define HSK AI's app-level component library.

- `import {Do, Dont, UsageExample} from "../components/DoDont";` — accessible guidance and examples.
- `import Demo from "../components/Demo";` — live documentation-only examples.
- `import Figure from "../components/Figure";` — image with meaningful caption. Avoid source-product screenshots when they would imply unsupported functionality.
- `import Principle, {PrincipleSet} from "../components/principle";` — foundation cards.
- See `references/component-catalog.md` for helper API signatures; use it **only** as documentation authoring guidance.

Accessibility meaning must never depend on color or unlabeled icon alone. Explicitly write `Don't` in prose after a `<Dont />` marker so an LLM or screen reader cannot interpret a forbidden action as a positive instruction.

## Assets and demos

- Bundle docs screenshots through imports: `import exampleImg from "./assets/<page>/example.png";` and `<img src={exampleImg} alt="Descriptive content" />`. No broken imports or unused image variables.
- Prefer **current approved HSK AI assets**. A legacy source figure can be retained **only** if it communicates a useful generic structural idea and cannot be misconstrued as the HSK AI interface. Never reintroduce foreign character rules.
- UI demo source may depend on `@khanacademy/wonder-blocks-*` for documentation rendering. Such packages **must not** be prescribed to HSK AI PWA/Android. Keep them only until a real, tested Storybook replacement exists.
- Use the actual HSK AI semantic theme, not a remembered source library's palette.
- For larger page demos use a colocated TypeScript component in `__docs__/design-<section>/assets/<page>/`; small demos can remain inline.
- Make sure images, code samples, alt text and instructions do not advertise unimplemented app features.

## Links

- Internal Storybook pages: `<a href="./?path=/docs/<storybook-id>--docs">Text</a>`.
- Same-page anchors: `[Section](#section)`.
- External third-party sites that disallow framing: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Text</a>`.
- Link only to **current HSK AI** pages/resources as authoritative. Never present a historical Khan Academy MCP host, design URL, old Storybook build or foreign team as official HSK AI infrastructure.

## Required validation

1. Confirm every imported image/demo exists and every imported symbol is used. Check no former Khanmigo/Khanductor/Gems page is linked as HSK AI policy.
2. Check MDX syntax, Storybook page IDs, internal anchors and the visible fallback when an illustration or custom font is absent.
3. Review iPhone PWA/Android differences, localization and accessibility, including safe-area and keyboard behavior.
4. For collapsible **optional** descriptions: maximum **two fully visible** collapsed lines, only a **top-right ⌄/⌃ icon**, accessible invisible label, in-place full expansion and collapse. Never collapse critical content.
5. When tooling is available, run `pnpm typecheck`, `pnpm build` and a Storybook/mobile viewport review. Do **not** claim a build or device test passed unless it ran.
6. Keep a focused changelog or commit description and avoid touching the production HSK AI code in a documentation-only task.

## Ship

Follow the branch and merge instructions of the user or repository owner. Never import upstream Khan Academy branch policies or direct-push prohibitions as HSK AI governance without confirming them.
