import type { Metadata } from "next";
import StripChartDemo from "./StripChartDemo";

export const metadata: Metadata = {
  title: "Live strip chart console",
  description:
    "Tune update speeds, simulate data streams, and watch a responsive strip chart animate in real time for monitoring demos.",
};

export default function StripChartPage() {
  return <StripChartDemo />;
}
