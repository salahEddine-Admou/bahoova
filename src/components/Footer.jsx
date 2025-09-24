import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { mockData } from "../mock";
import { sendNewsletterEmail } from "../emailService";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeMessage('');
    
    // Basic validation
    if (!email) {
      setSubscribeMessage('Veuillez entrer votre adresse email.');
      setIsSubscribing(false);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscribeMessage('Veuillez entrer une adresse email valide.');
      setIsSubscribing(false);
      return;
    }
    
    try {
      // Prepare newsletter subscription email
      const emailData = {
        to: mockData.company.contact.email,
        from: email,
        fromName: 'Newsletter Subscriber',
        subject: 'Inscription à la newsletter BAHOOVA Events',
        body: `
Bonjour,

Je souhaite m'inscrire à votre newsletter pour recevoir des informations sur vos événements et services.

Email: ${email}

Cordialement
        `
      };
      
      // Send email using the newsletter email service
      const result = await sendNewsletterEmail(emailData);
      
      if (result.success) {
        setSubscribeMessage(`✅ ${result.message}
        
📧 Votre inscription à la newsletter a été enregistrée !
• Email : ${email}
• Heure : ${new Date().toLocaleString('fr-FR')}

${process.env.NODE_ENV === 'development' ? '📝 Mode développement : Inscription simulée.' : '📧 Vous recevrez nos actualités par email !'}`);
        setEmail('');
      } else {
        setSubscribeMessage(`❌ ${result.message}`);
      }
      
    } catch (error) {
      setSubscribeMessage('Une erreur est survenue. Veuillez nous contacter directement par email.');
      console.error('Newsletter subscription error:', error);
    }
    
    setIsSubscribing(false);
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
              Nous créons des expériences professionnelles et exceptionnelles.
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
                background: subscribeMessage.includes('erreur') ? "#fef2f2" : "#f0f9ff", 
                border: `1px solid ${subscribeMessage.includes('erreur') ? "#fecaca" : "#bae6fd"}`,
                marginBottom: "16px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
              }}>
                {subscribeMessage.includes('erreur') ? (
                  <AlertCircle size={16} color="#dc2626" />
                ) : (
                  <CheckCircle size={16} color="#059669" />
                )}
                <p style={{ 
                  color: subscribeMessage.includes('erreur') ? "#dc2626" : "#059669", 
                  margin: 0, 
                  fontSize: "12px",
                  fontWeight: "500"
                }}>
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