import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext.jsx";
import { getAssetUrl } from "../utils/assets.js";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/courses", label: "Courses" },
  { path: "/activities", label: "Activities" },
  { path: "/partners", label: "Partners" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`premium-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light alpha-navbar">
          <Link className="navbar-brand" to="/">
            <img src={getAssetUrl("/img/logo-cropped.png")} alt="Alpha IT Managed Services" className="header-logo" />
          </Link>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`navbar-collapse justify-content-end ${menuOpen ? "show" : "collapse"}`} id="navbarNav">
            <ul className="navbar-nav align-items-center premium-nav">
              {navItems.map((item) => (
                <li className="nav-item" key={item.path}>
                  <Link
                    className={`nav-link ${pathname === item.path ? "active" : ""}`}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="dark-mode-toggle"
                  onClick={toggleDarkMode}
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  title={darkMode ? "Light mode" : "Dark mode"}
                >
                  <span className="dark-mode-toggle__icon">{darkMode ? "☀️" : "🌙"}</span>
                </button>
              </li>
              <li>
                <Link to="/register" className="glow-btn" onClick={() => setMenuOpen(false)}>
                  Register Now
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
