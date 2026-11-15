# HSK AI Design System — agent instructions

This repository documents **HSK AI** UI/UX rules. It is not the source code for the HSK AI application and is not an instruction to ship features. These rules override any inherited wording in Storybook dependencies, source-illustration metadata, example code and development tooling.

## DESIGN DECISION PRECEDENCE — PROFESSIONAL-FIRST (MANDATORY)

**Goal:** preserve the complete, precise and rigorous professional visual/interaction system as the **default target design** for HSK AI. The current app is an **implementation baseline and a source of functional facts**, NOT a visual or UX ceiling. Do not dilute, drop, flatten or replace professional design anatomy, proportions, spacing rhythm, content hierarchy, states, animation guidance, control placement or interaction details merely because the present HSK AI screen differs.

Apply this exact precedence when two statements appear to conflict:

1. **Hard constraints:** user safety, rights to assets, accessibility, verified Chinese-learning correctness, privacy/account/data authorization, server-verified state, platform capabilities and the HSK AI canonical brand/characters/Voice Orb. These cannot be falsified or broken.
2. **Professional design decision (default and preferred):** the rigorously documented design-system rule for component anatomy, sizing/density, hierarchy, states/variants, feedback, transitions, iconography, focus, responsive composition, chart meaning, empty/loading/error states, concise copy and micro-interactions. **Choose this over incidental present-day HSK AI styling.**
3. **Existing HSK AI function is a compatibility constraint, not an aesthetic veto:** map the professional rule onto the feature, actual data, user permissions, supported locales, iPhone PWA and Android. Preserve functional outcomes, not historic visual debt. If the feature is absent, keep the professional rule documented as a **future design reference**; do not claim or invent the feature in production.
4. **Screenshots and demo/renderer code are evidence or illustrations, not authority:** foreign-product branding, school policies, reward economies, source-specific assets/SDKs and ownership restrictions have no normative force in HSK AI. Extract the transferable *design reasoning*, including its fine-grained specifications, without transplanting the foreign product.

**Do not interpret “keep existing HSK AI style” as preserving an inferior layout, color contrast, shape, density, spacing, navigation affordance or feedback treatment.** Real brand identity stays, but its visual application can be elevated using the professional system. Token names and platform APIs are implementation facts, not mandatory final design choices. An existing flawed UI should be marked **current / to improve**, not canonized. Where a professional example uses a source-exclusive feature, preserve its underlying component pattern and label the example **reference only**, rather than deleting the professional rule.

### Fidelity and exceptions

- Preserve **all transferable detail**, not only a one-paragraph summary: when-to-use / when-not-to-use; anatomy and hierarchy; geometry, spacing and alignment; states, actions and gestures; visual emphasis; responsive behavior; text/translation expansion; loading, empty, error, retry and success; focus, screen reader, reduced motion; non-destructive dismissal; text and data integrity. Record concrete numbers only when grounded by the professional source, an approved HSK AI decision, or actual verified code. Mark examples/heuristics rather than inventing global specifications.
- For every exception, write **professional default → exact HSK AI functional/brand constraint → minimal justified adaptation → retained detail → current vs target status**. No unqualified "not applicable", "keep current", or feature omission that silently deletes the professional decision.
- **Avoid full-screen redesign now.** This repository only establishes and reconciles guidelines. The **next, separately scoped phase** is a screen-by-screen audit and implementation of HSK AI PWA/Android UI/UX against these guidelines, retaining underlying workflows, data contracts, business logic and rollout safety. Do not touch the production app during design-documentation work.
- Read [Professional-first decision contract](DESIGN_SYSTEM_PROFESSIONAL_FIRST_CONTRACT.md) and the [source reconciliation matrix](docs/audits/professional-rules-source-to-hsk-ai-matrix-2026-11-15.md) before proposing deviations.

## Only authoritative product scope

