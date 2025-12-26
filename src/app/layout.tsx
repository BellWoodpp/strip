import type { Metadata } from "next";
import Script from "next/script";
import AppFooter from "./(site)/_components/AppFooter";
import AppHeader from "./(site)/_components/AppHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "strip chart",
    template: "%s | strip chart",
  },
  description:
    "Explore strip chart visualizations, control live data streams, and learn how real-time strip charts drive informed decisions for American teams.",
  keywords: ["strip chart", "real-time data visualization", "live charts", "data monitoring"],
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      url: "https://r2bucket.stripchart.org/trip.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics 分析工具 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LPHSS8GTC2" strategy="beforeInteractive" />
        <Script id="gtag-init" strategy="beforeInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LPHSS8GTC2');
          `.trim()}
        </Script>
        <Script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6581885234407347"
        />
        <Script src="https://analytics.ahrefs.com/analytics.js" async data-key="vGRwhDVdZq9ylpXOV3CX/Q" />
        <div className="wrapper">
          <AppHeader />
          <main className="main">{children}</main>
          <AppFooter />
        </div>
      </body>
    </html>
  );
}
