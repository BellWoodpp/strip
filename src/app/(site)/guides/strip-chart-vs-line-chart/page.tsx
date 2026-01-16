import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strip chart vs line chart",
  description:
    "Strip charts scroll with live data, while line charts are often static snapshots. Learn when each visualization is the right choice.",
  alternates: { canonical: "/guides/strip-chart-vs-line-chart" },
  openGraph: {
    title: "Strip chart vs line chart",
    description:
      "Strip charts scroll with live data, while line charts are often static snapshots. Learn when each visualization is the right choice.",
    url: "/guides/strip-chart-vs-line-chart",
    siteName: "strip chart",
    locale: "en_US",
    type: "article",
    images: [{ url: "/chart.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strip chart vs line chart",
    description:
      "Strip charts scroll with live data, while line charts are often static snapshots. Learn when each visualization is the right choice.",
    images: ["/chart.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Strip chart vs line chart",
  description:
    "Strip charts scroll with live data, while line charts are often static snapshots. Learn when each visualization is the right choice.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stripchart.org/guides/strip-chart-vs-line-chart" },
  publisher: { "@type": "Organization", name: "strip chart" },
};

export default function StripChartVsLineChartPage() {
  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <p className="eyebrow">Guide</p>
        <h1>Strip chart vs line chart</h1>
        <p className="lead">
          Both show trends over time, but they serve different workflows. Use a strip chart when you need continuous awareness and a
          line chart when you need a stable report view.
        </p>
        <div className="cta">
          <Link href="/stripchart" className="primary">
            Open the live strip chart
          </Link>
          <Link href="/guides" className="secondary">
            All guides
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Key differences</h2>
        <ul className="feature-grid">
          <li>
            <h3>Time window</h3>
            <p>Strip charts typically keep a moving window (last N seconds/minutes). Line charts are commonly fixed ranges.</p>
          </li>
          <li>
            <h3>Operator cadence</h3>
            <p>Strip charts are tuned for continuous monitoring. Line charts are tuned for analysis and reporting.</p>
          </li>
          <li>
            <h3>Signal detection</h3>
            <p>Strip charts make it easier to notice drift, jitter, and intermittent faults as they happen.</p>
          </li>
        </ul>
      </section>

      <section className="section accent">
        <h2>When a strip chart wins</h2>
        <p>
          Choose a strip chart when data changes quickly, when short spikes matter, or when teams must coordinate live responses.
          Examples include industrial processes, real-time telemetry, on-call incident response, and lab experiments.
        </p>
        <p>
          Next: <Link href="/guides/real-time-strip-chart">learn how real-time strip charts are tuned</Link>.
        </p>
      </section>

      <section className="section">
        <h2>When a line chart wins</h2>
        <p>
          Choose a line chart for stable comparisons, longer historical ranges, and reporting contexts where the viewer wants a
          fixed axis and a fixed time window. Line charts are also better when you need to annotate and print.
        </p>
      </section>
    </div>
  );
}

