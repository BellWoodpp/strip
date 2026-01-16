import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to make a strip chart in Excel",
  description:
    "A practical guide to building a strip chart style view in Excel using time-series charts, fixed axes, and formatting for monitoring.",
  alternates: { canonical: "/guides/strip-chart-in-excel" },
  openGraph: {
    title: "How to make a strip chart in Excel",
    description:
      "A practical guide to building a strip chart style view in Excel using time-series charts, fixed axes, and formatting for monitoring.",
    url: "/guides/strip-chart-in-excel",
    siteName: "strip chart",
    locale: "en_US",
    type: "article",
    images: [{ url: "/chart.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to make a strip chart in Excel",
    description:
      "A practical guide to building a strip chart style view in Excel using time-series charts, fixed axes, and formatting for monitoring.",
    images: ["/chart.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to make a strip chart in Excel",
  description:
    "A practical guide to building a strip chart style view in Excel using time-series charts, fixed axes, and formatting for monitoring.",
  step: [
    { "@type": "HowToStep", name: "Prepare a time column", text: "Create a time column and a value column (or multiple series)." },
    {
      "@type": "HowToStep",
      name: "Insert a time-series chart",
      text: "Insert a line chart and ensure the horizontal axis is based on time.",
    },
    {
      "@type": "HowToStep",
      name: "Fix axes and formatting",
      text: "Use a consistent y-axis range, increase contrast, and reduce clutter for readability.",
    },
    {
      "@type": "HowToStep",
      name: "Simulate a moving window (optional)",
      text: "Filter the time range or use helper columns to show only the most recent samples.",
    },
  ],
};

export default function StripChartInExcelPage() {
  return (
    <div className="page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <p className="eyebrow">Guide</p>
        <h1>How to make a strip chart in Excel</h1>
        <p className="lead">
          Excel does not label charts "strip charts," but you can build the same operator-friendly view by using a time-series chart,
          stable axes, and formatting designed for continuous monitoring.
        </p>
        <div className="cta">
          <Link href="/guides" className="secondary">
            All guides
          </Link>
          <Link href="/stripchart" className="primary">
            Try the interactive strip chart
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Recipe</h2>
        <ol>
          <li>
            <strong>Prepare columns:</strong> Time (x-axis) and one or more value series.
          </li>
          <li>
            <strong>Insert a line chart:</strong> Use a standard line chart so Excel plots value changes over time.
          </li>
          <li>
            <strong>Lock the y-axis:</strong> Set consistent min/max so drift and spikes are comparable between sessions.
          </li>
          <li>
            <strong>Reduce clutter:</strong> Light gridlines, readable line thickness, and clear legend labels.
          </li>
          <li>
            <strong>Optional moving window:</strong> Show only the last N rows or last N minutes using filters or helper columns.
          </li>
        </ol>
      </section>

      <section className="section accent">
        <h2>For real-time work, use a live strip chart</h2>
        <p>
          Excel is great for analysis and reporting. For live monitoring, an interactive strip chart is easier to tune and faster to
          interpret under pressure.
        </p>
        <p>
          Next: <Link href="/stripchart">open the live strip chart demo</Link>.
        </p>
      </section>
    </div>
  );
}
