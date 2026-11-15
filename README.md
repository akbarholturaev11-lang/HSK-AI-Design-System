# HSK AI Design System

**Design guidelines for HSK AI's iPhone PWA and native Android.**

This is a Storybook documentation project, not the application itself and not a production component library. For Codex or other code agents, **read [AGENTS.md](AGENTS.md) first**. The former Khan Academy product rules do not apply to HSK AI.

## Governing decision: professional design first

**Professional UI/UX rules are the target standard, not the current appearance of the app.** Keep transferable professional design decisions, including small anatomy/state/spacing/interaction details. Apply only minimal, evidenced HSK AI compatibility adaptations for **actual function, backend data and permissions, brand identity, Chinese learning correctness, accessibility, and iPhone PWA/Android platform behavior**. Existing visual implementation does **not** have blanket authority to override the professional design.

Read [Professional-first decision contract](DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md) before any new guideline or later UI implementation. Treat historical source illustrations as design evidence with unresolved asset rights, not a license to re-publish artwork. Preserve a rule as reference-only when the corresponding HSK AI feature does not yet exist rather than erasing the professional solution.

**Phase boundary:** complete the design-system rule adaptation first. Only afterward, under a **separate task**, audit and bring each real HSK AI PWA/Android UI screen into alignment with this design standard; do not change product code in the present phase.

## What is authoritative

- **HSK AI-specific design guidance:** `__docs__/` and especially [Typography](__docs__/design-foundations/typography.mdx), [Illustration](__docs__/design-foundations/illustration.mdx), [HSK AI characters](__docs__/design-components/hsk-ai-characters.mdx), [Layout](__docs__/design-foundations/layout.mdx).
- **Actual currently implemented app behavior (read-only reference during guideline work):** [HSK-AI-Bot](https://github.com/akbarholturaev11-lang/HSK-AI-Bot), current `main`. Do not assume any guideline is implemented until validated in the real platform.
- **Technical authoring rules:** [HSK AI documentation skill](.claude/skills/dsg-creation/SKILL.md). It describes how to author MDX, **not** which HSK AI features to implement.

## Scope

Mobile learning experience, verified Hanzi and pinyin, localized translation and HSK course structure, actual Panda/side-character correct-and-incorrect feedback, red pearlescent AI Voice Orb, accessible controls, server-verified account/payment states and authorized analytics.

Long **optional** descriptions are clamped to a maximum of **two rendered lines**; a **top-right ⌄ / ⌃ icon only** reveals the entire explanation inline. Do not hide questions, answers, payment terms, required notices or learner input.

## Preparing to become the main HSK AI design system

The intended outcome is a **full, no-omission transfer of professional guidelines** into the HSK AI product repository as the **top-level UI/UX decision authority**—not a new app, not a code refactor, and not a blind merge of third-party Storybook tools.

- [44-page standalone Markdown review edition](docs/portable/README.md) and [first-pass migration readiness audit](docs/audits/portable-rulebook-migration-readiness-2026-11-15.md) — one independent, source-SHA-pinned draft per professional guideline, with figure references and no Storybook runtime dependency.
- [44-page source/transfer catalog](docs/migration/TRANSFER_CATALOG.md) — tracked filenames, Git blob identities, intended target paths and 298 historical figure placements plus one Phosphor SVG demo import.
- [Upstream text/art rights verification](docs/migration/UPSTREAM_RIGHTS_VERIFICATION_2026-11-15.md) and [29-demo semantic audit](docs/migration/LIVE_DEMO_SEMANTICS_AUDIT.md) — no automatic license from the upstream repository or its separate component packages.
- [316-image / 30-font asset quarantine](docs/migration/ASSET_AND_RUNTIME_INVENTORY.md) — verified source path and SHA inventory, no blind binary copying.
- [Verified conflicts with existing HSK AI rules](docs/migration/CONFLICT_REGISTER.md) — especially the **one-line vs two-line** disclosure and **existing-style vs professional-design precedence** discrepancies.
- [Copy-ready authority insertion and two-line UI skill replacement](docs/migration/TARGET_AUTHORITY_INSERT.md) — read and apply **only during the separately authorized repository transfer**.
- [Top-level transfer status](MIGRATION_TO_HSK_AI.md) — what is actually prepared and what still cannot be claimed complete.

**Important:** all 44 active source guideline pages exist here as MDX/Storybook **and now have separate portable Markdown review copies**. Some professional reference illustrations are third-party material without confirmed redistribution rights. A truly portable product-repository design corpus must retain every useful rule while removing external runtime dependencies and resolving media provenance. **Neither the product repository nor its PWA/Android screens have been edited as part of this preparation.**

## Documentation development

Use the repository's current `package.json` scripts:

```sh
pnpm install --frozen-lockfile
pnpm start
pnpm typecheck
pnpm build
```

Build requirements and package versions are defined in `package.json`. Some `@khanacademy/wonder-blocks-*` dependencies and legacy theme names are still required by the **documentation renderer**; they do not authorize porting those UI components, scoring, school workflows, Gems or mascots into HSK AI. Dependency replacement requires an isolated tested migration, not blind deletion.

**Scope:** this phase validates professional design **decisions and text**, not deployed Storybook or production HSK AI UI. A build/device check belongs to an eventual site publication or separate PWA/Android implementation phase.

## Design-site identity and verification evidence

- Storybook now uses the **exact canonical HSK AI Chinese-knot SVG** from `HSK-AI-Bot/branding/hsk-ai-logo.svg` (product blob SHA `171a49f9093367cc88d3a81b83133a85e8bb4be9`), including its favicon and documentation chrome. This is not a new or generated Panda/logo design.
- The Storybook **chrome** uses verified HSK AI brand colors: documented cinnabar-gradient end `#C02F32` for accessible light-theme links and the current PWA dark-theme accent `#20BCEB`. The rendered *example components* still depend on historical Wonder Blocks theme mechanisms and must not be mistaken for actual HSK AI theme screenshots.
- Mobile documentation preview presets now include **320 px, 375 px and 412 px**. A preset is not evidence that the page has been visually tested at that width.
- The full historic 45-page source reconciliation and follow-up are documented under `docs/audits/`. The **professional design-decision adaptation can be reviewed as documentation without app/Storybook tests**. The draft PR remains unmerged; any future publication of third-party illustrations requires separate asset-rights review.
- `chromatic.yml` does not publish a **draft PR**, preventing the unreviewed restoration images from being automatically uploaded to a preview host. The branch must not be promoted or merged until the release gates are evidenced.

**Important:** GitHub workflow configuration files alone cannot prove that GitHub Actions is enabled or running. Check actual run and job results before claiming CI passed.
