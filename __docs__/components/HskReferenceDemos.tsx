import * as React from "react";

/**
 * INTERACTIVE DOCUMENTATION EXAMPLES ONLY.
 * These hard-coded numbers are deliberately fictional samples, not HSK AI
 * analytics, course progress, real users or verified backend responses.
 * Do not import into the production iPhone PWA or Android application.
 */
type Point = {label: string; value: number};
const panel: React.CSSProperties = {
    padding: 16,
    borderRadius: 12,
    border: "1px solid var(--hsk-divider, #a9adb4)",
    marginBlock: 12,
    maxWidth: 540,
};
const toolbar: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginBlock: 10,
};
const buttonStyle: React.CSSProperties = {
    borderRadius: 8,
    padding: "8px 12px",
    background: "transparent",
    color: "inherit",
    border: "1px solid currentColor",
    cursor: "pointer",
    minHeight: 40,
};
const explanation: React.CSSProperties = {fontSize: 13, opacity: 0.85, lineHeight: 1.45};
const week: Point[] = [
    {label: "D1", value: 3}, {label: "D2", value: 4},
    {label: "D3", value: 4}, {label: "D4", value: 7},
    {label: "D5", value: 6}, {label: "D6", value: 9},
    {label: "D7", value: 8},
];
const month: Point[] = [
    {label: "W1", value: 2}, {label: "W2", value: 4},
    {label: "W3", value: 5}, {label: "W4", value: 7},
    {label: "W5", value: 6}, {label: "W6", value: 9},
    {label: "W7", value: 10},
];

function ExampleHeading({title}: {title: string}) {
    return <div style={{marginBottom: 12}}>
        <strong>{title}</strong>
        <div style={explanation}>Illustrative sample data only — not live HSK AI statistics.</div>
    </div>;
}

function MockTrendPlot({data}: {data: Point[]}) {
    const max = 12;
    const coords = data.map((p, i) => [
        28 + i * 44,
        120 - (p.value / max) * 95,
    ]);
    return <svg viewBox="0 0 330 148" width="100%" role="img"
        aria-label={"Illustrative trend: " + data.map(d => d.label + " " + d.value).join(", ")}>
        <line x1="28" y1="120" x2="305" y2="120" stroke="currentColor" strokeOpacity=".5" />
        <line x1="28" y1="20" x2="28" y2="120" stroke="currentColor" strokeOpacity=".5" />
        <polyline points={coords.map(c => c.join(",")).join(" ")}
            fill="none" stroke="currentColor" strokeWidth="3"
            strokeLinecap="round" strokeLinejoin="round" />
        {coords.map((c, i) => <g key={data[i].label}>
            <circle cx={c[0]} cy={c[1]} r="4" fill="currentColor" />
            <text x={c[0]} y="138" textAnchor="middle" fill="currentColor" fontSize="10">
                {data[i].label}
            </text>
        </g>)}
    </svg>;
}

/** Demonstrates time scope and view alternative without implying a real endpoint. */
export function TrendReferenceDemo() {
    const [range, setRange] = React.useState<"week" | "month">("week");
    const [table, setTable] = React.useState(false);
    const data = range === "week" ? week : month;
    return <section style={panel} aria-label="Interactive trend documentation example">
        <ExampleHeading title="Trend chart: measured values over time" />
        <div style={toolbar} role="group" aria-label="Example time range">
            <button style={buttonStyle} aria-pressed={range === "week"}
                onClick={() => setRange("week")}>7 days</button>
            <button style={buttonStyle} aria-pressed={range === "month"}
                onClick={() => setRange("month")}>7 sample weeks</button>
            <button style={buttonStyle} aria-pressed={table}
                onClick={() => setTable(v => !v)}>{table ? "Chart view" : "Table view"}</button>
        </div>
        {table ? <table style={{borderCollapse: "collapse", width: "100%"}}>
            <caption style={{textAlign: "left"}}>Same illustrative points and scope</caption>
            <thead><tr><th scope="col">Period</th><th scope="col">Example count</th></tr></thead>
            <tbody>{data.map(row => <tr key={row.label}>
                <th scope="row" style={{textAlign: "left", padding: 6}}>{row.label}</th>
                <td style={{textAlign: "right", padding: 6}}>{row.value}</td>
            </tr>)}</tbody>
        </table> : <MockTrendPlot data={data} />}
        <p style={explanation}>Switching the view preserves the current date scope. Synthetic examples demonstrate layout only.</p>
    </section>;
}

/** Demonstrates real target/current value semantics with editable fake values. */
export function ProgressReferenceDemo() {
    const [current, setCurrent] = React.useState(6);
    const target = 10;
    return <section style={panel} aria-label="Interactive progress documentation example">
        <ExampleHeading title="Progress: current count against a known example goal" />
        <label htmlFor="hsk-demo-progress">Example completed items: {current} of {target}</label>
        <input id="hsk-demo-progress" type="range" min="0" max={target} value={current}
            onChange={e => setCurrent(Number(e.currentTarget.value))}
            style={{width: "100%", marginTop: 12}} />
        <div role="progressbar" aria-label="Example progress" aria-valuemin={0}
            aria-valuemax={target} aria-valuenow={current}
            style={{height: 16, border: "1px solid currentColor", borderRadius: 10, overflow: "hidden"}}>
            <div style={{height: "100%", width: (current / target * 100) + "%",
                background: "currentColor", opacity: 0.65}} />
        </div>
        <p style={explanation}>{current * 10}% of this <strong>synthetic</strong> target. A real app requires server-verified numerator and denominator.</p>
    </section>;
}

