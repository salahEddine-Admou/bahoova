import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, AlertCircle, Sparkles, Zap, Heart, Star, Target, Rocket } from "lucide-react";
import { mockData } from "../mock";
import EmailDebugger from "./EmailDebugger";
import ColorSwitcher from "./ColorSwitcher";
import AnimatedText from "./AnimatedText";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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

  // Email templates for different event types
  const getEmailTemplate = (eventType, formData) => {
    const templates = {
      'congres-scientifique': {
        subject: 'Demande de Devis - Congrès Scientifique',
        body: `Bonjour l'équipe BAHOOVA Events,

Je souhaite organiser un congrès scientifique et j'aimerais recevoir un devis personnalisé.

INFORMATIONS PERSONNELLES:
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone || 'Non renseigné'}
• Téléphone: ${formData.phone || 'Non renseigné'}

DÉTAILS DE L'ÉVÉNEMENT:
• Type: Congrès Scientifique
• Sujet: ${formData.subject || 'À préciser'}

MESSAGE:
${formData.message}

SERVICES SOUHAITÉS:
• Salle de conférence avec équipements audiovisuels
• Traduction simultanée (si nécessaire)
• Restauration et pauses café
• Accueil et enregistrement des participants
• Support technique et logistique

Pouvez-vous me contacter pour discuter des détails et me faire parvenir une proposition personnalisée ?

Cordialement,
${formData.name}`
      },
      'forum-recherche': {
        subject: 'Organisation Forum de Recherche - Devis',
        body: `Bonjour,

Je vous contacte pour l'organisation d'un forum de recherche.

COORDONNÉES:
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone || 'Non renseigné'}

ÉVÉNEMENT:
• Type: Forum de Recherche
• Sujet: ${formData.subject || 'À définir'}

BESOINS:
${formData.message}

SERVICES REQUIS:
• Espace d'exposition pour posters scientifiques
• Salles de conférence modulaires
• Équipements de présentation haute définition
• Networking et sessions parallèles
• Restauration scientifique

Merci de me faire parvenir votre proposition.

Bien à vous,
${formData.name}`
      },
      'conference-medicale': {
        subject: 'Conférence Médicale - Demande de Services',
        body: `Bonjour l'équipe BAHOOVA,

Je souhaite organiser une conférence médicale et j'aurais besoin de vos services.

INFORMATIONS:
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone || 'Non renseigné'}
• Sujet: ${formData.subject || 'Conférence Médicale'}

DÉTAILS:
${formData.message}

SERVICES MÉDICAUX NÉCESSAIRES:
• Salle de conférence avec écrans multiples
• Système de traduction médicale
• Espace d'exposition pharmaceutique
• Restauration adaptée aux professionnels de santé
• Accréditation CME (si applicable)

Pouvez-vous me contacter pour un devis détaillé ?

Dr. ${formData.name}`
      },
      'seminaire-entreprise': {
        subject: 'Séminaire d\'Entreprise - Organisation',
        body: `Bonjour,

Je souhaite organiser un séminaire d'entreprise et j'aimerais vos services.

COORDONNÉES:
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone || 'Non renseigné'}
• Sujet: ${formData.subject || 'Séminaire d\'Entreprise'}

DÉTAILS DE L'ÉVÉNEMENT:
${formData.message}

SERVICES CORPORATIFS:
• Salle de conférence professionnelle
• Équipements audiovisuels de pointe
• Restauration d'entreprise
• Team building et activités
• Matériel de présentation

Merci de me faire parvenir votre proposition.

Cordialement,
${formData.name}`
      },
      'lancement-produit': {
        subject: 'Lancement de Produit - Événement Créatif',
        body: `Bonjour l'équipe créative de BAHOOVA,

Je souhaite organiser un lancement de produit et j'ai besoin de votre expertise créative.

INFORMATIONS:
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone || 'Non renseigné'}
• Sujet: ${formData.subject || 'Lancement de Produit'}

CONCEPT:
${formData.message}

SERVICES CRÉATIFS:
• Décoration thématique personnalisée
• Éclairage scénique et effets visuels
• Sonorisation professionnelle
• Animation et mise en scène
• Photographie et vidéo
• Restauration créative

Pouvez-vous me proposer un concept unique pour cet événement ?

Merci,
${formData.name}`
      },
      'mariage-luxe': {
        subject: 'Mariage de Luxe - Organisation Complète',
        body: `Bonjour,

Je souhaite organiser un mariage de luxe et j'aimerais vos services premium.

COORDONNÉES:
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone || 'Non renseigné'}
• Sujet: ${formData.subject || 'Mariage de Luxe'}

VISION DU MARIAGE:
${formData.message}

SERVICES LUXE:
• Décoration florale exceptionnelle
• Éclairage romantique et scénique
• Sonorisation et DJ professionnel
• Restauration gastronomique
• Photographie et vidéo artistique
• Coordination complète de la journée

Pouvez-vous me proposer un devis pour un mariage inoubliable ?

Avec mes remerciements,
${formData.name}`
      },
      'formation-professionnelle': {
        subject: 'Formation Professionnelle - Organisation',
        body: `Bonjour l'équipe BAHOOVA,

Je souhaite organiser une formation professionnelle et j'aurais besoin de vos services.

INFORMATIONS:
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone || 'Non renseigné'}
• Sujet: ${formData.subject || 'Formation Professionnelle'}

DÉTAILS DE LA FORMATION:
${formData.message}

SERVICES FORMATION:
• Salle de formation équipée
• Matériel pédagogique et supports
• Restauration et pauses
• Certificats de participation
• Support logistique complet

Merci de me faire parvenir votre proposition.

Cordialement,
${formData.name}`
      },
      'gala-charity': {
        subject: 'Gala & Événement Caritatif - Organisation',
        body: `Bonjour,

Je souhaite organiser un gala caritatif et j'aimerais vos services.

COORDONNÉES:
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone || 'Non renseigné'}
• Sujet: ${formData.subject || 'Gala Caritatif'}

CONCEPT DE L'ÉVÉNEMENT:
${formData.message}

SERVICES GALA:
• Décoration élégante et sophistiquée
• Éclairage scénique professionnel
• Sonorisation et animation
• Restauration gastronomique
• Photographie et vidéo
• Coordination complète

Pouvez-vous me proposer un concept unique pour cet événement caritatif ?

Avec mes remerciements,
${formData.name}`
      },
      'evenement-sportif': {
        subject: 'Événement Sportif - Organisation',
        body: `Bonjour l'équipe BAHOOVA,

Je souhaite organiser un événement sportif et j'aurais besoin de vos services.

INFORMATIONS:
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone || 'Non renseigné'}
• Sujet: ${formData.subject || 'Événement Sportif'}

DÉTAILS DE L'ÉVÉNEMENT:
${formData.message}

SERVICES SPORTIFS:
• Équipements sportifs et logistique
• Sonorisation et annonces
• Restauration et rafraîchissements
• Sécurité et organisation
• Photographie et vidéo sportive
• Cérémonies et remises de prix

Merci de me faire parvenir votre proposition.

Cordialement,
${formData.name}`
      },
      'festival-culturel': {
        subject: 'Festival Culturel - Organisation Créative',
        body: `Bonjour l'équipe créative de BAHOOVA,

Je souhaite organiser un festival culturel et j'ai besoin de votre expertise.

INFORMATIONS:
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone || 'Non renseigné'}
• Sujet: ${formData.subject || 'Festival Culturel'}

CONCEPT DU FESTIVAL:
${formData.message}

SERVICES FESTIVAL:
• Décoration thématique et artistique
• Éclairage scénique et effets visuels
• Sonorisation professionnelle
• Restauration et stands
• Animation et spectacles
• Coordination complète

Pouvez-vous me proposer un concept unique pour ce festival ?

Merci,
${formData.name}`
      },
      'webinaire-live': {
        subject: 'Webinaire & Live Stream - Services Techniques',
        body: `Bonjour l'équipe technique de BAHOOVA,

Je souhaite organiser un webinaire en direct et j'aurais besoin de vos services techniques.

INFORMATIONS:
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone || 'Non renseigné'}
• Sujet: ${formData.subject || 'Webinaire & Live Stream'}

DÉTAILS TECHNIQUES:
${formData.message}

SERVICES TECHNIQUES:
• Équipements de streaming professionnel
• Sonorisation et micros
• Éclairage pour vidéo
• Plateforme de diffusion
• Support technique en direct
• Enregistrement et montage

Merci de me faire parvenir votre proposition technique.

Cordialement,
${formData.name}`
      },
      'autre': {
        subject: 'Demande de Devis - Événement Personnalisé',
        body: `Bonjour l'équipe BAHOOVA Events,

Je souhaite organiser un événement et j'aimerais recevoir un devis personnalisé.

INFORMATIONS:
• Nom: ${formData.name}
• Email: ${formData.email}
• Téléphone: ${formData.phone || 'Non renseigné'}
• Sujet: ${formData.subject || 'Événement Personnalisé'}

DÉTAILS DE L'ÉVÉNEMENT:
${formData.message}

Pouvez-vous me contacter pour discuter de mes besoins spécifiques et me faire parvenir une proposition adaptée ?

Cordialement,
${formData.name}`
      }
    };
    
    return templates[eventType] || templates['autre'];
  };

  // Function to create Gmail URL with pre-filled content
  const createGmailUrl = (subject, body, fromEmail) => {
    const recipient = mockData.company.contact.email;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodedSubject}&body=${encodedBody}`;
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
      // Get personalized email template based on event type
      const template = getEmailTemplate(formData.eventType, formData);
      
      // Create Gmail URL with pre-filled email
      const gmailUrl = createGmailUrl(template.subject, template.body, formData.email);
      
      // Show success message and redirect
      setSubmitMessage(`✅ Formulaire validé avec succès !
      
