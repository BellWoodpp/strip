import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2bucket.stripchart.org",
      },
      {
        protocol: "https",
        hostname: "r2bucket.billybobgames.org",
      },
      {
        protocol: "https",
        hostname: "r2boot.silksong.uk",
      },
    ],
  },
};

export default nextConfig;
