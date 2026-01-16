import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real-time strip chart monitoring",
  description:
    "Learn how to tune a real-time strip chart: update interval, moving window, noise, and how to avoid missing short-lived spikes.",
  alternates: { canonical: "/guides/real-time-strip-chart" },
  openGraph: {
    title: "Real-time strip chart monitoring",
    description:
      "Learn how to tune a real-time strip chart: update interval, moving window, noise, and how to avoid missing short-lived spikes.",
    url: "/guides/real-time-strip-chart",
    siteName: "strip chart",
    locale: "en_US",
    type: "article",
    images: [{ url: "/chart.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-time strip chart monitoring",
    description:
      "Learn how to tune a real-time strip chart: update interval, moving window, noise, and how to avoid missing short-lived spikes.",
    images: ["/chart.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Real-time strip chart monitoring",
  description:
    "Learn how to tune a real-time strip chart: update interval, moving window, noise, and how to avoid missing short-lived spikes.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stripchart.org/guides/real-time-strip-chart" },
  publisher: { "@type": "Organization", name: "strip chart" },
};

export default function RealTimeStripChartPage() {
  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <p className="eyebrow">Guide</p>
        <h1>Real-time strip chart monitoring</h1>
        <p className="lead">
          A good real-time strip chart is not just \"live.\" It is tuned for decision-making: the time window, sampling cadence, and
          visual clarity match how operators actually respond to change.
        </p>
        <div className="cta">
          <Link href="/stripchart" className="primary">
            Tune a live strip chart
          </Link>
          <Link href="/guides" className="secondary">
            All guides
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Update interval and perception</h2>
        <p>
          If updates are too slow, short spikes vanish between samples. If updates are too fast, noise dominates and operators stop
          trusting the signal. A practical approach is to start with a moderate cadence and then tighten it for metrics where
          milliseconds matter.
        </p>
      </section>

      <section className="section accent">
        <h2>Moving window: how much history is \"enough\"</h2>
        <p>
          A strip chart usually shows a fixed, recent window (for example, 30-120 seconds). The right window is long enough to show
          drift and oscillation, but short enough that the latest behavior stays readable.
        </p>
      </section>

      <section className="section">
        <h2>Common patterns to watch</h2>
        <ul className="feature-grid">
          <li>
            <h3>Drift</h3>
            <p>Slow movement away from baseline that can be missed if you only review snapshots.</p>
          </li>
          <li>
            <h3>Step change</h3>
            <p>A sudden level shift after a deployment, valve change, or configuration edit.</p>
          </li>
          <li>
            <h3>Intermittent spikes</h3>
            <p>Brief spikes that require the right sampling and window length to be visible.</p>
          </li>
        </ul>
        <p>
          Next: <Link href="/guides/stripchart-examples">see more strip chart examples</Link>.
        </p>
      </section>
    </div>
  );
}
