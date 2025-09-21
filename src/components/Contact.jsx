import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { mockData } from "../mock";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    eventType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Veuillez remplir tous les champs obligatoires.');
      setIsSubmitting(false);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage('Veuillez entrer une adresse email valide.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Create mailto link for email client
      const subject = encodeURIComponent(formData.subject || 'Nouveau message depuis le site web');
      const body = encodeURIComponent(`
Nom: ${formData.name}
Email: ${formData.email}
Type d'événement: ${formData.eventType || 'Non spécifié'}

Message:
${formData.message}
      `);
      
      const mailtoLink = `mailto:${mockData.company.contact.email}?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitMessage('Votre message a été préparé dans votre client email. Merci de l\'envoyer pour nous contacter.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        eventType: '',
        message: ''
      });
      
    } catch (error) {
      setSubmitMessage('Une erreur est survenue. Veuillez nous contacter directement par email.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <h1 className="hero-large" style={{ marginBottom: "24px" }}>
              Contactez-nous
            </h1>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
              Prêt à donner vie à votre événement de rêve ? Notre équipe d'experts est là pour vous accompagner 
              à chaque étape, de la conception initiale à la réalisation parfaite.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="grid-two-column" style={{ alignItems: "flex-start" }}>
            {/* Contact Information */}
            <div>
              <h2 className="heading-1" style={{ marginBottom: "32px" }}>
                Informations de contact
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    background: "var(--bg-primary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border-light)",
                    flexShrink: 0
                  }}>
                    <Phone size={20} color="var(--text-primary)" />
                  </div>
                  <div>
                    <h3 className="heading-3" style={{ marginBottom: "4px" }}>
                      Téléphone
                    </h3>
                    <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                      {mockData.company.contact.phone}
                    </p>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    background: "var(--bg-primary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border-light)",
                    flexShrink: 0
                  }}>
                    <Mail size={20} color="var(--text-primary)" />
                  </div>
                  <div>
                    <h3 className="heading-3" style={{ marginBottom: "4px" }}>
                      Email
                    </h3>
                    <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                      {mockData.company.contact.email}
                    </p>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    background: "var(--bg-primary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border-light)",
                    flexShrink: 0
                  }}>
                    <MapPin size={20} color="var(--text-primary)" />
                  </div>
                  <div>
                    <h3 className="heading-3" style={{ marginBottom: "4px" }}>
                      Adresse
                    </h3>
                    <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                      {mockData.company.contact.address}
                    </p>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    background: "var(--bg-primary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border-light)",
                    flexShrink: 0
                  }}>
                    <Clock size={20} color="var(--text-primary)" />
                  </div>
                  <div>
                    <h3 className="heading-3" style={{ marginBottom: "4px" }}>
                      Horaires
                    </h3>
                    <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                      Lun-Ven: 9h00-18h00<br />
                      Sam: 10h00-16h00
                    </p>
                  </div>
                </div>
              </div>
              
              <div style={{ 
                padding: "24px", 
                background: "var(--bg-primary)", 
                border: "1px solid var(--border-light)"
              }}>
                <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                  Planifiez votre événement avec nous dès aujourd'hui !
                </h3>
                <p className="body-regular" style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
                  Nos experts sont disponibles pour une consultation gratuite et personnalisée.
                </p>
                <a 
                  href={mockData.company.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  Consultation gratuite
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div style={{ background: "var(--bg-primary)", padding: "40px", border: "1px solid var(--border-light)" }}>
              <h2 className="heading-1" style={{ marginBottom: "24px" }}>
                Envoyez-nous un message
              </h2>
              
              {submitMessage && (
                <div style={{ 
                  padding: "16px", 
                  background: submitMessage.includes('erreur') ? "#fef2f2" : "#f0f9ff", 
                  border: `1px solid ${submitMessage.includes('erreur') ? "#fecaca" : "#bae6fd"}`,
                  marginBottom: "24px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  {submitMessage.includes('erreur') ? (
                    <AlertCircle size={20} color="#dc2626" />
                  ) : (
                    <CheckCircle size={20} color="#059669" />
                  )}
                  <p className="body-regular" style={{ 
                    color: submitMessage.includes('erreur') ? "#dc2626" : "#059669", 
                    margin: 0,
                    fontWeight: "500"
                  }}>
                    {submitMessage}
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Votre nom complet"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Sujet de votre demande"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="eventType" className="form-label">
                    Type d'événement
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Sélectionnez un type d'événement</option>
                    <option value="mariage">Mariage</option>
                    <option value="corporatif">Événement corporatif</option>
                    <option value="prive">Fête privée</option>
                    <option value="culturel">Événement culturel</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    required
                    placeholder="Décrivez votre projet d'événement, vos besoins, la date prévue, le nombre d'invités..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{ 
                    width: "100%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: "8px" 
                  }}
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
              
              {/* Alternative Contact Methods */}
              <div style={{ 
                marginTop: "32px", 
                padding: "24px", 
                background: "var(--bg-secondary)", 
                borderRadius: "12px",
                border: "1px solid var(--border-light)"
              }}>
                <h3 className="heading-3" style={{ marginBottom: "16px", textAlign: "center" }}>
                  Ou contactez-nous directement
                </h3>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
                  gap: "16px" 
                }}>
                  <a 
                    href={`mailto:${mockData.company.contact.email}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px 16px",
                      background: "var(--interactive-base)",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                      fontWeight: "500"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "var(--interactive-hover)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "var(--interactive-base)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <Mail size={16} />
                    Email
                  </a>
                  
                  <a 
                    href={mockData.company.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px 16px",
                      background: "#25D366",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                      fontWeight: "500"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#128C7E";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#25D366";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                  
                  <a 
                    href={`tel:${mockData.company.contact.phone}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px 16px",
                      background: "var(--text-primary)",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                      fontWeight: "500"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "var(--text-secondary)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "var(--text-primary)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <Phone size={16} />
                    Téléphone
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ height: "400px", background: "var(--bg-subtle)" }}>
        <div style={{ 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          color: "var(--text-secondary)"
        }}>
          <div style={{ textAlign: "center" }}>
            <MapPin size={48} style={{ marginBottom: "16px" }} />
            <h3 className="heading-3" style={{ marginBottom: "8px" }}>
              Localisation
            </h3>
            <p className="body-regular">
              Carte Google Maps sera intégrée ici<br />
              {mockData.company.contact.address}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;