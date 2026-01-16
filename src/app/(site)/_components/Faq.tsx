export default function Faq() {
  return (
    <section className="section" id="faq">
      <h2>FAQ</h2>
      <details>
        <summary>What is a strip chart?</summary>
        <div className="faq-intro">
          <p>
            A strip chart is a scrolling time-series visualization designed for continuous monitoring. New samples appear at one edge
            while older samples move across the display, so operators keep context and can spot drift, oscillation, and intermittent
            spikes quickly.
          </p>
        </div>
        <p>
          If you are new to strip charts, start with{" "}
          <a href="/guides/what-is-a-strip-chart">what is a strip chart?</a> and{" "}
          <a href="/guides/strip-chart-vs-line-chart">strip chart vs line chart</a>.
        </p>
      </details>
      <details>
        <summary>How do I make a strip chart in Excel?</summary>
        <div className="faq-intro">
          <p>
            Excel can approximate a strip chart with a time-series line chart. Use a consistent y-axis range, reduce clutter, and
            (optionally) filter to the most recent samples to mimic a moving window.
          </p>
        </div>
        <p>
          Read the full guide: <a href="/guides/strip-chart-in-excel">how to make a strip chart in Excel</a>.
        </p>
      </details>
      <details>
        <summary>How do I tune the strip chart for real-time monitoring?</summary>
        <p>
          Start with a readable update interval and a moving window that shows enough history for drift and oscillation. Then tighten
          the cadence for metrics where short spikes matter.
        </p>
        <p>
          Learn more: <a href="/guides/real-time-strip-chart">real-time strip chart monitoring</a>.
        </p>
      </details>
    </section>
  );
}
