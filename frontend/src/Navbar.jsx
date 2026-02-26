import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "./context/cartContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact" },
  ];

  const closeDrawer = () => setDrawerOpen(false);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link nav-link-active" : "nav-link";

  return (
    <>
      <header className="navbar" role="banner">
        <div className="navbar-inner">
          <Link to="/" className="nav-logo" aria-label="Byte Beans Home">
            <img src="/image.png" alt="Byte Beans" width="48" height="48" aria-hidden="true" />
            <span>Byte Beans</span>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={linkClass} onClick={closeDrawer}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-right">
            <Link to="/cart" className="nav-cart" aria-label={`Cart with ${cartCount} items`}>
              <span className="nav-cart-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 4h8l2 14H6L8 4Z" />
                  <path d="M8 4V3a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 3v1" />
                  <path d="M9 10h6" strokeWidth="1.2" />
                  <path d="M10 14h4" strokeWidth="1.2" />
                </svg>
              </span>
              {cartCount > 0 && <span className="nav-cart-badge">{cartCount}</span>}
            </Link>
            <Link to="/menu" className="nav-cta">
              Order Online
            </Link>
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`nav-overlay ${drawerOpen ? "open" : ""}`}
        onClick={closeDrawer}
        onKeyDown={(e) => e.key === "Escape" && closeDrawer()}
        role="button"
        tabIndex={-1}
        aria-hidden="true"
      />

      <aside
        className={`nav-drawer ${drawerOpen ? "open" : ""}`}
        aria-label="Mobile menu"
        aria-hidden={!drawerOpen}
      >
        <button
          type="button"
          className="nav-drawer-close"
          onClick={closeDrawer}
          aria-label="Close menu"
        >
          ×
        </button>
        <ul className="nav-drawer-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} onClick={closeDrawer}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/menu" onClick={closeDrawer}>
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={closeDrawer} className="nav-drawer-cart">
              <span className="nav-cart-icon nav-cart-icon-sm" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 4h8l2 14H6L8 4Z" />
                  <path d="M8 4V3a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 3v1" />
                  <path d="M9 10h6" strokeWidth="1.2" />
                  <path d="M10 14h4" strokeWidth="1.2" />
                </svg>
              </span>
              Cart {cartCount > 0 && `(${cartCount})`}
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
