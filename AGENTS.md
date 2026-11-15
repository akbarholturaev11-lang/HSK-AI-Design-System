# HSK AI Design System — agent instructions

This repository documents **HSK AI** UI/UX rules. It is not the source code for the HSK AI application and is not an instruction to ship features. These rules override any inherited wording in Storybook dependencies, source-illustration metadata, example code and development tooling.

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
