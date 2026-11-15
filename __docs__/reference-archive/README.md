# Read-only upstream reference archive (not HSK AI policy)

This folder preserves selected **historical source artifacts** from commit `f5ce49cbc219` so useful design examples and evaluation history are not permanently lost.

- **Do not import or execute** the archived source examples: the original React components hard-code schools, exam scores, Gem rewards, borrowed theme colors and Wonder Blocks logic.
- Files ending in `.tsx.txt`, `.mdx.txt`, `.mjs.txt` or `.json.txt` are **source text archives**, deliberately inactive in Storybook and TypeScript. The archived bytes are restored from the exact Git blob SHA; they are not reinterpreted as product features.
- The HSK AI-only interactive replacements appear in `__docs__/design-components/assets/hsk-reference/HskReferenceDemos.tsx` and are displayed in `__docs__/design-patterns/professional-reference-gallery.mdx`.
- The 73 verified original reference images remain in their historical asset paths for traceability. The curated Storybook gallery marks them as external-source educational references, not approved HSK AI screens.
- This archive is never authoritative over `AGENTS.md`, the adapted design guidelines or the real HSK AI PWA/Android code.
- Do not copy source branding, school workflows, district accounts, Gems, assessment thresholds, character poses or product tokens into production.
- Nothing in this folder changes the working HSK AI application, scoring, lesson progress, XP or analytics.

**Restoration audit**: original `f5ce49c`; affected removal `db65c22`; restoration branch `restore/professional-reference-assets-20261115`. Production work requires separate approval and real mobile tests.
