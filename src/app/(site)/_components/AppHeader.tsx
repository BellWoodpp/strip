import { WsrvImage } from "@/components/WsrvImage";
import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="brand">
          <WsrvImage
            src="https://r2bucket.stripchart.org/trip.ico"
            alt=""
            className="logo"
            width={36}
            height={36}
            layout="fixed"
            priority
          />
          strip chart
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="/stripchart" className="link">
            Live Strip Chart
          </Link>
          <Link href="/guides" className="link">
            Guides
          </Link>
          <Link href="/#features" className="link">
            Features
          </Link>
          <Link href="/#faq" className="link">
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
}
