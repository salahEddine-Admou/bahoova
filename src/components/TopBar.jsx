import React from "react";
import { MessageCircle, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="container topbar-content">
        {/* Social Media Links */}
        <div className="topbar-social">
          <a 
            href="https://facebook.com/BahoovaEvents" 
            target="_blank" 
            rel="noopener noreferrer"
            className="topbar-social-link"
          >
            <Facebook size={16} />
          </a>
          
          <a 
            href="https://instagram.com/bahoovaevents" 
            target="_blank" 
            rel="noopener noreferrer"
            className="topbar-social-link"
          >
            <Instagram size={16} />
          </a>
          
          <a 
            href="https://linkedin.com/company/bahoovaevents" 
            target="_blank" 
            rel="noopener noreferrer"
            className="topbar-social-link"
          >
            <Linkedin size={16} />
          </a>
        </div>

        {/* Contact Information */}
        <div className="topbar-contact">
          {/* Live Chat */}
          <a 
            href="#contact" 
            className="topbar-contact-link"
          >
            <MessageCircle size={16} color="#ff6b6b" />
            <span>Live Chat</span>
          </a>

          {/* Email */}
          <a 
            href="mailto:bahoovaevents@gmail.com" 
            className="topbar-contact-link"
          >
            <Mail size={16} color="#ff6b6b" />
            <span>bahoovaevents@gmail.com</span>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/2126663322302" 
            target="_blank" 
            rel="noopener noreferrer"
            className="topbar-contact-link"
          >
            <Phone size={16} color="#ff6b6b" />
            <span>+212 666 332 230</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
