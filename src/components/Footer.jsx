import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { mockData } from "../mock";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate newsletter signup
    setTimeout(() => {
      setSubscribeMessage('Merci pour votre inscription à notre newsletter !');
      setIsSubscribing(false);
      setEmail('');
    }, 1000);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 style={{ marginBottom: "20px" }}>
              {mockData.company.name}
            </h3>
            <p style={{ marginBottom: "16px", color: "var(--text-secondary)" }}>
              Votre partenaire expert en organisation de congrès, forums scientifiques et événements de recherche au Maroc. 
              Nous créons des expériences professionnelles exceptionnelles pour la communauté scientifique.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Phone size={16} color="var(--text-secondary)" />
                <span style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  {mockData.company.contact.phone}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Mail size={16} color="var(--text-secondary)" />
                <span style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  {mockData.company.contact.email}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin size={16} color="var(--text-secondary)" />
                <span style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  {mockData.company.contact.address}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-section">
            <h3>Navigation</h3>
            <Link to="/about">Qui sommes-nous ?</Link>
            <Link to="/services">Services</Link>
            <Link to="/venues">Lieux</Link>
            <Link to="/gallery">Galerie</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p style={{ marginBottom: "16px", color: "var(--text-secondary)" }}>
              Recevez des invitations, des mises à jour et des bonus pour vos commandes.
            </p>
            
            {subscribeMessage && (
              <div style={{ 
                padding: "12px", 
                background: "var(--bg-primary)", 
                border: "1px solid var(--border-light)",
                marginBottom: "16px",
                borderRadius: "0px"
              }}>
                <p style={{ color: "var(--status-success)", margin: 0, fontSize: "12px" }}>
                  {subscribeMessage}
                </p>
              </div>
            )}
            
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="newsletter-input"
                required
              />
              <button
                type="submit"
                className="newsletter-button"
                disabled={isSubscribing}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px"
                }}
              >
                {isSubscribing ? (
                  "Envoi..."
                ) : (
                  <>
                    S'abonner
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright © 2025. Tous droits réservés. | Designed by Salah Eddine Admou.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;