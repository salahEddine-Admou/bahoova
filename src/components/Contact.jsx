import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { mockData } from "../mock";
import EmailDebugger from "./EmailDebugger";

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
    <main style={{ paddingTop: '80px' }}>
      {process.env.NODE_ENV === 'development' && <EmailDebugger />}
      
      {/* Hero Section - Delight Style */}
      <section style={{ 
        padding: '120px 0', 
        background: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '300',
            color: '#1a1a1a',
            marginBottom: '2rem',
            letterSpacing: '1px',
            textTransform: 'none'
          }}>
            Contact
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(0, 0, 0, 0.6)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Prêt à donner vie à votre vision d'événement ? Notre équipe d'experts est là pour vous guider à chaque étape.
          </p>
        </div>
      </section>

      {/* Contact Information & Form - Delight Style */}
      <section style={{ padding: "120px 0", background: "white" }}>
        <div className="container">
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", 
            gap: "80px",
            alignItems: "flex-start"
          }}>
            {/* Contact Information */}
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                color: '#1a1a1a',
                marginBottom: '3rem',
                letterSpacing: '0.5px'
              }}>
                Nous Contacter
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "1.5rem"
                }}>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "#f8f8f8",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <Phone size={24} color="#1a1a1a" />
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: "1.25rem", 
                      fontWeight: "400",
                      color: "#1a1a1a",
                      marginBottom: "0.5rem",
                      letterSpacing: "0.3px"
                    }}>
                      Téléphone
                    </h3>
                    <p style={{ 
                      color: "#666",
                      fontSize: "1.1rem"
                    }}>
                      {mockData.company.contact.phone}
                    </p>
                  </div>
                </div>
                
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "1.5rem"
                }}>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "#f8f8f8",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <Mail size={24} color="#1a1a1a" />
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: "1.25rem", 
                      fontWeight: "400",
                      color: "#1a1a1a",
                      marginBottom: "0.5rem",
                      letterSpacing: "0.3px"
                    }}>
                      Email
                    </h3>
                    <p style={{ 
                      color: "#666",
                      fontSize: "1.1rem"
                    }}>
                      {mockData.company.contact.email}
                    </p>
                  </div>
                </div>
                
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "1.5rem"
                }}>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "#f8f8f8",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <MapPin size={24} color="#1a1a1a" />
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: "1.25rem", 
                      fontWeight: "400",
                      color: "#1a1a1a",
                      marginBottom: "0.5rem",
                      letterSpacing: "0.3px"
                    }}>
                      Adresse
                    </h3>
                    <p style={{ 
                      color: "#666",
                      fontSize: "1.1rem"
                    }}>
                      {mockData.company.contact.address}
                    </p>
                  </div>
                </div>
                
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "1.5rem"
                }}>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "#f8f8f8",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <Clock size={24} color="#1a1a1a" />
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: "1.25rem", 
                      fontWeight: "400",
                      color: "#1a1a1a",
                      marginBottom: "0.5rem",
                      letterSpacing: "0.3px"
                    }}>
                      Horaires
                    </h3>
                    <p style={{ 
                      color: "#666",
                      fontSize: "1.1rem"
                    }}>
                      Lun-Ven: 9h00-18h00<br />
                      Sam: 10h00-16h00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div style={{ 
              background: "#f8f8f8", 
              padding: "3rem", 
              borderRadius: "8px"
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                color: '#1a1a1a',
                marginBottom: '2rem',
                letterSpacing: '0.5px'
              }}>
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
              
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <label htmlFor="name" style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: "400",
                    color: "#1a1a1a",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.3px",
                    textTransform: "none"
                  }}>
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Votre nom complet"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      background: "white",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1a1a1a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ddd";
                    }}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: "400",
                    color: "#1a1a1a",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.3px",
                    textTransform: "none"
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="votre@email.com"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      background: "white",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1a1a1a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ddd";
                    }}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: "400",
                    color: "#1a1a1a",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.3px",
                    textTransform: "none"
                  }}>
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+212 6 62 01 73 89"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      background: "white",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1a1a1a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ddd";
                    }}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: "400",
                    color: "#1a1a1a",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.3px",
                    textTransform: "none"
                  }}>
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet de votre demande"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      background: "white",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1a1a1a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ddd";
                    }}
                  />
                </div>
                
                <div>
                  <label htmlFor="eventType" style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: "400",
                    color: "#1a1a1a",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.3px",
                    textTransform: "none"
                  }}>
                    Type d'Événement
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      background: "white",
                      transition: "border-color 0.3s ease"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1a1a1a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ddd";
                    }}
                  >
                    <option value="">Sélectionnez un type d'événement</option>
                    <option value="congres-scientifique">Congrès Scientifique</option>
                    <option value="forum-recherche">Forum de Recherche</option>
                    <option value="conference-medicale">Conférence Médicale</option>
                    <option value="seminaire-entreprise">Séminaire d'Entreprise</option>
                    <option value="lancement-produit">Lancement de Produit</option>
                    <option value="formation-professionnelle">Formation Professionnelle</option>
                    <option value="gala-charity">Gala & Événements Caritatifs</option>
                    <option value="mariage-luxe">Mariage de Luxe</option>
                    <option value="anniversaire-corporatif">Anniversaire d'Entreprise</option>
                    <option value="evenement-sportif">Événement Sportif</option>
                    <option value="festival-culturel">Festival Culturel</option>
                    <option value="exposition-art">Exposition d'Art</option>
                    <option value="conference-presse">Conférence de Presse</option>
                    <option value="evenement-religieux">Événement Religieux</option>
                    <option value="fete-privee">Fête Privée</option>
                    <option value="webinaire-live">Webinaire & Live Stream</option>
                    <option value="autre">Autre (Précisez dans le message)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" style={{
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: "400",
                    color: "#1a1a1a",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.3px",
                    textTransform: "none"
                  }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Décrivez votre projet d'événement, vos besoins, la date prévue, le nombre d'invités..."
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      background: "white",
                      transition: "border-color 0.3s ease",
                      minHeight: "120px",
                      resize: "vertical"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1a1a1a";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ddd";
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ 
                    padding: "15px 30px",
                    background: "#1a1a1a",
                    border: "1px solid #1a1a1a",
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: "400",
                    letterSpacing: "0.5px",
                    textTransform: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    borderRadius: "4px"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#1a1a1a";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#1a1a1a";
                    e.target.style.color = "white";
                  }}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;