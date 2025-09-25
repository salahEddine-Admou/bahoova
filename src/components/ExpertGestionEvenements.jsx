import React from "react";
import { Link } from "react-router-dom";
import { Award, Users, Calendar, Coffee, Sparkles, Zap, Heart, Star, Target, Rocket, Shield, MapPin, Phone, Mail, Clock } from "lucide-react";
import { mockData } from "../mock";
import ColorSwitcher from "./ColorSwitcher";
import AnimatedText from "./AnimatedText";
import FloatingElements from "./FloatingElements";

const ExpertGestionEvenements = () => {
  return (
    <main>
      <FloatingElements />
      
      {/* Structured Data for Expert Event Management */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Expert Gestion Événements Maroc - BAHOOVA Events",
          "description": "Expert en gestion d'événements au Maroc avec 15 ans d'expérience. Organisation de congrès, forums, séminaires, réunions d'entreprises et dîners de gala.",
          "url": "https://bahoovaevents.com/expert-gestion-evenements-maroc",
          "telephone": "0662017389",
          "email": "bahoovaevents@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Avenue Mohammed V",
            "addressLocality": "Casablanca",
            "addressRegion": "Casablanca-Settat",
            "postalCode": "20000",
            "addressCountry": "MA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.5731",
            "longitude": "-7.5898"
          },
          "areaServed": "Maroc",
          "serviceType": "Expert Gestion Événements",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services Expert Gestion Événements Maroc",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Expert Organisation Congrès Maroc",
                  "description": "Expert en organisation de congrès scientifiques et médicaux au Maroc"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Expert Forums de Recherche Maroc",
                  "description": "Expert en organisation de forums académiques et colloques scientifiques au Maroc"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Expert Séminaires d'Entreprises Maroc",
                  "description": "Expert en organisation de séminaires et réunions d'entreprises au Maroc"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Expert Dîners de Gala Maroc",
                  "description": "Expert en organisation de dîners de gala et événements prestigieux au Maroc"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          }
        })}
      </script>

      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop&crop=center')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay"></div>
        <ColorSwitcher className="hero-color-switcher">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text-container">
                <h1 className="hero-title">
                  Expert Gestion Événements Maroc - BAHOOVA Events
                </h1>
                <p className="hero-description">
                  <strong>Expert gestion événements Maroc</strong> depuis 15 ans. BAHOOVA Events est le leader de l'organisation d'événements au Maroc. 
                  Congrès, forums, séminaires, réunions d'entreprises, dîners de gala - notre expertise événementielle vous garantit le succès.
                </p>
                <div className="hero-actions">
                  <Link to="/contact" className="btn-primary creative-btn">
                    <Sparkles size={20} />
                    Devis Expert Gratuit
                    <Zap size={16} />
                  </Link>
                  <Link to="/services" className="btn-secondary creative-btn">
                    Nos Expertises
                    <Award size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ColorSwitcher>
      </section>

      {/* Pourquoi Choisir BAHOOVA Events - Expert Maroc */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 className="heading-1">Pourquoi BAHOOVA Events - Expert Gestion Événements Maroc ?</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Leader de l'événementiel au Maroc avec une expertise reconnue et 15 ans d'expérience
            </p>
          </div>
          
          <div className="grid-product-showcase">
            {[
              {
                icon: <Award size={24} />,
                title: "Expert Gestion Événements Maroc",
                description: "15 ans d'expertise dans l'organisation d'événements au Maroc. Plus de 350 événements réussis."
              },
              {
                icon: <Users size={24} />,
                title: "Équipe d'Experts Locaux",
                description: "350 employés experts en événementiel au Maroc. Connaissance parfaite du marché local."
              },
              {
                icon: <Calendar size={24} />,
                title: "Expert Organisation Congrès",
                description: "Spécialiste de l'organisation de congrès scientifiques et médicaux au Maroc."
              },
              {
                icon: <Coffee size={24} />,
                title: "Expert Séminaires Entreprises",
                description: "Expert en organisation de séminaires et réunions d'entreprises au Maroc."
              }
            ].map((value, index) => (
              <div key={index} className="service-card hover-lift">
                <div style={{ padding: "32px 24px", textAlign: "center" }}>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "var(--bg-primary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    border: "1px solid var(--border-light)"
                  }}>
                    {value.icon}
                  </div>
                  <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                    {value.title}
                  </h3>
                  <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Expertises Spécifiques */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 className="heading-1">Expert Gestion Événements Maroc - Nos Expertises</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Découvrez nos domaines d'expertise en gestion d'événements au Maroc
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            {[
              {
                title: "Expert Organisation Congrès Maroc",
                description: "Expert en organisation de congrès scientifiques, médicaux et internationaux au Maroc. Planification complète, technologies avancées, gestion logistique.",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center"
              },
              {
                title: "Expert Forums de Recherche Maroc",
                description: "Expert en organisation de forums académiques, colloques scientifiques et événements de recherche au Maroc. Expertise reconnue par les universités.",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center"
              },
              {
                title: "Expert Séminaires Entreprises Maroc",
                description: "Expert en organisation de séminaires d'entreprises, réunions professionnelles et formations au Maroc. Solutions sur mesure pour chaque secteur.",
                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center"
              },
              {
                title: "Expert Dîners de Gala Maroc",
                description: "Expert en organisation de dîners de gala, événements prestigieux et cérémonies au Maroc. Lieux d'exception, service haut de gamme.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba0efed?w=800&h=600&fit=crop&crop=center"
              },
              {
                title: "Expert Mariages Maroc",
                description: "Expert en organisation de mariages, cérémonies romantiques et événements de célébration au Maroc. Moments magiques et inoubliables.",
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&crop=center"
              }
            ].map((expertise, index) => (
              <div key={index} className="service-card hover-lift">
                <img 
                  src={expertise.image}
                  alt={expertise.title}
                  className="service-card-image"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&t=${Date.now()}`;
                  }}
                  loading="lazy"
                />
                <div style={{ padding: "24px" }}>
                  <h3 className="service-card-title">{expertise.title}</h3>
                  <p className="service-card-description">{expertise.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Clients Expert */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="heading-1">Témoignages Clients - Expert Gestion Événements Maroc</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Ce que disent nos clients de notre expertise en gestion d'événements au Maroc
            </p>
          </div>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
            gap: "32px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Directrice de Recherche",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                text: "BAHOOVA Events est l'expert gestion événements Maroc par excellence. Notre congrès international de neurosciences a été organisé avec une précision remarquable."
              },
              {
                name: "Prof. Marc Dubois",
                role: "Président de Forum",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                text: "Expert gestion événements Maroc incontournable. BAHOOVA Events excelle dans l'organisation de forums de recherche en biotechnologie au Maroc."
              },
              {
                name: "Prof. Ahmed Al-Rashid",
                role: "Président de Congrès",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                text: "Notre congrès médical international a été un succès total grâce à l'expertise de BAHOOVA Events, le leader de la gestion d'événements au Maroc."
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="fade-in"
                style={{ 
                  padding: "40px 32px", 
                  background: "white", 
                  border: "1px solid var(--border-light)",
                  borderRadius: "16px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                
                <p className="body-regular" style={{ 
                  color: "var(--text-primary)", 
                  marginBottom: "24px",
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                  lineHeight: "1.6"
                }}>
                  "{testimonial.text}"
                </p>
                
                <div>
                  <h4 className="heading-3" style={{ 
                    marginBottom: "4px",
                    color: "var(--text-primary)",
                    fontWeight: "700"
                  }}>
                    {testimonial.name}
                  </h4>
                  <p className="body-small" style={{ 
                    color: "var(--interactive-base)",
                    fontWeight: "500"
                  }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Expert */}
      <section className="section-padding-small">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h2 className="hero-medium" style={{ marginBottom: "24px" }}>
              Besoin d'un Expert Gestion Événements Maroc ?
            </h2>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
              Contactez BAHOOVA Events, l'expert de référence en gestion d'événements au Maroc. 
              Devis gratuit et conseil personnalisé.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-primary">
                <Phone size={20} />
                Devis Expert Gratuit
              </Link>
              <Link to="/gallery" className="btn-secondary">
                <Award size={20} />
                Voir nos Réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Expert */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="heading-1">Contact Expert Gestion Événements Maroc</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              BAHOOVA Events - Votre expert de confiance en gestion d'événements au Maroc
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
            <div style={{ textAlign: "center", padding: "32px 24px" }}>
              <div style={{ 
                width: "60px", 
                height: "60px", 
                background: "var(--interactive-base)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px"
              }}>
                <Phone size={24} color="white" />
              </div>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>Téléphone Expert</h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                0662017389
              </p>
            </div>
            
            <div style={{ textAlign: "center", padding: "32px 24px" }}>
              <div style={{ 
                width: "60px", 
                height: "60px", 
                background: "var(--interactive-base)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px"
              }}>
                <Mail size={24} color="white" />
              </div>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>Email Expert</h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                bahoovaevents@gmail.com
              </p>
            </div>
            
            <div style={{ textAlign: "center", padding: "32px 24px" }}>
              <div style={{ 
                width: "60px", 
                height: "60px", 
                background: "var(--interactive-base)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px"
              }}>
                <MapPin size={24} color="white" />
              </div>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>Adresse Expert</h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                123 Avenue Mohammed V<br />
                Casablanca, Maroc
              </p>
            </div>
            
            <div style={{ textAlign: "center", padding: "32px 24px" }}>
              <div style={{ 
                width: "60px", 
                height: "60px", 
                background: "var(--interactive-base)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px"
              }}>
                <Clock size={24} color="white" />
              </div>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>Horaires Expert</h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Lun - Ven: 8h00 - 18h00<br />
                Sam: 9h00 - 13h00
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpertGestionEvenements;
