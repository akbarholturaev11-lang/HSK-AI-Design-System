# HSK AI — 31 speed-prompts UI/UX relevance and deduplication audit (2026-11-16)

**External source read in full:** [mrconcol/vibecode-speed-prompts README.md](https://github.com/mrconcol/vibecode-speed-prompts/blob/056026c4e9ff9007049aeba52f248191d1777aa4/README.md), **31 individually numbered prompts**, Git blob `056026c4e9ff9007049aeba52f248191d1777aa4`. The repository's recursive tree contained **only README.md** at this snapshot, so there are no separate prompt files to overlook.

**Compared against:** all **45** Markdown guidelines in `docs/portable/guidelines/` at the HSK AI Design System base `09f95a3a62b1461de3aeb0f06f85864a62650216` (44 professional + 1 HSK AI supplement). Each page was read; existing clauses, not only headings, were checked for overlap.

**Decision policy:** use the professional 45 as the primary authority; the external prompt list is an **idea source**, not an additional competing rulebook. **Replace a weaker clause in its exact owning document** or add a narrowly scoped missing visible-state rule. No blanket 31-point import, feature invention, duplicate skeleton rules, new vendor runtime, font files or backend changes. Product technical performance/security/Analytics/Monitoring/CI belongs in `HSK-AI-Bot`, not in this design-only repository.

## One-by-one disposition

Legend: **UPGRADED** = a specific existing visual rule improved (or a conditional gap filled); **COVERED** = adequate rule already exists, no copy; **ENGINEERING** = code/backend/hosting work, not a new UI design rule.

| # | External optimization idea | Decision | Existing owner / exact HSK AI outcome |
| --- | --- | --- | --- |
| 1 | Skeletons matching future content | **COVERED** | [Motion](../portable/guidelines/design-foundations/motion.md), [Data reports](../portable/guidelines/design-patterns/data-reports.md), [HSK loading §2.3](../portable/guidelines/hsk-ai-product-ux-contract.md). Explicit per-region geometry, partial/failure and stable anchors already exist; no redundant clause. |
| 2 | WebP/AVIF with older-format fallback | **ENGINEERING / COVERED visual intent** | The [HSK loading/media contract](../portable/guidelines/hsk-ai-product-ux-contract.md) already requires stable media geometry, first-viewport priority and failure fallback. Format conversion is an asset-pipeline decision and must not re-encode canonical Panda SVG or introduce unlicensed images. |
| 3 | Deduplicate API requests | **ENGINEERING** | Request caching and in-flight deduplication belong to the product performance/API contracts. Visual pending/error is already specified. |
| 4 | Debounce remote search | **UPGRADED** | [Search field](../portable/guidelines/design-components/search-field.md): immediate text/focus, short pause **only for remote-per-keystroke search**, ignore superseded results, preserve query and filter state; no artificial delay for inexpensive local search. |
| 5 | Cursor/page results for unbounded lists | **COVERED** | [Data tables](../portable/guidelines/design-components/data-tables.md) and [Data reports](../portable/guidelines/design-patterns/data-reports.md) require genuine paging/virtualization and honest totals. API cursor contract remains engineering. |
| 6 | CDN delivery | **ENGINEERING** | Hosting/asset configuration, not a design component. Do not prescribe a new provider or URL. |
| 7 | Background queue for slow operations | **ENGINEERING** | Worker scheduling and retry, not a new UI rule; existing pending/error patterns remain applicable. |
| 8 | Remove N+1 database queries | **ENGINEERING** | Query plans and eager loading belong to backend performance. |
| 9 | Brotli/Gzip | **ENGINEERING** | Server compression configuration, not learner-facing visual behavior. |
| 10 | Redis cache for common reads | **ENGINEERING — NOT ADOPTED** | Redis is not a design dependency or a mandated HSK AI service. Never install it merely because a generic prompt suggests it. |
| 11 | Remove unused dependencies | **ENGINEERING** | Build/CI dependency audit, not design-system policy. |
| 12 | Timeouts on external APIs | **ENGINEERING / COVERED visible error** | Request timeouts/retries live in API contracts; [Buttons](../portable/guidelines/design-components/buttons.md), [Data reports](../portable/guidelines/design-patterns/data-reports.md) and [Toasts](../portable/guidelines/design-components/toasts.md) already cover useful failure/retry states. |
| 13 | Show AI answers progressively | **UPGRADED, CONDITIONAL** | [HSK UX contract §2.1](../portable/guidelines/hsk-ai-product-ux-contract.md): **only when the product already streams**, progressive visible content, incomplete/error state and accessible updates. No fake token animation or new mandatory streaming backend. |
| 14 | Optimistic updates with rollback | **UPGRADED, RESTRICTED** | [Buttons — Loading](../portable/guidelines/design-components/buttons.md): reversible low-risk actions may provisionally respond and safely roll back, never invent successful payment, Pro/XP, official grading, completion, or irreversible mutation. |
| 15 | Defer images below viewport without shifting layout | **COVERED** | [HSK loading §2.3](../portable/guidelines/hsk-ai-product-ux-contract.md) already protects first-viewport art, offscreen slots and stable media reveal; [Illustration](../portable/guidelines/design-foundations/illustration.md) guards canonical assets. |
| 16 | Parallelize independent network work | **ENGINEERING** | Scheduling implementation and error ownership; avoid new independent UX patterns. |
| 17 | Add database indexes | **ENGINEERING** | EXPLAIN and migrations require product data audit and explicit approval. |
| 18 | OpenTelemetry tracing | **ENGINEERING** | Monitoring observability, redaction and privacy are covered by product rules. |
| 19 | Host app near database | **ENGINEERING** | Infrastructure location and migration cannot become a visual rule. |
| 20 | SSR/prerender pages | **ENGINEERING / CONDITIONAL** | Deployment architecture, often unsuitable for authenticated learner screens; not a mandate to alter HSK AI app rendering. |
| 21 | Defer noncritical third-party JS | **ENGINEERING / COVERED visible shell** | Script scheduling is engineering. [HSK loading](../portable/guidelines/hsk-ai-product-ux-contract.md) already requires the usable authorized shell without waiting for secondary regions. |
| 22 | Split JS by page | **ENGINEERING** | Bundling choices cannot require inventing pages or replacing PWA architecture. |
| 23 | Virtualize long lists | **COVERED** | [Data tables](../portable/guidelines/design-components/data-tables.md) explicitly covers real virtualization, selection, focus, paging and scroll continuity. |
| 24 | Fetch only DB columns needed | **ENGINEERING** | Data projection and SQL queries remain outside portable UI scope. |
| 25 | DB connection pool | **ENGINEERING** | Server and database lifecycle, not UI. |
| 26 | Remove unnecessary re-renders | **ENGINEERING / COVERED visual stability** | UI implementation profiling belongs to real code. Existing loading/scroll/focus rules prohibit disruptive visual changes. |
| 27 | Cache hashed static assets safely | **ENGINEERING** | Cache-Control and forced PWA updates belong to product release logic; do not add a second release policy. |
| 28 | Horizontal scaling | **ENGINEERING** | Stateful services and load balancing, not UI design. |
| 29 | Self-host only needed web font weights | **UPGRADED, CONDITIONAL** | [Typography](../portable/guidelines/design-foundations/typography.md): system stacks remain preferred; **if** a licensed custom font is needed, visible fallback, non-blocking loading, correct Cyrillic/tone-mark glyphs and stable metrics. No mandatory new font files. |
| 30 | Real-user Core Web Vitals | **UPGRADED visible QA only** | [HSK UX §2.3](../portable/guidelines/hsk-ai-product-ux-contract.md): retain existing CLS/anchor thresholds; include LCP/INP interpretation **against a measured baseline**. Instrumentation and user-data processing remain product engineering. |
| 31 | Test slow phones/network | **UPGRADED evidence precision** | [HSK UX §2.3](../portable/guidelines/hsk-ai-product-ux-contract.md): existing 320/390/430 WebKit, native Android and weak-network rules made more specific about slow CPU, search/input, first learning action, scroll jank, offline/cached states and before/after evidence. |

## Minimal changes, no competing standards

Exactly **four existing guideline documents** were edited:

1. [Search field](../portable/guidelines/design-components/search-field.md) — replaced ambiguous clear/submit wording with truthful immediate results; added a conditional remote-search state contract (#4).
2. [Buttons](../portable/guidelines/design-components/buttons.md) — replaced the weak generic loading clause with reversible-only optimistic pending/rollback and explicit payment/learning exclusions (#14).
3. [Typography](../portable/guidelines/design-foundations/typography.md) — replaced the one-line font-inventory caution with conditional non-blocking fallback and legible stable CJK/localization (#29).
4. [HSK AI learner UX supplement](../portable/guidelines/hsk-ai-product-ux-contract.md) — added conditional visible AI stream states (#13), strengthened **existing** visual performance acceptance instead of creating another checklist (#30–31), and linked this audit.

All other professional guideline pages remain byte-for-byte unchanged; the **45-file count remains 45**. This report is in `docs/audits/`, **not** a 46th rule.

## Acceptance and scope checks

- The source contains 31 numbered prompts in one README; all 31 have a decision row above.
- **No duplicate skeleton/layout token/pagination/media-loading rule** was imported where the 45 already covered it.
- Every enhancement is tied to the existing owning document; status is conditional rather than a claim that the feature is implemented.
- No `HSK-AI-Bot` PWA, Android, production runtime, payment, analytics, monitoring, backend, font binary, image or infrastructure was modified.
- This is a **documentation-only** audit: verify Markdown, changed paragraphs, local links and branch diff; do not report runtime/CI/device tests as passed.
