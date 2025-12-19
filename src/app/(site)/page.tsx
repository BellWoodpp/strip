import type { Metadata } from "next";
import Link from "next/link";
import Faq from "./_components/Faq";

export const metadata: Metadata = {
  title: "strip chart",
  description:
    "Explore strip chart visualizations, control live data streams, and learn how real-time strip charts drive informed decisions for American teams.",
  keywords: ["strip chart", "real-time data visualization", "live charts", "data monitoring"],
};

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <p className="eyebrow">Real-Time Visualization</p>
        <h1>strip chart intelligence for decisive American teams</h1>
        <p className="lead">
          Deliver precise strip chart visibility to analysts, engineers, and operations leaders who need trustworthy telemetry at a
          glance.
        </p>
        <div className="cta">
          <Link href="/stripchart" className="primary">
            Launch the live strip chart
          </Link>
          <Link href="/#features" className="secondary">
            View capabilities
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Why a strip chart still matters in modern monitoring</h2>
        <p>
          American engineering, manufacturing, healthcare, and energy teams depend on second-by-second awareness. A strip chart keeps
          operators connected to subtle swings without the distraction of complicated dashboards. Instead of juggling static reports
          or delayed alerts, the strip chart channels continuous context, so you can pinpoint the instant a line wobbles and
          intervene before risk compounds.
        </p>
        <p>
          Because a strip chart slides data along one horizon, human intuition kicks in fast. You sense the cadence of pumps or
          patient vitals as the strip chart scrolls, making it easier to spot anomalies, confirm controls, and brief stakeholders.
        </p>
      </section>

      <section className="section accent" id="features">
        <h2>Features tuned to American operations</h2>
        <p>
          From Phoenix fabrication plants to Detroit hubs, the strip chart adapts to unique rhythms. Configuration controls let you
          set update speeds, mute noise, or run experiments without pausing the strip chart. Responsive layouts keep the strip chart
          legible on tablets and widescreens alike.
        </p>
        <ul className="feature-grid">
          <li>
            <h3>Adaptive Streams</h3>
            <p>Add or remove strip chart feeds in seconds to match production batches and emergency drills.</p>
          </li>
          <li>
            <h3>Precision Timing</h3>
            <p>Fine-tune the strip chart interval to test response strategies and compare 50ms spikes against rolling averages.</p>
          </li>
          <li>
            <h3>Legend Clarity</h3>
            <p>The persistent legend keeps each strip chart color-coded so stakeholders identify ownership at a glance.</p>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Built for the realities of U.S. teams</h2>
        <p>
          American organizations juggle compliance, labor gaps, and rising expectations. The strip chart respects those constraints
          with clarity and trustworthy defaults so teams can capture observations and share a common narrative without new jargon.
        </p>
        <p>
          Clean typography and accessible contrast keep attention on the signal. Engineers trust the strip chart because alarms
          trigger only on authentic variance, shortening stand-ups and anchoring executive briefings in evidence.
        </p>
      </section>

      <Faq />
    </div>
  );
}