- Products: **iPhone PWA and native Android**, with consistent user intent, platform-appropriate navigation, safe areas, keyboard and accessibility behavior.
- Product source of truth (READ-ONLY while working here): `akbarholturaev11-lang/HSK-AI-Bot`, current `main`. Verify a claimed feature against the actual platform-specific implementation, then document **observed behavior** separately from **proposed design**.
- Chinese study: Hanzi (汉字), tone-marked pinyin (拼音), meaning/translation in the chosen supported language, correct HSK level and exercise reveal logic. Do not expose a hidden answer, invent scores or silently alter pronunciation.
- HSK AI canonical characters: Panda, Dragon (Longlong), Crane (Hehe), Monkey (Wuwu), Rabbit (Yueyue), with existing right/wrong feedback. AI Voice has its own red pearlescent Orb. Use real product assets and current code, **never** another company's mascot or a generated replacement.
- Account and payment state is server-authoritative. Do not invent Pro, renewal, onboarding, install detection, analytics or feedback behavior.
- Follow HSK AI's actual semantic colors, themes, typography and component patterns. Existing UI values may need design improvement; they are not automatically approved target specifications.

## Foreign design-system content is NOT product policy

- **Do not follow, recommend, implement or copy** Khan Academy / Khanmigo / Khanductor, Gems, school districts, classroom assignments, teacher/admin school workflows, Wonder Blocks product semantics, Khan score thresholds, or the original source's theme and character exclusivity rules.
- Source illustration files or generic Wonder Blocks demo components, if still required to render the documentation site, are **non-authoritative design examples only**. Do not derive HSK AI functionality, branding, accessibility behavior, color tokens or product UI from them.
- The `@khanacademy/wonder-blocks-*` packages are currently **documentation site's technical rendering dependencies**, not the HSK AI app's design system. Do not use them as implementation requirements. Do not remove working dependencies without a tested replacement.
- Old external MCP endpoints, former Khan URLs, example school credentials and references to a foreign `Design Infra` team are **not official HSK AI services or owners**.
- Do not bring back historical mascot pages, Gems policies, or upstream branding from git history unless the user explicitly asks to compare historical sources.

## Essential interface rules

- Keep the primary learning task visible, with accurate instructions, localized labels, accessible focus, and feedback for **both** correct and incorrect answers. Distinguish learner app from authorized admin analytics.
- Long **optional supporting explanations only** may collapse. Collapsed: **MAXIMUM TWO fully visible rendered lines**, no third-line fragment. A small **⌄ / ⌃** chevron at the **top-right corner**, without a visible text label, controls in-place expansion; expanded text remains fully visible and the ⌃ control remains available. Use a screen-reader name, correct button semantics and adequate tap target. **Never** collapse lesson questions, answer choices, required Hanzi/pinyin/meaning, user input, payment terms, limits, safety warnings or blocking errors. Re-evaluate overflow using the collapsed layout on resize, localization or text scaling.
- Do not claim submission, save, purchase, lesson completion or feedback is successful before the verified backend result.
- Preserve user drafts, data ownership, reduced-motion preferences and actual PWA/Android feature distinctions. A design guideline must not silently modify production code.

## Documentation work and verification

1. Read this file, then the relevant current `__docs__/` page and the HSK AI app sources when product behavior is relevant.
2. Reuse meaningful generic professional principles, but **rewrite or delete foreign-brand rules, role names, unsupported examples, links and active instructions**. Never leave contradictory upstream mandates for Codex to choose between.
3. Distinguish the feature **implemented now** from a **proposed requirement**. Never call screenshot or demo content a verified product feature.
4. Preserve helpful generic diagram logic where it does not mislead, but remove obsolete product-specific pages and source branding after adaptation. All remaining imported assets must exist, be used and have meaningful, non-misleading alt text.
5. Check MDX syntax, links, imported assets, mobile behavior and accessibility. When a real build/CI or visual test was not run, say so explicitly.
6. This repository does not authorize edits to `HSK-AI-Bot`. Make application changes only under a separate explicit task.
