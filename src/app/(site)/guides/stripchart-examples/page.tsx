import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strip chart examples",
  description:
    "Learn common strip chart patterns: drift, oscillation, step changes, noise, and intermittent faults. Use these examples to build monitoring intuition.",
  alternates: { canonical: "/guides/stripchart-examples" },
  openGraph: {
    title: "Strip chart examples",
    description:
      "Learn common strip chart patterns: drift, oscillation, step changes, noise, and intermittent faults. Use these examples to build monitoring intuition.",
    url: "/guides/stripchart-examples",
    siteName: "strip chart",
    locale: "en_US",
    type: "article",
    images: [{ url: "/chart.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strip chart examples",
    description:
      "Learn common strip chart patterns: drift, oscillation, step changes, noise, and intermittent faults. Use these examples to build monitoring intuition.",
    images: ["/chart.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Strip chart examples",
  description:
    "Learn common strip chart patterns: drift, oscillation, step changes, noise, and intermittent faults. Use these examples to build monitoring intuition.",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://stripchart.org/guides/stripchart-examples" },
  publisher: { "@type": "Organization", name: "strip chart" },
};

export default function StripChartExamplesPage() {
  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <p className="eyebrow">Guide</p>
        <h1>Strip chart examples</h1>
        <p className="lead">
          A strip chart is most valuable when you can quickly recognize patterns. Here are the shapes operators learn to spot.
        </p>
        <div className="cta">
          <Link href="/stripchart" className="primary">
            Watch patterns in the live demo
          </Link>
          <Link href="/guides" className="secondary">
            All guides
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Patterns to recognize</h2>
        <ul className="feature-grid">
          <li>
            <h3>Drift</h3>
            <p>Slow movement away from baseline that often signals calibration or load changes.</p>
          </li>
          <li>
            <h3>Oscillation</h3>
            <p>Repeating waves that can indicate control loop instability or resonance.</p>
          </li>
          <li>
            <h3>Step change</h3>
            <p>A sudden level shift after a valve change, deployment, or configuration update.</p>
          </li>
          <li>
            <h3>Noise increase</h3>
            <p>Higher jitter that can point to sensor issues or unstable sampling.</p>
          </li>
          <li>
            <h3>Intermittent faults</h3>
            <p>Brief spikes or dropouts that require the right cadence and window to be visible.</p>
          </li>
        </ul>
      </section>

      <section className="section accent">
        <h2>Next steps</h2>
        <p>
          If you are building dashboards, use these patterns as test cases. If you are monitoring live systems, tune update cadence so
          short-lived spikes cannot hide.
        </p>
        <p>
          Recommended reading: <Link href="/guides/real-time-strip-chart">real-time strip chart monitoring</Link>.
        </p>
      </section>
    </div>
  );
}

