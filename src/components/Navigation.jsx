import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { mockData } from "../mock";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/expert-gestion-evenements-maroc", label: "Expert Maroc" },
    { path: "/about", label: "Qui sommes-nous ?" },
    { path: "/services", label: "Services" },
    { path: "/venues", label: "Lieux" },
    { path: "/gallery", label: "Galerie" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <header className="navigation-header">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <Link to="/" className="navigation-logo">
            {mockData.company.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="navigation-menu" style={{ display: window.innerWidth > 768 ? "flex" : "none" }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`navigation-link ${location.pathname === item.path ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: window.innerWidth <= 768 ? "block" : "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)"
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="mobile-navigation"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "var(--bg-primary)",
              borderBottom: "1px solid var(--border-light)",
              padding: "20px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`navigation-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;