const firstDistribution: Point[] = [
    {label: "0", value: 2}, {label: "1", value: 4}, {label: "2", value: 7},
    {label: "3", value: 3}, {label: "4", value: 1},
];
const secondDistribution: Point[] = [
    {label: "0", value: 5}, {label: "1", value: 5}, {label: "2", value: 4},
    {label: "3", value: 2}, {label: "4", value: 1},
];

/** Demonstrates mutually exclusive bins and their reconciled total. */
export function DistributionReferenceDemo() {
    const [group, setGroup] = React.useState<"a" | "b">("a");
    const rows = group === "a" ? firstDistribution : secondDistribution;
    const total = rows.reduce((s, r) => s + r.value, 0);
    return <section style={panel} aria-label="Interactive distribution documentation example">
        <ExampleHeading title="Distribution: non-overlapping example categories" />
        <div style={toolbar} role="group" aria-label="Illustrative sample">
            <button style={buttonStyle} aria-pressed={group === "a"}
                onClick={() => setGroup("a")}>Sample A</button>
            <button style={buttonStyle} aria-pressed={group === "b"}
                onClick={() => setGroup("b")}>Sample B</button>
        </div>
        <svg viewBox="0 0 330 150" width="100%" role="img"
            aria-label={"Illustrative distribution, total " + total + ": " +
                rows.map(r => "bin " + r.label + ", " + r.value).join("; ")}>
            <line x1="20" y1="125" x2="315" y2="125" stroke="currentColor" />
            {rows.map((r, i) => <g key={r.label}>
                <rect x={36 + i * 55} y={125 - r.value * 13}
                    width="35" height={r.value * 13} fill="currentColor" opacity=".72" />
                <text x={53.5 + i * 55} y="141" fontSize="11"
                    textAnchor="middle" fill="currentColor">{r.label}</text>
                <text x={53.5 + i * 55} y={119 - r.value * 13}
                    fontSize="11" textAnchor="middle" fill="currentColor">{r.value}</text>
            </g>)}
        </svg>
        <p style={explanation}>Total in displayed bins: <strong>{total}</strong>.
            Demo groups are fictional and have no relationship to learner grades or HSK levels.</p>
    </section>;
}

type DemoRow = {code: string;label: string;count: number};
const rows: DemoRow[] = [
    {code: "A", label: "Sample record A", count: 3},
    {code: "B", label: "Sample record B", count: 7},
    {code: "C", label: "Sample record C", count: 2},
];

/** Demonstrates a sortable accessible table, never real user information. */
export function TableReferenceDemo() {
    const [descending, setDescending] = React.useState(true);
    const sorted = [...rows].sort((a, b) =>
        descending ? b.count - a.count : a.count - b.count);
    return <section style={panel} aria-label="Interactive table documentation example">
        <ExampleHeading title="Accessible sorting of an illustrative dataset" />
        <table style={{borderCollapse: "collapse", width: "100%"}}>
            <caption style={{textAlign: "left"}}>Three fictional records</caption>
            <thead><tr><th scope="col" style={{textAlign: "left"}}>Record</th>
                <th scope="col" aria-sort={descending ? "descending" : "ascending"}
                    style={{textAlign: "right"}}>
                    <button style={buttonStyle} onClick={() => setDescending(v => !v)}>
                        Example count {descending ? "▼" : "▲"}
                    </button>
                </th></tr></thead>
            <tbody>{sorted.map(r => <tr key={r.code} style={{borderTop: "1px solid currentColor"}}>
                <th scope="row" style={{textAlign: "left", padding: 8}}>{r.label}</th>
                <td style={{textAlign: "right", padding: 8}}>{r.count}</td>
            </tr>)}</tbody>
        </table>
        <p style={explanation}>Sort state and numeric order are aligned; no production data or endpoint is used.</p>
    </section>;
}

/** Distinct empty / filtered / stale / error examples for proper reporting semantics. */
export function ReportStateReferenceDemo() {
    const [state, setState] = React.useState<"empty" | "filtered" | "stale" | "error">("empty");
    const descriptions = {
        empty: "The sample query succeeded, but there are no records for this example scope.",
        filtered: "No sample records match the active illustrative filter. Clear that filter to see the other examples.",
        stale: "The example refresh failed. Earlier sample values may be displayed only with a clear stale label.",
        error: "The example query failed. No values are represented as confirmed zeros; offer Retry.",
    };
    return <section style={panel} aria-label="Interactive reporting state documentation example">
        <ExampleHeading title="Different states require different explanations" />
        <div style={toolbar} role="group" aria-label="Example reporting state">
            {(["empty", "filtered", "stale", "error"] as const).map(s =>
                <button key={s} style={buttonStyle} aria-pressed={state === s}
                    onClick={() => setState(s)}>{s}</button>)}
        </div>
        <div role="status" aria-live="polite" style={{padding: 12, border: "1px solid currentColor", borderRadius: 8}}>
            <strong>{state === "stale" ? "Previously fetched (sample)" : "Sample " + state}</strong>
            <p>{descriptions[state]}</p>
            {state === "error" && <button style={buttonStyle}
                onClick={() => setState("empty")}>Simulated retry</button>}
        </div>
    </section>;
}
