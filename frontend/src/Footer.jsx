import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <Link to="/" className="footer-brand">
          <img src="/image.png" alt="Byte Beans logo" width="48" height="48" aria-hidden="true" />
          <div>
            <span>Byte Beans</span>
            <p className="footer-tagline">Where coffee meets code.</p>
          </div>
        </Link>
        <nav aria-label="Footer navigation">
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <div className="footer-social">
          <a href="https://www.instagram.com/bgdevofficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@bgdev.official" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/bgdev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="https://bgdevofficial.com/" target="_blank" rel="noopener noreferrer" aria-label="Website">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </a>
        </div>
        <p className="footer-copy">© {year} Byte Beans. Crafted with ☕ and code.</p>
        <p className="footer-made">Made by <a href="https://bgdevofficial.com/" target="_blank" rel="noopener noreferrer">BGDev</a></p>
      </div>
    </footer>
  );
}
