# External design-guidelines provenance and reuse-rights verification — 2026-11-15

**Scope:** ownership and distribution gates for making a professional design-guideline corpus the primary HSK AI documentation. This is source evidence, **not legal advice**; absence of a declared license is not permission to copy or proof no private license exists.

## GitHub repository facts verified through the GitHub API (2026-11-15)

- Upstream source project: [`Khan/design-system-guidelines`](https://github.com/Khan/design-system-guidelines) — publicly accessible repository, `main` default branch. GitHub repository metadata's `license` field is **null** at verification.
- The upstream repository root content listing showed **no `LICENSE`, `COPYING`, or `NOTICE` file** (the latter absent from the full root list). Direct GitHub REST reads of `/contents/LICENSE` and `/contents/COPYING` returned **404**.
- A distinct project, [`Khan/wonder-blocks`](https://github.com/Khan/wonder-blocks), **does** declare an **MIT license** in GitHub repository metadata. That license is **specific to that other repository**, not automatic permission to redistribute the design-system-guidelines pages, screenshots, examples, typography/art assets or characters.
- Khan Academy's [official re-use guidance](https://support.khanacademy.org/hc/en-us/articles/202262954-Can-I-use-Khan-Academy-s-videos-name-materials-links-in-my-project) distinguishes licensed videos/exercises, noncommercial conditions and brand use; it does **not** provide an explicit blanket license to reuse the `design-system-guidelines` repo's professional MDX text, UI examples and PNG figures in a commercial HSK AI app.
- Khan Academy's [Terms of Service](https://www.khanacademy.org/about/docs/khan-academy-terms-of-service) discuss protected visual interfaces, graphics, code and materials. These terms and the particular repository license status need appropriately scoped legal review before redistribution.

**Practical result: do not infer that public GitHub access permits inclusion in a separate commercial application's source or public Storybook site.**

## Risk classification for current design repo

| Source | Verified source status | Current internal treatment | Future HSK product target |
| --- | --- | --- | --- |
| Transferable professional UX patterns and public facts | Concepts such as hierarchy, contrast and responsive design are useful; exact wording may be protected | Preserve professional **reasoning and facts** | Express in independent, original HSK AI language, with distinct HSK examples |
| 44 source MDX pages | Recovered from/derived from upstream professional guidelines, license not established | Remain a source reference in existing design repo | **Do not transfer verbatim until authorized**; rewrite with same detailed decision coverage |
| 44 `docs/portable/guidelines/*.md` internal Markdown review copies | Portable syntax but **substantial original source prose retained** | **INTERNAL DRAFT ONLY**; do not call them rights-cleared | Reauthor the prose with original HSK AI expression before copying into HSK-AI-Bot |
| 298 historical image placements, 316 PNG source blobs | No generalized permission established | Text descriptions and source paths, original binaries quarantined | Create rights-cleared HSK AI-native diagrams or obtain explicit license; preserve precise layout/anatomy |
| 29 interactive demo blocks from vendor JSX | Source UI demo details documented in [live-demo semantics audit](LIVE_DEMO_SEMANTICS_AUDIT.md) | Semantic metadata only, no vendor component runtime in portable docs | Original HSK-specific visual examples with authentic functionality and sample-only data |
| 30 bundled font binaries | No license-by-file verified here | Inventory only; no user sharing or product copy | Prefer supported native system fonts; add any font only after license and specific need |
| Phosphor check-circle reference in banner demo | Separate upstream package glyph, not an original historical PNG | Semantic role recorded without importing SVG | Use correctly licensed, approved Phosphor icon package only if needed and consistent with HSK icons |

## What would close the rights gate

1. Obtain an explicit applicable license/permission covering the precise source text, code examples, screenshots, asset reuse and intended commercial redistribution, **or** independently reauthor the 44 guides and create original diagrams based on general design principles, with no vendor content/mascots copied.
2. For each final HSK Markdown guide, compare against the **professional decision checklist**, not by copying exact sentences: when/why, form/anatomy, sizing/proportion, states, loading/errors, interaction, data truth, localization, responsive, accessible focus/reduced motion, HSK-specific minimal exception.
3. Add a provenance/permission status to any media used; no unknown-rights PNG/font enters `HSK-AI-Bot`.
4. Only then certify the final **rights-cleared** product-repository transfer. The HSK AI app's real PWA/Android code remains out of scope.

## Important state distinction

- **DONE:** internally useful, standalone syntax review copies exist for 44/44 guideline pages, plus complete source asset and demo inventories.
- **NOT DONE:** independent rights-cleared prose/figures and full visual parity audit. Do not merge the reference images or portable verbatim drafts into HSK AI main.
- **NOT DONE:** any HSK-AI-Bot file change or application UI/UX redesign.
