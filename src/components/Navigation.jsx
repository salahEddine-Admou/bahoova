import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { mockData } from "../mock";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/agency", label: "Agence" },
    { path: "/services", label: "Notre Expertise" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/references", label: "Références" },
    { path: "/contact", label: "Contact" },
    { path: "/gallery", label: "Galerie" }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      zIndex: 1000,
      padding: '1.5rem 0'
    }}>
      <div className="container">
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          width: "100%" 
        }}>
          <Link 
            to="/" 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "12px",
              textDecoration: 'none'
            }}
          >
            <img 
              src="/images/gallery/bahoova-logo-profile.png" 
              alt="BAHOOVA Events Logo" 
              style={{ 
                height: "50px", 
                width: "50px",
                objectFit: "contain",
                borderRadius: "50%"
              }}
            />
            <span style={{ 
              fontSize: "1.25rem", 
              fontWeight: "400", 
              color: "#1a1a1a",
              letterSpacing: '0.5px'
            }}>
              BAHOOVA Events
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ 
            display: window.innerWidth > 768 ? "flex" : "none",
            gap: '2.5rem'
          }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? "#1a1a1a" : "#666",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: "400",
                  letterSpacing: "0.3px",
                  textTransform: "none",
                  position: "relative",
                  transition: "color 0.3s ease",
                  padding: "0.5rem 0"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = location.pathname === item.path ? "#1a1a1a" : "#666";
                }}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: '#1a1a1a'
                  }} />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: window.innerWidth <= 768 ? "block" : "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#333",
              padding: "0.5rem"
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(10px)",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
              padding: "2rem 0",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              textAlign: "center"
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? "#1a1a1a" : "#666",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: "400",
                  letterSpacing: "0.3px",
                  textTransform: "none",
                  padding: "0.75rem 0",
                  transition: "color 0.3s ease"
                }}
                onClick={() => setIsMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.target.style.color = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = location.pathname === item.path ? "#1a1a1a" : "#666";
                }}
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