📧 Redirection vers Gmail en cours...
• À : ${mockData.company.contact.email}
• De : ${formData.email}
• Sujet : ${template.subject}

🔄 Vous allez être redirigé vers votre Gmail avec le message pré-rempli.`);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        eventType: '',
        message: ''
      });
      
      // Redirect to Gmail after a short delay
      setTimeout(() => {
        window.open(gmailUrl, '_blank');
        setSubmitMessage('✅ Redirection effectuée ! Vérifiez votre Gmail.');
      }, 2000);
      
    } catch (error) {
      setSubmitMessage('❌ Erreur lors de la préparation de l\'email. Veuillez réessayer.');
      console.error('Error preparing Gmail redirect:', error);
    }
    
    setIsSubmitting(false);
  };

  return (
    <main>
      {process.env.NODE_ENV === 'development' && <EmailDebugger />}
      {/* Hero Section */}
      <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", position: "relative" }}>
            <ColorSwitcher>
              <h1 
                className="hero-large fade-in" 
                style={{ 
                  marginBottom: "24px",
                  background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientShift 3s ease-in-out infinite, fadeIn 1s ease-in-out",
                  position: "relative",
                  zIndex: 2
                }}
              >
                Contactez-nous
              </h1>
              <AnimatedText 
                className="body-large" 
                style={{ 
                  color: "var(--text-secondary)",
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                  marginBottom: "32px",
                  animation: "fadeIn 1s ease-in-out 0.5s both",
                  position: "relative",
                  zIndex: 2
                }}
                animation="typewriter"
                delay={1000}
              >
                Prêt à donner vie à votre événement de rêve ? Notre équipe d'experts est là pour vous accompagner 
                à chaque étape, de la conception initiale à la réalisation parfaite.
              </AnimatedText>
            </ColorSwitcher>
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
                <div 
                  className="fade-in"
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "16px",
                    animation: "slideInUp 0.8s ease-out 0.2s both",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(10px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(102, 126, 234, 0.3)",
                    flexShrink: 0,
                    animation: "pulse 2s ease-in-out infinite",
                    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)"
                  }}>
                    <Phone size={20} color="white" />
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
                
                <div 
                  className="fade-in"
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "16px",
                    animation: "slideInUp 0.8s ease-out 0.4s both",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(10px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(118, 75, 162, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    background: "linear-gradient(135deg, #764ba2, #f093fb)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(118, 75, 162, 0.3)",
                    flexShrink: 0,
                    animation: "pulse 2s ease-in-out infinite 0.5s",
                    boxShadow: "0 4px 15px rgba(118, 75, 162, 0.3)"
                  }}>
                    <Mail size={20} color="white" />
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
                
                <div 
                  className="fade-in"
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "16px",
                    animation: "slideInUp 0.8s ease-out 0.6s both",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(10px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(240, 147, 251, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    background: "linear-gradient(135deg, #f093fb, #f5576c)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(240, 147, 251, 0.3)",
                    flexShrink: 0,
                    animation: "pulse 2s ease-in-out infinite 1s",
                    boxShadow: "0 4px 15px rgba(240, 147, 251, 0.3)"
                  }}>
                    <MapPin size={20} color="white" />
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
                
                <div 
                  className="fade-in"
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "16px",
                    animation: "slideInUp 0.8s ease-out 0.8s both",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(10px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(16, 172, 132, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    background: "linear-gradient(135deg, #10ac84, #667eea)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(16, 172, 132, 0.3)",
                    flexShrink: 0,
                    animation: "pulse 2s ease-in-out infinite 1.5s",
                    boxShadow: "0 4px 15px rgba(16, 172, 132, 0.3)"
                  }}>
                    <Clock size={20} color="white" />
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
            <div 
              className="fade-in"
              style={{ 
                background: "var(--bg-primary)", 
                padding: "40px", 
                border: "1px solid var(--border-light)",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                animation: "slideInUp 0.8s ease-out 1s both",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Decorative Background */}
              <div style={{
                position: "absolute",
                top: "-50px",
                right: "-50px",
                width: "100px",
                height: "100px",
                background: "linear-gradient(135deg, #667eea20, #764ba220)",
                borderRadius: "50%",
                animation: "rotate 20s linear infinite"
              }} />
              <div style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "60px",
                height: "60px",
                background: "linear-gradient(135deg, #f093fb20, #f5576c20)",
                borderRadius: "50%",
                animation: "rotate 15s linear infinite reverse"
              }} />

              <h2 
                className="heading-1 fade-in" 
                style={{ 
                  marginBottom: "24px",
                  background: "linear-gradient(45deg, #667eea, #764ba2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientShift 3s ease-in-out infinite, fadeIn 1s ease-in-out 1.2s both",
                  position: "relative",
                  zIndex: 2
                }}
              >
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
              
              <form onSubmit={handleSubmit} className="contact-form" style={{ position: "relative", zIndex: 2 }}>
                <div 
                  className="form-group fade-in"
                  style={{ animation: "slideInUp 0.8s ease-out 1.4s both" }}
                >
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
                    style={{
                      transition: "all 0.3s ease",
                      border: "2px solid #e2e8f0"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#667eea";
                      e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                
                <div 
                  className="form-group fade-in"
                  style={{ animation: "slideInUp 0.8s ease-out 1.6s both" }}
                >
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
                    style={{
                      transition: "all 0.3s ease",
                      border: "2px solid #e2e8f0"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#764ba2";
                      e.target.style.boxShadow = "0 0 0 3px rgba(118, 75, 162, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                
                <div 
                  className="form-group fade-in"
                  style={{ animation: "slideInUp 0.8s ease-out 1.8s both" }}
                >
                  <label htmlFor="phone" className="form-label">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="+212 6XX XXX XXX"
                    style={{
                      transition: "all 0.3s ease",
                      border: "2px solid #e2e8f0"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#764ba2";
                      e.target.style.boxShadow = "0 0 0 3px rgba(118, 75, 162, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                
                <div 
                  className="form-group fade-in"
                  style={{ animation: "slideInUp 0.8s ease-out 2.0s both" }}
                >
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
                    style={{
                      transition: "all 0.3s ease",
                      border: "2px solid #e2e8f0"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#f093fb";
                      e.target.style.boxShadow = "0 0 0 3px rgba(240, 147, 251, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                
                <div 
                  className="form-group fade-in"
                  style={{ animation: "slideInUp 0.8s ease-out 2.2s both" }}
                >
                  <label htmlFor="eventType" className="form-label">
                    Type d'événement
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="form-select"
                    style={{
                      transition: "all 0.3s ease",
                      border: "2px solid #e2e8f0"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#10ac84";
                      e.target.style.boxShadow = "0 0 0 3px rgba(16, 172, 132, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    <option value="">Sélectionnez un type d'événement</option>
                    <option value="congres-scientifique">🏛️ Congrès Scientifique</option>
                    <option value="forum-recherche">🔬 Forum de Recherche</option>
                    <option value="conference-medicale">🏥 Conférence Médicale</option>
                    <option value="seminaire-entreprise">💼 Séminaire d'Entreprise</option>
                    <option value="lancement-produit">🚀 Lancement de Produit</option>
                    <option value="formation-professionnelle">📚 Formation Professionnelle</option>
                    <option value="gala-charity">🎭 Gala & Événements Caritatifs</option>
                    <option value="mariage-luxe">💍 Mariage de Luxe</option>
                    <option value="anniversaire-corporatif">🎂 Anniversaire d'Entreprise</option>
                    <option value="evenement-sportif">⚽ Événement Sportif</option>
                    <option value="festival-culturel">🎪 Festival Culturel</option>
                    <option value="exposition-art">🎨 Exposition d'Art</option>
                    <option value="conference-presse">📰 Conférence de Presse</option>
                    <option value="evenement-religieux">🕌 Événement Religieux</option>
                    <option value="fete-privee">🎉 Fête Privée</option>
                    <option value="webinaire-live">💻 Webinaire & Live Stream</option>
                    <option value="autre">✨ Autre (Précisez dans le message)</option>
                  </select>
                </div>
                
                <div 
                  className="form-group fade-in"
                  style={{ animation: "slideInUp 0.8s ease-out 2.4s both" }}
                >
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
                    style={{
                      transition: "all 0.3s ease",
                      border: "2px solid #e2e8f0",
                      minHeight: "120px"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#ff6b6b";
                      e.target.style.boxShadow = "0 0 0 3px rgba(255, 107, 107, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary fade-in"
                  disabled={isSubmitting}
                  style={{ 
                    width: "100%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: "8px",
                    animation: "slideInUp 0.8s ease-out 2.6s both",
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    border: "none",
                    borderRadius: "12px",
                    padding: "16px 24px",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "white",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 12px 35px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.3)";
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid white",
                        borderTop: "2px solid transparent",
                        borderRadius: "50%",
                        animation: "rotate 1s linear infinite"
                      }} />
                      Envoi en cours...
                    </>
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