import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strip chart guides",
  description:
    "Learn what a strip chart is, when to use it, and how to build strip charts in tools like Excel. Practical guidance for real-time monitoring teams.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Strip chart guides",
    description:
      "Learn what a strip chart is, when to use it, and how to build strip charts in tools like Excel. Practical guidance for real-time monitoring teams.",
    url: "/guides",
    siteName: "strip chart",
    locale: "en_US",
    type: "website",
    images: [{ url: "/chart.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strip chart guides",
    description:
      "Learn what a strip chart is, when to use it, and how to build strip charts in tools like Excel. Practical guidance for real-time monitoring teams.",
    images: ["/chart.svg"],
  },
};

const guides = [
  {
    href: "/guides/what-is-a-strip-chart",
    title: "What is a strip chart?",
    description: "Definition, key characteristics, and common monitoring use cases.",
  },
  {
    href: "/guides/strip-chart-vs-line-chart",
    title: "Strip chart vs line chart",
    description: "How they differ, and when a scrolling strip chart is the better choice.",
  },
  {
    href: "/guides/real-time-strip-chart",
    title: "Real-time strip charts for monitoring",
    description: "Sampling, update cadence, and how teams avoid missing short-lived spikes.",
  },
  {
    href: "/guides/strip-chart-in-excel",
    title: "How to make a strip chart in Excel",
    description: "A practical recipe using Excel charts and formatting tricks.",
  },
  {
    href: "/guides/stripchart-examples",
    title: "Strip chart examples",
    description: "Patterns to recognize: drift, step changes, noise, and intermittent faults.",
  },
];

export default function GuidesPage() {
  return (
    <div className="page">
      <section className="hero">
        <p className="eyebrow">Guides</p>
        <h1>Strip chart guides and examples</h1>
        <p className="lead">
          Build better monitoring intuition. Use these short guides to learn strip chart basics and then try the interactive demo.
        </p>
        <div className="cta">
          <Link href="/stripchart" className="primary">
            Open the live strip chart
          </Link>
          <Link href="/" className="secondary">
            Back to home
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Start here</h2>
        <ul className="feature-grid">
          {guides.map((guide) => (
            <li key={guide.href}>
              <h3>
                <Link href={guide.href}>{guide.title}</Link>
              </h3>
              <p>{guide.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

