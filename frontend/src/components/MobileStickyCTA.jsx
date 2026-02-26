import { Link } from "react-router-dom";

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta" aria-hidden="true">
      <Link to="/menu" className="mobile-sticky-cta-btn">
        Order Online
      </Link>
    </div>
  );
}
