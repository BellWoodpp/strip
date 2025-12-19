import Image from "next/image";

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
        </div>
        <div className="links">
          <p className="label">Friend Links</p>
          <div className="link-grid">
            <a className="friend-link" href="https://billybobgames.org/" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://r2bucket.billybobgames.org/logo/amazon-game-development.svg"
                alt="Billy Bob Games"
                width={68}
                height={68}
              />
            </a>
            <a className="friend-link" href="https://silksong.uk/" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://r2boot.silksong.uk/silksong/silksong3.ico"
                alt="Silksong"
                width={68}
                height={68}
              />
            </a>
          </div>
        </div>
      </div>
      <p className="disclaimer">© {year} strip chart. All rights reserved.</p>
    </footer>
  );
}
