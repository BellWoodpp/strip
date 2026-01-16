import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a strip chart?",
  description:
    "A strip chart is a scrolling time-series display used for continuous monitoring. Learn how strip charts work and where they help most.",
  alternates: { canonical: "/guides/what-is-a-strip-chart" },
  openGraph: {
    title: "What is a strip chart?",
    description:
      "A strip chart is a scrolling time-series display used for continuous monitoring. Learn how strip charts work and where they help most.",
    url: "/guides/what-is-a-strip-chart",
    siteName: "strip chart",
    locale: "en_US",
    type: "article",
    images: [{ url: "/chart.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is a strip chart?",
    description:
      "A strip chart is a scrolling time-series display used for continuous monitoring. Learn how strip charts work and where they help most.",
    images: ["/chart.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is a strip chart?",
  description:
    "A strip chart is a scrolling time-series display used for continuous monitoring. Learn how strip charts work and where they help most.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stripchart.org/guides/what-is-a-strip-chart" },
  publisher: { "@type": "Organization", name: "strip chart" },
};

export default function WhatIsAStripChartPage() {
  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <p className="eyebrow">Guide</p>
        <h1>What is a strip chart?</h1>
        <p className="lead">
          A strip chart is a continuous, scrolling view of a measurement over time. It is designed to keep operators aware of subtle
          changes and short-lived spikes that can be missed in static dashboards.
        </p>
        <div className="cta">
          <Link href="/stripchart" className="primary">
            Try the live strip chart
          </Link>
          <Link href="/guides" className="secondary">
            All guides
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>How a strip chart works</h2>
        <p>
          A strip chart plots values on a timeline while the newest samples appear at one edge and older samples move across the
          screen. The chart typically keeps a fixed time window (for example, the last 30 seconds) so teams can see both the current
          state and the recent trend at a glance.
        </p>
        <p>
          In monitoring, this \"always-on\" context helps engineers confirm whether a control change stabilized a system, whether
          oscillation is developing, or whether noise is masking a real issue.
        </p>
      </section>

      <section className="section accent">
        <h2>When to use a strip chart</h2>
        <ul className="feature-grid">
          <li>
            <h3>Operations monitoring</h3>
            <p>Watch pumps, temperatures, pressure, or throughput in real time and react quickly.</p>
          </li>
          <li>
            <h3>Manufacturing and QA</h3>
            <p>Spot drift or step changes that indicate calibration issues and process variation.</p>
          </li>
          <li>
            <h3>Healthcare telemetry</h3>
            <p>Keep continuous awareness of signals where short anomalies matter.</p>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Strip chart vs line chart</h2>
        <p>
          A line chart is usually static: you choose a range, render it, and interpret. A strip chart is built for continuous
          update, with a moving window and an operator-friendly cadence.
        </p>
        <p>
          Next:{" "}
          <Link href="/guides/strip-chart-vs-line-chart">read the detailed comparison</Link>.
        </p>
      </section>
    </div>
  );
}
