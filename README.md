# HSK AI Design System

**Design guidelines for HSK AI's iPhone PWA and native Android.**

This is a Storybook documentation project, not the application itself and not a production component library. For Codex or other code agents, **read [AGENTS.md](AGENTS.md) first**. The former Khan Academy product rules do not apply to HSK AI.

## What is authoritative

- **HSK AI-specific design guidance:** `__docs__/` and especially [Typography](__docs__/design-foundations/typography.mdx), [Illustration](__docs__/design-foundations/illustration.mdx), [HSK AI characters](__docs__/design-components/hsk-ai-characters.mdx), [Layout](__docs__/design-foundations/layout.mdx).
- **Actual currently implemented app behavior (read-only reference during guideline work):** [HSK-AI-Bot](https://github.com/akbarholturaev11-lang/HSK-AI-Bot), current `main`. Do not assume any guideline is implemented until validated in the real platform.
- **Technical authoring rules:** [HSK AI documentation skill](.claude/skills/dsg-creation/SKILL.md). It describes how to author MDX, **not** which HSK AI features to implement.

## Scope

Mobile learning experience, verified Hanzi and pinyin, localized translation and HSK course structure, actual Panda/side-character correct-and-incorrect feedback, red pearlescent AI Voice Orb, accessible controls, server-verified account/payment states and authorized analytics.

Long **optional** descriptions are clamped to a maximum of **two rendered lines**; a **top-right ⌄ / ⌃ icon only** reveals the entire explanation inline. Do not hide questions, answers, payment terms, required notices or learner input.

## Documentation development

Use the repository's current `package.json` scripts:

```sh
pnpm install --frozen-lockfile
pnpm check:docs
pnpm start
pnpm typecheck
pnpm build
```

Build requirements and package versions are defined in `package.json`. Some `@khanacademy/wonder-blocks-*` dependencies and legacy theme names are still required by the **documentation renderer**; they do not authorize porting those UI components, scoring, school workflows, Gems or mascots into HSK AI. Dependency replacement requires an isolated tested migration, not blind deletion.

**Validation status:** The presence of a file or commit is not evidence that Storybook currently compiles. A full build and device visual check must be run separately.

## Design-site identity and verification evidence

- Storybook now uses the **exact canonical HSK AI Chinese-knot SVG** from `HSK-AI-Bot/branding/hsk-ai-logo.svg` (product blob SHA `171a49f9093367cc88d3a81b83133a85e8bb4be9`), including its favicon and documentation chrome. This is not a new or generated Panda/logo design.
- The Storybook **chrome** uses verified HSK AI brand colors: documented cinnabar-gradient end `#C02F32` for accessible light-theme links and the current PWA dark-theme accent `#20BCEB`. The rendered *example components* still depend on historical Wonder Blocks theme mechanisms and must not be mistaken for actual HSK AI theme screenshots.
- Mobile documentation preview presets now include **320 px, 375 px and 412 px**. A preset is not evidence that the page has been visually tested at that width.
- The new `pnpm check:docs` command is a dependency-free **static integrity check** of MDX metadata IDs, relative imports, `img` alt attributes and local Storybook page links. It is part of PR build-check CI, alongside the existing `pnpm typecheck` and `pnpm build`; none of these replace manual mobile/keyboard/accessibility testing.
- The full historic 45-page source reconciliation and live-code follow-up are documented under `docs/audits/`. **The current recovery PR remains draft** because source-illustration redistribution rights and real green build/CI/visual evidence have not yet been established.
- `chromatic.yml` does not publish a **draft PR**, preventing the unreviewed restoration images from being automatically uploaded to a preview host. The branch must not be promoted or merged until the release gates are evidenced.

**Important:** GitHub workflow configuration files alone cannot prove that GitHub Actions is enabled or running. Check actual run and job results before claiming CI passed.
