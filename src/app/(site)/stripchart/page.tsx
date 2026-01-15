import type { Metadata } from "next";
import StripChartDemo from "./StripChartDemo";

export const metadata: Metadata = {
  title: "Live strip chart console",
  description:
    "Tune update speeds, simulate data streams, and watch a responsive strip chart animate in real time for monitoring demos.",
  alternates: {
    canonical: "/stripchart",
  },
  openGraph: {
    title: "Live strip chart console",
    description:
      "Tune update speeds, simulate data streams, and watch a responsive strip chart animate in real time for monitoring demos.",
    url: "/stripchart",
    siteName: "strip chart",
    locale: "en_US",
    type: "website",
    images: [{ url: "/chart.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live strip chart console",
    description:
      "Tune update speeds, simulate data streams, and watch a responsive strip chart animate in real time for monitoring demos.",
    images: ["/chart.svg"],
  },
};

export default function StripChartPage() {
  return <StripChartDemo />;
}
