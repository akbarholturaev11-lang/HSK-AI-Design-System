import * as React from "react";

/**
 * Documentation-only, deliberately fictional examples.
 * They do not read HSK AI metrics, accounts, plans, payments or lessons.
 * Do not use sample data in the production application.
 */
const panel: React.CSSProperties = {
    border: "1px solid #a9abb5",
    borderRadius: 14,
    padding: 16,
    maxWidth: 650,
    marginBlock: 12,
    background: "transparent",
    color: "inherit",
};
const button: React.CSSProperties = {
    border: "1px solid #878994",
    borderRadius: 8,
    padding: "9px 12px",
    background: "transparent",
    color: "inherit",
    cursor: "pointer",
};
const muted: React.CSSProperties = {fontSize: 13, margin: "5px 0 14px", opacity: 0.83};
const accent = "var(--hsk-cinnabar, #E04A40)";

export function HskProgressReference(): React.ReactElement {
    const [metric, setMetric] = React.useState<"lesson" | "review">("lesson");
    const current = metric === "lesson" ? 12 : 7;
    const total = metric === "lesson" ? 20 : 10;
    const label = metric === "lesson" ? "Example lessons completed" : "Example review tasks completed";
    return (
        <section style={panel} aria-label="Interactive progress reference">
            <strong>Verified-value layout — illustrative only</strong>
            <p style={muted}>Sample figures, not real HSK AI progress. In the app, numerator and denominator must come from one verified source.</p>
            <label htmlFor="example-metric">Example metric: </label>
            <select
                id="example-metric"
                value={metric}
                onChange={(event) => setMetric(event.currentTarget.value as "lesson" | "review")}
                style={{...button, marginLeft: 8}}
            >
                <option value="lesson">Lesson progress</option>
                <option value="review">Review activity</option>
            </select>
            <p style={{marginBottom: 8}}>{label}: <strong>{current} of {total}</strong></p>
            <div role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={total} aria-valuenow={current}
                style={{height: 18, borderRadius: 12, border: "1px solid #92949e", overflow: "hidden", background: "#e6e7e9"}}>
                <div style={{width: `${current / total * 100}%`, height: "100%", background: accent}} />
            </div>
            <p style={{fontSize: 13, marginBottom: 0}}>{total - current} remaining in this fictional example; a quiz grade is not progress.</p>
        </section>
    );
}

type TrendDatum = {period: string; answers: number | null};
const trend: ReadonlyArray<TrendDatum> = [
    {period: "Week 1", answers: 6},
    {period: "Week 2", answers: null},
    {period: "Week 3", answers: 8},
    {period: "Week 4", answers: 10},
];

export function HskTrendReference(): React.ReactElement {
    const [view, setView] = React.useState<"chart" | "table">("chart");
    return (
        <section style={panel} aria-label="Interactive trend and missing-data reference">
            <strong>Trend / table: one dataset</strong>
            <p style={muted}>Fictional answered-practice counts. Week 2 is unrecorded, not zero. This is not a live HSK AI metric.</p>
            <div role="group" aria-label="Choose representation" style={{display: "flex", flexWrap: "wrap", gap: 8}}>
                <button type="button" style={button} aria-pressed={view === "chart"} onClick={() => setView("chart")}>Chart</button>
                <button type="button" style={button} aria-pressed={view === "table"} onClick={() => setView("table")}>Exact values</button>
            </div>
            {view === "chart" ? (
                <div style={{maxWidth: 500, marginTop: 12}}>
                    <svg viewBox="0 0 340 150" role="img" aria-label="Week 1 six answers; week 2 no data; week 3 eight; week 4 ten. Gap represents missing observations." style={{width: "100%", height: "auto"}}>
                        <path d="M 32 15 V 125 H 325" stroke="currentColor" opacity=".5" fill="none" />
                        <path d="M 221 51 L 305 21" stroke={accent} strokeWidth="3" fill="none" />
                        {[[52, 81], [221, 51], [305, 21]].map(([x, y], i) => (
                            <circle key={i} cx={x} cy={y} r={5} fill={accent} stroke="currentColor" strokeWidth="1" />
                        ))}
                        <text x="40" y="143" fill="currentColor" fontSize="10">W1</text>
                        <text x="123" y="143" fill="currentColor" fontSize="10">W2: no data</text>
                        <text x="214" y="143" fill="currentColor" fontSize="10">W3</text>
                        <text x="297" y="143" fill="currentColor" fontSize="10">W4</text>
                        <text x="35" y="75" fill="currentColor" fontSize="11">6</text>
                        <text x="215" y="40" fill="currentColor" fontSize="11">8</text>
                        <text x="299" y="12" fill="currentColor" fontSize="11">10</text>
                    </svg>
                </div>
            ) : (
                <table style={{marginTop: 12, borderSpacing: "20px 8px", textAlign: "left"}}>
                    <thead><tr><th scope="col">Period</th><th scope="col">Recorded answers</th></tr></thead>
                    <tbody>{trend.map((item) => (
                        <tr key={item.period}><td>{item.period}</td><td>{item.answers ?? "Not recorded"}</td></tr>
                    ))}</tbody>
                </table>
            )}
        </section>
    );
}

