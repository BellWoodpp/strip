import { WsrvImage } from "@/components/WsrvImage";

export default function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div>
          <p className="brand">strip chart</p>
          <p className="body-text">
            Real-time strip chart visualizations tailored for data-driven teams across the United States.
          </p>
          <p className="body-text">
            <a href="/guides">Guides</a> | <a href="/stripchart">Live demo</a>
          </p>
        </div>
        <div className="links">
          <p className="label">Friend Links</p>
          <div className="link-grid">
            <a className="friend-link" href="https://billybobgames.org/" target="_blank" rel="noopener noreferrer">
              <WsrvImage
                src="https://r2bucket.billybobgames.org/logo/amazon-game-development.svg"
                alt="Billy Bob Games"
                width={68}
                height={68}
                layout="fixed"
              />
            </a>
            <a className="friend-link" href="https://silksong.uk/" target="_blank" rel="noopener noreferrer">
              <WsrvImage
                src="https://r2boot.silksong.uk/silksong/silksong3.ico"
                alt="Silksong"
                width={68}
                height={68}
                layout="fixed"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="disclaimer">© {year} strip chart. All rights reserved.</p>
    </footer>
  );
}
