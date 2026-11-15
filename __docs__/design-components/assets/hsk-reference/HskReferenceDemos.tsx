import * as React from "react";

/**
 * Documentation-only, deliberately fictional examples.
 * They do not read HSK AI metrics, accounts, plans, payments or lessons.
 * Do not use sample data in the production application.
 */
const panel: React.CSSProperties = {
    border: "1px solid currentColor",
    borderRadius: 14,
    padding: 16,
    maxWidth: 650,
    marginBlock: 12,
    background: "transparent",
    color: "inherit",
};
const button: React.CSSProperties = {
    border: "1px solid currentColor",
    borderRadius: 8,
    padding: "9px 12px",
    background: "transparent",
    color: "inherit",
    cursor: "pointer",
    minHeight: 44,
};
const muted: React.CSSProperties = {fontSize: 13, margin: "5px 0 14px", opacity: 0.83};
// Source-only demo: use current text color, not unverified HSK AI CSS in Storybook.
const accent = "currentColor";

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
                style={{height: 18, borderRadius: 12, border: "1px solid currentColor", overflow: "hidden", background: "transparent"}}>
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

// Points and visible segments derive from the same dataset as the exact table.
// Null is a deliberate break, never zero or an interpolated observation.
const trendMaximum = Math.max(1, ...trend.map((item) => item.answers ?? 0));
const trendX = (index: number): number => 44 + 83 * index;
const trendY = (value: number): number => 125 - value / trendMaximum * 100;
const trendSegments = trend.slice(1).flatMap((item, index) => {
    const previous = trend[index];
    return previous.answers === null || item.answers === null ? [] : [
        {x1: trendX(index), y1: trendY(previous.answers),
         x2: trendX(index + 1), y2: trendY(item.answers)},
    ];
});

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
                    <svg viewBox="0 0 340 150" role="img" aria-label={"Fictional weekly trend: " + trend.map(item =>
                            item.period + ": " + (item.answers === null ? "not recorded" : item.answers + " answers")
                        ).join("; ") + ". Missing observations are gaps, not zeros."} style={{width: "100%", height: "auto"}}>
                        <path d="M 32 15 V 125 H 325" stroke="currentColor" opacity=".5" fill="none" />
                        {trendSegments.map((segment, index) => (
                            <line key={index} x1={segment.x1} y1={segment.y1}
                                x2={segment.x2} y2={segment.y2}
                                stroke={accent} strokeWidth="3" />
                        ))}
                        {trend.map((item, index) => (
                            <g key={item.period}>
                                <text x={trendX(index)} y="145" fill="currentColor"
                                    fontSize="10" textAnchor="middle">
                                    {item.period.replace("Week ", "W")}
                                </text>
                                {item.answers === null ? (
                                    <text x={trendX(index)} y="110" fill="currentColor"
                                        fontSize="9" textAnchor="middle">No data</text>
                                ) : (
                                    <>
                                        <circle cx={trendX(index)} cy={trendY(item.answers)}
                                            r="5" fill={accent} stroke="currentColor" strokeWidth="1" />
                                        <text x={trendX(index)} y={trendY(item.answers) - 9}
                                            fill="currentColor" fontSize="11" textAnchor="middle">
                                            {item.answers}
                                        </text>
                                    </>
                                )}
                            </g>
                        ))}
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

const sampleBins = [
    {name: "Sample A", count: 4},
    {name: "Sample B", count: 9},
    {name: "Sample C", count: 3},
    {name: "Sample D", count: 0},
] as const;
const sampleTotal = sampleBins.reduce((sum, bin) => sum + bin.count, 0);

export function HskDistributionReference(): React.ReactElement {
    const [show, setShow] = React.useState<"all" | "nonzero">("all");
    const visible = sampleBins.filter((item) => show === "all" || item.count > 0);
    return (
        <section style={panel} aria-label="Distribution demonstration">
            <strong>Exclusive categories / honest denominator</strong>
            <p style={muted}>Fictional category counts only. Sample D has a measured example count of zero; real HSK AI categories require an implemented data model.</p>
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
                            <span>{item.name}</span><span>{item.count} of {sampleTotal}</span>
                        </div>
                        <div style={{background: "transparent", height: 13, borderRadius: 7, overflow: "hidden", border: "1px solid currentColor"}}
                            role="img" aria-label={`${item.name}: ${item.count} of ${sampleTotal} fictional items`}>
                            <div style={{height: "100%", width: `${sampleTotal > 0 ? item.count / sampleTotal * 100 : 0}%`, background: accent}} />
                        </div>
                    </div>
                ))}
            </div>
            <p style={{fontSize: 13}}>Showing {visible.length} of {sampleBins.length} sample categories; total {sampleTotal} fictional observations. The zero-count category is measured zero, not missing data.</p>
        </section>
    );
}

const sampleWords = [
    {hanzi: "你好", pinyin: "nǐ hǎo", meaningRu: "Здравствуйте", result: "Reviewed"},
    {hanzi: "学习", pinyin: "xuéxí", meaningRu: "Учиться", result: "In progress"},
    {hanzi: "今天", pinyin: "jīntiān", meaningRu: "Сегодня", result: "Reviewed"},
] as const;

export function HskTableReference(): React.ReactElement {
    const [ascending, setAscending] = React.useState(true);
    const rows = [...sampleWords].sort((a, b) => ascending
        ? a.pinyin.localeCompare(b.pinyin)
        : b.pinyin.localeCompare(a.pinyin));
    return (
        <section style={panel} aria-label="Accessible sample vocabulary table">
            <strong>Scannable exact records</strong>
            <p style={muted}>Fictional word statuses; Russian meanings illustrate one supported language. Real HSK AI uses the account-selected translation language.</p>
            <button type="button" style={button} onClick={() => setAscending((value) => !value)}
                aria-label={ascending ? "Sort example rows by pinyin descending" : "Sort example rows by pinyin ascending"}>
                Sort pinyin {ascending ? "A–Z" : "Z–A"}
            </button>
            <div role="region" aria-label="Scrollable sample vocabulary records" tabIndex={0}
                style={{overflowX: "auto", marginTop: 12}}>
                <table style={{width: "100%", borderCollapse: "collapse", textAlign: "left"}}>
                    <thead><tr><th scope="col">汉字</th><th scope="col" aria-sort={ascending ? "ascending" : "descending"}>Pinyin</th><th scope="col">Значение (RU)</th><th scope="col">Status</th></tr></thead>
                    <tbody>{rows.map((row) => (
                        <tr key={row.hanzi}>
                            <td style={{padding: "10px 4px", borderTop: "1px solid currentColor", fontSize: 20}}>{row.hanzi}</td>
                            <td style={{padding: "10px 4px", borderTop: "1px solid currentColor"}}>{row.pinyin}</td>
                            <td style={{padding: "10px 4px", borderTop: "1px solid currentColor"}}>{row.meaningRu}</td>
                            <td style={{padding: "10px 4px", borderTop: "1px solid currentColor"}}>{row.result}</td>
                        </tr>
                    ))}</tbody>
                </table>
            </div>
        </section>
    );
}