const mastery = [
    {name: "New", count: 4},
    {name: "Reviewing", count: 9},
    {name: "Mastered", count: 3},
] as const;

export function HskDistributionReference(): React.ReactElement {
    const [show, setShow] = React.useState<"all" | "nonzero">("all");
    const visible = mastery.filter((item) => show === "all" || item.count > 0);
    return (
        <section style={panel} aria-label="Distribution demonstration">
            <strong>Exclusive categories / honest denominator</strong>
            <p style={muted}>Fictional item counts only. Real categories must match an implemented mastery model and reconcile with the source.</p>
            <label htmlFor="example-categories">Show: </label>
            <select id="example-categories" style={{...button, marginLeft: 8}} value={show}
                onChange={(event) => setShow(event.currentTarget.value as "all" | "nonzero")}>
                <option value="all">All groups</option>
                <option value="nonzero">Groups with observations</option>
            </select>
            <div style={{marginTop: 14, display: "grid", gap: 12}}>
                {visible.map((item) => (
                    <div key={item.name}>
                        <div style={{display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 5}}>
                            <span>{item.name}</span><span>{item.count} of 16</span>
                        </div>
                        <div style={{background: "#e6e7e9", height: 13, borderRadius: 7, overflow: "hidden", border: "1px solid #92949e"}}
                            role="img" aria-label={`${item.name}: ${item.count} of 16 fictional items`}>
                            <div style={{height: "100%", width: `${item.count / 16 * 100}%`, background: accent}} />
                        </div>
                    </div>
                ))}
            </div>
            <p style={{fontSize: 13}}>All categories total 16 illustrative items; missing category data must not be silently treated as zero.</p>
        </section>
    );
}

const sampleWords = [
    {hanzi: "你好", pinyin: "nǐ hǎo", result: "Reviewed"},
    {hanzi: "学习", pinyin: "xuéxí", result: "In progress"},
    {hanzi: "今天", pinyin: "jīntiān", result: "Reviewed"},
] as const;

export function HskTableReference(): React.ReactElement {
    const [ascending, setAscending] = React.useState(true);
    const rows = [...sampleWords].sort((a, b) => ascending
        ? a.pinyin.localeCompare(b.pinyin)
        : b.pinyin.localeCompare(a.pinyin));
    return (
        <section style={panel} aria-label="Accessible sample vocabulary table">
            <strong>Scannable exact records</strong>
            <p style={muted}>Fictional words and statuses for interaction testing, not a learner's data.</p>
            <button type="button" style={button} onClick={() => setAscending((value) => !value)}
                aria-label={ascending ? "Sort example rows by pinyin descending" : "Sort example rows by pinyin ascending"}>
                Sort pinyin {ascending ? "A–Z" : "Z–A"}
            </button>
            <div style={{overflowX: "auto", marginTop: 12}}>
                <table style={{width: "100%", borderCollapse: "collapse", textAlign: "left"}}>
                    <thead><tr><th scope="col">汉字</th><th scope="col">Pinyin</th><th scope="col">Status</th></tr></thead>
                    <tbody>{rows.map((row) => (
                        <tr key={row.hanzi}>
                            <td style={{padding: "10px 4px", borderTop: "1px solid #a9abb5", fontSize: 20}}>{row.hanzi}</td>
                            <td style={{padding: "10px 4px", borderTop: "1px solid #a9abb5"}}>{row.pinyin}</td>
                            <td style={{padding: "10px 4px", borderTop: "1px solid #a9abb5"}}>{row.result}</td>
                        </tr>
                    ))}</tbody>
                </table>
            </div>
        </section>
    );
}
