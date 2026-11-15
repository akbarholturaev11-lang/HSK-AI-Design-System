#!/usr/bin/env node
/**
 * Static documentation integrity checks. This complements, but DOES NOT replace,
 * pnpm typecheck, pnpm build, rendered Storybook or screen-reader validation.
 * No network/API access and no production HSK AI data are used.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const docsRoot = path.join(root, "__docs__");
const issues = [];
const warnings = [];

function walk(dir) {
    return fs.readdirSync(dir, {withFileTypes: true})
        .flatMap(entry => {
            const full = path.join(dir, entry.name);
            return entry.isDirectory() ? walk(full) : [full];
        }).sort();
}
function report(file, kind, detail) {
    issues.push(`${path.relative(root, file)}: ${kind}: ${detail}`);
}
function resolveLocalImport(file, spec) {
    const base = path.resolve(path.dirname(file), spec);
    const possibilities = [
        base, ...[".tsx", ".ts", ".jsx", ".js", ".mjs", ".mdx", ".json", ".css", ".svg", ".png"]
            .map(ext => base + ext),
        path.join(base, "index.tsx"),
        path.join(base, "index.ts"),
        path.join(base, "index.js"),
    ];
    return possibilities.some(p => fs.existsSync(p));
}
function docSlug(title) {
    // Storybook's basic title-to-docs-id shape (page IDs checked again at build).
    return title.toLowerCase()
        .replace(/[^a-z0-9\s\/-]+/g, "")
        .replace(/[\s\/]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
if (!fs.existsSync(docsRoot)) {
    throw new Error("__docs__ directory missing");
}

const files = walk(docsRoot).filter(p => /\.(mdx|tsx|ts|jsx|js|mjs)$/.test(p));
const docs = files.filter(p => p.endsWith(".mdx"));
const known = new Map();

for (const file of docs) {
    const source = fs.readFileSync(file, "utf8");
    const titles = [...source.matchAll(/<Meta\s+title=["']([^"']+)["']/g)].map(m => m[1]);
    if (titles.length !== 1) {
        report(file, "Storybook title", `expected one Meta title, found ${titles.length}`);
    } else {
        const slug = docSlug(titles[0]);
        if (known.has(slug)) {
            report(file, "Storybook title", `duplicate docs ID ${slug} also in ${path.relative(root, known.get(slug))}`);
        }
        known.set(slug, file);
    }
}

let imports = 0;
let links = 0;
let images = 0;
for (const file of files) {
    const source = fs.readFileSync(file, "utf8");
    // Check relative static ESM imports without interpreting third-party package names.
    for (const match of source.matchAll(/(?:^|\n)\s*import\s+([\s\S]*?);/g)) {
        const spec = match[1].match(/(?:from\s+)?["'](\.[^"']+)["']\s*$/);
        if (!spec) continue;
        imports++;
        if (!resolveLocalImport(file, spec[1])) {
            report(file, "missing relative import", spec[1]);
        }
    }
    if (!file.endsWith(".mdx")) continue;
    for (const match of source.matchAll(/<img\b([\s\S]*?)\/?>/g)) {
        images++;
        if (!/\balt\s*=/.test(match[1])) {
            report(file, "image alternative", `img tag at offset ${match.index} has no alt`);
        }
    }
    // Only links to the current Storybook's local documentation page routes.
    for (const match of source.matchAll(/href\s*=\s*["'](?:\.\/)?\?path=\/docs\/([a-z0-9-]+)--docs(?:#[a-z0-9-]+)?["']/g)) {
        links++;
        if (!known.has(match[1])) {
            report(file, "missing Storybook page", match[1]);
        }
    }
    if (/href\s*=\s*["']#link["']|href\s*:\s*["']#link["']/.test(source)) {
        report(file, "dead example link", "#link");
    }
}

// Documentation policy isn't a runtime test; do not infer product parity or IP rights.
if (docs.length !== 44) {
    warnings.push(`MDX count changed: ${docs.length}; review index before merging`);
}
console.log(`Documentation static check: ${docs.length} MDX pages, ${files.length} source docs/modules, ${imports} relative imports, ${images} inline images, ${links} local Storybook links`);
for (const w of warnings) console.warn("Review: " + w);
if (issues.length) {
    for (const err of issues) console.error("ERROR " + err);
    process.exitCode = 1;
} else {
    console.log("PASS: static imports, page IDs, img alt and checked local links.");
    console.log("NOT TESTED: MDX build, rendered visuals, focus, screen readers, source-image licenses.");
}
